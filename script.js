// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const bookingBtn = document.querySelector('.booking-btn');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close');
    const contactForm = document.getElementById('contact-form');
    const bookingForm = document.getElementById('booking-form');
    const propertiesGrid = document.getElementById('properties-grid');
    const rentalPropertiesGrid = document.getElementById('rental-properties-grid');

    // Carousel Elements
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    // Services Carousel Functionality
    let currentServicesSlide = 0;
    const servicesCarousel = document.querySelector('.services-carousel');
    const serviceCards = document.querySelectorAll('.service-card');
    const servicesIndicators = document.querySelectorAll('.services-carousel-indicators .indicator');

    function moveServicesCarousel(direction) {
        const totalSlides = serviceCards.length;
        currentServicesSlide += direction;
        
        if (currentServicesSlide >= totalSlides) {
            currentServicesSlide = 0;
        } else if (currentServicesSlide < 0) {
            currentServicesSlide = totalSlides - 1;
        }
        
        updateServicesCarousel();
    }

    function goToServicesSlide(slideIndex) {
        currentServicesSlide = slideIndex;
        updateServicesCarousel();
    }

    function updateServicesCarousel() {
        if (!servicesCarousel) return;
        
        const cardWidth = serviceCards[0].offsetWidth + 30; // Including gap
        const translateX = -currentServicesSlide * cardWidth;
        
        servicesCarousel.style.transform = `translateX(${translateX}px)`;
        
        // Update indicators
        servicesIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentServicesSlide);
        });
    }

    // Auto-play services carousel
    function autoPlayServicesCarousel() {
        setInterval(() => {
            moveServicesCarousel(1);
        }, 5000); // Change slide every 5 seconds
    }

    // Initialize services carousel
    if (servicesCarousel && serviceCards.length > 0) {
        updateServicesCarousel();
        autoPlayServicesCarousel();
    }
    
    // Make functions globally available
    window.moveServicesCarousel = moveServicesCarousel;
    window.goToServicesSlide = goToServicesSlide;

    // Sample Properties Data
    const properties = [
        {
            id: 1,
            title: "Bahari Gardens",
            location: "Nyali Beach",
            price: "KSh 8,500,000",
            type: "Villa",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1wwrKolFzczcthFfe3WOgpu1OGW-5nSdT&sz=w800",
            features: {
                bedrooms: 4,
                bathrooms: 3,
                sqft: "3,200"
            },
            description: "Luxurious beachfront villa with stunning ocean views"
        },
        {
            id: 2,
            title: "Shanzu Modern Apartment",
            location: "Shanzu Heights",
            price: "KSh 2,200,000",
            type: "Apartment",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1Agrjh7dK-SnYQrQGRT6fw8Ik7z2lzKVb&sz=w800",
            features: {
                bedrooms: 2,
                bathrooms: 2,
                sqft: "1,400"
            },
            description: "Modern apartment with city views and amenities"
        },
        {
            id: 3,
            title: "Kilifi Creek House",
            location: "Kilifi Creek",
            price: "KSh 6,800,000",
            type: "House",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1k8m3MhLIAZMboLcqAPEDF6ECUnzGB2Qz&sz=w800",
            features: {
                bedrooms: 3,
                bathrooms: 2,
                sqft: "2,500"
            },
            description: "Beautiful house with creek views and private garden"
        },
        {
            id: 4,
            title: "Mtwapa Luxury Condo",
            location: "Mtwapa",
            price: "KSh 4,500,000",
            type: "Condo",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1TZIzuEPs2GbvvBxY62DMLO3OaNDLZV_Y&sz=w800",
            features: {
                bedrooms: 3,
                bathrooms: 2,
                sqft: "1,800"
            },
            description: "Luxury condo with modern amenities and pool access"
        },
        {
            id: 5,
            title: "Vipingo Beach House",
            location: "Vipingo Beach",
            price: "KSh 12,000,000",
            type: "Villa",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1kmMYN9N817VC9RVCvqRSw-3o595cRWUN&sz=w800",
            features: {
                bedrooms: 5,
                bathrooms: 4,
                sqft: "4,500"
            },
            description: "Exclusive beachfront villa with private access"
        },
        {
            id: 6,
            title: "Bahari Gardens Condo",
            location: "Nyali Beach",
            price: "KSh 3,800,000",
            type: "Condo",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=11LddcvzjKdOnPd88xJ6EqxPy9l0z4dN5&sz=w800",
            features: {
                bedrooms: 2,
                bathrooms: 2,
                sqft: "1,200"
            },
            description: "Beachfront condo with stunning ocean views"
        },
        {
            id: 7,
            title: "Kilifi Garden Villa",
            location: "Kilifi Creek",
            price: "KSh 5,200,000",
            type: "Villa",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=14P_zNrTmw93BkP8yI5jhVPF6EMBXEmQn&sz=w800",
            features: {
                bedrooms: 3,
                bathrooms: 3,
                sqft: "2,800"
            },
            description: "Garden villa with creek views and private pool"
        },
        {
            id: 8,
            title: "Shanzu Modern Apartment",
            location: "Shanzu Heights",
            price: "KSh 1,800,000",
            type: "Apartment",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1-lvRkwnQEwVNSLY09NErQrLZETTdii6H&sz=w800",
            features: {
                bedrooms: 2,
                bathrooms: 1,
                sqft: "1,100"
            },
            description: "Modern apartment with city views"
        },
        {
            id: 9,
            title: "Nyali Rental Apartment",
            location: "Nyali",
            price: "KSh 85,000/month",
            type: "Apartment",
            status: "For Rent",
            image: "https://drive.google.com/thumbnail?id=13TqFS3aOHYeyo97CYbVDy1cmfwrM5SL-&sz=w800",
            features: {
                bedrooms: 2,
                bathrooms: 2,
                sqft: "1,200"
            },
            description: "Furnished apartment for rent"
        },
        {
            id: 10,
            title: "Kilifi Beach House Rental",
            location: "Kilifi Beach",
            price: "KSh 120,000/month",
            type: "House",
            status: "For Rent",
            image: "https://drive.google.com/thumbnail?id=1JzvjuhlUOg998dXJzlrDOVForTyGZ8xo&sz=w800",
            features: {
                bedrooms: 3,
                bathrooms: 2,
                sqft: "2,000"
            },
            description: "Beachfront house for rent with private access"
        },
        {
            id: 11,
            title: "Shanzu Studio Apartment",
            location: "Shanzu",
            price: "KSh 45,000/month",
            type: "Studio",
            status: "For Rent",
            image: "https://drive.google.com/thumbnail?id=1B9iQYacX9d2l1EVhm_zdRQsyjQ5nYxin&sz=w800",
            features: {
                bedrooms: 1,
                bathrooms: 1,
                sqft: "600"
            },
            description: "Cozy studio apartment in prime location"
        },
        {
            id: 12,
            title: "Mtwapa Villa Rental",
            location: "Mtwapa",
            price: "KSh 180,000/month",
            type: "Villa",
            status: "For Rent",
            image: "https://drive.google.com/thumbnail?id=1hOSOcDgH6HsHuYMx0LCBxZbGossLTjQ1&sz=w800",
            features: {
                bedrooms: 4,
                bathrooms: 3,
                sqft: "3,500"
            },
            description: "Luxury villa rental with pool and garden"
        },
        {
            id: 13,
            title: "Vipingo Luxury Villa",
            location: "Vipingo",
            price: "KSh 15,000,000",
            type: "Villa",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1EleWdFwCEp8aFgJQ6XcpJjlqrxpdjVLo&sz=w800",
            features: {
                bedrooms: 6,
                bathrooms: 5,
                sqft: "5,200"
            },
            description: "Ultra-luxury villa with panoramic ocean views"
        },
        {
            id: 14,
            title: "Nyali Penthouse",
            location: "Nyali",
            price: "KSh 9,500,000",
            type: "Penthouse",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1-rVtR9LAVBoVQDBiWCJmyX2xVwbHHnab&sz=w800",
            features: {
                bedrooms: 4,
                bathrooms: 3,
                sqft: "3,800"
            },
            description: "Exclusive penthouse with rooftop terrace"
        },
        {
            id: 15,
            title: "Kilifi Executive Apartment",
            location: "Kilifi",
            price: "KSh 3,200,000",
            type: "Apartment",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=1a1fm-vV_kMIbX6pNqf5VCEY-uAX98M_7&sz=w800",
            features: {
                bedrooms: 3,
                bathrooms: 2,
                sqft: "1,600"
            },
            description: "Executive apartment with premium finishes"
        },
        {
            id: 16,
            title: "Shanzu Beach Villa",
            location: "Shanzu Beach",
            price: "KSh 7,800,000",
            type: "Villa",
            status: "For Sale",
            image: "https://drive.google.com/thumbnail?id=16_1NFzGRAqfgtm0-mcg0vHmPqd7f9sEH&sz=w800",
            features: {
                bedrooms: 4,
                bathrooms: 3,
                sqft: "3,200"
            },
            description: "Beachfront villa with private pool and garden"
        },
        {
            id: 17,
            title: "Bofa Phase 21",
            location: "Kilifi",
            price: "KSh 2,500,000",
            type: "Apartment",
            status: "For Sale",
            image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1760192119/Bofa_phase_21_12_alld8l.jpg",
            features: {
                bedrooms: 2,
                bathrooms: 2,
                sqft: "1,200"
            },
            description: "Modern apartment in Bofa Phase 21 development with contemporary design and premium amenities"
        }
    ];

    // Remove loading screen immediately
    function removeLoader() {
        const existingLoader = document.querySelector('.loader');
        if (existingLoader) {
            existingLoader.style.opacity = '0';
            setTimeout(() => {
                if (existingLoader.parentNode) {
                    existingLoader.remove();
                }
            }, 300);
        }
    }

    // Remove loader immediately
    removeLoader();

    // Carousel Functions
    function showSlide(index) {
        // Remove active class from all slides and indicators
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        carouselSlides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % carouselSlides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(prev);
    }

    // Carousel Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-advance carousel
    let carouselInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    // Mobile Menu Toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Close all dropdown menus when hamburger menu is closed
            if (!hamburger.classList.contains('active')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    }
    
    // Mobile Dropdown Menu Toggle
    const dropdownLinks = document.querySelectorAll('.dropdown .nav-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = link.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    // Close all other dropdown menus first
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdownMenu) {
                            menu.classList.remove('show');
                        }
                    });
                    // Toggle current dropdown
                    dropdownMenu.classList.toggle('show');
                    
                    // Add visual feedback to the link
                    link.classList.toggle('active');
                }
            }
        });
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            
            // Close all dropdown menus on mobile
            if (window.innerWidth <= 768) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    });

    // Booking Modal
    if (bookingBtn && modal) {
        bookingBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active Navigation Link on Scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Property Card Template
    function createPropertyCard(property) {
        const features = property.features;
        const featureItems = [];
        
        if (features.bedrooms) {
            featureItems.push(`<span class="property-feature"><i class="fas fa-bed"></i> ${features.bedrooms} Beds</span>`);
        }
        if (features.bathrooms) {
            featureItems.push(`<span class="property-feature"><i class="fas fa-bath"></i> ${features.bathrooms} Baths</span>`);
        }
        if (features.sqft) {
            featureItems.push(`<span class="property-feature"><i class="fas fa-ruler-combined"></i> ${features.sqft} sqft</span>`);
        }
        if (features.floors) {
            featureItems.push(`<span class="property-feature"><i class="fas fa-building"></i> ${features.floors} Floors</span>`);
        }
        if (features.parking) {
            featureItems.push(`<span class="property-feature"><i class="fas fa-car"></i> ${features.parking}</span>`);
        }

        // Determine status badge text and style
        let statusText = property.status;
        if (property.status === 'For Sale') {
            statusText = 'Available Now';
        } else if (property.status === 'For Rent') {
            statusText = 'Available Now';
        }

        // Create property title with bedroom count
        const bedroomCount = features.bedrooms ? `${features.bedrooms} Bedroom` : '';
        const propertyTitle = `${property.title.toUpperCase()} | ${bedroomCount}`;

        return `
            <div class="property-card" data-id="${property.id}">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}" onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    <div class="property-status">${statusText}</div>
                </div>
                <div class="property-content">
                    <div class="property-header">
                        <h3>${propertyTitle}</h3>
                        <div class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}, Kenya
                        </div>
                    </div>
                    <div class="property-price">${property.price}</div>
                    <div class="property-actions">
                        <a href="#" class="btn btn-primary" onclick="viewProperty(${property.id})">
                            <i class="fas fa-phone"></i> Contact Us
                        </a>
                        <a href="#" class="btn btn-outline" onclick="bookViewing(${property.id})">
                            More Information
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Create Horizontal Property Card for Homepage (same as for-sale/for-rent)
    function createHorizontalPropertyCard(property) {
        const features = property.features;
        
        // Determine status badge text and style
        let statusText = property.status;
        if (property.status === 'For Sale') {
            statusText = 'Available Now';
        } else if (property.status === 'For Rent') {
            statusText = 'Available Now';
        }
        
        // Create property title with bedroom count
        const bedroomCount = features.bedrooms ? `${features.bedrooms} Bedroom` : '';
        const propertyTitle = `${property.title.toUpperCase()} | ${bedroomCount}`;
    
        return `
            <div class="property-card" data-id="${property.id}">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}" onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    <div class="property-status">${statusText}</div>
                </div>
                <div class="property-content">
                    <div class="property-header">
                        <h3>${propertyTitle}</h3>
                        <div class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}, Kenya
                        </div>
                    </div>
                    <div class="property-description">
                        <p>${property.description}</p>
                    </div>
                    <div class="property-price">${property.price}</div>
                    <div class="property-actions">
                        <a href="#" class="btn btn-primary" onclick="viewProperty(${property.id})">
                            <i class="fas fa-phone"></i> Contact Us
                        </a>
                        <a href="#" class="btn btn-outline" onclick="bookViewing(${property.id})">
                            More Information
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Load Properties
    function loadProperties() {
        console.log('=== LOAD PROPERTIES DEBUG ===');
        console.log('Properties array length:', properties.length);
        console.log('Properties array:', properties);
        
        // Test if properties grid exists
        const testGrid = document.getElementById('properties-grid');
        alert('Properties grid element found: ' + (testGrid ? 'YES' : 'NO'));
        
        const saleProperties = properties.filter(p => p.status === 'For Sale');
        const rentalProperties = properties.filter(p => p.status === 'For Rent');
        
        console.log('Loading properties...', { saleProperties: saleProperties.length, rentalProperties: rentalProperties.length });
        console.log('Sale properties:', saleProperties);
        console.log('Current page:', window.location.pathname);
        
        // Load featured properties for homepage
        const featuredPropertiesGrid = document.getElementById('featured-properties-grid');
        if (featuredPropertiesGrid) {
            console.log('Featured properties grid found, loading 3 properties...');
            const featuredProperties = saleProperties.slice(0, 3);
            featuredPropertiesGrid.innerHTML = featuredProperties.map(createHorizontalPropertyCard).join('');
            console.log('Featured properties loaded:', featuredProperties.length);
        }
        
        // Get the properties grid element
        const propertiesGridElement = document.getElementById('properties-grid');
        console.log('Properties grid element:', propertiesGridElement);
        if (propertiesGridElement) {
            console.log('Properties grid found, loading sale properties...');
            
            // Simple test - add basic HTML first
            propertiesGridElement.innerHTML = '<div class="property-card"><h3>TEST PROPERTY</h3><p>This is a test property to see if the grid works</p></div>';
            alert('Test property added to grid');
            
            console.log('Creating property cards...');
            const propertyCards = saleProperties.map(createPropertyCard);
            console.log('Property cards created:', propertyCards.length);
            console.log('First property card:', propertyCards[0]);
            propertiesGridElement.innerHTML = propertyCards.join('');
            console.log('Sale properties loaded:', saleProperties.length);
            console.log('Grid innerHTML length:', propertiesGridElement.innerHTML.length);
        } else {
            console.log('Properties grid not found on page:', window.location.pathname);
        }
        
        if (rentalPropertiesGrid) {
            console.log('Rental properties grid found, loading rental properties...');
            rentalPropertiesGrid.innerHTML = rentalProperties.map(createPropertyCard).join('');
            console.log('Rental properties loaded:', rentalProperties.length);
        } else {
            console.log('Rental properties grid not found on page:', window.location.pathname);
        }
    }

    // Property Filtering
    function filterProperties() {
        const filters = document.querySelectorAll('.filter-select');
        const locationFilter = filters[0];
        const priceFilter = filters[1];
        const typeFilter = filters[2];
        
        let filteredProperties = properties.filter(p => p.status === 'For Sale');
        
        // Location filter
        if (locationFilter && locationFilter.value) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(locationFilter.value.toLowerCase())
            );
        }
        
        // Price filter with proper range mapping
        if (priceFilter && priceFilter.value) {
            const priceRanges = {
                '50k-500k': { min: 50000, max: 500000 },
                '500k-2m': { min: 500000, max: 2000000 },
                '2m-5m': { min: 2000000, max: 5000000 },
                '5m-10m': { min: 5000000, max: 10000000 }
            };
            
            const range = priceRanges[priceFilter.value];
            if (range) {
                filteredProperties = filteredProperties.filter(p => {
                    const price = parseInt(p.price.replace(/[^\d]/g, ''));
                    return price >= range.min && price <= range.max;
                });
            }
        }
        
        // Type filter
        if (typeFilter && typeFilter.value) {
            filteredProperties = filteredProperties.filter(p => 
                p.type.toLowerCase() === typeFilter.value.toLowerCase()
            );
        }
        
        // Update the grid with filtered properties
        const propertiesGridElement = document.getElementById('properties-grid');
        if (propertiesGridElement) {
            propertiesGridElement.innerHTML = filteredProperties.map(createPropertyCard).join('');
        }
        
        // Update rental properties grid if on rental page
        const rentalPropertiesGrid = document.getElementById('rental-properties-grid');
        if (rentalPropertiesGrid) {
            const rentalProperties = properties.filter(p => p.status === 'For Rent');
            rentalPropertiesGrid.innerHTML = rentalProperties.map(createPropertyCard).join('');
        }
    }

    // Add filter event listeners
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', filterProperties);
    });

    // Property Viewing Function
    window.viewProperty = function(propertyId) {
        const property = properties.find(p => p.id === propertyId);
        if (property) {
            // Create a modal for property details
            const detailModal = document.createElement('div');
            detailModal.className = 'modal';
            detailModal.innerHTML = `
                <div class="modal-content">
                    <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                    <div class="property-detail">
                        <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;">
                        <h2>${property.title}</h2>
                        <p><strong>Location:</strong> ${property.location}</p>
                        <p><strong>Price:</strong> ${property.price}</p>
                        <p><strong>Type:</strong> ${property.type}</p>
                        <p><strong>Description:</strong> ${property.description}</p>
                        <div class="property-actions" style="margin-top: 2rem;">
                            <button class="btn btn-primary" onclick="bookViewing(${property.id})">
                                <i class="fas fa-calendar-check"></i> Book Viewing
                            </button>
                            <button class="btn btn-outline" onclick="startVirtualTour(${property.id})">
                                <i class="fas fa-vr-cardboard"></i> Virtual Tour
                            </button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(detailModal);
            detailModal.style.display = 'block';
        }
    };

    // Book Viewing Function
    window.bookViewing = function(propertyId) {
        const property = properties.find(p => p.id === propertyId);
        if (property && modal) {
            // Update modal with property info
            const propertySelect = document.querySelector('#booking-form select');
            if (propertySelect) {
                propertySelect.innerHTML = `
                    <option value="${property.id}">${property.title} - ${property.location}</option>
                `;
            }
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    // Virtual Tour Function
    window.startVirtualTour = function(propertyId) {
        const property = properties.find(p => p.id === propertyId);
        if (property) {
            // Create virtual tour modal
            const tourModal = document.createElement('div');
            tourModal.className = 'modal';
            tourModal.innerHTML = `
                <div class="modal-content" style="max-width: 800px;">
                    <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                    <div class="virtual-tour-container">
                        <h2>Virtual Tour - ${property.title}</h2>
                        <div class="tour-placeholder" style="height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center; background: linear-gradient(135deg, #A08050, #8B6B3A); color: white; border-radius: 12px;">
                            <i class="fas fa-vr-cardboard" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                            <h3>360° Virtual Tour</h3>
                            <p>Experience ${property.title} in immersive detail</p>
                            <div style="margin-top: 2rem;">
                                <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">
                                    <i class="fas fa-play"></i> Start Tour
                                </button>
                            </div>
                        </div>
                        <div style="margin-top: 1rem; text-align: center;">
                            <p><strong>Features:</strong> HD Quality • Mobile Compatible • 24/7 Access</p>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(tourModal);
            tourModal.style.display = 'block';
        }
    };

    // Form Handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate booking submission
            showNotification('Booking request submitted successfully! We will confirm your viewing appointment.', 'success');
            this.reset();
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background-color: ${type === 'success' ? '#28a745' : '#007bff'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Search Functionality
    function searchProperties(query) {
        const filteredProperties = properties.filter(property => 
            property.title.toLowerCase().includes(query.toLowerCase()) ||
            property.location.toLowerCase().includes(query.toLowerCase()) ||
            property.description.toLowerCase().includes(query.toLowerCase())
        );
        
        const propertiesGridElement = document.getElementById('properties-grid');
        if (propertiesGridElement) {
            propertiesGridElement.innerHTML = filteredProperties.map(createPropertyCard).join('');
        }
    }

    // Add search functionality to hero button
    const heroButton = document.querySelector('.btn-primary.btn-large');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            const query = prompt('Enter your search terms (property type, location, etc.):');
            if (query) {
                searchProperties(query);
                const forSaleSection = document.getElementById('for-sale');
                if (forSaleSection) {
                    forSaleSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // Virtual Tour Button in Hero
    const virtualTourButton = document.querySelector('.btn-outline.btn-large');
    if (virtualTourButton) {
        virtualTourButton.addEventListener('click', () => {
            const virtualTourSection = document.querySelector('.virtual-tour-section');
            if (virtualTourSection) {
                virtualTourSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Statistics Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat h3');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                }
            };
            
            updateCounter();
        });
    }

    // Trigger counter animation when stats section is visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        statsObserver.observe(heroStats);
    }

    // Scroll animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // Initialize everything
    console.log('Loading properties...');
    alert('Script is running - checking for properties grid...');
    loadProperties();
    setActiveNavigation();
    
    // Fallback: Ensure properties are loaded after a short delay
    setTimeout(() => {
        console.log('Fallback: Checking properties again...');
        loadProperties();
    }, 500);
    
    // Additional fallback for mobile devices
    setTimeout(() => {
        console.log('Mobile fallback: Final properties check...');
        loadProperties();
    }, 1500);
    
    // Final fallback to ensure properties are displayed
    setTimeout(() => {
        console.log('Final fallback: Ensuring properties are visible...');
        const propertiesGridElement = document.getElementById('properties-grid');
        const rentalPropertiesGrid = document.getElementById('rental-properties-grid');
        const featuredPropertiesGrid = document.getElementById('featured-properties-grid');
        
        if (propertiesGridElement && propertiesGridElement.children.length === 0) {
            console.log('Properties grid is empty, forcing reload...');
            loadProperties();
        }
        
        if (rentalPropertiesGrid && rentalPropertiesGrid.children.length === 0) {
            console.log('Rental properties grid is empty, forcing reload...');
            loadProperties();
        }
        
        if (featuredPropertiesGrid && featuredPropertiesGrid.children.length === 0) {
            console.log('Featured properties grid is empty, forcing reload...');
            loadProperties();
        }
    }, 3000);
    
    // Mobile-specific property loading
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            console.log('Mobile-specific property loading...');
            loadProperties();
        }, 1000);
    }
    
    console.log('Website initialized successfully!');

    // Scroll to Top Functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Show/Hide Scroll to Top Button
    window.addEventListener('scroll', function() {
        const scrollToTopBtn = document.querySelector('.scroll-to-top');
        if (scrollToTopBtn) {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    });

    // Make scrollToTop function globally available
    window.scrollToTop = scrollToTop;
});

// Global function for opening booking modal
function openBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Fallback: Remove loader if it still exists after 2 seconds
setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader && loader.parentNode) {
        console.log('Removing loader fallback');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
}, 2000);

// Navigation Active State Management
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('Current page:', currentPage);
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        console.log('Checking link:', href, 'against current page:', currentPage);
        
        // Handle different page scenarios
        if (currentPage === '' || currentPage === 'index.html') {
            if (href === 'index.html' || href === '#home') {
                link.classList.add('active');
            }
        } else if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

