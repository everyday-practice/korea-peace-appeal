# 설명

## 1. HTML & JS

- 총 4개의 html 파일이 있습니다.
- 권장 route:
  - `/`
  - `/faq`
  - `/action`
  - `/about`
- 각 html 파일마다 상응하는 js 파일이 있습니다.
  - e.g. `faq.html` => `faq.js`
- common.js 파일은 모든 html 파일이 공유합니다.

## 2. Styles

- `normalize.css`
  - Cross-browser Stability 위한 미니멀 스타일 통일 코드.
- `style.css`
  - 커스텀 CSS (편의상 파일 하나에 모든 스타일을 정의했습니다)

## 3. libraries

- npm을 써도 되는지 불확실해서 minified source file들을 가져다 모아놨습니다.
- css-vars-ponyfill
  - IE에서 CSS Variable을 사용할 수 있게 해주는 라이브러리입니다.
  - https://github.com/jhildenbiddle/css-vars-ponyfill
- swiper (v4)
  - index.html에서 사용되는 스와이핑 사진 갤러리 라이브러리입니다.
  - IE11 compatibility를 위해서 v4를 사용합니다. (최신버전은 IE 서포트 안함)
  - swiper.css 파일도 같이 load해야 합니다.
  - https://github.com/nolimits4web/swiper/tree/Swiper4
- choices
  - Sign-form에서 사용되는 select 라이브러리입니다.
  - choices.css 파일도 같이 load해야 합니다.
  - https://github.com/jshjohnson/Choices
- ofi
  - IE에서 object-fit CSS property를 사용하기 위한 polyfill입니다.
  - https://github.com/fregante/object-fit-images

## 4. 그외 Assets

- `/fonts`
- `/images`

## 랜딩 페이지 graph display 관련하여

- 서명자 합계가 초반에는 적어서 이미지 갤러리로 대체한다고 들었습니다. 따라서 우선은 이미지 갤러리를 넣어두었고, 필요하실때 바꾸시면 됩니다!
- Graph로 변경 방법은 index.html에 해당 파트를 보시면 설명돼있습니다.

## Client-side routing

- 서명하기, faq, action에서 History API를 사용한 client-side routing이 구현돼있습니다. (hash에 반영)
- 서명하기, action 팝업에서 닫기 버튼을 누르면 hash가 없어진 route로 programmatically navigate 되는데 관련 코드는 각 페이지 js 파일에 있습니다. 각 페이지 path를 바꾸시게 된다면 `history.pushState()` function의 3번째 파라미터를 수정하셔야 합니다.

## 수정이하실 Link 요소

- 각종 stylesheet와 font, image 등의 asset 링크는 relative path로 설정해두었어요! 찾아서 재설정 부탁드립니다. ("`./`" global search 하시면 한번에 나올 거에요.)

- `<a>` 태그 href 값들도 변경해야 합니다.

- 앞서 설명드린는 `history.pushState()`의 파라미터도 변경해야 합니다.
