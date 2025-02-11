# Code Review Sample

### ⚠️ 주의사항

- 이 저장소는 코드 리뷰 목적으로만 제공되는 부분 공개 코드입니다.
- 실제 실행 가능한 프로젝트가 아니며, 주요 설정 파일과 리소스가 제외되어 있습니다.

## 🛠 기술 스택

- React Native
- TypeScript
- React Navigation
- React Query
- Zustand
- Reanimated

## 📦 프로젝트 구조

```
src/
├── api/                 # API 모듈
│   ├── {feature}/          # 기능별 API
│   │   ├── types/              # 요청/응답/DTO 타입
│   │   └── API{Action}.ts      # API 요청 함수
│   └── request.ts          # API 클라이언트 설정
├── components/          # 컴포넌트
│   ├── common/             # 공통 컴포넌트
│   ├── controller/         # 시스템 이벤트 제어 컴포넌트
│   ├── guard/              # 보안 및 접근 제어 컴포넌트
│   ├── modal/              # 모달 관련 컴포넌트
│   └── {feature}/          # 기능별 컴포넌트
├── constants/           # 상수
├── context/             # 공통 Context
├── hooks/               # 커스텀 훅
│   ├── core/               # 공통 훅
│   ├── features/           # 기능별 훅
│   ├── prefetch/           # 데이터 프리페치 훅
│   ├── store/              # 전역 상태 관리 훅
│   └── ui/                 # UI 관련 훅
├── navigation/          # 내비게이션
│   ├── BottomTabNavigation/ # 하단 탭 내비게이션
│   └── MainNavigation/      # 메인 내비게이션
├── screens/             # 화면 컴포넌트
│   ├── home/               # 메인 화면
│   └── start/              # 시작 화면
├── store/               # 전역 상태 관리
│   └── slices/             # 상태 모듈
├── types/               # 공통 타입
└── utils/               # 유틸리티 함수
    ├── common/             # 공통 유틸
    ├── config/             # 설정 유틸
    ├── error/              # 에러 처리 유틸
    ├── navigation/         # 내비게이션 유틸
    ├── notifications/      # 알림 유틸
    ├── query/              # 쿼리 유틸
    └── storage/            # 로컬 저장소 유틸
```

## 🏗️ 주요 설계 패턴

### 에러 처리

- BaseError를 기반으로 한 계층형 에러 클래스 구조
- Axios 인터셉터를 통한 HTTP 에러 통합 처리
- 토스트/ErrorView를 활용한 사용자 피드백
- Sentry 기반 에러 로깅 및 모니터링

### API 모듈화

- 공통 설정을 관리하는 중앙 API 클라이언트
- 기능별로 분리된 API 모듈과 타입 정의
- DTO를 통한 API 응답 데이터 구조화

### 상태 관리

- React Query: 서버 상태 (캐싱, 동기화)
- Zustand: 전역 UI 상태
- Context: 화면 단위 상태
- MMKV: 로컬 저장소

### 내비게이션 설계

- Native Stack과 Bottom Tab을 활용한 화면 계층 구조
- 타입 정의와 Custom Hook을 통한 타입 안전성 확보
- navigationRef를 통한 전역 내비게이션 제어

### 컴포넌트 설계

- UI 기본 요소의 공통 컴포넌트화
- 푸시/보안/모달 등 목적별 컴포넌트 분리
- 기능별 독립 컴포넌트 구조

### 화면 구조

- 서브 컴포넌트 분리와 Custom Hook을 통한 로직 추상화
- Context 기반의 스크린 단위 상태 관리
- 달력 등 성능이 중요한 화면은 Props Drilling 사용

### Custom Hook 설계

- 공통/기능별/UI 등 관심사별 모듈화
- 에러 처리, 상태 접근 등 공통 기능 추상화
- 화면별 비즈니스 로직 캡슐화

### 성능 최적화 요소

- 네이티브 스레드 기반 애니메이션 (Reanimated)
- 서버 데이터 관리 최적화 (React Query)
  - 데이터 캐싱과 동기화
  - 효율적인 캐시 무효화 전략
- 이벤트 호출 최적화
  - 입력 이벤트 (Debounce)
  - API 호출 (Throttle)
  - 스크롤 이벤트 (Throttle)
- 긴 목록 최적화 (FlatList)
- 이미지 캐싱 (FastImage)과 이미지 압축 및 최적화
- 메모이제이션
  - 불필요한 리렌더링 방지 (React.memo)
  - 불필요한 값 재생성 방지 (useMemo, useCallback)

### 코드 컨벤션

- ESLint/Prettier 기반의 일관된 코드 스타일
- 일관된 네이밍 컨벤션 적용

## ⛔️ 제외된 요소

- 저작권 보호 UI/디자인 요소
- 설정 파일
- 외부 서비스 연동 정보
- 기타 민감 정보

## 🔒 라이선스

이 코드는 리뷰 목적으로만 제공되며, 무단 복제 및 배포를 금지합니다.
