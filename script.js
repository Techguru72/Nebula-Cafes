document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
    });
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Hover effects for brand logos
    const brandLogos = document.querySelectorAll('.brand-logos span');
    
    brandLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'translateY(-5px)';
            logo.style.opacity = '1';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateY(0)';
            logo.style.opacity = '0.7';
        });
    });
    
    // Glass container hover effect
    const glassContainers = document.querySelectorAll('.glass-container');
    
    glassContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'translateY(-5px)';
            container.style.boxShadow = '0 12px 40px 0 rgba(31, 38, 135, 0.5)';
        });
        
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'translateY(0)';
            container.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        });
    });
    
    // Testimonial card hover effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.background = 'rgba(255, 255, 255, 0.25)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.background = 'rgba(255, 255, 255, 0.15)';
        });
    });
});