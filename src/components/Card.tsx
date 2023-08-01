import { Fragment } from 'react';
import { truncateText } from '../helpers/common';

interface CardProps {
  title?: string;
  desciption?: string;
  streamingSites?: string[];
  img?: string;
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
        height: '400px',
        position: 'relative',
        color: '#fff',
        background: '#000',
        zIndex: 10
      }}>
      {props.img && (
        <img
          src={props.img}
          alt={props.title}
          style={{
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: '-1'
          }}
        />
      )}

      <h2>{props.title}</h2>

      <p>{truncateText(props.desciption as string, 250)}</p>

      <div>
        {!props.streamingSites?.includes('noInfo') &&
          props.streamingSites?.map((item, i) => (
            <Fragment key={`card-index-${i}`}>
              <span style={{ fontWeight: 'bold' }}>{item}</span>

              {props.streamingSites && i < props.streamingSites?.length - 1 && <span style={{ margin: '0 5px' }}>|</span>}
            </Fragment>
          ))}
      </div>
    </div>
  );
}
