
        // Toggle Dropdown Menu
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add interactive effect to split sections
        document.querySelectorAll('.split-section').forEach(section => {
            section.addEventListener('click', function() {
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            });
            
            // Add more bubbles on mouse move
            section.addEventListener('mousemove', function(e) {
                if (this.classList.contains('dry-cleaning')) {
                    const bubble = document.createElement('div');
                    bubble.className = 'bubble';
                    bubble.style.left = `${e.clientX - this.offsetLeft}px`;
                    bubble.style.top = `${e.clientY - this.offsetTop}px`;
                    bubble.style.width = `${Math.random() * 30 + 20}px`;
                    bubble.style.height = bubble.style.width;
                    bubble.style.animationDuration = `${Math.random() * 4 + 3}s`;
                    this.appendChild(bubble);
                    
                    // Remove bubble after animation
                    setTimeout(() => {
                        bubble.remove();
                    }, 6000);
                }
            });
        });

        // TikTok handle click event
        document.querySelector('.tiktok-container').addEventListener('click', function() {
            // Replace with actual TikTok URL
            window.open('https://www.tiktok.com/@makky_dual_care', '_blank');
        });

        // Add floating TikTok particles
        const tiktokHandle = document.querySelector('.tiktok-handle');
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'tiktok-particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            particle.style.backgroundColor = i % 2 === 0 ? '#00f2ea' : '#ff0050';
            tiktokHandle.appendChild(particle);
        }
    