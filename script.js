/* ==========================================
   KILIFI PROPERTIES - JAVASCRIPT
   ========================================== */

// DOM ELEMENTS
    const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const scrollTop = document.getElementById('scrollTop');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

// CAROUSEL VARIABLES
    let currentSlide = 0;
let slides = [];
let dots = [];
let autoSlideInterval;

// MOBILE NAVIGATION TOGGLE
if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// SCROLL TO TOP BUTTON
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// BOOKING MODAL FUNCTIONS
function openBookingModal() {
    if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    if (bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
    }
});

// BOOKING FORM SUBMISSION - Send to WhatsApp
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const fullName = bookingForm.querySelector('input[type="text"]').value;
        const email = bookingForm.querySelector('input[type="email"]').value;
        const phone = bookingForm.querySelector('input[type="tel"]').value;
        const property = bookingForm.querySelector('select').value;
        const propertyText = bookingForm.querySelector('select option:checked').text;
        const date = bookingForm.querySelector('input[type="date"]').value;
        const notes = bookingForm.querySelector('textarea').value;
        
        // Format message for WhatsApp
        let message = `*NEW SITE VISIT BOOKING*\n\n`;
        message += `*Name:* ${fullName}\n`;
        message += `*Email:* ${email}\n`;
        message += `*Phone:* ${phone}\n`;
        message += `*Property:* ${propertyText}\n`;
        message += `*Preferred Date:* ${date}\n`;
        if (notes) {
            message += `*Additional Notes:* ${notes}\n`;
        }
        message += `\n_Sent from Kilifi Properties Website_`;
        
        // WhatsApp number (Kenya format: remove + and spaces)
        const whatsappNumber = '254724367338';
        
        // Create WhatsApp link with encoded message
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappLink, '_blank');
        
        // Show success message
        showNotification('Opening WhatsApp to send your booking request...', 'success');
        
        // Reset form
        bookingForm.reset();
        
        // Close modal
        setTimeout(() => {
            closeBookingModal();
        }, 2000);
    });
}

// CONTACT FORM SUBMISSION - Send to WhatsApp
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const fullName = contactForm.querySelector('input[placeholder*="Name"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const subject = contactForm.querySelector('input[placeholder*="Subject"]')?.value || 'General Inquiry';
        const messageText = contactForm.querySelector('textarea').value;
        
        // Format message for WhatsApp
        let message = `*NEW CONTACT MESSAGE*\n\n`;
        message += `*Name:* ${fullName}\n`;
        message += `*Email:* ${email}\n`;
        message += `*Phone:* ${phone}\n`;
        message += `*Subject:* ${subject}\n`;
        message += `*Message:* ${messageText}\n`;
        message += `\n_Sent from Kilifi Properties Website_`;
        
        // WhatsApp number
        const whatsappNumber = '254724367338';
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Show success message
        showNotification('Opening WhatsApp to send your message...', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// NEWSLETTER FORMS
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        showNotification('Successfully subscribed to our newsletter!', 'success');
        
        // Reset form
        form.reset();
    });
});

// NOTIFICATION SYSTEM
function showNotification(message, type = 'success') {
    // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
            color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.4s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
        document.body.appendChild(notification);
        
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Add animation styles
    const style = document.createElement('style');
    style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
                }
            });
        });

// INTERSECTION OBSERVER FOR ANIMATIONS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

// Observe elements on page load
window.addEventListener('load', () => {
    // Animate property cards
    document.querySelectorAll('.property-card, .feature-box, .blog-card, .value-card, .advantage-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
    setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        }, index * 200);
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
        el.style.transition = 'all 0.6s ease';
    });
});

// ACTIVE NAV LINK ON SCROLL (for single page)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// LAZY LOADING IMAGES
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// PROGRESS BAR ANIMATION
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// LOG TO CONSOLE
console.log('%cKilifi Properties', 'color: #976413; font-size: 24px; font-weight: bold;');
console.log('%cBuilding Dreams, Securing Futures', 'color: #666; font-size: 14px;');
console.log('Website loaded successfully!');

// WHATSAPP CLICK HANDLER
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
    });
});

// PHONE CLICK HANDLER
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked');
    });
});

// PREVENT FORM DOUBLE SUBMISSION
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    let isSubmitting = false;
    
    form.addEventListener('submit', (e) => {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }
        
        isSubmitting = true;
        
        // Reset after 3 seconds
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    });
});

// DETECT MOBILE DEVICE
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    document.body.classList.add('mobile-device');
    console.log('Mobile device detected');
}

