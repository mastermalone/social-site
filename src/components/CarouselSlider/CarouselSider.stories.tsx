import React from 'react';

import { Meta } from '@storybook/react';
import { ComponentStory } from '@storybook/react';

import CarouselSlider from '.';

export default {
  title: 'Components/Carousel Slider',
  argTypes: {
    showSlideLabels: {
      control: {
        type: 'boolean',
      },
    },
    showSlideControls: {
      control: {
        type: 'boolean',
      },
    },
    indicatorButtonPosition: {
      control: {
        type: 'select',
        options: {
          top: 'top',
          bottom: 'bottom',
          left: 'left',
          right: 'right',
          bottomRight: 'bottom-right',
          none: '',
        },
      },
    },
    animationStyle: {
      control: {
        type: 'select',
        options: {
          fade: 'fade',
          slide: 'slide',
        },
      },
    },
    useHTML5VideoPlayerForSlides: {
      control: {
        type: 'boolean',
      },
    },
    useVideoEmbedForSlides: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof CarouselSlider> = (args) => (
  <CarouselSlider {...args} />
);

export const Default = Template.bind({});

Default.args = {
  showSlideLabels: true,
};
