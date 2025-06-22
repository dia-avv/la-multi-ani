import "./ActualGift.css";

const ActualGift: React.FC = () => {
  return (
    <div className="content">
      <div className="title">
        <h1 style={{ fontSize: "90px", fontStyle: "italic"}}>The Real</h1>
        <h1 style={{ fontSize: "150px" }}>Gift</h1>
      </div>
      <h2>Cadou 4/4</h2>
      <p>
        Cadoul ”fizic” îl vei găsi <strong>joi, 26 iunie/ vineri, 27 iunie</strong> la această
        locație:
      </p>
      <div className="address">
        <h2>easybox Mega Image Busteni</h2>
        <p>Bd. Libertatii, Nr. 206, Busteni, Prahova</p>
      </div>
      <div className="code">
        <h3>Cod pentru a deschide:</h3>
        <img />
        <p>To be added🤭</p>
      </div>
    </div>
  );
};

export default ActualGift;
