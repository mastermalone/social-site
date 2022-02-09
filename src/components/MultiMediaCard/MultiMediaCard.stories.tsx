import React from 'react';

import { Meta, ComponentStory } from '@storybook/react';

import MultiMediaCard from './MultiMediaCard';

export default {
  component: MultiMediaCard,
  title: 'Components/ Multi-Media Card',
  argTypes: {},
} as Meta;

const Template: ComponentStory<typeof MultiMediaCard> = (args) => (
  <MultiMediaCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  mediaThumbnail: 'https://place-puppy.com/1000x565',
  mediaUrl: 'https://youtu.be/FH95dcROBVs',
  tags: [
    {
      __typename: 'Listing Role',
      id: 1,
      name: 'Director',
    },
  ],
  title: 'The Best thing ever made',
  type: 'VIDEO',
};
