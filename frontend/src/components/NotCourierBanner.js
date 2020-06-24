import React from 'react';
import Hero from './Hero';
import Title from './Title';

function NotCourierBanner() {
  return (
    <Hero color="primary">
      <Title type="title">
        Sorry!
      </Title>
      <Title type="subtitle">
        You are not a courier :(
      </Title>
    </Hero>
  );
}

export default NotCourierBanner;
