import React from 'react'
//import { Link } from 'gatsby'
import video from '../videos/ocean-small.mp4'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <video autoPlay src={video} muted loop playsInline preload="true"></video>
      <svg width="100%" height="100%">
        <mask id="maskLayer">
            <rect width="100%" height="100%" fill="#fff"></rect>
            <text x="0" y="50%" dy="0" textAnchor="middle" alignmentBaseline="central">
              <tspan x="50%" dy="0em">Dreams of</tspan>
              <tspan x="50%" dy="1em">Scarlett</tspan>
            </text>
        </mask>
        <rect width="100%" height="100%" fill="#fff" mask="url(#maskLayer)"/>
      </svg>
    </div>
  </Layout>
)

export default IndexPage
