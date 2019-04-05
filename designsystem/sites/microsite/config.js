import { configure, addParameters, addDecorator, raw  } from '@storybook/react';
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

const components = require.context('../../components/', true, /-stories\.js$/);
const dynamicStoryInitializr = require.context('../../', false, /DynamicStoryInitializr\.js$/);



function loadStories() {
    dynamicStoryInitializr.keys().forEach(filename => dynamicStoryInitializr(filename));
    components.keys().sort().forEach(filename => components(filename));
    require('./globalStyle.css'); // Require global styles as last item so that they trump component styles
}

configure(loadStories, module);