import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 alt = "Hello" itemScope itemType="http://schema.org/Movie">Hi Mans!</h1>
        <p>Welcome to your new kang????!</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
