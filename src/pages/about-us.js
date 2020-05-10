import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    {/* <div style={{ textAlign: `center` }}> */}
    <div>
      <h1>Who we are</h1>

      <p>The modern world is an amazing place. The Internet has placed billions of opportunities at your fingertips; <br />
        <span style={{ paddingLeft: `20px` }}>opportunities to learn,</span> <br />
          <span style={{ paddingLeft: `40px` }}>opportunities to grow,</span> <br />
            <span style={{ paddingLeft: `60px` }}>opportunities to experience life.</span></p>
      
      <p><strong>Every day is an opportunity.</strong></p>
      <p>There are people to meet, <br />
        <span style={{ paddingLeft: `20px` }}>places to see,</span> <br />
        <span style={{ paddingLeft: `40px` }}>billions of possibilities to explore in this amazing thing we call life.</span></p>
      <p><strong>This is the inspiration for iVolve.</strong></p>
      <p>Get out there and expand your horizons, soak it all in, enjoy yourself.</p>
      <p><span style={{ paddingLeft: `20px` }}>Find something you love.</span> <br />
      <span style={{ paddingLeft: `40px` }}>Do it everyday.</span> <br />
      <span style={{ paddingLeft: `60px` }}>Do something new everyday.</span></p>

      <p><span style={{ paddingLeft: `20px` }}>Move, hustle, read, learn, explore.</span></p>

      <p><span style={{ paddingLeft: `40px` }}>Immerse yourself in life and all it has to offer.</span></p>

      <p><strong>iVolve yourself.</strong></p>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUs
