// affirmation
export const MAX_PROMISE_COUNT = 9;
export const RE_TRANSCRIBE_TIME_MS = 4 * 60 * 60 * 1000;

export const NOTICE_MESSAGE = {
  ENTER_BEFORE_MAX: `다짐은 ${MAX_PROMISE_COUNT}개까지만 작성해주세요.`,
  ENTER_PROMISE: '되새기고 싶은 다짐을 자유롭게 작성해주세요.',
  WELL_DONE: '잘하셨어요.',
};

// board
export const DUMMY_BOARD_DATA = [
  {
    name: '운동',
    srcArr: [
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
    ],
  },
  {
    name: '동',
    srcArr: [
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
    ],
  },
  {
    name: '운',
    srcArr: [
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'https://picsum.photos/200',
    ],
  },
];
export const DUMMY_NAVER_IMAGE_LIST = [
  {
    title: '네이버, 1분기 영업익 3305억원…전년比 9.5% 증가',
    link: 'http://imgnews.naver.net/image/5038/2023/05/08/0000802528_001_20230508084401077.png',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5038/2023/05/08/0000802528_001_20230508084401077.png',
    sizeheight: '290',
    sizewidth: '518',
  },
  {
    title: '네이버웹소설 - 나무위키 네이버웹소설',
    link: 'https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg',
    thumbnail:
      'https://search.pstatic.net/sunny/?type=b150&src=https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg',
    sizeheight: '290',
    sizewidth: '298',
  },
  {
    title: '네이버광고 : 케이컬쳐',
    link: 'http://shop1.phinf.naver.net/20210806_288/1628232891582AjJpU_PNG/29368737301795632_397371394.png',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://shop1.phinf.naver.net/20210806_288/1628232891582AjJpU_PNG/29368737301795632_397371394.png',
    sizeheight: '334',
    sizewidth: '334',
  },
  {
    title: '네이버 블로그 - Naver Blog on the App Store ‎네이버 블로그 - Naver Blog',
    link: 'https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/4c/fc/5a/4cfc5a53-7860-0e0e-e3ea-b19e7151635c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/320x0w.png',
    thumbnail:
      'https://search.pstatic.net/sunny/?type=b150&src=https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/4c/fc/5a/4cfc5a53-7860-0e0e-e3ea-b19e7151635c/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/320x0w.png',
    sizeheight: '320',
    sizewidth: '320',
  },
  {
    title: '네이버 "인터넷은행 진출 계획 없다"',
    link: 'http://imgnews.naver.net/image/079/2019/09/20/0003271963_001_20190920143117624.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/079/2019/09/20/0003271963_001_20190920143117624.jpg',
    sizeheight: '261',
    sizewidth: '466',
  },
  {
    title: '전 YS 주치의 네이버 고소…"왜 내 자료 맘대로 삭제해?"',
    link: 'http://imgnews.naver.net/image/029/2023/06/01/0002804460_001_20230601170301045.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/029/2023/06/01/0002804460_001_20230601170301045.jpg',
    sizeheight: '258',
    sizewidth: '540',
  },
  {
    title: '[마소캠퍼스]디지털 마케팅 개론 [17] 클릭 몇 번으로 트랜드가 뿅네이버 데이터 랩',
    link: 'http://post.phinf.naver.net/MjAxNjEyMjJfOTQg/MDAxNDgyMzkzMTQyMzc3.YizpqU5vufy7kIc0CeKMIipmCopY3r3S8Y-Wn02CVNYg.xA_E_NTT4nlzcnT5t6WagQEjEr3-4xXuWzCteOv8k5kg.JPEG/IUsvymFpgU13Cz-CKbZuWOTpaRgE.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://post.phinf.naver.net/MjAxNjEyMjJfOTQg/MDAxNDgyMzkzMTQyMzc3.YizpqU5vufy7kIc0CeKMIipmCopY3r3S8Y-Wn02CVNYg.xA_E_NTT4nlzcnT5t6WagQEjEr3-4xXuWzCteOv8k5kg.JPEG/IUsvymFpgU13Cz-CKbZuWOTpaRgE.jpg',
    sizeheight: '244',
    sizewidth: '244',
  },
  {
    title: '네이버, 제25기 주주총회 종료… 6개 안건 모두 통과',
    link: 'http://imgnews.naver.net/image/5291/2024/03/29/0001988743_001_20240329103803544.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5291/2024/03/29/0001988743_001_20240329103803544.jpg',
    sizeheight: '239',
    sizewidth: '600',
  },
  {
    title: "'몬스터패스', 네이버 예약 서비스 공식 협력사",
    link: 'http://imgnews.naver.net/image/018/2019/08/23/0004452234_001_20190823153405927.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/018/2019/08/23/0004452234_001_20190823153405927.jpg',
    sizeheight: '298',
    sizewidth: '477',
  },
  {
    title: '"한국정부 \'멍\'" VS "선동하지마", \'네이버 라인 사태\' 정치권 논쟁으로',
    link: 'http://imgnews.naver.net/image/5286/2024/05/12/20240512500191_20240512145402260.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5286/2024/05/12/20240512500191_20240512145402260.jpg',
    sizeheight: '266',
    sizewidth: '512',
  },
  {
    title: '네이버클라우드 - 나무위키 네이버클라우드',
    link: 'https://i.namu.wiki/i/bU6zn1E4EEXohI_IoACKgN5wVeG6wRd8z_BIRU11ct85BtF2_1r84raJsK8l6ZAl5Eo_yZ0akD59dt3xEP6_JQ.svg',
    thumbnail:
      'https://search.pstatic.net/sunny/?type=b150&src=https://i.namu.wiki/i/bU6zn1E4EEXohI_IoACKgN5wVeG6wRd8z_BIRU11ct85BtF2_1r84raJsK8l6ZAl5Eo_yZ0akD59dt3xEP6_JQ.svg',
    sizeheight: '54',
    sizewidth: '500',
  },
  {
    title: '네이버 예약 - 나무위키',
    link: 'https://i.namu.wiki/i/kRvC2DDLjhPyf1_rEi6G4Y4NHev7GWAgKWXlLoT5lW50wRmeRgSmrTfQDk8TgkpS8i3f5sRMbMwyTUDWSO_LnQ.webp',
    thumbnail:
      'https://search.pstatic.net/sunny/?type=b150&src=https://i.namu.wiki/i/kRvC2DDLjhPyf1_rEi6G4Y4NHev7GWAgKWXlLoT5lW50wRmeRgSmrTfQDk8TgkpS8i3f5sRMbMwyTUDWSO_LnQ.webp',
    sizeheight: '150',
    sizewidth: '395',
  },
  {
    title: "방통위, 네이버 '전기통신사업법 위반' 사실조사 착수",
    link: 'http://imgnews.naver.net/image/5227/2023/09/25/0000554525_001_20230925145401451.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5227/2023/09/25/0000554525_001_20230925145401451.jpg',
    sizeheight: '281',
    sizewidth: '500',
  },
  {
    title: '대도시 소비자들, 쿠팡보다 네이버에서 더 많이 쇼핑',
    link: 'http://imgnews.naver.net/image/5399/2023/03/27/0000009102_001_20230327182401922.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5399/2023/03/27/0000009102_001_20230327182401922.jpg',
    sizeheight: '284',
    sizewidth: '500',
  },
  {
    title: '네이버, 클로바 케어콜에 목적성 안부 대회 기능 도입',
    link: 'http://imgnews.naver.net/image/5746/2023/01/09/0000087007_001_20230109145803206.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5746/2023/01/09/0000087007_001_20230109145803206.jpg',
    sizeheight: '269',
    sizewidth: '397',
  },
  {
    title: '㈜즐거운 ‘네이버페이 포인트 쿠폰’ 출시',
    link: 'http://imgnews.naver.net/image/421/2021/12/14/0005784109_001_20211214170101661.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/421/2021/12/14/0005784109_001_20211214170101661.jpg',
    sizeheight: '270',
    sizewidth: '537',
  },
  {
    title: '[해설]네이버, B2B 조직개편 나서는 배경은…"글로벌 경쟁력 UP"',
    link: 'http://imgnews.naver.net/image/030/2022/10/30/0003055227_001_20221030181503335.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/030/2022/10/30/0003055227_001_20221030181503335.jpg',
    sizeheight: '297',
    sizewidth: '352',
  },
  {
    title: "최수연 대표의 '글로벌 네이버'… 현재 위치는",
    link: 'http://imgnews.naver.net/image/417/2023/03/28/0000907418_002_20230328132903028.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/417/2023/03/28/0000907418_002_20230328132903028.jpg',
    sizeheight: '308',
    sizewidth: '420',
  },
  {
    title: "네이버, '인플루언서 서비스홈' 새단장...'한층 편리하게!'",
    link: 'http://imgnews.naver.net/image/5291/2023/02/16/0001724845_001_20230216111603225.png',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5291/2023/02/16/0001724845_001_20230216111603225.png',
    sizeheight: '296',
    sizewidth: '357',
  },
  {
    title: '올해 내가 가장 많이 본 작품은? 네이버웹툰, 이용자별 2022 리포트 제공',
    link: 'http://imgnews.naver.net/image/5575/2022/12/12/0000338625_001_20221212112002593.jpg',
    thumbnail:
      'https://search.pstatic.net/common/?type=b150&src=http://imgnews.naver.net/image/5575/2022/12/12/0000338625_001_20221212112002593.jpg',
    sizeheight: '281',
    sizewidth: '500',
  },
];
export const MAX_BOARD_CATEGORY_COUNT = 4;
export const MAX_IMAGE_PER_CATEGORY = 6;
export const GROUP_SIZE_PER_CATEGORY_LENGTH = {
  0: [],
  1: [[100]],
  2: [
    [50, 50],
    [100, 100],
  ],
  3: [
    [33, 33, 33],
    [100, 50, 50],
  ],
  4: [
    [50, 50, 50, 50],
    [60, 40, 40, 60],
    [100, 33, 33, 33],
  ],
};
export const FLEX_DIRECTION_OPTION = [
  'flex-row',
  'flex-row-reverse',
  //   'flex-col',
  //   'flex-col-reverse',
];

export const FLEX_JUSTIFY_OPTIONS = [
  'justify-between',
  'justify-around',
  'justify-evenly',
  'justify-end',
  '',
];
