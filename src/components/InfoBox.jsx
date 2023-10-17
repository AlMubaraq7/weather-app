import "./InfoBox.scss";
export default function InfoBox({ property, value, icon }) {
  return (
    <>
      <div className="box">
        {icon}
        <div className="info">
          <span className="property">{property}</span>
          &nbsp;
          <span className="value">{value}</span>
        </div>
      </div>
    </>
  );
}
