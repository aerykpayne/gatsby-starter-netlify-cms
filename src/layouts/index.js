import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Nicer Studio" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
