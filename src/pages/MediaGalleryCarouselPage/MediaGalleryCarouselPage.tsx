import { Box, Chip } from '@material-ui/core';
import React, { useMemo } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Plugins
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import { ListingRoleTag } from '../../components/MultiMediaCard/MultiMediaCard';
import useStyles from './style';
import useRenderArrayToStrings from './useRenderJSXArrayToStrings';

export type ListingMediaGallery = {
  type: 'IMAGE' | 'AUDIO' | 'VIDEO';
  mediaThumbnail: string;
  mediaUrl: string;
  tags: ListingRoleTag[];
  title: string;
};

interface MediaGalleryCarouselPageTemplateProps {
  mediaGallery: ListingMediaGallery[];
}

const MediaGalleryCarouselPage: React.FC<MediaGalleryCarouselPageTemplateProps> =
  ({ mediaGallery }) => {
    const styles = useStyles();

    const preRenderedChips = useRenderArrayToStrings(
      useMemo(
        () =>
          mediaGallery.map(({ tags, title }) => {
            return (
              <>
                <p className={styles.galleryItemTitle}>{title}</p>
                {tags &&
                  tags.map((tag) => <Chip label={tag.name} color="primary" />)}
              </>
            );
          }),
        [mediaGallery, styles.galleryItemTitle]
      )
    );
    return (
      <>
        <Box>The carousel goes here</Box>
        <Box>Here goes the LightGallery Version</Box>
        <Box className={styles.galleryTileContainer}>
          {preRenderedChips && (
            <LightGallery
              autoplayFirstVideo={false}
              thumbnail={true}
              autoplay={false}
              plugins={[lgVideo, lgThumbnail]}
            >
              {mediaGallery?.map((gallery, idx) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={`${gallery.title}_${idx}_a`}
                  className={styles.galleryImage}
                  // href={gallery.mediaThumbnail}
                  data-src={gallery.mediaUrl}
                  // data-video={`{"source": [{"src":"${gallery.mediaUrl}", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`}
                  data-poster={gallery.mediaThumbnail}
                  data-sub-html={preRenderedChips[idx]}
                  // data-sub-html="<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>"
                >
                  <img src={gallery.mediaThumbnail} alt="" />
                </a>
              ))}
            </LightGallery>
          )}
        </Box>
      </>
    );
  };

export default MediaGalleryCarouselPage;
