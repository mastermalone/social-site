import { useEffect } from 'react';
import withHooks, { mapHooksToProps } from '../../library/withHooks';
import MediaGalleryCarouselPageTemplate, {
  ListingMediaGallery,
} from './MediaGalleryCarouselPage';

const hooks = mapHooksToProps(() => {
  console.log('loading Media Gallery page');

  const mockData: ListingMediaGallery[] = [
    {
      thumbnailUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Director',
        },
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Producer',
        },
      ],
      title: 'The Best thing ever made',
      type: 'VIDEO',
      embedUrl: 'https://www.youtube.com/watch?v=egyIeygdS_E',
    },
    {
      thumbnailUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Art Direction',
        },
        {
          __typename: 'Listing Role',
          id: 2,
          name: 'Camera Operations Manager',
        },
      ],
      title: 'Yo Jo!',
      type: 'VIDEO',
      embedUrl: 'https://www.youtube.com/watch?v=egyIeygdS_E',
    },
    {
      thumbnailUrl: 'https://place-puppy.com/1000x565',
      mediaUrl:
        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Screen Writer',
        },
        {
          __typename: 'Listing Role',
          id: 2,
          name: 'Sound Engineer',
        },
        {
          __typename: 'Listing Role',
          id: 3,
          name: 'Wardrobe Manager',
        },
        {
          __typename: 'Listing Role',
          id: 4,
          name: 'Food Services',
        },
      ],
      title: 'Scooby Doo!',
      type: 'VIDEO',
    },
    {
      mediaUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Screen Writer',
        },
        {
          __typename: 'Listing Role',
          id: 4,
          name: 'Camera Lighting',
        },
      ],
      title: 'This is an image',
      type: 'IMAGE',
    },
    {
      mediaUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Screen Writer',
        },
        {
          __typename: 'Listing Role',
          id: 4,
          name: 'Camera Lighting',
        },
      ],
      title: 'This is an image too',
      type: 'IMAGE',
    },
    {
      mediaUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Screen Writer',
        },
        {
          __typename: 'Listing Role',
          id: 4,
          name: 'Camera Lighting',
        },
      ],
      title: 'This is an image three',
      type: 'IMAGE',
    },
    {
      thumbnailUrl: 'https://place-puppy.com/1000x565',
      tags: [
        {
          __typename: 'Listing Role',
          id: 1,
          name: 'Lighting/Sound',
        },
        {
          __typename: 'Listing Role',
          id: 4,
          name: 'Animal Trainer',
        },
      ],
      title: 'Jack Russell Puppies!',
      type: 'VIDEO',
      embedUrl: 'https://vimeo.com/4446067',
    },
  ];

  useEffect(() => {
    const slashString = 'image/png';

    console.log('The slashed string', slashString.split('/')[0].toUpperCase());
  }, []);
  return {
    mediaGallery: mockData,
  };
});

const MediaGalleryCarouselPage = withHooks(
  MediaGalleryCarouselPageTemplate,
  hooks
);

export default MediaGalleryCarouselPage;
