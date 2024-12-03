import { Link } from "react-router-dom";

export default function Affichage(props) {
  return (
    <div  className="card"  style={{width: "250px",margin: "20px",border: "1px solidgrey"}}>
      <img style={{ width: "100%" }} src={props.malhafti.image} className="card-img-top" alt={props.malhafti.type}/>
      <div className="card-body">
      {/* <p className="card-type">{props.malhafti.category}</p> */}
      <p className="card-type">{props.malhafti.type}</p>
        <p className="card-type">القياس : {props.malhafti.size}</p>
        <p className="card-text">الثمن : {props.malhafti.price*38}</p>
        <Link to={`/idFinder/${props.malhafti.id}`} className="btn btn-primary text-white">المزيد</Link>
      </div>
    </div>
  );
}
