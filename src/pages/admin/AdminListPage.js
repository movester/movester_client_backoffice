import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';

import AdminList from '../../components/admin/AdminList';

function AdminListPage() {
  const adminRank = useSelector(state => state.auth.admin?.rank);

  const [admins, setAdmins] = useState([]);
  const [deleteAdminIdx, setDeleteAdminIdx] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const offset = (page - 1) * limit;

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
  }, [deleteModalOn]);

  return (
    <AdminList
      admins={admins}
      adminRank={adminRank}
      offset={offset}
      limit={limit}
      page={page}
      setPage={setPage}
      deleteAdminIdx={deleteAdminIdx}
      setDeleteAdminIdx={setDeleteAdminIdx}
      deleteModalOn={deleteModalOn}
      handleDeleteModal={handleDeleteModal}
      errModalOn={errModalOn}
      handleErrModal={handleErrModal}
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    />
  );
}

export default AdminListPage;
