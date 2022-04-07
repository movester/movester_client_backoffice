import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import S3 from 'react-aws-s3';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../services/defaultClient';

import Loading from '../../components/common/elements/Loading';
import UpdateStretching from '../../components/stretching/UpdateStretching';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import s3Config from '../../config/s3';

function UpdateStretchingPage() {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);

  const [stretching, setStretching] = useState([]);

  const [inputs, setInputs] = useState({
    title: '',
    youtubeUrl: '',
  });

  const [selects, setSelects] = useState({
    mainBody: '',
    subBody: '',
    tool: '',
    posture1: '',
    posture2: '',
    posture3: '',
    effect1: '',
    effect2: '',
    effect3: '',
  });

  const { title, youtubeUrl } = inputs;
  const { mainBody, subBody, tool, posture1, posture2, posture3, effect1, effect2, effect3 } = selects;
  const [contents, setContents] = useState('');
  const handleEditor = html => {
    setContents(html);
  };

  const [image, setImage] = useState('');
  const handleImage = fileName => {
    setImage(fileName);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onInputChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSelectChange = e => {
    const { value, name } = e.target;

    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const handleFileInput = e => {
    const file = e.target.files[0];
    const newFileName = uuidv4();
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
        const ReactS3Client = new S3(s3Config);
        ReactS3Client.uploadFile(file, newFileName).catch(() => {
          alert('업로드 실패');
        });
      } else {
        alert('JPEG, PNG, JPG 파일만 업로드 가능합니다.');
      }
    }
    handleImage(newFileName);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const filterValidValue = arr => arr.filter(v => v);

    try {
      const { data } = await axios.put('stretchings', {
        stretchingIdx: idx,
        title,
        contents,
        mainBody: +mainBody,
        subBody: +subBody,
        tool: +tool ? +tool : null,
        youtubeUrl,
        image,
        postures: filterValidValue([+posture1, +posture2, +posture3]),
        effects: filterValidValue([+effect1, +effect2, +effect3]),
      });
      if (data.success) {
        navigate(`/stretching/${idx}`);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  useEffect(() => {
    const getStretching = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/stretchings/${idx}`);
        const result = res.data.data;
        setStretching(result);
        setInputs({
          title: result.title,
          youtubeUrl: result.youtube_url,
        });
        setImage(result.image);
        setSelects({
          mainBody: result.mainBody,
          subBody: result.subBody,
          tool: result.tool,
          posture1: result.posture[0],
          posture2: 1,
          posture3: 2,
          effect1: 1,
          effect2: 1,
          effect3: 1,
        });
        setContents(result.contents);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getStretching();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <UpdateStretching
        stretching={stretching}
        title={title}
        youtubeUrl={youtubeUrl}
        image={image}
        contents={contents}
        handleEditor={handleEditor}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        mainBody={mainBody}
        subBody={subBody}
        tool={tool}
        posture1={posture1}
        posture2={posture2}
        posture3={posture3}
        effect1={effect1}
        effect2={effect2}
        effect3={effect3}
        onSelectChange={onSelectChange}
        handleFileInput={handleFileInput}
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default UpdateStretchingPage;
