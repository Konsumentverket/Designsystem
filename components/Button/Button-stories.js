import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import ComponentExplanation from '../../misc/ComponentExplanation/ComponentExplanation';
import ReactMarkdown from 'react-markdown';

var buttonText = `## When to use this component
Use the button component to help users carry out an action on a GOV.UK page like starting an application or saving their information.

## How it works
Write button text in sentence case, describing the action it performs.

For example:

* "Start now" at the start of the service
* "Sign in" to an account a user has already created
* "Continue" when the service does not save a user's information
* "Save and continue" when the service does save a user's information
* "Save and come back later" when a user can save their information and come back later
* "Add another" to add another item to a list or group
* "Pay" to make a payment
* "Confirm and send" on a check answers page that does not have any legal content a user must agree to
* "Accept and send" on a check answers page that has legal content a user must agree to
* "Sign out" when a user is signed in to an account
* You may need to include more or different words to better describe the action.For example, "Add another address" and "Accept and claim a tax refund".

Align the primary action button to the left edge of your form.

There are 2 ways to use the button component. You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.`;

storiesOf('Digitala Produkter|Komponenter>Knappar', module)
    .add('Knapp', () =>
        <ComponentExplanation heading="Knapp">
            <Button text="Klicka mig!" />
            <ReactMarkdown source={buttonText} />
        </ComponentExplanation>
    );