import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import FALLBACK_SOCIAL_IMAGE from "../assets/images/field-lines-background.jpg"

export default class SEO extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
  }

  static defaultProps = {
    title: "Openfields"
  }

  render() {
    const { title, description, image, children } = this.props
    return (
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="image" content={image || FALLBACK_SOCIAL_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image || FALLBACK_SOCIAL_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@opnflds" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || FALLBACK_SOCIAL_IMAGE} />

        {children}
      </Helmet>
    )
  }
}
