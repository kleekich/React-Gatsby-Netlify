import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  
  const alt = {
    alt: 'Hi, Spider!',
  };


  render() {
    return (
      <div itemscope itemtype="http://schema.org/FinancialProduct">
        <h1 alt = {{alt}}> Hi spidersdfdf!</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
