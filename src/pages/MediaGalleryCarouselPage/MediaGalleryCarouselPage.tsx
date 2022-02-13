import { Box, Chip } from '@material-ui/core';
import React, { useMemo } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Plugins
import lgVideo from 'lightgallery/plugins/video';
import ldVimeo from '@vimeo/player';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import { ListingRoleTag } from '../../components/MultiMediaCard/MultiMediaCard';
import useStyles from './style';
import useRenderArrayToStrings from './useRenderJSXArrayToStrings';
import LightGalleryMediaPlayer from '../../components/LightGalleryMediaPlayer';

export type ListingMediaGallery = {
  type: 'IMAGE' | 'AUDIO' | 'VIDEO';
  thumbnailUrl?: string;
  mediaUrl?: string;
  tags: ListingRoleTag[];
  title: string;
  embedUrl?: string;
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
          mediaGallery.map(({ tags, title }, idx) => {
            return (
              <div key={`media_gallery_${idx}`}>
                <p
                  className={styles.galleryItemTitle}
                  key={`${title}_${idx}_title`}
                >
                  {title}
                </p>
                {tags &&
                  tags.map((tag, index) => (
                    <Chip
                      className={styles.chips}
                      label={tag.name}
                      color="primary"
                      key={`${tag.name}_${index}_chip`}
                    />
                  ))}
              </div>
            );
          }),
        [mediaGallery, styles.chips, styles.galleryItemTitle]
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
              plugins={[lgVideo, lgThumbnail, lgZoom]}
              download={false}
              zoomFromOrigin
            >
              {mediaGallery?.map((gallery, idx) => (
                <>
                  {gallery.embedUrl && (
                    //eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      key={`${gallery.title}_${idx}_embed`}
                      className={styles.galleryImage}
                      data-src={gallery.embedUrl}
                      data-poster={gallery.thumbnailUrl}
                      data-sub-html={preRenderedChips[idx]}
                    >
                      <img
                        src={gallery.thumbnailUrl}
                        key={`${gallery.title}_${idx}_img`}
                        alt=""
                      />
                    </a>
                  )}
                  {gallery.mediaUrl && gallery.type !== 'IMAGE' && (
                    //eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      key={`${gallery.title}_${idx}_html5_video`}
                      className={styles.galleryImage}
                      data-video={`{"source": [{"src":"${gallery.mediaUrl}", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`}
                      data-poster={gallery.thumbnailUrl}
                      data-sub-html={preRenderedChips[idx]}
                    >
                      <img
                        src={gallery.thumbnailUrl}
                        key={`${gallery.title}_${idx}_img`}
                        alt=""
                      />
                    </a>
                  )}
                  {gallery.type === 'AUDIO' && (
                    //eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      key={`${gallery.title}_${idx}_audio`}
                      className={styles.galleryImage}
                      data-video={`{"source": [{"src":"${gallery.mediaUrl}", "type":"audio/mp3"}], "attributes": {"preload": false, "controls": true}}`}
                      data-poster={gallery.thumbnailUrl}
                      data-sub-html={preRenderedChips[idx]}
                    >
                      <img
                        src={gallery.thumbnailUrl}
                        key={`${gallery.title}_${idx}_img`}
                        alt=""
                      />
                    </a>
                  )}

                  {gallery.type === 'IMAGE' && (
                    <a
                      key={`${gallery.title}_${idx}_image`}
                      className={styles.galleryImage}
                      data-src={gallery.mediaUrl}
                      data-lg-size="1000-565"
                      href={gallery.mediaUrl}
                      data-sub-html={preRenderedChips[idx]}
                    >
                      <div>
                        <img
                          src={gallery.mediaUrl}
                          key={`${gallery.title}_${idx}_img`}
                          alt=""
                        />
                      </div>
                    </a>
                  )}
                </>
              ))}
            </LightGallery>
          )}
          {/* <LightGalleryMediaPlayer list={mediaGallery}>
            <img src="https://place-puppy.com/1000x565" alt="" />
          </LightGalleryMediaPlayer> */}
        </Box>
      </>
    );
  };

export default MediaGalleryCarouselPage;
