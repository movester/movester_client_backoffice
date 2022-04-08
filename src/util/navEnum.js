const navMainEnum = {
  user: 0,
  stretching: 1,
  weekStretching: 2,
  admin: 3,
};

const adminMenuList = [
  { title: '사용자', path: '/user', list: [['사용자 리스트', '']] },
  {
    title: '스트레칭',
    path: '/stretching',
    list: [
      ['스트레칭 리스트', ''],
      ['스트레칭 등록', '/create'],
    ],
  },
  {
    title: '일주일 스트레칭',
    path: '/weekStretching',
    list: [
      ['일주일 추천 리스트', ''],
      ['일주일 추천 등록', '/create'],
    ],
  },
  {
    title: '관리자 계정',
    path: '/admin',
    list: [
      ['관리자 계정 리스트', ''],
      ['관리자 계정 등록', '/create'],
    ],
  },
];

const normalMenuList = [
  { title: '사용자', path: '/user', list: [['사용자 리스트', '']] },
  {
    title: '스트레칭',
    path: '/stretching',
    list: [
      ['스트레칭 리스트', ''],
      ['스트레칭 등록', '/create'],
    ],
  },
  {
    title: '일주일 스트레칭',
    path: '/weekStretching',
    list: [
      ['일주일 추천 리스트', ''],
      ['일주일 추천 등록', '/create'],
    ],
  },
  {
    title: '관리자 계정',
    path: '/admin',
    list: [['관리자 계정 리스트', '']],
  },
];

export { navMainEnum, adminMenuList, normalMenuList };
