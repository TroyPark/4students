// Supabase 설정
(function() {
    const SUPABASE_URL = 'https://uabbipilamwtfeuzfjse.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhYmJpcGlsYW13dGZldXpmanNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3Njk4NDIsImV4cCI6MjA4MzM0NTg0Mn0.CTb-FQI2c_31Wyv7CnnucE6h6c_8h-2hSKuGqlufmzc';

    // Supabase 클라이언트 초기화
    function initializeSupabase() {
        let retryCount = 0;
        const maxRetries = 30;
        
        function tryInit() {
            // Supabase SDK가 로드되었는지 확인
            if (typeof window.supabase !== 'undefined' && 
                typeof window.supabase.createClient === 'function') {
                
                // 전역 supabase 변수 생성
                window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                console.log('✅ Supabase 클라이언트 초기화 완료');
                
                // 전역 스코프에도 할당 (이전 코드와의 호환성)
                if (typeof window !== 'undefined') {
                    window.supabaseClient = window.supabase;
                }
            } else {
                retryCount++;
                if (retryCount < maxRetries) {
                    console.log(`⏳ Supabase SDK 로딩 대기 중... (${retryCount}/${maxRetries})`);
                    setTimeout(tryInit, 50);
                } else {
                    console.error('❌ Supabase SDK 로드 실패. 페이지를 새로고침해주세요.');
                    alert('Supabase 연결에 실패했습니다. 인터넷 연결을 확인하고 페이지를 새로고침해주세요.');
                }
            }
        }
        
        tryInit();
    }

    // DOM이 준비되면 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSupabase);
    } else {
        initializeSupabase();
    }
})();
