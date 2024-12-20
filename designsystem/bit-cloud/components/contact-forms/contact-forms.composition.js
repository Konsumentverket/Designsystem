import React from 'react';
import { ContactForms } from './contact-forms.js';
import { WithContentExpander } from '@konsumentverket-sverige/designsystem.with-content-expander';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

const formMicroCopy = {
  guidance: {
    guidanceEmailLabel: 'E-post (obligatoriskt)*',
    guidanceEmailPlaceholder: 'Skriv din e-postadress',
    guidanceEmailHelpText: 'Hjälptext för emailfält',
    guidanceMunicipalityLabel: 'Kommun (frivilligt)',
    guidanceMunicipalityPlaceholder: 'Skriv din kommun',
    guidanceMunicipalityHelpText: 'Hjälptext för kommunfält',
    guidanceCompanyLabel: 'Företag (frivilligt)',
    guidanceCompanyPlaceholder: 'Skriv vilket företag det berör',
    guidanceCompanyHelpText: 'Hjälptext för företagsfält',
    guidanceSubjectLabel: 'Ämne (obligatoriskt)*',
    guidanceSubjectPlaceholder: 'Skriv ämnet för ditt ärende',
    guidanceSubjectHelpText: 'Hjälptext för ämnesfält',
    guidanceQuestionLabel: 'Din fråga (obligatoriskt)*',
    guidanceQuestionPlaceholder: 'Skriv din fråga',
    guidanceSubmitButtonText: 'Skicka',
  }
}

export const BasicFormGuidance = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ContactForms
        title="Kontakta vägledning"
        type={'guidance'}
        handleFormSubmit={(data) => console.log(data)}
        texts={formMicroCopy.guidance}
      >
        <WithContentExpander
          useLightBlueAlternativeStyling={true}
          text="Så behandlar vi dina personuppgifter"
          wrappedComponent={
            <>
              <p>Lorem ipsum dolor sit amet</p>
            </>
          }
        />
      </ContactForms>
    </CompositionFonts>
  );
};
