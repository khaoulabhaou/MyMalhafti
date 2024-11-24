export default function Affichage(props) {
  return (
    <div
      className="card"
      style={{
        width: "250px",
        margin: "20px",
        border: "1px solid grey",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={props.malhafti.image}
        className="card-img-top"
        alt={props.malhafti.type}
      />
      <div className="card-body">
        <p className="card-type">القياس : {props.malhafti.size}</p>
        <p className="card-text">الثمن : {props.malhafti.price}</p>
        <button className="btn btn-primary">
          شراء
        </button>
      </div>
    </div>
  );
}
