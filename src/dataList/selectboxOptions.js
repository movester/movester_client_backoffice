const selectboxOptions = {
  userListOptions: [
    { value: 'JOIN', name: '번호순' },
    { value: 'ATTEND_POINT', name: '출석 포인트순' },
    // { value: 'email', name: '이메일' },
    // { value: 'kakao_id', name: '카카오아이디' },
  ],
};

const userListOptions = [
  { value: 'name', name: '이름' },
  { value: 'email', name: '이메일' },
  { value: 'gender', name: '성별' },
  { value: 'job', name: '직업' },
];

const stretchingMainCatrgory = [
  { value: 'main_bodypart', name: '부위-대분류' },
  { value: 'face', name: '얼굴 / 머리' },
  { value: 'neck', name: '목 / 어깨' },
  { value: 'arm', name: '팔 / 손목/ 손' },
  { value: 'efect', name: '도구' },
];

const stretchingSubCatrgory = [
  { value: 'sub_bodypart', name: '부위-소분류' },
  { value: 'leg', name: '무릎 / 다리' },
  { value: 'foot', name: '발목 / 발' },
];
const stretchingPosture = [
  { value: 'posture', name: '자세' },
  { value: 'sit', name: '앉아서' },
  { value: 'chairSit', name: '의자에 앉아서' },
  { value: 'stand', name: '서서' },
  { value: 'layDown', name: '누워서' },
  { value: 'kneelDown', name: '엎드려서' },
];

const stretchingEffect = [
  { value: 'Effect', name: '효과' },
  { value: 'turtleNeck', name: '거묵목 개선' },
  { value: 'roundSholder', name: '라운드숄더 개선' },
  { value: 'painRelief', name: '통증 완화' },
  { value: '1', name: '혈액순환 촉진' },
  { value: '2', name: '근강화' },
  { value: '3', name: '근이완' },
  { value: '4', name: '바른자세' },
];
const stretchingTool = [
  { value: '0', name: '도구' },
  { value: '1', name: '폼롤러' },
  { value: '2', name: '마사지 볼' },
  { value: '3', name: '라텍스 밴드' },
  { value: '4', name: '요가 링' },
  { value: '5', name: '짐볼' },
];

const stretchingSearchOptions = [
  { value: 'title', name: '제목' },
  { value: 'taget', name: '부위' },
  { value: 'effect', name: '효과' },
  { value: 'posture', name: '자세' },
];

const eventListSearch1 = [
  { value: 'name', name: '당첨자 유무' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

const eventListSearch2 = [
  { value: 'name', name: '당첨자 유무' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

export {
  userListOptions,
  stretchingMainCatrgory,
  stretchingSubCatrgory,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
  stretchingSearchOptions,
  eventListSearch1,
  eventListSearch2,
  selectboxOptions,
};
