import 'react';
import 'date-fns';
import { IconCard } from './icon-card.js';
import { Icon } from '@designsystem.icon'

export const BasicIconCard = () => {
  return (
    <IconCard
      url="#"
      text="Lorem ipsum"
      icon={<Icon icon="Burger" />}
    />
  );
}
