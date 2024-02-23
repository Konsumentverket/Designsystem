import React from 'react';
import { IconCard } from './icon-card.js';
import { Icon } from '@designsystem-scope/icon'

export const BasicIconCard = () => {
  return (
    <IconCard
      url="#"
      text="Lorem ipsum"
      icon={<Icon icon="Burger" />}
    />
  );
}
