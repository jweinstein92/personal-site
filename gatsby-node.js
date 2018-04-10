const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const photoPageTemplate = path.resolve(`src/templates/photos-page.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allPlacesJson {
              edges {
                node {
                  name
                  photo_regex
                  has_pictures
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allPlacesJson.edges.forEach(({ node }) => {
          const path = 'photos/' + node.photo_regex;
          if (node.has_pictures) {
            const regex = new RegExp("/img/photos/" + node.photo_regex, "g");
            createPage({
              path,
              component: photoPageTemplate,
              context: {
                name: node.name,
                photo_regex: regex
              },
            });
          }
        });
      })
    );
  });
};