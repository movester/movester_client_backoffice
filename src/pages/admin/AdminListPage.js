import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';

import AdminList from '../../components/admin/AdminList';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import AdminDeleteModal from '../../components/common/Modal/AdminDeleteModal';

function AdminListPage() {
  const adminRank = useSelector(state => state.auth.admin?.rank);

  const [admins, setAdmins] = useState([]);
  const [deleteAdminIdx, setDeleteAdminIdx] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const offset = (page - 1) * limit;
  const [isDelete, setIsDelete] = useState(false);
  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const handleDeleteModal = () => {
    setDeleteModalOn(prev => !prev);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const getAdminList = async () => {
    try {
      const result = await axios.get('/admins');

      setAdmins([...result.data.data]);
    } catch (err) {
      setErrMsg(err.response.data.error);
      handleErrModal();
    }
  };

  useEffect(() => {
    getAdminList();
  }, []);

  useEffect(() => {
    if (isDelete) {
      getAdminList();
      setIsDelete(() => false);
    }
  }, [isDelete]);

  return (
    <>
      <AdminList
        admins={admins}
        adminRank={adminRank}
        offset={offset}
        limit={limit}
        page={page}
        setPage={setPage}
        setDeleteAdminIdx={setDeleteAdminIdx}
        handleDeleteModal={handleDeleteModal}
      />
      {deleteModalOn && (
        <AdminDeleteModal
          onClose={handleDeleteModal}
          adminIdx={deleteAdminIdx}
          setErrMsg={setErrMsg}
          handleErrModal={handleErrModal}
          setIsDelete={setIsDelete}
        />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="비밀번호 변경 실패" content={errMsg} />}
    </>
  );
}

export default AdminListPage;
