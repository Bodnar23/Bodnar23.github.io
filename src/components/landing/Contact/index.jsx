import React from 'react';
import { Container } from 'components/common';
import contact from './unnamed.jpeg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Anastasiia and I’m a Frontend!" />
    </Thumbnail>
  </Wrapper>
);
