import withHooks, { mapHooksToProps } from '../../library/withHooks';
import MediaGalleryCarouselPageTemplate, {
  ListingMediaGallery,
} from './MediaGalleryCarouselPage';

const hooks = mapHooksToProps(() => {
  console.log('loading Media Gallery page');

  const mockData: ListingMediaGallery[] = [
    {
      mediaThumbnail: 'https://place-puppy.com/1000x565',
      mediaUrl: 'https://www.youtube.com/watch?v=egyIeygdS_E',
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
    },
    {
      mediaThumbnail: 'https://place-puppy.com/1000x565',
      mediaUrl: 'https://www.youtube.com/watch?v=egyIeygdS_E',
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
    },
    {
      mediaThumbnail: 'https://place-puppy.com/1000x565',
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
  ];
  return {
    mediaGallery: mockData,
  };
});

const MediaGalleryCarouselPage = withHooks(
  MediaGalleryCarouselPageTemplate,
  hooks
);

export default MediaGalleryCarouselPage;
