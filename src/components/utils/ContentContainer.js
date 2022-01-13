import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 17px;
  position: relative;
  padding: 6% 3% 3% 3%;
`;

// TODO: width값 변수로 변경(반응형)
const DecoBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 17px;
  position: absolute;
  top: -30px;
  left: 30px;
`;

const Title = styled.div`
  max-width: 50%;
  height: auto;
  font-size: 24px;
  color: #2a1598;
  font-weight: 900;
  position: absolute;
  top: 16px;
  left: 104px;
`;

const ContentContainer = ({ title, children }) => (
  <Wrapper>
    <DecoBox />
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ContentContainer.defaultProps = {
  title: '제목 없음',
};

export default ContentContainer;
