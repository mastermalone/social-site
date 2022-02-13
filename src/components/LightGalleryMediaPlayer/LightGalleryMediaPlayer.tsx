import LightGallery from 'lightgallery/react';
import React, { useMemo } from 'react';

// Plugins
import lgVideo from 'lightgallery/plugins/video';
import ldVimeo from '@vimeo/player';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import { ListingRoleTag } from '../MultiMediaCard/MultiMediaCard';
import useRenderArrayToStrings from '../../pages/MediaGalleryCarouselPage/useRenderJSXArrayToStrings';
import { Chip } from '@material-ui/core';
import useStyles from './styles';
type ListType = {
  type: 'IMAGE' | 'AUDIO' | 'VIDEO';
  mediaUrl?: string;
  thumbnailUrl?: string;
  embedUrl?: string;
  title?: string;
  tags?: ListingRoleTag[];
};

interface LightGalleryMediaPlayerProps {
  list: ListType[];
}

const LightGalleryMediaPlayer: React.FC<LightGalleryMediaPlayerProps> = ({
  list,
  children,
}) => {
  const styles = useStyles();

  const preRenderedChips = useRenderArrayToStrings(
    useMemo(
      () =>
        list.map(({ tags, title }, idx) => {
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
      [list, styles.chips, styles.galleryItemTitle]
    )
  );

  return (
    <LightGallery
      autoplayFirstVideo={false}
      thumbnail={true}
      autoplay={false}
      plugins={[lgVideo, lgThumbnail, lgZoom]}
      download={false}
      zoomFromOrigin
    >
      {list?.map((gallery, idx) => (
        <>
          {gallery.embedUrl && (
            //eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={`${gallery.title}_${idx}_embed`}
              className={styles.galleryImage}
              data-src={gallery.embedUrl}
              data-poster={gallery.thumbnailUrl}
              data-sub-html={preRenderedChips?.[idx]}
            >
              {children}
            </a>
          )}
          {gallery.mediaUrl && gallery.type !== 'IMAGE' && (
            //eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={`${gallery.title}_${idx}_html5_video`}
              className={styles.galleryImage}
              data-video={`{"source": [{"src":"${gallery.mediaUrl}", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`}
              data-poster={gallery.thumbnailUrl}
              data-sub-html={preRenderedChips?.[idx]}
            >
              {children}
            </a>
          )}
          {gallery.type === 'AUDIO' && (
            //eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={`${gallery.title}_${idx}_audio`}
              className={styles.galleryImage}
              data-video={`{"source": [{"src":"${gallery.mediaUrl}", "type":"audio/mp3"}], "attributes": {"preload": false, "controls": true}}`}
              data-poster={gallery.thumbnailUrl}
              data-sub-html={preRenderedChips?.[idx]}
            >
              {children}
            </a>
          )}

          {gallery.type === 'IMAGE' && (
            <a
              key={`${gallery.title}_${idx}_image`}
              className={styles.galleryImage}
              data-src={gallery.mediaUrl}
              data-lg-size="1000-565"
              href={gallery.mediaUrl}
              data-sub-html={preRenderedChips?.[idx]}
            >
              {children}
            </a>
          )}
        </>
      ))}
    </LightGallery>
  );
};

export default LightGalleryMediaPlayer;
