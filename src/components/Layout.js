import React from "react"
import { Helmet } from "react-helmet"

import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={"/"} />
      </Helmet>
      <Nav />
      <main className="min-h-screen py-32">
        {children}
      </main>
      <Footer />
    </>
  )
}
