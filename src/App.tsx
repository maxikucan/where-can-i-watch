import { useState } from 'react';
import { ResultResponse } from './models/results';
import { searchTitle } from './service/searchTitle';
import { checkIsInNetflix } from './helpers/checkIsInNetflix';
import Card from './components/Card';
import Spinner from './components/Spinner';
import './index.css';

export default function App() {
  const [movieResults, setMovieResults] = useState<ResultResponse | null>(null);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function detectIsInNetflix() {
    if (!title || isLoading) return;

    setIsLoading(true);

    searchTitle(title)
      .then(data => setMovieResults(data))
      .catch(e => console.error(e))
      .finally(() => setIsLoading(false));
  }

  return (
    <form
      id="search-form"
      onSubmit={e => {
        e.preventDefault();
        detectIsInNetflix();
      }}
      style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', minWidth: '100vw', gap: '1rem', marginBottom: '1rem' }}>
        <input
          id="title"
          type="text"
          onChange={e => setTitle(e.target.value)}
          value={title}
          placeholder="Search for a movie or TV show..."
          style={{ width: '50%', borderRadius: '8px', paddingLeft: '12px', outline: 'none' }}
        />
        <button>Search</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
        {isLoading && <Spinner />}

        {!!checkIsInNetflix(movieResults) &&
          !isLoading &&
          movieResults?.result.map(
            (result, i) =>
              result.streamingInfo.ar && (
                <Card
                  key={`card-index-${i}`}
                  title={result.title}
                  desciption={result.overview}
                  img={result.backdropURLs[780] || undefined}
                  streamingSites={Object.keys(result.streamingInfo.ar || { unknown: 'Unknown' })}
                />
              )
          )}
      </div>
    </form>
  );
}