// PAGE VISIBILITY API
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is now hidden');
    } else {
        console.log('Page is now visible');
    }
});

// CAROUSEL FUNCTIONALITY
function initCarousel() {
    slides = document.querySelectorAll('.carousel-slide');
    dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Start auto slide
    startAutoSlide();
    
    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoSlide);
        carouselContainer.addEventListener('mouseleave', startAutoSlide);
    }
}

function changeSlide(direction) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide += direction;
    
    // Loop around if needed
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset auto slide timer
    stopAutoSlide();
    startAutoSlide();
}

function goToSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set new slide index
    currentSlide = index;
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset auto slide timer
    stopAutoSlide();
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (slides.length === 0) return;
    
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (slides.length === 0) return;
    
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Initialize carousel on page load
window.addEventListener('load', () => {
    initCarousel();
});

// FLOATING SOCIAL MEDIA WIDGET
const socialToggleBtn = document.getElementById('socialToggleBtn');
const socialIconsList = document.getElementById('socialIconsList');

if (socialToggleBtn && socialIconsList) {
    socialToggleBtn.addEventListener('click', function() {
        socialToggleBtn.classList.toggle('active');
        socialIconsList.classList.toggle('active');
    });

    // Close social icons when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.floating-social-widget')) {
            socialToggleBtn.classList.remove('active');
            socialIconsList.classList.remove('active');
        }
    });

    // Prevent clicks inside widget from closing it
    document.querySelector('.floating-social-widget')?.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// PROPERTY FILTERING SYSTEM (For Lands Page)
const searchInput = document.getElementById('searchInput');
const locationFilter = document.getElementById('locationFilter');
const priceFilter = document.getElementById('priceFilter');
const typeFilter = document.getElementById('typeFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const propertiesGrid = document.getElementById('propertiesGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');

if (searchInput && locationFilter && priceFilter && typeFilter) {
    // Add event listeners to all filters
    searchInput.addEventListener('input', filterProperties);
    locationFilter.addEventListener('change', filterProperties);
    priceFilter.addEventListener('change', filterProperties);
    typeFilter.addEventListener('change', filterProperties);
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetAllFilters);
    }
}

function filterProperties() {
    if (!propertiesGrid) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedLocation = locationFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedType = typeFilter.value;
    
    const properties = propertiesGrid.querySelectorAll('.property-card');
    let visibleCount = 0;
    
    properties.forEach(property => {
        const name = property.getAttribute('data-name').toLowerCase();
        const location = property.getAttribute('data-location');
        const price = parseInt(property.getAttribute('data-price'));
        const type = property.getAttribute('data-type');
        
        // Check search term
        const matchesSearch = name.includes(searchTerm);
        
        // Check location filter
        const matchesLocation = !selectedLocation || location === selectedLocation;
        
        // Check price filter
        let matchesPrice = true;
        if (selectedPrice) {
            if (selectedPrice.includes('-')) {
                const [min, max] = selectedPrice.split('-').map(Number);
                matchesPrice = price >= min && price <= max;
            } else if (selectedPrice.includes('+')) {
                const min = parseInt(selectedPrice);
                matchesPrice = price >= min;
            }
        }
        
        // Check type filter
        const matchesType = !selectedType || type === selectedType;
        
        // Show or hide property
        if (matchesSearch && matchesLocation && matchesPrice && matchesType) {
            property.style.display = 'block';
            visibleCount++;
            // Add animation
            property.style.animation = 'fadeIn 0.5s ease';
        } else {
            property.style.display = 'none';
        }
    });
    
    // Update results count
    if (resultsCount) {
        resultsCount.querySelector('span').textContent = visibleCount;
    }
    
    // Show/hide no results message
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
            propertiesGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            propertiesGrid.style.display = 'grid';
        }
    }
}

function resetAllFilters() {
    if (searchInput) searchInput.value = '';
    if (locationFilter) locationFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (typeFilter) typeFilter.value = '';
    filterProperties();
}

// VIEW PROPERTY DETAILS FUNCTION
function viewPropertyDetails(propertyId) {
    // Create a modal or redirect to a detail page
    // For now, we'll open the booking modal with the property pre-selected
    openBookingModal();
    
    // Pre-select the property in the booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        const selectElement = bookingForm.querySelector('select');
        if (selectElement) {
            selectElement.value = propertyId;
        }
    }
}

// INITIALIZE
console.log('Kilifi Properties - All systems initialized!');
