import React from 'react'
import Link from 'gatsby-link'
import './home.css'


    
 
const IndexPage = ({data}) => (
  
  <div>
    <h3
    style={{
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: 'normal'
          }}
    >feel free to browse some projects I have executed, they cut accross web development, Graphic Design, Animated Social media campaings, Printing etc.</h3>
    
    <ul className= 'portfolio'>
      <li className= 'active'>All</li>
      <li>Web Design</li>
      <li>Logo</li>
      <li>Book Design</li>
      <li>E-flyer Designs</li>
      <li >Others</li>
    </ul>
    <div className="portfolioContent">
      {data.allContentfulPortfolio.edges.map(port => 
    <Link to = {port.node.name}>
    <div key= {port.node.id}>
        <img src={port.node.featuredImg.sizes.src} alt={port.node.name}/>
        <h3>{port.node.name}</h3>
      </div>
      </Link>
  )}

      
    </div>
  </div>
)

export default IndexPage


export const pageQuery = graphql`
   query pageQuery {
    allContentfulPortfolio (filter: {
      node_locale: {eq: "en-US"}
    }) {
        edges {
          node {
            id
            name
            featuredImg{
                              
                                sizes {
                                 
                                  src
                                 
                                }
                              }
          }
        }
    }
   }
`