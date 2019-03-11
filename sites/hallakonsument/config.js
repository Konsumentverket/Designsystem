import { configure, addParameters, addDecorator  } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';

addDecorator(withKnobs);
addParameters({
    options: { theme: theme }
});
addParameters({
    info: {
        header: false,
        source: false
    }
});


const about = require.context('../../sections/about/', false, /-stories\.js$/);
const brandIdentity = require.context('../../sections/brand-identity/', false, /-stories\.js$/);
const components = require.context('../../components/', true, /-stories\.js$/);
const digitalProducts = require.context('../../sections/digital-products/', true, /-stories\.js$/);
const ux = require.context('../../sections/research-ux/', false, /-stories\.js$/);
const availability = require.context('../../sections/availability/', false, /-stories\.js$/);
const analogueProducts = require.context('../../sections/analogue-products/', false, /-stories\.js$/);


function loadStories() {

    //OM DESIGNSYSTEM
    about.keys().forEach(filename => about(filename));
    //VARUMÄRKESIDENTITET
    brandIdentity.keys().forEach(filename => brandIdentity(filename));
    //ANALOGA PRODUKTER
    analogueProducts.keys().forEach(filename => analogueProducts(filename));
    //DIGITALA PRODUKTER
    digitalProducts.keys().forEach(filename => digitalProducts(filename));
    components.keys().forEach(filename => components(filename));
    //RESEARCH / UX
    ux.keys().forEach(filename => ux(filename));
    //TILLGÄNGLIGHET
    availability.keys().forEach(filename => availability(filename));
    

}

configure(loadStories, module);