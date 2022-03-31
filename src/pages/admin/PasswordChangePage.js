import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import PasswordChange from '../../components/admin/PasswordChange';

function PasswordChangePage() {
  const adminIdx = useSelector(state => state.auth.admin?.adminIdx);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    beforePassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { beforePassword, newPassword, confirmPassword } = inputs;

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`admins/password/${adminIdx}`, {
        beforePassword,
        newPassword,
        confirmPassword,
      });

      if (data.success) {
        navigate('/');
      }
    } catch (err) {
      setInputs({
        beforePassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <PasswordChange
      beforePassword={beforePassword}
      newPassword={newPassword}
      confirmPassword={confirmPassword}
      onChange={onChange}
      onSubmit={onSubmit}
      errModalOn={errModalOn}
      handleErrModal={handleErrModal}
      errMsg={errMsg}
    />
  );
}

export default PasswordChangePage;
