import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

function Loading() {
  return (
    <StyledLoading className="loading">
      <ClipLoader color="ffffff" size={150} />
    </StyledLoading>
  );
}

export default Loading;

const StyledLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: 100%;
`;
