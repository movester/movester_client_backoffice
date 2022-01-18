import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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

  &.strong {
    font-weight: 800;
  }
`;

function MenuItem({ title, list, active, setActiveIndex, idx }) {
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(idx);
    setActiveSubIndex(0);
  };

  const handleLink = (_, subIndex) => {
    setActiveSubIndex(subIndex);
  };

  return (
    <MenuContainer className={active}>
      <Menu onClick={handleClick}>{title}</Menu>
      <SubMenu className={active}>
        {list?.map((menu, subIndex) => (
          <Li className={activeSubIndex === subIndex ? 'strong' : ''} onClick={e => handleLink(e, subIndex)}>
            {menu}
          </Li>
        ))}
      </SubMenu>
    </MenuContainer>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.string,
  setActiveIndex: PropTypes.func,
  idx: PropTypes.number,
};

MenuItem.defaultProps = {
  title: '이름 없음',
  list: ['a', 'b'],
  active: null,
  setActiveIndex: () => {},
  idx: 0,
};

export default MenuItem;
