# 4students - Brand Story Website

![4students Logo](images/logo.png)

## 프로젝트 개요

4students 브랜드 스토리 웹사이트는 React를 사용하여 제작된 모던하고 인터랙티브한 단일 페이지 애플리케이션(SPA)입니다. 학생들을 위한 혁신적인 교육 플랫폼인 4students의 브랜드 아이덴티티, 미션, 가치관, 그리고 성장 스토리를 효과적으로 전달합니다.

## 🎨 브랜드 컬러

- **Primary Navy**: `#1a2e47` - 메인 브랜드 컬러, 신뢰와 전문성을 상징
- **Secondary Navy**: `#2c3e50` - 보조 컬러, 깊이감 표현
- **Primary Gold**: `#d4a944` - 포인트 컬러, 프리미엄과 성공을 상징
- **Secondary Gold**: `#e8b957` - 밝은 골드, 희망과 혁신을 표현

## ✨ 주요 기능

### 완성된 기능

1. **반응형 네비게이션**
   - 스크롤에 따라 변화하는 고정 네비게이션 바
   - 모바일 햄버거 메뉴
   - 부드러운 섹션 스크롤

2. **Hero 섹션**
   - 대형 브랜드 로고 디스플레이
   - 임팩트 있는 타이포그래피
   - CTA 버튼
   - 스크롤 인디케이터 애니메이션

3. **About Us 섹션**
   - 브랜드 소개
   - 주요 통계 (활동 학생 수, 콘텐츠 수, 만족도)
   - 애니메이션이 적용된 통계 카드

4. **Mission 섹션**
   - 브랜드 미션 설명
   - 주요 기능 및 가치 제안
   - 그라데이션 배경과 아이콘

5. **Values 섹션**
   - 4가지 핵심 가치 (혁신, 접근성, 협력, 성장)
   - 인터랙티브 카드 UI
   - 호버 효과 및 애니메이션

6. **Story 섹션**
   - 타임라인 형식의 브랜드 히스토리
   - 2020년부터 2024년까지의 주요 마일스톤
   - 좌우 대칭 레이아웃 (데스크톱)

7. **Contact 섹션**
   - CTA 버튼
   - 연락처 정보
   - 소셜 미디어 링크

8. **애니메이션 효과**
   - Intersection Observer를 활용한 스크롤 애니메이션
   - Fade-in, Slide-up 효과
   - 부드러운 트랜지션

9. **반응형 디자인**
   - 데스크톱 (1200px+)
   - 태블릿 (768px - 968px)
   - 모바일 (< 768px)

## 📁 프로젝트 구조

```
4students-brand-story/
│
├── index.html              # 메인 HTML 파일 (React CDN 포함)
├── css/
│   └── style.css          # 모든 스타일 및 애니메이션
├── js/
│   └── app.js             # React 컴포넌트 및 로직
├── images/
│   └── logo.png           # 4students 브랜드 로고
└── README.md              # 프로젝트 문서
```

## 🚀 시작하기

### 필요 조건

이 프로젝트는 순수 HTML, CSS, JavaScript(React CDN)로 제작되어 별도의 빌드 도구나 패키지 설치가 필요하지 않습니다.

### 실행 방법

1. **로컬에서 실행**
   ```bash
   # 간단한 HTTP 서버 실행 (Python이 설치된 경우)
   python -m http.server 8000
   
   # 또는 Node.js의 http-server 사용
   npx http-server
   ```

2. **브라우저에서 열기**
   - `index.html` 파일을 직접 브라우저에서 열거나
   - 로컬 서버를 실행하여 `http://localhost:8000` 접속

### 배포

**Publish 탭**에서 원클릭으로 배포할 수 있습니다:
1. 프로젝트 상단의 **Publish** 탭 클릭
2. 배포 버튼 클릭
3. 생성된 URL을 통해 웹사이트 접속

## 🛠 기술 스택

- **React 18** (CDN) - UI 컴포넌트 및 상태 관리
- **Babel Standalone** - JSX 트랜스파일링
- **Vanilla CSS3** - 스타일링 및 애니메이션
- **Font Awesome 6** - 아이콘
- **Google Fonts** - Inter & Playfair Display 폰트

## 📱 반응형 브레이크포인트

- **Desktop**: 968px 이상
- **Tablet**: 768px - 968px
- **Mobile**: 768px 이하
- **Small Mobile**: 480px 이하

## 🎯 페이지 섹션 및 URI

### 섹션 구조

| 섹션 ID | 섹션 이름 | 설명 |
|---------|-----------|------|
| `#hero` | Hero | 메인 랜딩 섹션, 브랜드 로고 및 헤드라인 |
| `#about` | About Us | 4students 소개 및 주요 통계 |
| `#mission` | Our Mission | 브랜드 미션 및 핵심 기능 |
| `#values` | Our Values | 4가지 핵심 가치 |
| `#story` | Our Story | 브랜드 히스토리 타임라인 |
| `#contact` | Contact | 연락처 및 CTA |

### 접근 방법

```
https://your-domain.com/           # 홈페이지 (Hero 섹션)
https://your-domain.com/#about     # About 섹션으로 직접 이동
https://your-domain.com/#mission   # Mission 섹션으로 직접 이동
https://your-domain.com/#values    # Values 섹션으로 직접 이동
https://your-domain.com/#story     # Story 섹션으로 직접 이동
https://your-domain.com/#contact   # Contact 섹션으로 직접 이동
```

## 🎨 디자인 특징

### 1. 브랜드 아이덴티티
- 네이비 블루와 골드의 프리미엄 컬러 조합
- 일관된 브랜드 로고 사용
- 전문적이면서도 친근한 톤앤매너

### 2. 애니메이션
- **Fade-in 효과**: 섹션이 뷰포트에 들어올 때
- **Hover 효과**: 카드 및 버튼 인터랙션
- **Bounce 애니메이션**: 스크롤 인디케이터
- **Smooth Scroll**: 부드러운 섹션 이동

### 3. 타이포그래피
- **헤딩**: Inter 폰트 (700-800 weight)
- **본문**: Inter 폰트 (400-600 weight)
- **장식**: Playfair Display (선택적 사용 가능)

### 4. 레이아웃
- 그리드 시스템 활용
- Flexbox로 정렬
- 최대 너비 1200px 컨테이너

## 🔄 향후 개선 사항

### 기능 추가
- [ ] 실제 연락처 폼 구현 (백엔드 연동)
- [ ] 블로그 섹션 추가
- [ ] 학생 후기/리뷰 섹션
- [ ] 다크 모드 지원
- [ ] 다국어 지원 (영어, 한국어 토글)
- [ ] 실제 데이터 연동 (학생 수, 통계 등)

### 성능 최적화
- [ ] 이미지 lazy loading
- [ ] CSS 최적화 및 분리
- [ ] React Production 빌드로 전환
- [ ] CDN 대신 로컬 라이브러리 번들링

### 컨텐츠 개선
- [ ] 실제 브랜드 이미지 추가
- [ ] 비디오 소개 추가
- [ ] 팀 멤버 소개 섹션
- [ ] FAQ 섹션

## 📞 연락처

- **Email**: troywppark@gmail.com
- **Phone**: 010-4037-0928
- **Social Media**: 

## 📄 라이선스

© 2024 4students. All rights reserved.

## 🙏 감사의 말

이 프로젝트는 4students 브랜드의 비전과 가치를 효과적으로 전달하기 위해 제작되었습니다. 
모든 학생들의 성공을 응원합니다! 🎓✨
