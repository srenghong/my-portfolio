import React from "react"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, className }) => (
  <div>
    <Header />
    <main className={className}>{children}</main>
    <Footer />
  </div>
)

export default Layout
