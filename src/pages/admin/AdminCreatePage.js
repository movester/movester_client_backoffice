import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import AdminCreate from '../../components/admin/AdminCreate';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function AdminCreatePage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    password: '',
  });

  const { id, name, password } = inputs;

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
      <AdminCreate id={id} name={name} password={password} onChange={onChange} onSubmit={onSubmit} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="로그인 실패" content={errMsg} />}
    </>
  );
}

export default AdminCreatePage;
