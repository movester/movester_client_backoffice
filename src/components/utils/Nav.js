import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import LogoSrc from '../../assets/logo.png';

function Nav({ name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const MENU_LIST = [
    { title: '사용자', path: '/user', list: [['사용자 리스트', '']] },
    {
      title: '스트레칭',
      path: '/stretching',
      list: [
        ['스트레칭 리스트', ''],
        ['스트레칭 등록', '/create'],
        ['일주일 추천 리스트', '/weekly'],
        ['일주일 추천 등록', '/weekly/create'],
      ],
    },
    {
      title: '이벤트',
      path: '/event',
      list: [
        ['이벤트 리스트', ''],
        ['이벤트 등록', '/create'],
      ],
    },
  ];

  return (
    <Wrapper>
      <UserContainer>
        <LogoImage src={LogoSrc} alt="logo" />
        <UserInfo>{name}</UserInfo>
      </UserContainer>
      <MenuContainer>
        {MENU_LIST.map((item, idx) => {
          const active = idx === activeIndex ? 'active' : '';

          return (
            <MenuItem
              key={item.title}
              title={item.title}
              path={item.path}
              idx={idx}
              list={item.list}
              active={active}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </MenuContainer>
      <Logout>로그아웃</Logout>
    </Wrapper>
  );
}

Nav.propTypes = {
  name: PropTypes.string,
};

Nav.defaultProps = {
  name: '이름 없음',
};

export default Nav;

const Wrapper = styled.div`
  width: 15vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightPurple};
  position: fixed;
`;

const UserContainer = styled.div`
  padding: 10% 8%;
  width: 100%;
  height: auto;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 30px;
`;

const UserInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.darkPulple};
  border-bottom: 1px solid ${({ theme }) => theme.darkPulple};
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 25px;
  font-size: 20px;
  color: #2a1598;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
`;

const Logout = styled.button`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  background: none;
  border: none;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  transform: translate(-50%, -50%);
  margin-bottom: 10px;
`;

const MenuContainer = styled.ul`
  width: 100%;
`;
