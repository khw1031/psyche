# 프시케 (Psyche) 프로젝트 작업 로그

## [Branch: T-001]

### supabase 로컬 환경 설정

supabase 설치, 초기화

```sh
brew install supabase/tab/supabase
supabase init
supabase start
```

### Orbstack 설치

```sh
brew install orbstack
```

### Package Manager 변경: npm → Yarn 4.9.2

- `package.json`: packageManager를 `yarn@4.9.2`로 변경
- engines 설정에서 `npm` → `yarn` 요구사항 변경
- `format:check` 스크립트 추가 (CI 호환성)

GitHub Actions CI/CD
- 모든 job에서 `cache: 'npm'` → `cache: 'yarn'` 변경
- `npm ci` → `yarn install --immutable` 변경
- `npm run` → `yarn` 명령어 변경
- `npx` → `yarn dlx` 변경

문서 업데이트
- README.md: 모든 명령어 예시 npm → yarn 변경
- Yarn 4 사용 설명 및 Corepack 활성화 가이드 추가
- 전제 조건에 Yarn 4.9.2 명시

개발 환경 설정
- `.gitignore`: Yarn 4 관련 설정 추가
  - `.yarn/*` 디렉토리 관리
  - 필요한 디렉토리만 추적 (patches, plugins, releases 등)

주의 사항
- `corepack enable` 실행 필요
- 기존 `node_modules` 삭제 후 `yarn install` 실행 권장

### T-001: 프로젝트 초기 세팅 및 리포지토리 구성

#### 주요 작업 내용

모노레포 구조 설정
- Turborepo + npm workspaces 기반 모노레포 구조 구축
- `apps/mobile` (React Native + Expo)
- `apps/server` (Nest.js + tRPC)  
- `packages/shared` (공통 타입 및 스키마)
- `packages/ui` (공통 UI 컴포넌트)

개발 환경 구성
- TypeScript 프로젝트 전체 설정
- ESLint + Prettier 코드 스타일 일관성 확보
- Turbo.json 빌드 파이프라인 구성
- GitHub Actions CI/CD 파이프라인 설정

기술 스택 초기화
- 프론트엔드: React Native + Expo + tRPC + React Query
- 백엔드: Nest.js + tRPC + Supabase + Redis  
- 공통: TypeScript + Zod 스키마 검증
- AI: AWS Bedrock 통합 준비

프로젝트 문서화
- README.md 작성 (개발 가이드 및 프로젝트 구조)
- 환경 변수 템플릿 (apps/server/env.template)
- .gitignore 포괄적 설정

핵심 스키마 정의
- User, DiaryEntry, AnalysisResult, Goal 등 핵심 타입 정의
- Zod 스키마를 통한 런타임 검증 체계 구축
- 프론트엔드-백엔드 간 타입 안전성 확보
