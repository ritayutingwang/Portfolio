import React from "react"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={"/"} />
      </Helmet>

      <main className="min-h-screen py-32">
        {children}
      </main>
    </>
  )
}
