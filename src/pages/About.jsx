import React from "react";
import "./About.css";
import img from "../images/img-ayoub-removebg-preview.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about container-fluid">
        <div className="row py-5 g-5 my-2">
          <div className="col-md-4 py-5 my-5">
            <div className="about-img my-5 ms-5">
              <img src={img} alt="" className="w-50 " />
            </div>
          </div>
          
          <div className="col-md-6 " id="about">
            <div className="about-content me-4">
              <h2 className="heading">
                About <span>Me</span>
              </h2>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                provident. Corrupti, fugiat delectus aliquam nesciunt vitae
                magnam eveniet asperiores quaerat illo possimus reiciendis. Et
                ea, quam dolor labore, qui dolores, minus quae laborum sit
                corporis consequatur deleniti unde nobis excepturi explicabo ab
                vel iste eum adipisci!
              </p>
              <Link to="/" className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
