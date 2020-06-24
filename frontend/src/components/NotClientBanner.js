import React from 'react';
import Hero from './Hero';
import Title from './Title';

function NotClientBanner() {
  return (
    <Hero color="primary">
      <Title type="title">
        Sorry!
      </Title>
      <Title type="subtitle">
        You are not a client :(
      </Title>
    </Hero>
  );
}

export default NotClientBanner;
