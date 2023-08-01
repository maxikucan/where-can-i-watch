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
      <h4>{props.streamingSites?.map(item => `${item} | `)} </h4>
    </div>
  );
}
