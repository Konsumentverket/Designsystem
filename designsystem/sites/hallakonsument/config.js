import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';
import SynchronousGraphQLRequest from '../../misc/SynchronousGraphQLRequest';

addDecorator(withKnobs);
addParameters({
  options: {
    theme: theme,
    sortStoriesByKind: true
  }
});
addParameters({
  info: {
    header: false,
    source: false
  }
});



var response = SynchronousGraphQLRequest(`
{
  designsystempageCollection{
  	items{
      heading,
      storylocation,
      mainbody
    }
  }
  designsystemcomponentCollection{
    items{
      heading,
      componenter,
      mainbody
    }
  }
}
`)
window.graphQLResponse = response;

const componentsTypeScript = require.context('../../components/', true, /-stories\.tsx$/);
const compontentsJavaScript = require.context('../../components/', true, /-stories\.js$/);
const dynamicStoryInitializr = require.context('../../', false, /DynamicStoryInitializr\.js$/);


function loadStories() {
  dynamicStoryInitializr.keys().forEach(filename => dynamicStoryInitializr(filename));
  componentsTypeScript.keys().sort().forEach(filename => componentsTypeScript(filename));
  compontentsJavaScript.keys().sort().forEach(filename => compontentsJavaScript(filename));
  require('./globalStyleLoader.js');
}

configure(loadStories, module);