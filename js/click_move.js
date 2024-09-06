document.addEventListener('DOMContentLoaded', function() {
    //모어 박스 클릭 시 아래로 부드럽게 내려가게
    const moreBox = document.getElementById('more_box');
    const aboutTitle = document.getElementById('about_chapter');
    const skillTitle = document.getElementById('skill_chapter');
    const projectTitle =document.getElementById('project_chapter')

    moreBox.addEventListener('click', function(event) {
        event.preventDefault(); 
        let target = document.querySelector('#main_about');
        let offset = 40; // 상단 요소의 높이 조정값
        let targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    //about 섹션으로 이동
    aboutTitle.addEventListener('click', function(event) {
        event.preventDefault(); 
        let target = document.querySelector('#main_about');
        let offset = 40;
        let targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    //skill 섹션으로 이동
    skillTitle.addEventListener('click', function(event) {
        event.preventDefault(); 
        let target = document.querySelector('#main_skill');
        let offset = 40
        let targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
    
    //project 섹션으로 이동
    projectTitle.addEventListener('click', function(event) {
        event.preventDefault(); 
        let target = document.querySelector('#main_project');
        let offset = 40
        let targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    //메인타이틀 클릭시 최상단으로 이동 및 위치에 따른 호버 효과
    const mainTitle = document.getElementById('main_title');
   
    function handleScroll() {
        if (window.scrollY === 0) {
            // 최상단에 위치할 때
            mainTitle.classList.add('at-top');
            mainTitle.classList.remove('not-at-top');
            aboutTitle.classList.add('at-top');
            aboutTitle.classList.remove('not-at-top');
            skillTitle.classList.add('at-top');
            skillTitle.classList.remove('not-at-top');
            projectTitle.classList.add('at-top');
            projectTitle.classList.remove('not-at-top');
        } else {
            // 최상단이 아닐 때
            mainTitle.classList.add('not-at-top');
            mainTitle.classList.remove('at-top');
            aboutTitle.classList.add('not-at-top');
            aboutTitle.classList.remove('at-top');
            skillTitle.classList.add('not-at-top');
            skillTitle.classList.remove('at-top');
            projectTitle.classList.add('not-at-top');
            projectTitle.classList.remove('at-top');
        }
        
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
    
    // 초기 스크롤 위치 확인
    handleScroll()

    //부드러운 스크롤
    const scrollToTopLink = document.getElementById('scrollToTop');

        scrollToTopLink.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 앵커 링크 동작 방지

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드러운 스크롤 효과
        })
    })
});