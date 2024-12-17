import React from 'react';
import { ContactForms } from './contact-forms.js';
import { WithContentExpander } from '@konsumentverket-sverige/designsystem.with-content-expander';

import {
  globalStyles as GlobalStyles,
  CompositionFonts,
} from '@konsumentverket-sverige/designsystem.utils';

export const BasicFormGuidance = () => {
  return (
    <CompositionFonts>
      <GlobalStyles />
      <ContactForms
        title="Kontakta vägledning"
        type={'guidance'}
        handleFormSubmit={(data) => console.log(data)}
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

// export const BasicFormPersonalData = () => {
//   return (
//     <CompositionFonts>
//       <GlobalStyles />
//       <ContactForms
//         title="Ange dina uppgifter"
//         type={'personalData'}
//       >
//         <WithContentExpander
//           useLightBlueAlternativeStyling={true}
//           text="Så behandlar vi dina personuppgifter"
//           wrappedComponent={
//             <>
//               <p>Lorem ipsum dolor sit amet</p>
//             </>
//           }
//         />
//       </ContactForms>
//     </CompositionFonts>
//   );
// };

