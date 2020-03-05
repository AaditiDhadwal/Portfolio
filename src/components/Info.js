import React from "react"

import cinema from "../images/cinema.svg"
import music from "../images/music.svg"
import book from "../images/book.svg"
import foodie from "../images/foodie.svg"
import hsc from "../images/hsc.svg"
import ssc from "../images/ssc.svg"
import IT from "../images/IT.svg"
import work from "../images/work.svg"
import work1 from "../images/work1.svg"

export default function Info() {
  return (
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption text-left mb-5">
                <h1 className="display-5 mb-5">EXPERIENCE</h1>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={work}
                      alt="work"
                      className="img-fluid rounded-circle w-75"
                    />
                  </div>
                  <div className="col-md-4 info-text">
                    <p className="text-muted">
                      <strong>Sr. Frontend Deveoper</strong>
                    </p>
                    <p className="text-muted">@ Amazatic Solutions</p>
                    <p className="text-muted">2016 - Current </p>
                  </div>
                  <div className="col-md-4 mt-4">
                    <img src={work1} alt="work" className="img-fluid w-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption text-left mb-5">
                <h1 className="display-5 mb-5">EDUCATION</h1>
                <div className="row">
                  <div className="col-md-4">
                    <figure>
                      <img
                        src={IT}
                        alt="IT"
                        className="img-fluid rounded-circle w-75"
                        style={{ marginBottom: "35px" }}
                      />
                      <figcaption className="text-center text-muted">
                        <p>
                          <strong>Bachelor's of Engineering (IT)</strong>
                        </p>
                        <p> Rajarshi Shahu College of Engineering</p>
                        <p>University of Pune</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      <img src={hsc} alt="hsc" className="img-fluid w-75" />
                      <figcaption className="text-center text-muted">
                        <p>
                          <strong>Higher Secondary Certificate</strong>
                        </p>
                        <p>D.A.V Public School</p>
                        <p>Central Board of Secondary Education</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure>
                      <img
                        src={ssc}
                        alt="ssc"
                        className="img-fluid w-75"
                        style={{ marginBottom: "35px" }}
                      />
                      <figcaption className="text-center text-muted">
                        <p>
                          <strong>Secondary School Certificate</strong>
                        </p>
                        <p>D.A.V Public School</p>
                        <p>Central Board of Secondary Education</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption text-left mb-5">
                <h1 className="display-5 mb-5">INTERESTS</h1>
                <div className="row">
                  <div className="col-md-3">
                    <figure>
                      <img src={cinema} alt="cinema" className="img-fluid" />
                      <figcaption
                        className="text-center text-muted"
                        style={{ marginTop: "20px" }}
                      >
                        Cinema
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img
                        src={music}
                        alt="music"
                        className="img-fluid"
                        style={{ paddingTop: "20px" }}
                      />
                      <figcaption className="text-center text-muted">
                        Music
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img
                        src={foodie}
                        alt="foodie"
                        className="img-fluid"
                        style={{ paddingTop: "20px" }}
                      />
                      <figcaption className="text-center text-muted">
                        Foodie
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-3">
                    <figure>
                      <img
                        src={book}
                        alt="book"
                        className="img-fluid"
                        style={{ paddingTop: "20px" }}
                      />
                      <figcaption className="text-center text-muted">
                        Reading
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          href="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  )
}
