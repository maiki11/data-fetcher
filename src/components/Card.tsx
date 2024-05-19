import { Data } from "../models/data";

const Card = (props:any) => {
  const data:Data = props.data
  const theme:string = props.theme

  return (
    <div className="col col-4">
      <div className={`card ${theme}`}>
        <div className={`title ${theme}`}>{data.title}</div>
        <p className={`body ${theme}`}>{data.body}</p>
      </div>
    </div>
  );
};

export default Card;