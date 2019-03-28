import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Page from './misc/Page/Page'


var response = window.graphQLResponse
response.data.designsystempageCollection.items.forEach(page => {
    storiesOf(page.storylocation, module)
        .add(page.heading, () => (
            <Page>
                <h1>{page.heading}</h1>
                <ReactMarkdown source={page.mainbody} />
            </Page>
        )
        );

})

