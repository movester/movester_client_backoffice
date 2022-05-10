import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import AdminCreate from '../../components/admin/AdminCreate';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

import idRegex from '../../util/idRegex';
import passwordRegex from '../../util/passwordRegex';
import nameRegex from '../../util/nameRegex';

function AdminCreatePage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    password: '',
  });

  const { id, name, password } = inputs;

  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

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

    if (name === 'id') {
      setIdMessage(idRegex.test(value) ? '' : '아이디는 영문, 숫자로 조합된 5자리 이상 10자리 이하로 입력해주세요.');
    } else if (name === 'password') {
      setPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.',
      );
    } else if (name === 'name') {
      setNameMessage(
        nameRegex.test(value) ? '' : '이름은 한글, 영문, 숫자로 조합된 2자리 이상 8자리 이하로 입력해주세요.',
      );
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!idRegex.test(id) || !passwordRegex.test(password) || !nameRegex.test(name)) return;
    try {
      const { data } = await axios.post('admins/join', {
        id,
        name,
        password,
        rank: 0,
      });

      if (data.success) {
        navigate('/admin');
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <>
      <AdminCreate
        id={id}
        name={name}
        password={password}
        idMessage={idMessage}
        passwordMessage={passwordMessage}
        nameMessage={nameMessage}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="로그인 실패" content={errMsg} />}
    </>
  );
}

export default AdminCreatePage;
