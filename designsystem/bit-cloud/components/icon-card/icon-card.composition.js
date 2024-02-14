import React from 'react';
import { IconCard } from './icon-card.js';

import ConsumerRights from '../utils/Icons/EditorIcons/ConsumerRights/ConsumerRights';

export const BasicIconCard = () => {
  return (
    <IconCard
      url="#"
      text="Lorem ipsum"
      icon={<ConsumerRights />}
    />
  );
}
