import { Fragment } from 'react';

interface CardProps {
  title?: string;
  desciption?: string;
  streamingSites?: string[];
}

export default function Card(props: CardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        border: 'solid 1px #000',
        width: '400px',
        height: '400px'
      }}>
      <h2>{props.title}</h2>

      <p>{props.desciption}</p>

      <div>
        {!props.streamingSites?.includes("noInfo") && props.streamingSites?.map((item, i) => (
          <Fragment key={`card-index-${i}`}>
            <span style={{ fontWeight: 'bold' }}>{item}</span>

            {props.streamingSites && i < props.streamingSites?.length - 1 && <span style={{margin: '0 5px'}}>|</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
