import "./AboutUs.css";
import workersArr from "../../data/workers";

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

function AboutUs() {
  return (
    <section className="about-us" id="aboutus">
      <div className="container">
        <h2 className="workers">Nasi Specjaliści</h2>
        {workersArr.map((person) => {
          return (
            <Person
              name={person.name}
              department={person.department}
              paragraph={person.paragraph}
              img={person.img}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AboutUs;
