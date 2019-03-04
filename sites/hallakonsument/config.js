import { configure, addDecorator  } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
    withOptions({
        name: 'Konsumentverket',
        url: '#',
        hierarchyRootSeparator: /\|/,
        hierarchySeparator: /\>/,
        sidebarAnimations: false,
        enableShortcuts: false
    })
);

const components = require.context('../../components/', true, /-stories\.js$/);
const brandIdentity = require.context('../../sections/brand-identity/', false, /-stories\.js$/);
const ux = require.context('../../sections/research-ux/', false, /-stories\.js$/);
const availability = require.context('../../sections/availability/', false, /-stories\.js$/);


function loadStories() {
    brandIdentity.keys().forEach(filename => brandIdentity(filename));
    components.keys().forEach(filename => components(filename));
    ux.keys().forEach(filename => ux(filename));
    availability.keys().forEach(filename => availability(filename));
}

configure(loadStories, module);