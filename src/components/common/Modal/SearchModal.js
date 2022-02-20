import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import SelectBox from '../elements/SelectBox';
import ListTable from '../elements/ListTable';
import ListTableNumbering from '../elements/ListTableNumbering';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { stretchingListHeaders } from '../../../dataList/listTableHeaders';
import { stretchingMainCatrgory, stretchingSubCatrgory, stretchingPosture } from '../../../dataList/selectboxOptions';

const users = [
  {
    id: '1333',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '333',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '22',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '1',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '4',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '5',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '6',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '7',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '8',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '9',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
];

// , onClose
function SearchModal({ title, onClose }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>{title}</Title>
          <StyledClose onClick={onClose}>X</StyledClose>
          <StyledListSearch>
            <SelectBox options={stretchingMainCatrgory} />
            <SelectBox options={stretchingSubCatrgory} />
            <SelectBox options={stretchingPosture} />
            <Input />
            <Button type="search" text="검색" />
          </StyledListSearch>
          <ListTable headers={stretchingListHeaders} columns={users} />
          <ListTableNumbering />
        </Content>
      </Container>
    </ModalPortal>
  );
}

SearchModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

SearchModal.defaultProps = {
  title: '',
  onClose: () => {},
};

export default SearchModal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 800px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  position: relative;
  li {
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const StyledListSearch = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    padding: 5px 30px 5px 10px;
    width: 30%;
    border-radius: 10px;
    outline: 0 none;
    border: 2px solid #615b5b;
    margin-right: 20px;
  }
  input:focus {
    outline: 1px solid ${({ theme }) => theme.darkPulple};
  }
  select {
    margin-right: 20px;
  }
`;

const StyledClose = styled.p`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;
