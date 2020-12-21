import { React } from 'react';

export default function CardContent(props) {
  return (
    <>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-primary">Go somewhere</a>
      </div>
    </>
  );
}