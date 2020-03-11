import React, { useState } from "react"

import { ThemeProvider, createGlobalStyle } from "styled-components"

import person from "../images/Aaditi.jpg"

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => (props.theme.mode === "dark" ? "#eee" : "")};
  color: ${props => (props.theme.mode === "dark" ? "#fff" : "")};
}
.bg-text {
  color: ${props => (props.theme.mode === "dark" ? "#00ffff" : "")};
}
.bg-text p {
    color: ${props => (props.theme.mode === "dark" ? "#fff" : "")};
  }
  .logo {
  border: ${props =>
    props.theme.mode === "dark" ? "10px solid #0beadc0d " : ""};
}
.carousel-image-1,
.carousel-image-2,
.carousel-image-3 {
  background: ${props => (props.theme.mode === "dark" ? "#0beadc0d" : "")};
}
.footer {
  background: ${props => (props.theme.mode === "dark" ? "#0beadc0d" : "")};
}
`

export default function Header() {
  localStorage.setItem("theme", localStorage.getItem("theme") || "light")
  const [theme, setTheme] = useState({
    mode: localStorage.getItem("theme") || "light",
  })

  function saveTheme() {
    localStorage.setItem("theme", theme.mode === "light" ? "dark" : "light")
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <div className="bg-image"></div>
        <label className="switch m-0 disableBlur" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onClick={() => saveTheme()}
            checked={localStorage.getItem("theme") === "dark"}
            readOnly
          />
          <span className="slider round" />
        </label>

        <div className="bg-text">
          <h1 className="font-weight-bolder display-1">Aaditi Dhadwal</h1>
          <p className="lead">FRONTEND DEVELOPER</p>
        </div>
        <img
          src={person}
          alt="logo"
          className="logo img-fluid rounded-circle"
        />
      </>
    </ThemeProvider>
  )
}
