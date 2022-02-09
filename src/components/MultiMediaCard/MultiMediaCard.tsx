import { Box, Chip, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export type ListingRoleTag = {
  id: number;
  name: string;
  __typename: string;
};

interface MultiMediaCardTemplateProps {
  type: 'IMAGE' | 'AUDIO' | 'VIDEO';
  mediaThumbnail: string;
  mediaUrl: string;
  tags: ListingRoleTag[];
  title: string;
}

const MultiMediaCard: React.FC<MultiMediaCardTemplateProps> = ({
  mediaThumbnail,
  mediaUrl,
  tags,
  title,
  type,
}) => {
  const styles = useStyles();
  return (
    <Box>
      <Box>
        {type === 'IMAGE' && <img src={mediaThumbnail} alt="" />}
        {type === 'AUDIO' && (
          <audio controls>
            <source type="audio/meg" src={mediaUrl} />
          </audio>
        )}
        {type === 'VIDEO' && (
          <video
            className={styles.video}
            controls={true}
            poster={mediaThumbnail}
          >
            <source type="video/mp4" src={mediaUrl} />
          </video>
        )}
      </Box>
      <Box className={styles.cardInfo}>
        <Box className={styles.chips}>
          {tags.length &&
            tags.map((tag, idx) => (
              <Chip
                color="primary"
                label={tag.name}
                variant="default"
                key={`${tag.name}_${idx}`}
              />
            ))}
        </Box>
        <Box>
          <Typography variant="body1">{title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MultiMediaCard;
