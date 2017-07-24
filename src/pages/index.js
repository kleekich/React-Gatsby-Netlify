import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  const icons = [
  {
    header: 'ALL GROWTH',
    subHeader: 'Get paid daily, in your sleep.',
    icon: iconGrowth,
  },
  {
    header: 'FDIC INSURED',
    subHeader: 'Wall Street casinos? Never.',
    icon: iconInsured,
  },
  {
    header: 'NO LOCKUP',
    subHeader: '24/7 access. $0 minimum.',
    icon: iconLockUp,
  },
  {
    header: 'ZERO FEES',
    subHeader: 'Free means free. Forever.',
    icon: iconFees,
  },
];

  render() {
    return (
      <div>
        <h1 alt = "Hello" itemScope itemType="http://schema.org/Movie">Hi Mans!</h1>
        <p>Welcome to your new kang????!</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
         <Grid
                columns={12}
                css={{
                  display: `block`,
                  [presets.Tablet]: {
                    display: `none`,
                  },
                }}
              >
                {icons.map((icon, i) => {
                  return (
                    <Span
                      key={i}
                      columns={4}
                      squish={1}
                      last={i % 2 ? true : false}
                      css={{
                        textAlign: `center`,
                        marginBottom: rhythm(3 / 4),
                      }}
                    >
                      <img
                        src={icon.icon}
                        css={{
                          width: rhythm(2),
                          marginBottom: rhythm(1 / 2),
                        }}
                      />
                      <h3
                        css={{
                          ...scale(0),
                          lineHeight: 1.3,
                          marginBottom: rhythm(1 / 2),
                        }}
                      >
                        {icon.header}
                      </h3>
                      <p
                        css={{
                          ...scale(-2 / 5),
                          lineHeight: typography.options.baseLineHeight,
                          color: colors.schist,
                        }}
                      >
                        {icon.subHeader}
                      </p>
                    </Span>
                  );
                })}
              </Grid>
      </div>
    )
  }
}
