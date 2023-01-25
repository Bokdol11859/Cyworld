
<p align="center" >
<a href="#" align="center"><img width="1298" alt="Screen Shot 2023-01-25 at 2 35 02 PM" src="https://user-images.githubusercontent.com/80627536/214488028-d48d891b-1570-41c8-b923-fe6c9ed3cbf4.png"></a>
</p>
<h1 align="center">
  Next.js로 추억의 싸이월드 구현하기 <br/>  <br/> 
  <div style="display: flex; gap: 10px; align-items: center; justify-content: center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"/>
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <div/>

</h1>

## 목차

- [서비스 소개](#서비스-소개)
- [수상 기록](#수상-기록)
- [활용 기술](#활용-기술)
- [상세 페이지](#상세-페이지)

## 서비스 소개

넘블에서 개최했던 "Next.js로 추억의 싸이월드 구현하기"에 참가하여 만들었던 프로젝트입니다. 오래된 서비스인 싸이월드를 최신 기술스택들로 구현을 해보며 최신 기술들의 편리함을 깨닫고, REST API가 아닌 GraphQL을 통해 백엔드와의 통신을 하여 평소에 자주 겪었던 언더/오버페칭의 문제를 해결할 수 있었습니다. 

## 수상 기록
<img width="1295" alt="Screen Shot 2023-01-25 at 2 50 44 PM" src="https://user-images.githubusercontent.com/80627536/214490098-c61aed06-08f6-43fc-a92a-2f07c4d74d95.png">


## 활용 기술
  
- **[Typescript]()**: 자바스크립트의 문법에 타입 지정을 할 수 있도록 만들어진 언어로, 자바스크립트의 자유도와 타입 언어의 안정성까지 갖춘 언어입니다. 해커톤이라는 짧은 시간동안 최대한 오류를 방지하여 완성도를 높히고, 타입스크립트를 통한 타입 추론의 도움을 받기 위해 사용했습니다.  
  
- **[NextJS]()**: ReactJS를 더욱 간편하게 사용하기 위해 만들어진 프레임워크로, 추가적인 설정 없이도 기본적으로 ServerSideRendering이 가능한 것이 장점입니다. 또한, 외부 라이브러리의 도움 없이도 자동으로 파일 구조 기반 라우팅이 가능하여 직관적인 폴더 구조를 구축할 수 있습니다. 일기 페이지같은 경우 데이터의 변경이 잦지 않기 때문에 SSG/ISR을 추후에 적용하고자 NextJS를 도입하게 되었습니다. 
  
- **[Styled-Component]()**: CSS 파일 없이 자바스크립트 안에서 CSS 작업을 하기 위한 라이브러리로, 서비스 스타일링의 대부분을 Styled-Component를 통해서 작업했습니다. Props 전달이 가능하기 때문에 상태에 따른 스타일링을 더욱 간편하게 처리할 수 있습니다.
  
- **[Axios]()**: 백엔드와 통신을 하기 위한 HTTP 클라이언트 라이브러리로, 자바스크립트 내장 라이브러리인 fetch 함수엔 없는 인터셉터와 더욱 간편한 에러 캐치를 위해 사용했습니다.

## 상세 페이지

### 1. 메인 페이지

<img width="1067" alt="Screen Shot 2023-01-25 at 2 53 56 PM" src="https://user-images.githubusercontent.com/80627536/214490732-c82ecefa-fb1f-4a98-ae51-6587ee020825.png">

<br />
<br />

#### 1-1. 오늘의 기분 표현

<img width="273" alt="Screen Shot 2023-01-25 at 2 54 52 PM" src="https://user-images.githubusercontent.com/80627536/214490870-bcc2f70d-47a5-4e56-8a85-24eb98c4295c.png">

<br />
<br />

#### 1-2. 추억의 BGM 선택

<img width="587" alt="Screen Shot 2023-01-25 at 2 55 58 PM" src="https://user-images.githubusercontent.com/80627536/214491031-463e2019-77da-4d99-b0d6-c1dec7928fad.png">

<br />
<br />

#### 1-3. 최신 블로그 글 리스트

<img width="344" alt="Screen Shot 2023-01-25 at 2 56 33 PM" src="https://user-images.githubusercontent.com/80627536/214491118-dc754cac-60b7-4c3c-9d60-8a43d10828e7.png">

<br />
<br />

### 2. 게임 페이지

<img width="1061" alt="Screen Shot 2023-01-25 at 2 57 12 PM" src="https://user-images.githubusercontent.com/80627536/214491227-385b505a-7a74-417c-bafc-199ab567655e.png">

<br />
<br />

기존 싸이월드 서비스처럼 끝말잇기 게임과 로또 번호 추첨기를 구현했습니다

### 2-1. 끝말잇기

![ezgif-4-970af943f6](https://user-images.githubusercontent.com/80627536/214491879-59481efa-3d28-4719-b7a7-d0a6ad955071.gif)

이전단어의 마지막 단어와 입력한 단어의 첫번째 단어가 일치한다면 정답, 일치하지 않는다면 오답을 반환하는 게임입니다.

<img width="731" alt="Screen Shot 2023-01-25 at 3 06 33 PM" src="https://user-images.githubusercontent.com/80627536/214492490-310e10c9-d02a-440b-b813-b4ef4c1b1fc9.png">

setTimeout을 통해 입력값에 따라 문구가 1초동안 바뀌도록 구현했습니다.

### 2-2. 로또번호 추첨기

![ezgif-4-ec624e4e79](https://user-images.githubusercontent.com/80627536/214492907-b7b7334c-b1ff-4d23-9aa1-d98d4596404e.gif)

1 ~ 45 사이의 숫자들 중복없이 추첨을 하도록 구현했습니다. 

### 3. 다이어리 페이지

<img width="1055" alt="Screen Shot 2023-01-25 at 3 11 23 PM" src="https://user-images.githubusercontent.com/80627536/214493238-d6e1656c-b97f-4528-9368-2a7c838a8605.png">

유저가 작성했던 다이어리들의 목록을 볼 수 있는 페이지입니다.

![ezgif-4-ce711738fb](https://user-images.githubusercontent.com/80627536/214493759-b0489b76-8541-4758-bfce-77f351a06421.gif)

다이어리 페이지의 초기 로딩 속도를 개선하기 위해 인피니티 스크롤을 도입했습니다. 

<img width="723" alt="Screen Shot 2023-01-25 at 3 16 26 PM" src="https://user-images.githubusercontent.com/80627536/214493903-44b445fd-a9f9-410d-9cf7-85412d33abd0.png">

외부 라이브러리를 이용하지 않고, Intersection Observer를 이용해 커스텀 훅을 생성하였습니다. 

