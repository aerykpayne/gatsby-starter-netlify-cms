import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { Navbar, Footer } from "../components"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Openfields" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
