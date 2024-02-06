import "./AboutUs.css";
import workersArr from "../../data/workers";
import Person from "./Person/Person";

function AboutUs() {
  return (
    <section className="about-us" id="aboutus">
      <div className="container">
        <h2 className="workers">Nasi Specjaliści</h2>
        {workersArr.map((person, index) => {
          return (
            <Person
              key={index}
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
