import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInputs from '../../hooks/useInputs';
import { fetchEditPassword } from '../../store/admin/adminThunk';
import Button from '../common/elements/Button';
import Main from '../common/Main';
import UpdatePasswordModal from '../common/Modal/UpdatePasswordModal';

function UpdatePassword() {
  const { isEdited, admin, errorMessage } = useSelector(({ admin }) => admin);

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [{ beforePassword, newPassword, confirmPassword }, onChange, reset] = useInputs({
    beforePassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleToggle = () => setIsEdit(!isEdit);

  const handleModal = () => setIsModal(!isModal);

  const onClick = () => {
    dispatch(fetchEditPassword({ adminIdx: admin.adminIdx, beforePassword, newPassword, confirmPassword })).unwrap();
    reset();
  };

  useEffect(() => {
    if (isEdited) {
      handleModal();
    }
  }, [isEdited]);

  return (
    <Main>
      <div>비밀번호 변경</div>
      <hr />
      {isEdit ? (
        <>
          <div>
            <span>현재 비밀번호</span>
            <input type="password" name="beforePassword" value={beforePassword} onChange={onChange} />
          </div>
          <div>
            <span>새 비밀번호</span>
            <input type="password" name="newPassword" value={newPassword} onChange={onChange} />
          </div>
          <div>
            <span>비밀번호 확인</span>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} />
          </div>
          <Button text="비밀번호 변경" click={onClick} />
        </>
      ) : (
        <Button text="비밀번호 변경" click={handleToggle} />
      )}
      {isModal && <UpdatePasswordModal title="비밀번호 변경" content={errorMessage} onClose={handleModal} />}
    </Main>
  );
}

export default UpdatePassword;
