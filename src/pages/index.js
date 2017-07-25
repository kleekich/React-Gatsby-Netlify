import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"



export default class Index extends React.Component {
  

  render() {
    return (
      <div>
        <h1 alt = "Hello" itemScope itemType="http://schema.org/DepositAccount">
        Hi Mans!</h1>
        <p>Welcome to your new ????!</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>

        <p>
              <span sytle="color:blue;">
              <span>High interest </span><span itemProp = "interestRate">2</span> - <span itemProp = "interestRate">4</span>% APY guaranteed.<br />
              </span>
              <span itemProp = "feesAndCommissionsSpecification">Zero fees.</span> All growth.

        </p>
      </div>
      
    )
  }
}
