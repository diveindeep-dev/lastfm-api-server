<h1 align="center">last.fm API SERVER</h1>

last.fm 검색 API를 사용하기 위한 서버

Cors error를 해결하기 위함이 목적

## Requirements

- last.fm API key가 필요합니다.


## Installation

### Server

```javascript
git clone https://github.com/diveindeep-dev/lastfm-api-server.git
cd lastfm-api-server
yarn install
yarn dev
```

#### Environment Variables

- dotenv로 환경변수 관리 [(참조)](https://github.com/motdotla/dotenv)
- Server 루트 디렉토리에 `.env` 파일 생성
- 하단의 변수와 발급받은 값 추가
```
FM_API_KEY=YOUR SECRET KEY
```


## 🔧 Skills or Tools
- Node.js
- ES2015+
- Git


## 🎯 Features
1. Node.js + Express로 서버 만들기

2. last.fm Open API 이용
   - 앨범명, 가수명으로 Cover 검색: Cover없는 결과 제외


## 💫 Deploy
cloudtype 배포


