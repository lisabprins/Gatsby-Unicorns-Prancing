import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <header class="happy-unicorns">
      <h1>About Us</h1>
    </header>
    <p>
      We are dedicated to all things prancing unicorns. Dancing unicorns. People
      prancing like unicorns. People prancercising. Yay.
    </p>
    <Link to="/">Back</Link>
  </Layout>
)

export default AboutUs
