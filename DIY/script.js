document.addEventListener('DOMContentLoaded', function() {
    
    const scrollToTopBtn = document.getElementById('scrollToTop');
    let lastScrollPosition = 0;
    let ticking = false;

    function toggleScrollButton(scrollPos) {
        if (scrollPos > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollPosition = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                toggleScrollButton(lastScrollPosition);
            });
            ticking = true;
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    const roles = [
        "Techpreneur",
        "Frontend Developer",
        "Digital Transformation Enthusiast"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;
    let erasingDelay = 100;
    let newTextDelay = 2000;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        const typedTextElement = document.getElementById('typed-text');
        
        if (isDeleting) {
            
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 200;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            
            isDeleting = true;
            typingDelay = newTextDelay;
        } else if (isDeleting && charIndex === 0) {
            
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }

        setTimeout(typeEffect, typingDelay);
    }


    typeEffect();

    const portfolioItems = [
        {
            title: "NFT Dashboard Application Development",
            category: "DEVELOPMENT",
            image: "assets/dummy-project.jfif",
            languages: ["React", "TypeScript", "Web3.js"]
        },
        {
            title: "Online Food Delivery Mobile App Design",
            category: "APPLICATION",
            image: "assets/dummy-project1.jfif",
            languages: ["React Native", "Node.js", "MongoDB"]
        },
        {
            title: "Travel App Design Creativity & Application",
            category: "DESIGN",
            image: "assets/dummy-project2.jpg",
            languages: ["Flutter", "Firebase", "Google Maps API"]
        },
        {
            title: "Workout Website Design",
            category: "DEVELOPMENT",
            image: "assets/dummy-project1.jfif",
            languages: ["Next.js", "Tailwind CSS", "Prisma"]
        },
        {
            title: "Mobile Application Landing Design",
            category: "DESIGN",
            image: "assets/dummy-project.jfif",
            languages: ["Figma", "Adobe XD", "Principle"]
        },
        {
            title: "Restaurant Mobile App Design",
            category: "APPLICATION",
            image: "assets/dummy-project2.jpg",
            languages: ["Swift", "UIKit", "CoreData"]
        }
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');

    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-lg-4 col-md-6 slide-up';
        portfolioItem.innerHTML = `
            <div class="portfolio-item">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
                <div class="overlay">
                    <div class="overlay-content">
                        <p class="text-gold mb-2">${item.category}</p>
                        <h3 class="h5 text-white mb-3">${item.title}</h3>
                        <div class="d-flex flex-wrap">
                            ${item.languages.map(lang => `
                                <span class="badge me-2 mb-2">${lang}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = ` ${currentYear} Diane Akello. All rights reserved.`;
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});