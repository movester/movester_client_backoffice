import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import MenuItem from './MenuItem';
import LogoutModal from './Modal/LogoutModal';
import ConfirmModal from './Modal/ConfirmModal';

function Nav() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const name = useSelector(state => state.auth.admin?.name);
  const rank = useSelector(state => state.auth.admin?.rank);

  const navigate = useNavigate();
  const location = useLocation();

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };
  const [logoutModalOn, setLogoutModalOn] = useState(false);
  const handleLogoutModal = () => {
    setLogoutModalOn(prev => !prev);
  };
  const navEnum = {
    user: 0,
    stretching: 1,
    weekStretching: 2,
    admin: 3,
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const MENU_LIST = rank
    ? [
        { title: '사용자', path: '/user', list: [['사용자 리스트', '']] },
        {
          title: '스트레칭',
          path: '/stretching',
          list: [
            ['스트레칭 리스트', ''],
            ['스트레칭 등록', '/create'],
          ],
        },
        {
          title: '일주일 스트레칭',
          path: '/weekStretching',
          list: [
            ['일주일 추천 리스트', ''],
            ['일주일 추천 등록', '/create'],
          ],
        },
        {
          title: '관리자 계정',
          path: '/admin',
          list: [
            ['관리자 계정 리스트', ''],
            ['관리자 계정 등록', '/create'],
          ],
        },
      ]
    : [
        { title: '사용자', path: '/user', list: [['사용자 리스트', '']] },
        {
          title: '스트레칭',
          path: '/stretching',
          list: [
            ['스트레칭 리스트', ''],
            ['스트레칭 등록', '/create'],
          ],
        },
        {
          title: '일주일 스트레칭',
          path: '/weekStretching',
          list: [
            ['일주일 추천 리스트', ''],
            ['일주일 추천 등록', '/create'],
          ],
        },
        {
          title: '관리자 계정',
          path: '/admin',
          list: [['관리자 계정 리스트', '']],
        },
      ];

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
    setLogoutModalOn(false);
  }, [isAuth]);

  useEffect(() => {
    const parsingPath = () => {
      const path = location.pathname;
      const menu = path.split('/')[1]
      setActiveIndex(navEnum[menu])
    };
    parsingPath();
  }, []);

  if (window.location.pathname === '/login') return null;

  return (
    <Wrapper>
      <UserContainer>
        <Link to="/">
          <LogoImage src="/assets/images/logo.png" alt="logo" />
        </Link>
        <Link to="/admin/updatePassword">
          <UserInfo>{name}</UserInfo>
        </Link>
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
      <Logout onClick={handleLogoutModal}>로그아웃</Logout>
      {logoutModalOn && (
          <LogoutModal onClose={handleLogoutModal} setErrMsg={setErrMsg} handleErrModal={handleErrModal} />
      )}
      {errModalOn && (
          <ConfirmModal onClose={handleErrModal} title="로그아웃 실패" content={errMsg} />
      )}
    </Wrapper>
  );
}

export default React.memo(Nav);

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
