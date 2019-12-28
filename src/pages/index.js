import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Happy Unicorns Prancing" />
    <main>
      <nav>
        <a href="./about-us">About Us</a>
      </nav>
      <img src="https://media.giphy.com/media/GSFAH5e1l7Yl2/giphy.gif" />
    </main>
  </Layout>
)

export default IndexPage
