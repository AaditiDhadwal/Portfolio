import React from "react"

import react from "../images/react.png"
import redux from "../images/redux.png"
import js from "../images/js.png"
import gatsby from "../images/gatsby.png"
import styled from "../images/styled.jpeg"
import html from "../images/html.png"
import css from "../images/css.png"
import git from "../images/git.png"
import strapi from "../images/strapi.jpg"
import heroku from "../images/heroku.png"
import netlify from "../images/netlify.png"

export default function Skills() {
  return (
    <div className="mt-5 mb-5">
      <marquee scrollamount="25" behavior="scroll">
        <img src={react} alt="react" className="img-fluid redux mr-5" />
        <img src={redux} alt="redux" className="img-fluid redux mt-5 pt-3" />
        <img
          src={js}
          alt="js"
          className="img-fluid rounded-circle redux ml-5"
        />
        <img
          src={gatsby}
          alt="gatsby"
          className="img-fluid redux mt-5 pt-3 ml-5"
        />
        <img src={styled} alt="styled" className="img-fluid redux ml-5" />

        <img src={html} alt="html" className="img-fluid redux group-icon" />
        <img
          src={css}
          alt="css"
          className="img-fluid css-width mt-5 pt-3 ml-5"
        />

        <img src={git} alt="git" className="img-fluid git-width group-icon" />
        <img
          src={strapi}
          alt="strapi"
          className="img-fluid git-width rounded-circle mt-5 pt-3 ml-5"
        />
        <img
          src={heroku}
          alt="heroku"
          className="img-fluid git-width rounded-circle mt-5 pt-3 ml-5"
        />
        <img
          src={netlify}
          alt="netlify"
          className="img-fluid git-width mt-5 pt-3 ml-5"
        />
      </marquee>
    </div>
  )
}
