import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MenuItem from './MenuItem';
import LogoSrc from '../../assets/logo.png';
import { fetchAdminLogout } from '../../store/admin/adminThunk';

// NavLink 적용
// 이벤트 관련 네비게이션 X

function Nav() {
  const { admin } = useSelector(({ admin }) => admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    {
      title: '관리자 계정',
      path: '/admin',
      list: [
        ['관리자 계정 리스트', ''],
        ['관리자 계정 등록', '/create'],
        ['비밀번호 변경', '/update'],
      ],
    },
  ];

  const onLogout = () => {
    try {
      dispatch(fetchAdminLogout()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!admin) {
      navigate('/login');
    }
  }, [admin]);

  return (
    <Wrapper>
      <UserContainer>
        <LogoImage src={LogoSrc} alt="logo" />
        <UserInfo>{admin?.name || '이름없음'}</UserInfo>
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
      <Logout onClick={onLogout}>로그아웃</Logout>
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
