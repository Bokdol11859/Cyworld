
<p align="center" >
<a href="https://cyworld.vercel.app" align="center"><img width="1298" alt="Screen Shot 2023-01-25 at 2 35 02 PM" src="https://user-images.githubusercontent.com/80627536/214488028-d48d891b-1570-41c8-b923-fe6c9ed3cbf4.png"></a>
</p>
<h1 align="center">
  Next.js로 추억의 싸이월드 구현하기
  <br/>  <br/> 
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
  
- **[Typescript]()**: Typescript는 Javscript의 문법에 타입 지정을 할 수 있도록 만들어진 언어로, 자바스크립트의 자유도와 타입 언어의 안정성까지 갖춘 언어입니다. 개발 과정에서 타입 추론의 도움을 받기 위해 사용했습니다.  
  
- **[NextJS]()**: ReactJS를 더욱 간편하게 사용하기 위해 만들어진 프레임워크로, 추가적인 설정 없이도 기본적으로 ServerSideRendering이 가능한 것이 장점입니다. 또한, 외부 라이브러리의 도움 없이도 자동으로 파일 구조 기반 라우팅이 가능하여 직관적인 폴더 구조를 구축할 수 있습니다. 다이어리 페이지같은 경우 데이터의 변경이 잦지 않기 때문에 SSG/ISR을 적용하기 위해 NextJS를 도입했습니다.
  
- **[TailwindCSS]()**: TailwindCSS는 Utility-first라는 컨셉을 갖고 나온 CSS 프레임워크로, html 태그에 인라인 스타일링을 적용할 수 있습니다. CSS-in-JS와는 다르게 런타임에 스타일에 적용이 되는게 아니기에 성능 측면에서 효율적이고, 개발과정에서 클래스 이름을 고민하지 않아도 되기에 빠른 개발이 가능하다는 것이 장점입니다. 
  
- **[GraphQL (Apollo Client)]()**: GraphQL은 REST API와는 다르게 하나의 endpoint에 프론트에서 직접 쿼리를 날려 원하는 데이터만을 가져올 수 있도록 하는 query-language입니다. REST API를 통해 백엔드와 통신을 할 때 자주 겪었던 Under-fetching/Over-fetching을 해결할 수 있었습니다. 또한, GraphQL client로는 Apollo Client를 이용했습니다. 
  
  
## 상세 페이지

### 1. 메인 페이지

<img width="1067" alt="Screen Shot 2023-01-25 at 2 53 56 PM" src="https://user-images.githubusercontent.com/80627536/214490732-c82ecefa-fb1f-4a98-ae51-6587ee020825.png">

<br />
<br />

#### 1-1. 오늘의 기분 표현

<img width="273" alt="Screen Shot 2023-01-25 at 2 54 52 PM" src="https://user-images.githubusercontent.com/80627536/214490870-bcc2f70d-47a5-4e56-8a85-24eb98c4295c.png">

  [기쁨, 우울, 졸림]이라는 세가지 선택지에서 유저는 오늘의 기분을 표현할 수 있습니다
  
<br />
<br />

#### 1-2. 추억의 BGM 선택

<img width="587" alt="Screen Shot 2023-01-25 at 2 55 58 PM" src="https://user-images.githubusercontent.com/80627536/214491031-463e2019-77da-4d99-b0d6-c1dec7928fad.png">

  프로젝트 당시 멜론 TOP 10 노래들을 가져와서 보여주도록 구현했습니다. 
  
<br />
<br />

#### 1-3. 최신 블로그 글 리스트

<img width="344" alt="Screen Shot 2023-01-25 at 2 56 33 PM" src="https://user-images.githubusercontent.com/80627536/214491118-dc754cac-60b7-4c3c-9d60-8a43d10828e7.png">
  
  블로그에 작성된 글들중에서 최신 글 네개를 보여주도록 구현했습니다. 블로그에 글이 업데이트 될 때마다 자동으로 업데이트가 같이 됩니다.

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

#### 3-1. 다이어리 디테일 페이지
  
  <img width="1057" alt="Screen Shot 2023-01-25 at 3 19 36 PM" src="https://user-images.githubusercontent.com/80627536/214494324-07bc76a4-7102-43e5-af3d-38fcecbd2e82.png">

  다이어리 페이지에서 원하는 다이어리를 선택하면 글 세부 페이지로 이동합니다.
  세부 페이지에서는 글을 삭제하고, 수정을 할 수 있습니다. 
  
  
  ![ezgif-4-fc7cdeea4b](https://user-images.githubusercontent.com/80627536/214494604-25c65750-6bc4-4bad-a97a-a03a03c74478.gif)
  
  글을 원하는대로 수정할 수도 있고
  
  ![ezgif-4-01ac879c95](https://user-images.githubusercontent.com/80627536/214494771-133d28e8-5775-4fac-9bc4-c5180dd0c4b6.gif)
  
  글을 원하는대로 삭제할 수도 있습니다
  
  
#### 3-2. 다이어리 작성 페이지
  
![ezgif-4-5e3d1475bf](https://user-images.githubusercontent.com/80627536/214495055-c47e1046-427a-4ec1-bf9b-e8c561f978c2.gif)
  
  다이어리 작성 페이지에서는 새로운 글을 작성할 수 있습니다

  
  
  
  
  
  
