import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 83vw;
  height: 100vh;
  background-color: #efefef;
  display: inline-block;
  padding: 5%;
`;

const MainComponent = ({ children }) => <Wrapper>{children}</Wrapper>;

MainComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainComponent;
