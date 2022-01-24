import React from 'react';

import Main from '../utils/Main';
import Content from '../utils/Content';
import Button from '../utils/Button';

function Winner() {
  return (
    <Main>
      <Content title="당첨자">
        <div>당첨자 등록을 아직 하지 않았습니다.</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="등록하기" />
        </div>
      </Content>
    </Main>
  );
}

export default Winner;
