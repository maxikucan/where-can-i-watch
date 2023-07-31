import { useState } from "react";
import { ResultResponse, StreamInfoKey } from "./models/results";
import "./App.css";

function App() {
  const [movieResults, setMovieResults] = useState<ResultResponse | null>(null);
  const [title, setTitle] = useState<string>("");

  // DATA FETCHING
  async function searchTitle(title: string) {
    const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=ar&show_type=movie&output_language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result: ResultResponse = await response.json();
      setMovieResults(result);
    } catch (error) {
      console.error(error);
    }
  }

  function detectIsInNetflix() {
    searchTitle(title).then(() => {
      if (
        Object.keys(
          movieResults?.result[0].streamingInfo.ar as StreamInfoKey[]
        ).some((item) => item === "netflix")
      ) {
        console.log("Está en netfix");
      } else {
        console.log(
          "NO Está en netfix, pero está en:",
          Object.keys(
            movieResults?.result[0].streamingInfo.ar as StreamInfoKey[]
          )
            .map((item) => item)
            .join(" | ")
        );
      }
    });
  }

  return (
    <>
      <form
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          detectIsInNetflix();
        }}>
        <label htmlFor="title">Search for a movie or TV show...</label>
        <input
          id="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default App;
