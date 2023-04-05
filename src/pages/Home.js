import React from "react";
import foto from "../images/Untitled-1_drcspz.png";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "./About";

function Home() {
  return (
    <>
      <section class="container" id="home">
        <div class="row ">
          <div class="col-md-7 my-auto py-5 ">
            <h4 class="fs-3">
              Hello <span>I'am</span>
            </h4>
            <h1 class="style-nom">
              <span>Ayoub Rouizi</span>
            </h1>
            <h4 class="fs-3">
              And I'm a <span>Frontend Developer</span>
            </h4>
            <p class="style-par my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              iusto. Adipisci in qui officia provident tenetur sequi, deserunt
              corporis quos?
            </p>
            <div class="social-media ">
              <Link to="https://github.com/rouiziayoub">
                <box-icon name="github" type="logo" color="#fff"></box-icon>
              </Link>
              <Link to="https://www.instagram.com/ayoubrouizi/?hl=fr">
                <box-icon
                  color="#fff"
                  name="instagram-alt"
                  type="logo"
                ></box-icon>
              </Link>
              <Link to="https://web.facebook.com/ayoub.casablanca.79">
                <box-icon color="#fff" name="facebook" type="logo"></box-icon>
              </Link>
              <Link to="https://www.linkedin.com/in/ayoub-rouizi-408327262/">
                <box-icon color="#fff" name="linkedin" type="logo"></box-icon>
              </Link>
              <Link to="/">
                <box-icon color="#fff" name="twitter" type="logo"></box-icon>
              </Link>
            </div>
            <Link
              class="btn my-5"
              to="https://drive.google.com/file/d/15_QhBDN1ZqZbqVOx8dIXxienRLO4EgEU/view?usp=share_link"
            >
              Dowload CV
            </Link>
          </div>
          <div class="col-md-4 ms-auto image1">
            <img src={foto} alt="" className="w-100 " />
          </div>
        </div>
      </section>

      <About />
    </>
  );
}

export default Home;
