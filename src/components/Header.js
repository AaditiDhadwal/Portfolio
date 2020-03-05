import React from "react"

import person from "../images/Aaditi.jpg"

export default function Header() {
  return (
    <>
      <div className="bg-image" />
      <div className="bg-text">
        <h1 className="font-weight-bolder display-1">Aaditi Dhadwal</h1>
        <p className="lead">FRONTEND DEVELOPER</p>
      </div>
      <img src={person} alt="logo" className="logo img-fluid rounded-circle" />
    </>
  )
}
