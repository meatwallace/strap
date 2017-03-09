/**
 * Creates or returns an existing root element for rendering a React app
 * @param {string} - id of element to create
 * @return {node} - created root element
 */
export default (rootId = 'root') => {
  const rootNode = document.getElementById(rootId);

  if (rootNode) {
    return rootNode;
  }

  const rootNodeHtml = `<div id="${rootId}"></div>`;
  const body = document.getElementsByTagName('body')[0];

  body.insertAdjacentHTML('beforeend', rootNodeHtml);

  return document.getElementById(rootId);
};
