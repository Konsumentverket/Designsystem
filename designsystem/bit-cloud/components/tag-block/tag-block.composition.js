import 'react';
import 'date-fns';
import { TagBlock } from './tag-block.js';

export const BasicTagBlock = () => {
  return (
    <TagBlock
      heading="Lorem ipsum"
      //icon="SalesLaw"
      invertedColors={false}
      secondaryArrowStyle={false}
      tags={[
        { titleInNavigation: "Lorem" },
        { titleInNavigation: "Ipsum" },
        { titleInNavigation: "Dolor" },
        { titleInNavigation: "Sit" }
      ]}
    />
  );
}
