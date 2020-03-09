import React from "react"
import "../scss/style.scss"
import Header from "../components/Header"
import Info from "../components/Info"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <>
      <Header />
      <Info />
      <Skills />
      <Footer />
    </>
  )
}
