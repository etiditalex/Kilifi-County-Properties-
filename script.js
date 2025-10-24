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

// GALLERY FILTER FUNCTIONALITY
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all') {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                if (item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});

// LIGHTBOX FUNCTIONALITY
let currentLightboxIndex = 0;
const lightboxImages = [
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207123/Msabaha_Phase_6_hifwdu.jpg',
        title: 'Msabaha Phase 6',
        description: 'Premium Residential Plots'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207041/Malindi_Airport_View_Gardens_dsbvqb.jpg',
        title: 'Malindi Airport View Gardens',
        description: 'Strategic Location'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761206926/Mtondia_Higway_Gardens_kxrkqr.jpg',
        title: 'Mtondia Highway Gardens',
        description: 'Highway Access'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207123/Msabaha_Phase_6_hifwdu.jpg',
        title: 'Road Infrastructure',
        description: 'Well-Planned Roads'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761206926/Mtondia_Higway_Gardens_kxrkqr.jpg',
        title: 'Utilities & Amenities',
        description: 'Modern Infrastructure'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207041/Malindi_Airport_View_Gardens_dsbvqb.jpg',
        title: 'Aerial View',
        description: "Bird's Eye Perspective"
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207123/Msabaha_Phase_6_hifwdu.jpg',
        title: 'Development Progress',
        description: 'Ongoing Projects'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761206926/Mtondia_Higway_Gardens_kxrkqr.jpg',
        title: 'Completed Projects',
        description: 'Success Stories'
    },
    {
        src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1761207041/Malindi_Airport_View_Gardens_dsbvqb.jpg',
        title: 'Prime Land Plots',
        description: 'Investment Opportunities'
    }
];

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = lightboxImages[index].src;
        lightboxTitle.textContent = lightboxImages[index].title;
        lightboxDescription.textContent = lightboxImages[index].description;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex >= lightboxImages.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = lightboxImages.length - 1;
    }
    
    openLightbox(currentLightboxIndex);
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        changeLightboxImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeLightboxImage(1);
    }
});

// Close lightbox when clicking outside image
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// STAR RATING INPUT (Reviews Page)
const starRating = document.getElementById('starRating');
const ratingValue = document.getElementById('ratingValue');

