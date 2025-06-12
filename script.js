document.addEventListener('DOMContentLoaded', function() {
    // 카테고리 탭 활성화 하기.
    const categoryButtons = document.querySelectorAll('.category-item');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼 액티브 요소 제거하기
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 클릭한 버튼 액티브 요소 추가하기
            this.classList.add('active');
        });
    });

    // 토글 메뉴 버튼 기능 구현..
    const menuButton = document.querySelector('.menu-button');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    
    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.width = '72px';
            mainContent.style.marginLeft = '72px';
            document.querySelectorAll('.sidebar-text, .sidebar-heading, .sidebar-footer-links, .copyright').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            sidebar.style.width = '240px';
            mainContent.style.marginLeft = '240px';
            setTimeout(() => {
                document.querySelectorAll('.sidebar-text, .sidebar-heading').forEach(el => {
                    el.style.display = 'block';
                });
                document.querySelectorAll('.sidebar-footer-links, .copyright').forEach(el => {
                    el.style.display = 'flex';
                });
            }, 150);
        }
    });

    // 검색 효과
    const searchInput = document.querySelector('.search-container input');
    const searchContainer = document.querySelector('.search-container');
    
    searchInput.addEventListener('focus', function() {
        searchContainer.style.border = '1px solid #1c62b9';
        searchContainer.style.borderRight = 'none';
    });
    
    searchInput.addEventListener('blur', function() {
        searchContainer.style.border = '1px solid #303030';
        searchContainer.style.borderRight = 'none';
    });

    // 스크롤 시 카테고리 고정하기
    window.addEventListener('scroll', function() {
        const categoryBar = document.querySelector('.category-bar');
        const mainScrollPosition = window.scrollY;
        
        if (mainScrollPosition > 0) {
            categoryBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
            categoryBar.style.paddingTop = '10px';
        } else {
            categoryBar.style.boxShadow = 'none';
            categoryBar.style.paddingTop = '0';
        }
    });

    // 동영상 호버 효과 (썸네일 확대)는 CSS 트랜지션으로 구현했는데 동영상 호버가 잘 되지 않음.

    // 검색 했을때, 작동하지 않는다는걸 표기 (목업으로 만드는 기초 페이지기 때문에 만들기는 너무 어려운 요소였음)
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('검색 기능은 실제로 작동하지 않습니다. 데모 페이지입니다.');
    });

    // 반응형 디자인을 미디어 쿼리 처리하기.
    function handleResponsiveLayout() {
        if (window.innerWidth <= 992) {
            sidebar.classList.add('collapsed');
            sidebar.style.width = '72px';
            mainContent.style.marginLeft = '72px';
            document.querySelectorAll('.sidebar-text, .sidebar-heading, .sidebar-footer-links, .copyright').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            sidebar.classList.remove('collapsed');
            sidebar.style.width = '240px';
            mainContent.style.marginLeft = '240px';
            document.querySelectorAll('.sidebar-text, .sidebar-heading').forEach(el => {
                el.style.display = 'block';
            });
            document.querySelectorAll('.sidebar-footer-links').forEach(el => {
                el.style.display = 'flex';
            });
            document.querySelectorAll('.copyright').forEach(el => {
                el.style.display = 'block';
            });
        }

        if (window.innerWidth <= 576px) {
            sidebar.style.display = 'none';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.display = 'block';
        }
    }

    // 화면 크기 변경 시 레이아웃 크기 조정 하는 것
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);
});