# 🔄 Firebase → Supabase 마이그레이션 가이드

이 문서는 4students 프로젝트를 Firebase Auth에서 Supabase로 마이그레이션하는 방법을 안내합니다.

## 📋 마이그레이션 체크리스트

### 1. Supabase 프로젝트 설정

1. [Supabase](https://supabase.com)에 가입하고 새 프로젝트를 생성합니다.
2. 프로젝트 생성 후 다음 정보를 확인합니다:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **Anon/Public Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

3. `js/supabase-config.js` 파일을 열고 다음 부분을 수정합니다:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL'; // 실제 프로젝트 URL로 변경
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // 실제 Anon Key로 변경
```

### 2. Supabase 데이터베이스 테이블 생성

Supabase Dashboard의 SQL Editor에서 다음 SQL을 실행하여 users 테이블을 생성합니다:

```sql
-- users 테이블 생성
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) 활성화
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 사용자가 자신의 데이터만 조회할 수 있도록 정책 설정
CREATE POLICY "Users can view their own data"
    ON public.users
    FOR SELECT
    USING (auth.uid() = id);

-- 사용자가 자신의 데이터를 생성할 수 있도록 정책 설정
CREATE POLICY "Users can insert their own data"
    ON public.users
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- 사용자가 자신의 데이터를 수정할 수 있도록 정책 설정
CREATE POLICY "Users can update their own data"
    ON public.users
    FOR UPDATE
    USING (auth.uid() = id);

-- updated_at 자동 업데이트 함수
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- updated_at 트리거 생성
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
```

### 3. Supabase 인증 설정

Supabase Dashboard에서 Authentication 설정을 확인합니다:

1. **Email Confirmation 설정**:
   - `Authentication` → `Settings` → `Email Auth`
   - `Confirm email`을 활성화하면 사용자가 이메일 인증을 완료해야 로그인할 수 있습니다.
   - 개발 중에는 비활성화할 수 있습니다.

2. **이메일 템플릿 커스터마이징** (선택사항):
   - `Authentication` → `Email Templates`에서 회원가입 이메일, 비밀번호 재설정 이메일 등을 커스터마이징할 수 있습니다.

3. **Site URL 설정**:
   - `Authentication` → `URL Configuration`
   - `Site URL`을 프로덕션 도메인으로 설정합니다.
   - 개발 중에는 `http://localhost:포트번호` 또는 로컬 서버 주소를 추가합니다.

### 4. 기존 Firebase 사용자 데이터 마이그레이션 (선택사항)

기존 Firebase에서 사용 중이었다면, 사용자 데이터를 Supabase로 마이그레이션해야 할 수 있습니다.

**참고**: Firebase에서 사용자 비밀번호는 해시된 상태로 저장되어 직접 마이그레이션이 어렵습니다. 
다음 옵션 중 하나를 선택하세요:

#### 옵션 1: 사용자에게 비밀번호 재설정 요청
- 사용자가 첫 로그인 시 비밀번호 재설정을 요청하도록 안내

#### 옵션 2: Firebase 사용자 데이터 내보내기
1. Firebase Console에서 사용자 데이터를 CSV/JSON으로 내보내기
2. Supabase CLI 또는 API를 사용하여 사용자 초대 이메일 전송
3. 사용자가 이메일을 통해 새 비밀번호 설정

### 5. 변경된 파일 목록

다음 파일들이 Supabase로 마이그레이션되었습니다:

- ✅ `js/supabase-config.js` (새로 생성)
- ✅ `index.html` (로그인 기능)
- ✅ `signup.html` (회원가입 기능)
- ✅ `complete_login.html` (로그인 상태 확인 및 로그아웃)

### 6. API 변경 사항 요약

| 기능 | Firebase | Supabase |
|------|----------|----------|
| 로그인 | `auth.signInWithEmailAndPassword(email, password)` | `supabase.auth.signInWithPassword({ email, password })` |
| 회원가입 | `auth.createUserWithEmailAndPassword(email, password)` | `supabase.auth.signUp({ email, password })` |
| 로그아웃 | `auth.signOut()` | `supabase.auth.signOut()` |
| 인증 상태 확인 | `auth.onAuthStateChanged(callback)` | `supabase.auth.onAuthStateChange(callback)` |
| 현재 세션 가져오기 | `auth.currentUser` | `supabase.auth.getSession()` |
| 데이터 저장 | `db.collection('users').doc(uid).set()` | `supabase.from('users').insert()` |

### 7. 테스트

마이그레이션 후 다음 기능들을 테스트하세요:

1. ✅ 새 사용자 회원가입
2. ✅ 이메일 인증 (활성화한 경우)
3. ✅ 로그인
4. ✅ 로그아웃
5. ✅ 로그인 상태 확인 (페이지 새로고침 후에도 유지되는지)
6. ✅ 비밀번호 재설정 (구현한 경우)

### 8. 추가 기능 (선택사항)

#### 소셜 로그인 추가
Supabase는 다양한 소셜 로그인을 지원합니다:
- Google
- GitHub
- Facebook
- Apple
- 등등

설정 방법: `Authentication` → `Providers`에서 원하는 제공자를 활성화

#### 비밀번호 재설정 기능 추가

```javascript
// 비밀번호 재설정 이메일 전송
const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://yourdomain.com/reset-password',
});
```

### 9. 프로덕션 배포 전 체크리스트

- [ ] Supabase 프로젝트 URL과 Anon Key가 올바르게 설정되었는지 확인
- [ ] Database 테이블과 RLS 정책이 올바르게 설정되었는지 확인
- [ ] Site URL이 프로덕션 도메인으로 설정되었는지 확인
- [ ] 이메일 인증 설정 확인
- [ ] 모든 기능이 정상적으로 동작하는지 테스트
- [ ] Firebase 크레덴셜이 코드에서 제거되었는지 확인
- [ ] `.gitignore`에 민감한 정보가 포함되지 않도록 확인

### 10. 문제 해결

#### 로그인이 안 될 때
- Supabase Dashboard에서 이메일 인증이 필요한지 확인
- 사용자가 이메일 인증을 완료했는지 확인
- 네트워크 탭에서 API 요청/응답 확인

#### CORS 에러가 발생할 때
- Supabase Dashboard의 `Authentication` → `URL Configuration`에서 허용된 도메인 확인

#### 데이터베이스 저장이 안 될 때
- RLS (Row Level Security) 정책 확인
- 테이블 권한 확인

## 📚 추가 리소스

- [Supabase 공식 문서](https://supabase.com/docs)
- [Supabase Auth 가이드](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript 클라이언트](https://supabase.com/docs/reference/javascript/introduction)
- [Firebase에서 Supabase로 마이그레이션](https://supabase.com/docs/guides/migrations/firebase-auth)

## ❓ 질문이나 문제가 있으신가요?

- [Supabase Discord](https://discord.supabase.com)
- [Supabase GitHub Discussions](https://github.com/supabase/supabase/discussions)

---

마이그레이션을 완료하셨나요? 🎉 이제 Supabase의 강력한 기능들을 활용해보세요!
