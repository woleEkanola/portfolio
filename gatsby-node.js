const path = require ('path')

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const portfolioTemplate = path.resolve ('src/templates/portfolioTemplate.js')
        resolve(
            graphql(`
                {
                    allContentfulPortfolio (limit: 100) {
                        edges {
                            node {
                                id
                                name
                                
                            }
                        }
                    }
                }
            `).then((result) => {
                if(result.errors){
                    reject(result.errors)
                }
                result.data.allContentfulPortfolio.edges.forEach((edge) => {
                    createPage({
                                path: edge.node.name,
                                component: portfolioTemplate,
                                context: {
                                    name: edge.node.name
                                }
                    })
                })
                return
            })
        )
    })
}