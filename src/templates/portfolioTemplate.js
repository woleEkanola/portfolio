import React, { Component} from 'react';
import PropTypes from 'prop-types';

class PortfolioTemplate extends Component {
  render() {
    
    return (
      <div>
          
        <h1>{ this.props.data.contentfulPortfolio.name} <span>{this.props.data.contentfulPortfolio.category}</span></h1>
        <img src={this.props.data.contentfulPortfolio.featuredImg.sizes.src} alt={ this.props.data.contentfulPortfolio.name} />
        <p>{ this.props.data.contentfulPortfolio.description.description}</p>
   </div>
    )
  }
}

PortfolioTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default PortfolioTemplate

export const pageQuery = graphql`
  query portfolioQuery($name: String!){
    contentfulPortfolio(name: {eq: $name}) {
        id
        name
        category
        description {
          description
        }
        featuredImg{
                              
                                sizes {
                                 
                                  src
                                 
                                }
                              }
    }
  }
`