if (starRating) {
    const stars = starRating.querySelectorAll('i');
    
    stars.forEach((star, index) => {
        // Click event
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            ratingValue.value = rating;
            
            // Update star display
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseenter', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Reset on mouse leave
    starRating.addEventListener('mouseleave', () => {
        const currentRating = ratingValue.value;
        stars.forEach((s, i) => {
            if (i < currentRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
}

// REVIEW FORM SUBMISSION - Send to WhatsApp
const reviewForm = document.getElementById('reviewForm');

if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = reviewForm.querySelector('input[type="text"]').value;
        const email = reviewForm.querySelector('input[type="email"]').value;
        const phone = reviewForm.querySelector('input[type="tel"]').value;
        const property = reviewForm.querySelector('select').value;
        const propertyText = reviewForm.querySelector('select option:checked').text;
        const rating = ratingValue ? ratingValue.value : '5';
        const reviewText = reviewForm.querySelector('textarea').value;
        
        // Format message for WhatsApp
        let message = `*NEW CUSTOMER REVIEW*\n\n`;
        message += `*Name:* ${name}\n`;
        message += `*Email:* ${email}\n`;
        if (phone) {
            message += `*Phone:* ${phone}\n`;
        }
        if (property) {
            message += `*Property:* ${propertyText}\n`;
        }
        message += `*Rating:* ${'⭐'.repeat(rating)} (${rating}/5)\n\n`;
        message += `*Review:*\n${reviewText}\n`;
        message += `\n_Submitted from Kilifi Properties Website_`;
        
        // WhatsApp number
        const whatsappNumber = '254724367338';
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Show success message
        showNotification('Thank you for your review! Opening WhatsApp to submit...', 'success');
        
        // Reset form
        reviewForm.reset();
        
        // Reset stars
        if (starRating) {
            const stars = starRating.querySelectorAll('i');
            stars.forEach(s => {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
            });
        }
    });
}

/* ==========================================
   NELIUS BOT - AI CHATBOT
   ========================================== */

const chatbot = {
    isOpen: false,
    conversationStarted: false,
    
    // Knowledge base about Kilifi Properties
    knowledge: {
        properties: [
            { 
                name: "Msabaha Phase 6", 
                location: "Kilifi", 
                price: "KSh 450,000", 
                deposit: "KSh 150,000",
                balance: "12 months",
                size: "50x100 ft", 
                features: "Near Mombasa-Malindi Road, ready title deeds" 
            },
            { 
                name: "Mtondia Highway", 
                location: "Kilifi", 
                price: "KSh 995,000", 
                originalPrice: "KSh 1,250,000",
                deposit: "KSh 500,000",
                balance: "12 months",
                size: "50x100 ft", 
                features: "Special offer! Strategic highway location, high ROI potential" 
            },
            { 
                name: "Malindi Airport View Gardens", 
                location: "Malindi", 
                price: "KSh 950,000", 
                deposit: "KSh 400,000",
                balance: "12 months",
                size: "50x100 ft", 
                features: "Near airport, premium location, ideal for commercial use" 
            }
        ],
        contact: {
            phone: "+254 724 367338",
            email: "info@kilifiproperties.co.ke",
            location: "Coast Road, Kilifi County",
            hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM"
        },
        services: [
            "Genuine titled land for sale",
            "Free site visits",
            "Flexible payment plans",
            "Title processing assistance",
            "Property consultancy"
        ]
    },
    
    // AI Response Engine
    generateResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Greetings
        if (/^(hi|hello|hey|good morning|good afternoon|good evening|hola|jambo)/i.test(message)) {
            const greetings = [
                "Hello! 👋 I'm Nelius Bot, your AI property assistant. How can I help you find your dream plot today?",
                "Hi there! 🌟 Welcome to Kilifi Properties! I'm Nelius Bot, ready to help you with land investments.",
                "Hey! 😊 I'm Nelius Bot. Looking for the perfect piece of land? I'm here to guide you!",
                "Jambo! 🏡 I'm Nelius Bot, your smart property guide. What can I help you discover today?"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        // Property inquiries
        if (/properties|land|plot|available|buy|purchase|sell/i.test(message)) {
            let response = "🏡 <strong>Available Properties:</strong><br><br>";
            this.knowledge.properties.forEach((prop, index) => {
                response += `<strong>${index + 1}. ${prop.name}</strong><br>`;
                response += `📍 Location: ${prop.location}<br>`;
                if (prop.originalPrice) {
                    response += `💰 Price: <span style="text-decoration: line-through; color: #999;">${prop.originalPrice}</span> <strong style="color: #d4af37;">${prop.price}</strong> <span style="background: #d4af37; color: white; padding: 2px 8px; border-radius: 5px; font-size: 0.8em;">OFFER!</span><br>`;
                } else {
                    response += `💰 Price: ${prop.price}<br>`;
                }
                response += `💳 Deposit: ${prop.deposit}<br>`;
                response += `📅 Balance: ${prop.balance}<br>`;
                response += `📏 Size: ${prop.size}<br>`;
                response += `✨ ${prop.features}<br><br>`;
            });
            response += "Would you like to book a site visit or need more details? 📞";
            return response;
        }
        
        // Price inquiries
        if (/price|cost|how much|expensive|cheap|afford/i.test(message)) {
            return "💰 <strong>Current Property Prices:</strong><br><br>" +
                   "• <strong>Msabaha Phase 6:</strong> KSh 450,000<br>" +
                   "  📍 Deposit: KSh 150,000 | Balance: 12 months<br><br>" +
                   "• <strong>Mtondia Highway:</strong> <span style='text-decoration: line-through;'>KSh 1,250,000</span> <strong style='color: #d4af37;'>KSh 995,000</strong> <span style='background: #d4af37; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;'>SPECIAL OFFER!</span><br>" +
                   "  📍 Deposit: KSh 500,000 | Balance: 12 months<br><br>" +
                   "• <strong>Malindi Airport:</strong> KSh 950,000<br>" +
                   "  📍 Deposit: KSh 400,000 | Balance: 12 months<br><br>" +
                   "We offer <strong>flexible 12-month payment plans</strong> to suit your budget! 💳<br>" +
                   "Would you like to discuss these options?";
        }
        
        // Location inquiries
        if (/location|where|kilifi|malindi|watamu|nyali|mtwapa|mtondia|highway|area/i.test(message)) {
            return "📍 <strong>We have properties in prime coastal locations:</strong><br><br>" +
                   "• <strong>Msabaha Phase 6, Kilifi</strong> - Near Mombasa-Malindi Road (KSh 450,000)<br>" +
                   "• <strong>Mtondia Highway, Kilifi</strong> - Strategic highway location <span style='background: #d4af37; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75em;'>OFFER!</span> (KSh 995,000)<br>" +
                   "• <strong>Malindi Airport View Gardens</strong> - Near airport, premium location (KSh 950,000)<br><br>" +
                   "All locations come with <strong>genuine title deeds</strong> and flexible 12-month payment plans! 📄";
        }
        
        // Site visit inquiries
        if (/visit|see|view|tour|inspect|check/i.test(message)) {
            return "👁️ <strong>Free Site Visits Available!</strong><br><br>" +
                   "We offer complimentary site visits to all our properties. Our team will guide you through the plots and answer all your questions.<br><br>" +
                   "📅 Book your site visit now! Click the 'Book Site Visit' button at the top of the page, or I can connect you directly with our team.<br><br>" +
                   "Would you like to schedule a visit?";
        }
        
        // Contact inquiries
        if (/contact|call|phone|email|reach|talk|speak|whatsapp/i.test(message)) {
            return "📞 <strong>Contact Kilifi Properties:</strong><br><br>" +
                   `• <strong>Phone/WhatsApp:</strong> ${this.knowledge.contact.phone}<br>` +
                   `• <strong>Email:</strong> ${this.knowledge.contact.email}<br>` +
                   `• <strong>Office:</strong> ${this.knowledge.contact.location}<br>` +
                   `• <strong>Hours:</strong> ${this.knowledge.contact.hours}<br><br>` +
                   "Click the WhatsApp icon to chat directly with our team! 💬";
        }
        
        // Payment plan inquiries
        if (/payment|install|plan|down payment|deposit|balance/i.test(message)) {
            return "💳 <strong>Flexible 12-Month Payment Plans:</strong><br><br>" +
                   "All our properties come with affordable payment options:<br><br>" +
                   "📋 <strong>Payment Structure:</strong><br>" +
                   "• <strong>Msabaha Phase 6:</strong> Deposit KSh 150,000 + 12 monthly installments<br>" +
                   "• <strong>Mtondia Highway:</strong> Deposit KSh 500,000 + 12 monthly installments<br>" +
                   "• <strong>Malindi Airport:</strong> Deposit KSh 400,000 + 12 monthly installments<br><br>" +
                   "✅ No hidden charges<br>" +
                   "✅ Clear payment terms<br>" +
                   "✅ Title deed upon completion<br><br>" +
                   "Contact us to discuss a plan that works for you! 📞 " + this.knowledge.contact.phone;
        }
        
        // Title deed inquiries
        if (/title|deed|ownership|genuine|legal|document/i.test(message)) {
            return "📄 <strong>100% Genuine Title Deeds!</strong><br><br>" +
                   "All our properties come with:<br><br>" +
                   "✅ Verified and genuine title deeds<br>" +
                   "✅ Clean ownership history<br>" +
                   "✅ Legal documentation support<br>" +
                   "✅ Title processing assistance<br><br>" +
                   "Your investment is secure with us! 🔒";
        }
        
        // About Nelius Nelly
        if (/nelius|nelly|ceo|founder|owner|who owns/i.test(message)) {
            return "👩‍💼 <strong>Meet Nelius Nelly - CEO & Founder</strong><br><br>" +
                   "Nelius Nelly is our visionary founder with over 10+ years of experience in Kenya's real estate industry.<br><br>" +
                   "• Sales Representative at Inuka Afrika Properties<br>" +
                   "• Prominent role in coastal region real estate<br>" +
                   "• Mission: Connect buyers with sellers & change lives<br><br>" +
                   "Her dedication has helped 500+ clients find their dream plots! 🌟<br><br>" +
                   "Learn more on our About page!";
        }
        
        // Investment advice
        if (/invest|investment|good|worth|benefit|advantage/i.test(message)) {
            return "💎 <strong>Why Invest in Kilifi Properties?</strong><br><br>" +
                   "✅ Prime coastal locations with high appreciation<br>" +
                   "✅ 100% genuine title deeds<br>" +
                   "✅ Strategic locations near major roads & beaches<br>" +
                   "✅ Growing tourism & infrastructure development<br>" +
                   "✅ Flexible payment plans<br>" +
                   "✅ Expert guidance from experienced team<br><br>" +
                   "Land is the best investment you can make! 🏡";
        }
        
        // Thank you
        if (/thank|thanks|appreciate|grateful/i.test(message)) {
            return "You're very welcome! 😊 I'm always here to help. Is there anything else you'd like to know about our properties or services?";
        }
        
        // Goodbye
        if (/bye|goodbye|see you|later|exit|close/i.test(message)) {
            return "Thank you for chatting with me! 👋 Feel free to return anytime. Don't forget to book a site visit or contact us at " + this.knowledge.contact.phone + ". Have a wonderful day! 🌟";
        }
        
        // Help
        if (/help|assist|support|what can you do/i.test(message)) {
            return "🤖 <strong>I'm Nelius Bot, your AI property assistant!</strong><br><br>" +
                   "I can help you with:<br><br>" +
                   "• Available properties & pricing<br>" +
                   "• Location information<br>" +
                   "• Booking site visits<br>" +
                   "• Payment plans<br>" +
                   "• Title deed information<br>" +
                   "• Contact details<br>" +
                   "• Investment advice<br><br>" +
                   "Just ask me anything about Kilifi Properties! 💬";
        }
        
        // Default response for unrecognized queries
        return "🤔 I'm here to help! I can assist with:<br><br>" +
               "• <strong>Properties:</strong> Ask about available land<br>" +
               "• <strong>Prices:</strong> Get pricing information<br>" +
               "• <strong>Locations:</strong> Learn about our areas<br>" +
               "• <strong>Site Visits:</strong> Schedule a tour<br>" +
               "• <strong>Contact:</strong> Get in touch with our team<br><br>" +
               "Or chat directly with our team via WhatsApp: " + this.knowledge.contact.phone + " 📱";
    },
    
    // Initialize chatbot
    init() {
        const chatbotBtn = document.getElementById('chatbotBtn');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const closeChatbot = document.getElementById('closeChatbot');
        const minimizeChatbot = document.getElementById('minimizeChatbot');
        const chatMessages = document.getElementById('chatMessages');
        const userInput = document.getElementById('userInput');
        const sendMessage = document.getElementById('sendMessage');
        
        // Toggle chatbot
        if (chatbotBtn) {
            chatbotBtn.addEventListener('click', () => {
                this.isOpen = !this.isOpen;
                chatbotWindow.classList.toggle('open');
                chatbotBtn.style.display = this.isOpen ? 'none' : 'flex';
                
                // Send welcome message on first open
                if (this.isOpen && !this.conversationStarted) {
                    setTimeout(() => {
                        this.addMessage(
                            "👋 Hello! I'm <strong>Nelius Bot</strong>, your AI property assistant!<br><br>" +
                            "I'm here to help you find the perfect plot of land in Kilifi County. " +
                            "Ask me about properties, prices, locations, or anything else!<br><br>" +
                            "How can I assist you today? 😊",
                            'bot'
                        );
                        this.conversationStarted = true;
                    }, 500);
                }
                
                // Focus input when opened
                if (this.isOpen) {
                    userInput.focus();
                }
            });
        }
        
        // Close chatbot
        if (closeChatbot) {
            closeChatbot.addEventListener('click', () => {
                this.isOpen = false;
                chatbotWindow.classList.remove('open');
                chatbotBtn.style.display = 'flex';
            });
        }
        
        // Minimize chatbot
        if (minimizeChatbot) {
            minimizeChatbot.addEventListener('click', () => {
                this.isOpen = false;
                chatbotWindow.classList.remove('open');
                chatbotBtn.style.display = 'flex';
            });
        }
        
        // Send message on button click
        if (sendMessage) {
            sendMessage.addEventListener('click', () => {
                this.handleUserMessage();
            });
        }
        
        // Send message on Enter key
        if (userInput) {
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleUserMessage();
                }
            });
        }
        
        // Quick action buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chatbot-quick-btn')) {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            }
        });
    },
    
    // Handle user message
    handleUserMessage() {
        const userInput = document.getElementById('userInput');
        const message = userInput.value.trim();
        
        if (message) {
            // Add user message
            this.addMessage(message, 'user');
            userInput.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Generate bot response after delay
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateResponse(message);
                this.addMessage(response, 'bot');
            }, 1000 + Math.random() * 1000); // Random delay for realism
        }
    },
    
    // Handle quick actions
    handleQuickAction(action) {
        const actions = {
            'properties': 'Show me available properties',
            'prices': 'What are your prices?',
            'contact': 'How can I contact you?',
            'visit': 'I want to book a site visit'
        };
        
        const message = actions[action];
        if (message) {
            document.getElementById('userInput').value = message;
            this.handleUserMessage();
        }
    },
    
    // Add message to chat
    addMessage(text, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}-message`;
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${this.getCurrentTime()}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${text}</div>
                    <div class="message-time">${this.getCurrentTime()}</div>
                </div>
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Add quick action buttons after first bot message
        if (sender === 'bot' && chatMessages.children.length === 1) {
            this.addQuickActions();
        }
    },
    
    // Add quick action buttons
    addQuickActions() {
        const chatMessages = document.getElementById('chatMessages');
        const quickActionsDiv = document.createElement('div');
        quickActionsDiv.className = 'chatbot-quick-actions';
        quickActionsDiv.innerHTML = `
            <p class="quick-actions-title">Quick Actions:</p>
            <button class="chatbot-quick-btn" data-action="properties">
                <i class="fas fa-home"></i> View Properties
            </button>
            <button class="chatbot-quick-btn" data-action="prices">
                <i class="fas fa-tag"></i> Check Prices
            </button>
            <button class="chatbot-quick-btn" data-action="contact">
                <i class="fas fa-phone"></i> Contact Us
            </button>
            <button class="chatbot-quick-btn" data-action="visit">
                <i class="fas fa-calendar"></i> Book Visit
            </button>
        `;
        chatMessages.appendChild(quickActionsDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },
    
    // Show typing indicator
    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typingIndicator';
        typingDiv.className = 'chatbot-message bot-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    },
    
    // Hide typing indicator
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    },
    
    // Get current time
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    },
    
    // Show notification bubble
    showNotificationBubble() {
        const chatbotBtn = document.getElementById('chatbotBtn');
        if (!chatbotBtn) return;
        
        // Create notification bubble
        const notification = document.createElement('div');
        notification.className = 'chatbot-notification';
        notification.innerHTML = `
            <div class="chatbot-notification-content">
                <div class="chatbot-notification-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="chatbot-notification-text">
                    <strong>Hi! I'm Nelius Bot 👋</strong>
                    <p>Need help finding land? Click to chat!</p>
                </div>
                <button class="chatbot-notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add to chatbot container
        const container = document.querySelector('.chatbot-container');
        if (container) {
            container.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Auto-hide after 10 seconds
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }
            }, 10000);
            
            // Click notification to open chat
            notification.addEventListener('click', (e) => {
                if (!e.target.closest('.chatbot-notification-close')) {
                    notification.remove();
                    chatbotBtn.click();
                }
            });
        }
    }
};

