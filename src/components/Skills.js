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
      <marquee height="300px" scrollamount="25">
        <img src={react} alt="react" className="img-fluid redux mr-5 icon" />
        <img
          src={redux}
          alt="redux"
          className="img-fluid redux icon icon-adjust"
        />
        <img
          src={js}
          alt="js"
          className="img-fluid rounded-circle redux ml-5 icon"
        />
        <img
          src={gatsby}
          alt="gatsby"
          className="img-fluid redux ml-5 icon icon-adjust"
        />
        <img src={styled} alt="styled" className="img-fluid redux ml-5 icon" />

        <img
          src={html}
          alt="html"
          className="img-fluid redux group-icon icon"
        />
        <img
          src={css}
          alt="css"
          className="img-fluid css-width ml-5 icon-adjust"
        />
        <img
          src={git}
          alt="git"
          className="img-fluid git-width group-icon icon"
        />
        <img
          src={strapi}
          alt="strapi"
          className="img-fluid git-width rounded-circle  ml-5 icon icon-adjust"
        />
        <img
          src={heroku}
          alt="heroku"
          className="img-fluid git-width rounded-circle  ml-5 icon"
        />
        <img
          src={netlify}
          alt="netlify"
          className="img-fluid git-width  ml-5 icon icon-adjust"
        />
      </marquee>
    </div>
  )
}
