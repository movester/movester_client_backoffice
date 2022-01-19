import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentMini = ({ title, children }) => (
  <Wrapper>
    <DecoBox />
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

ContentMini.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ContentMini.defaultProps = {
  title: '제목 없음',
};

export default ContentMini;

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  background-color: #ffffff;
  border-radius: 17px;
  position: relative;
  padding: 20px 50px 20px 50px;
  margin-bottom: 80px;
  text-align: center;

  // &:last-child {
  //   margin-bottom: 0;
  // }
`;

// TODO: width값 변수로 변경(반응형)
const DecoBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.darkGray};
  border-radius: 17px;
  position: absolute;
  top: -30px;
  left: 30px;
`;

const Title = styled.p`
  // max-width: 50%;
  padding-left: 70px;
  height: auto;
  font-size: 24px;
  color: ${({ theme }) => theme.darkPulple};
  font-weight: 900;
  text-align: left;
`;
