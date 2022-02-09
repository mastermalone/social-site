import { useEffect, useMemo, useState } from 'react';
import withHooks, { mapHooksToProps } from '../../library/withHooks';

import CarouselTemplate from './CarouselSliderTemplate';
import {
  DefaultCarouselContent,
  SliderImageInterface,
} from './defaultCarouselContent';
import {
  CarouselIndicatorIconButtonProps,
  CarouselIndicatorsBottom,
  CarouselIndicatorsBottomRight,
  CarouselIndicatorsLeft,
  CarouselIndicatorsRight,
  CarouselIndicatorsTop,
} from './styles';

export interface CarouselSliderProps {
  carouselContent?: SliderImageInterface[];
  children?: React.ReactNode;
  showSlideLabels?: boolean;
  showSlideControls?: boolean;
  indicatorButtonPosition?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'bottom-right'
    | '';
  indicatorButtonStyle?: { [key: string]: unknown } | null;
  carouseIndicatorIconButtonProps?: { [key: string]: unknown } | null;
  animationStyle?: 'fade' | 'slide';
  useVideoEmbedForSlides?: boolean;
  useHTML5VideoPlayerForSlides?: boolean;
  carouselImagesReadyToDisplay?: boolean;
}

const hooks = mapHooksToProps(
  ({
    carouselContent = [],
    showSlideLabels,
    indicatorButtonPosition,
    indicatorButtonStyle,
    animationStyle,
    useVideoEmbedForSlides,
    useHTML5VideoPlayerForSlides,
    carouseIndicatorIconButtonProps,
    carouselImagesReadyToDisplay,
  }: CarouselSliderProps) => {
    /**
     * State for images loaded
     */
    const [imagesAreLoaded, setImagesAreLoaded] = useState<boolean>(false);

    /**
     * This is a simple image pre-loader to prevent the carousel
     * from losing height during transitions if the image has not fully loaded
     */
    const imagePromiseArray = useMemo(
      () =>
        carouselContent.map((image, idx) => {
          if (image.imgPath) {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = image.imgPath;
              img.addEventListener('load', () => resolve(img));
              img.addEventListener('error', (err) => reject(img));
            });
          }
          return new Promise((_resolve, reject) => {
            reject(true);
          });
        }),
      [carouselContent]
    );

    const [indicatorPosition, indicatorStyle] = useMemo(() => {
      switch (indicatorButtonPosition) {
        case '':
          return ['', null] as const;
        case 'top':
          return ['top', CarouselIndicatorsTop] as const;
        case 'bottom':
          return ['bottom', CarouselIndicatorsBottom] as const;
        case 'left':
          return ['left', CarouselIndicatorsLeft] as const;
        case 'right':
          return ['right', CarouselIndicatorsRight] as const;
        case 'bottom-right':
          return ['bottom-right', CarouselIndicatorsBottomRight] as const;
        default:
          return ['', null] as const;
      }
    }, [indicatorButtonPosition]);

    useEffect(() => {
      const init = async () => {
        const preloadAllImages = async () => {
          await Promise.all(imagePromiseArray)
            .then((res) => {
              setImagesAreLoaded(true);
            })
            .catch((err) => {
              setImagesAreLoaded(false);
            });
        };

        await preloadAllImages();
      };
      init();
    }, [imagePromiseArray]);

    return {
      carouselContent: carouselContent || DefaultCarouselContent,
      showSlideLabels,
      indicatorButtonPosition: indicatorPosition,
      indicatorButtonStyle: indicatorStyle,
      animationStyle: animationStyle || 'fade',
      useVideoEmbedForSlides,
      useHTML5VideoPlayerForSlides,
      carouseIndicatorIconButtonProps:
        carouseIndicatorIconButtonProps || CarouselIndicatorIconButtonProps,
      carouselImagesReadyToDisplay:
        carouselImagesReadyToDisplay || imagesAreLoaded,
    };
  }
);

const CarouselSlider = withHooks(CarouselTemplate, hooks);

export default CarouselSlider;
