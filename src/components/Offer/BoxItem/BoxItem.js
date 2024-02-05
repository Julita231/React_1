import "./BoxItem.css";

function BoxItem({ offer }) {
  return (
    <div className={`box-item ${offer.isNew ? "new" : ""}`}>
      <p>{offer.name}</p>
      {offer.isNew && <span className="new-item"> (nowość)</span>}
    </div>
  );
}

export default BoxItem;
