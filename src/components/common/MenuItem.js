import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuItem({ title, path, list, active, setActiveIndex, idx }) {
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const parsingPath = () => {
      const path = location.pathname;
      const tempSubMenu = path.split('/')[2];
      const subMenu = tempSubMenu === 'create' ? 1 : 0;
      setActiveSubIndex(subMenu);
    };
    parsingPath();
  }, []);

  const handleClick = (_, menuPath) => {
    setActiveIndex(idx);
    setActiveSubIndex(0);
    navigate(menuPath);
  };

  const handleLink = (_, subIndex, subPath) => {
    setActiveSubIndex(subIndex);
    navigate(`${path}${subPath}`);
  };

  return (
    <MenuContainer className={active}>
      <Menu onClick={e => handleClick(e, path)}>{title}</Menu>
      <SubMenu className={active}>
        {list?.map(([menu, subPath], subIndex) => (
          <Li
            key={menu}
            className={activeSubIndex === subIndex ? 'active' : ''}
            onClick={e => handleLink(e, subIndex, subPath)}
          >
            {menu}
          </Li>
        ))}
      </SubMenu>
    </MenuContainer>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.array).isRequired,
  active: PropTypes.string.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};

export default React.memo(MenuItem);

const MenuContainer = styled.li`
  &.active {
    background-color: #615b5b;
  }
`;

const Menu = styled.menu`
  position: relative;
  padding: 15px 15px 15px 45px;
  margin: 0;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  line-height: 16px;
`;

const SubMenu = styled.ul`
  height: 0;
  background-color: #c4c4c4;
  overflow: hidden;

  &.active {
    height: auto;
  }
`;

const Li = styled.li`
  display: block;
  text-decoration: none;
  padding: 12px;
  padding-left: 42px;
  cursor: pointer;

  &.active {
    font-weight: 800;
  }
`;
