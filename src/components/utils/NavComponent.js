import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoSrc from '../../assets/logo.png';

const Wrapper = styled.div`
  float: left;
  width: 15vw;
  height: 100vh;
  background-color: #948fbf;
  position: relative;
`;

const UserContainer = styled.div`
  padding: 10% 8%;
  width: 100%;
  height: 300px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 30px;
`;

const UserInfo = styled.div`
  border-top: 1px solid #2a1598;
  border-bottom: 1px solid #2a1598;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 25px 0;
  font-size: 20px;
  color: #2a1598;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
`;

const Logout = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  transform: translate(-50%, -50%);
  margin-bottom: 10px;
`;

const NavComponent = ({ name }) => (
  <Wrapper>
    <UserContainer>
      <LogoImage src={LogoSrc} alt="logo" />
      <UserInfo>{name}</UserInfo>
    </UserContainer>
    <Logout>로그아웃</Logout>
  </Wrapper>
);

NavComponent.propTypes = {
  name: PropTypes.string,
};

NavComponent.defaultProps = {
  name: '이름 없음',
};

export default NavComponent;
