import { storiesOf } from '@storybook/react';
import React from 'react';
const ReactMarkdown = require('react-markdown');

var response = window.graphQLResponse


response.data.designsystempageCollection.items.forEach(page => {
    console.log(page);
    storiesOf(page.storylocation, module)
        .add(page.heading, () => (
            <>
                <h1>{page.heading}</h1>
                <ReactMarkdown source={page.mainbody} />
            </>
        )
        );

})

