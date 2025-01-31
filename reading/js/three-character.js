document.addEventListener('DOMContentLoaded', function() {
    // 监听滚动事件，高亮当前章节
    window.addEventListener('scroll', function() {
        const chapters = document.querySelectorAll('.chapter');
        const navItems = document.querySelectorAll('.chapter-nav a');
        
        chapters.forEach((chapter, index) => {
            const rect = chapter.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                navItems.forEach(item => item.parentElement.classList.remove('active'));
                navItems[index].parentElement.classList.add('active');
            }
        });
    });

    // 点击导航平滑滚动到对应章节
    document.querySelectorAll('.chapter-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // 点击文字播放读音（后续可以添加）
    document.querySelectorAll('.characters').forEach(element => {
        element.addEventListener('click', function() {
            // 这里可以添加播放音频的功能
            console.log('播放音频：', this.textContent.trim());
        });
    });
});

// 添加暗色模式切换（如果需要）
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
} 