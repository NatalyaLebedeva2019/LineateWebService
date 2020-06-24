import React from 'react';
import styled from '@emotion/styled';

export default function Loading() {
  return (
    <LoadingContainer>
      <img src="/icons/inkling_spinner.gif" alt="loading" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled('div')({
  maxWidth: '500px',
  margin: 'auto',
  marginTop: '10%',
});
