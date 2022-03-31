import React from 'react';
import PropTypes from 'prop-types';
import Main from '../common/Main';
import Content from '../common/Content';
import ProfileInput from '../common/elements/ProfileInput';
import StyledButton from '../common/elements/StyledButton';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function PasswordChange({
  beforePassword,
  newPassword,
  confirmPassword,
  onChange,
  onSubmit,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  return (
    <Main>
      <Content title="비밀번호 변경" >
        <ProfileInput text="현재 비밀번호" name="beforePassword" value={beforePassword} onChange={onChange} />
        <ProfileInput text="새 비밀번호" name="newPassword" value={newPassword} onChange={onChange} />
        <ProfileInput text="비밀번호 확인" name="confirmPassword" value={confirmPassword} onChange={onChange} />
        <StyledButton type="submit" onClick={onSubmit}>비밀번호 변경</StyledButton>
      </Content>
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="비밀번호 변경 실패" content={errMsg} />}
      </ModalPortal>
    </Main>
  );
}

PasswordChange.propTypes = {
  beforePassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default PasswordChange;
