import "./Person.css";

function Person({ name, department, paragraph, img }) {
  return (
    <div className="people flex">
      <img src={img} alt="ppl1" />
      <div className="people-description">
        <p className="ppl-name">
          {name} [ {department} ]
        </p>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Person;
