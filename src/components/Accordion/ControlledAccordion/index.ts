import { useCallback, useState } from 'react';
import withHooks, { mapHooksToProps } from '../../../library/withHooks';
import ControlledAccordionTemplate, {
  ImageContentType,
} from './ControlledAccordion';

const hooks = mapHooksToProps(() => {
  const [show, setShow] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const content: ImageContentType[] = [
    {
      url: ' https://place-puppy.com/200x200',
      alt: 'Place puppy',
    },
    {
      url: ' http://placekitten.com/200/200',
      alt: 'Place Kitten',
    },
    {
      url: ' https://place-puppy.com/200x200',
      alt: 'Place puppy',
    },
    {
      url: ' http://placekitten.com/200/200',
      alt: 'Place Kitten',
    },
  ];
  return {
    showContent: show,
    onClick,
    content,
  };
});

const ControlledAccordion = withHooks(ControlledAccordionTemplate, hooks);

export default ControlledAccordion;
