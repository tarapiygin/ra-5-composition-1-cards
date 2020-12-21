import { React } from 'react';
import CardContent from '../CardContent/CardContent';

export default function Card(props) {
  return (
    <div className="card" style={({
      width: '18rem',
      marginBottom: '20px',
    })}>
      <CardContent title={props.title} description={props.description}>
        {
          props.image ? <img src={props.image.src} className="card-img-top" alt={props.image.alt} /> : null
        }
      </CardContent>
    </div >
  );
}