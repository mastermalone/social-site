import withHooks, { mapHooksToProps } from '../../library/withHooks';

import MultiMediaCardTemplate, { ListingRoleTag } from './MultiMediaCard';

interface MultiMediaCardProps {
  type: 'IMAGE' | 'AUDIO' | 'VIDEO';
  mediaThumbnail: string;
  mediaUrl: string;
  tags: ListingRoleTag[];
  title: string;
}

const hooks = mapHooksToProps(
  ({ mediaThumbnail, mediaUrl, tags, title, type }: MultiMediaCardProps) => {
    return {
      mediaThumbnail,
      mediaUrl,
      tags,
      title,
      type,
    };
  }
);

const MultiMediaCard = withHooks(MultiMediaCardTemplate, hooks);

export default MultiMediaCard;
