# 프시케 Psyche

AI 기반 감정 일기 분석을 통해 개인의 심리적 성장과 인지적 재구성을 지원하는 24시간 접근 가능한 멘탈 헬스케어 서비스

## 프로젝트 구조

```
psyche/
├── apps/
│   ├── mobile/          # React Native 모바일 앱
│   └── server/          # Nest.js 백엔드 서버
├── packages/
│   ├── shared/          # 공통 타입 및 스키마
│   └── ui/              # 공통 UI 컴포넌트
└── .vooster/            # Vooster AI 프로젝트 관리
```

## 기술 스택

### 프론트엔드 (Mobile)
- **React Native** + **Expo Development Build**
- **Expo Router** (파일 기반 네비게이션)
- **tRPC** (타입 안전 API 통신)
- **React Query** (서버 상태 관리)
- **TypeScript** + **Zod** (타입 안전성)

### 백엔드 (Server)
- **Nest.js** (Node.js 프레임워크)
- **tRPC** (API 라우터)
- **Supabase** (PostgreSQL + Auth + Storage)
- **Redis** (캐싱 및 세션)
- **AWS Bedrock** (AI/ML 서비스)

### 개발 도구
- **Yarn 4** (패키지 매니저)
- **Turborepo** (모노레포 빌드 시스템)
- **TypeScript** (정적 타입 검사)
- **ESLint** + **Prettier** (코드 품질)

## 빠른 시작

### 전제 조건
- Node.js 18+ 설치
- Yarn 4.9.2 (Corepack 활성화 권장)

```bash
# Corepack 활성화 (권장)
corepack enable
```

### 1. 의존성 설치

```bash
yarn install
```

### 2. 환경 변수 설정

```bash
# 서버 환경 변수 설정
cp apps/server/env.template apps/server/.env
# .env 파일을 편집하여 실제 값들을 입력하세요
```

### 3. 개발 서버 실행

```bash
# 모든 앱 동시 실행
yarn dev

# 또는 개별 실행
yarn dev:mobile   # 모바일 앱만
yarn dev:server   # 서버만
```

### 4. 빌드

```bash
# 전체 빌드
yarn build

# 개별 빌드
yarn build:mobile
yarn build:server
```

## 개발 가이드

### 코드 스타일

- **ESLint** + **Prettier** 자동 포맷팅 적용
- **TypeScript** 엄격 모드 사용
- **Zod** 스키마를 통한 런타임 검증

### 폴더 구조 규칙

```
apps/mobile/
├── src/
│   ├── app/             # Expo Router 페이지
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── hooks/           # 커스텀 훅
│   ├── services/        # API 서비스
│   └── utils/           # 유틸리티 함수

apps/server/
├── src/
│   ├── modules/         # 기능별 모듈
│   ├── common/          # 공통 기능
│   ├── config/          # 설정
│   └── utils/           # 유틸리티
```

### Git 워크플로우

1. `main` 브랜치에서 feature 브랜치 생성
2. 기능 개발 및 테스트
3. Pull Request 생성
4. 코드 리뷰 후 병합

## 배포

### Mobile App
- **EAS Build** 를 통한 네이티브 빌드
- **EAS Submit** 을 통한 앱스토어 배포

### Server
- **Railway** 플랫폼 배포
- **GitHub Actions** CI/CD 파이프라인

## 모니터링

- **Sentry**: 에러 모니터링
- **Supabase**: DB 성능 모니터링
- **Custom Metrics**: 비즈니스 지표 추적

## 문서

- [Product Requirements Document](./vooster__prd.mdc)
- [API Documentation](./docs/api.md) (생성 예정)
- [Mobile App Guide](./apps/mobile/README.md) (생성 예정)
- [Server Guide](./apps/server/README.md) (생성 예정)

## 기여하기

1. 이슈 확인 또는 새 이슈 생성
2. Feature 브랜치 생성
3. 개발 및 테스트
4. Pull Request 제출

## 라이선스

Private Project - All Rights Reserved

## 팀

- **프로젝트 관리**: Vooster AI
- **개발**: AI 기반 개발 프로세스 