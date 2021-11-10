// 나중에 색상을 사용할 때 쉽게 뽑아서 쓸 수 있도록 색상 팔레트 파일 추가

// open-color 라이브러리를 yarn으로 설치해서 사용할 수 있지만
// open-color에서 제공하는 모든 색상을 불러와 사용하는 것이 아니라 필요한 색상만 불러와서 사용할 수 있다.
// open-color 라이브러리 설치해서 사용하면 색상들이 자동 import가 되지 않는다.
// 지금처럼 파일을 만들면 자동 import가 가능하다.

// source: https://yeun.github.io/open-color/
const palette = {
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
};

export default palette;