/* ==========================================
   COOKIE CONSENT BANNER
   ========================================== */

const cookieConsent = {
    // Check if user has already made a choice
    hasConsent() {
        return localStorage.getItem('cookieConsent') !== null;
    },
    
    // Get user's consent choice
    getConsent() {
        return localStorage.getItem('cookieConsent');
    },
    
    // Set user's consent choice
    setConsent(value) {
        localStorage.setItem('cookieConsent', value);
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
    },
    
    // Show cookie banner
    show() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            setTimeout(() => {
                banner.classList.add('show');
            }, 1000); // Show after 1 second
        }
    },
    
    // Hide cookie banner
    hide() {
        const banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.classList.remove('show');
        }
    },
    
    // Accept cookies
    accept() {
        this.setConsent('accepted');
        this.hide();
        showNotification('✅ Cookie preferences saved! Thank you.', 'success');
        // Enable analytics or other cookie-dependent features here
        console.log('Cookies accepted');
    },
    
    // Decline cookies
    decline() {
        this.setConsent('declined');
        this.hide();
        showNotification('Cookies declined. Some features may be limited.', 'info');
        // Disable analytics or other cookie-dependent features here
        console.log('Cookies declined');
    },
    
    // Open settings (redirect to cookie policy page)
    settings() {
        window.location.href = 'cookies.html';
    },
    
    // Initialize cookie consent
    init() {
        // Check if user has already made a choice
        if (!this.hasConsent()) {
            // Show banner if no choice has been made
            this.show();
        } else {
            console.log('Cookie consent already given:', this.getConsent());
        }
        
        // Setup event listeners
        const acceptBtn = document.getElementById('acceptCookies');
        const declineBtn = document.getElementById('declineCookies');
        const settingsBtn = document.getElementById('cookieSettings');
        
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => this.accept());
        }
        
        if (declineBtn) {
            declineBtn.addEventListener('click', () => this.decline());
        }
        
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.settings());
        }
    }
};

// Initialize Nelius Bot and Cookie Consent
document.addEventListener('DOMContentLoaded', () => {
    chatbot.init();
    cookieConsent.init();
    
    // Show Nelius Bot notification after cookie banner (if cookies not accepted yet)
    const delay = cookieConsent.hasConsent() ? 2000 : 5000;
    setTimeout(() => {
        chatbot.showNotificationBubble();
    }, delay);
});

// INITIALIZE
console.log('Kilifi Properties - All systems initialized!');
