import { Accordion, AccordionActions, AccordionSummary } from '@mui/material';
import React, { useState } from 'react';
import { IAccordionContainer } from './interface';

const AccordionContainer: React.FC<IAccordionContainer> = ({ children, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handlerClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Accordion
      expanded={open}
      onChange={handlerClick}
      className={`accordion ${open ? 'active' : ''}`}>
      <AccordionSummary className="accordion__title">{title}</AccordionSummary>
      <AccordionActions className="accordion__body">{children}</AccordionActions>
    </Accordion>
  );
};

export default AccordionContainer;
