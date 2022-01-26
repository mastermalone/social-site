import { Accordion, Button } from '@material-ui/core';
import React from 'react';
import useControlledAccordionStyles from './styles';

export type ImageContentType = {
  url: string;
  alt: string;
};

interface ControlledAccordionTemplateProps {
  showContent: boolean;
  onClick: () => void;
  content: ImageContentType[];
}

const ControlledAccordionTemplate: React.FC<
  ControlledAccordionTemplateProps
> = ({ onClick, showContent, content }) => {
  const styles = useControlledAccordionStyles();
  return (
    <div className={styles.root}>
      {!showContent && (
        <Button color="primary" variant="outlined" onClick={onClick}>
          Expand
        </Button>
      )}
      <Accordion expanded={showContent}>
        <div></div>
        <div className={styles.content}>
          {content.map((item, index) => (
            <div key={`${item.alt}_${index}`}>
              <img src={item.url} alt={item.alt} />
            </div>
          ))}
        </div>
      </Accordion>
      {showContent && (
        <Button color="secondary" variant="outlined" onClick={onClick}>
          Collapse
        </Button>
      )}
    </div>
  );
};

export default ControlledAccordionTemplate;
