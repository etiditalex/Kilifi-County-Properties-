# Kilifi Properties - Real Estate Website

A modern, responsive real estate website for Kilifi Properties, a premier real estate agency based in the Coast region of Kenya.

## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop, and 24-inch+ screens)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Property Listings**: Comprehensive property showcase with filtering capabilities
- **Virtual Tour Technology**: Interactive virtual tour functionality
- **Booking System**: Integrated property viewing booking system
- **Contact Forms**: Multiple contact and inquiry forms
- **Search & Filter**: Advanced property search and filtering options

### Navigation & Menu
- **Header Navigation**: Fixed header with logo and main navigation
- **Mobile Hamburger Menu**: Responsive mobile navigation with dropdown
- **Smooth Scrolling**: Seamless navigation between sections
- **Active State Tracking**: Visual feedback for current page section

### Property Management
- **For Sale Properties**: Dedicated section for properties available for purchase
- **For Rent Properties**: Separate section for rental properties
- **Property Details**: Comprehensive property information with images
- **Price Range**: Properties ranging from KSh 50,000 to KSh 10,000,000
- **Location Coverage**: Properties across Nyali, Shanzu, Kilifi, Mtwapa, Vipingo

### Interactive Elements
- **Booking Modal**: Popup booking form for property viewings
- **Virtual Tour Modal**: Interactive virtual tour experience
- **Property Filtering**: Filter by location, price range, and property type
- **Form Validation**: Client-side form validation and submission
- **Notification System**: Success/error notifications for user actions

### Design & Branding
- **Logo Integration**: Company logo prominently displayed
- **Color Scheme**: Based on logo colors (black, white, warm gold/brown #A08050)
- **Typography**: Modern Poppins font family
- **Icons**: Font Awesome icons throughout the interface

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Download or clone the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Running the Website
1. Open `index.html` in your web browser
2. The website will load automatically with all functionality

### File Structure
```
nyumbani-developers/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This documentation
└── images/             # Image assets (to be added)
    ├── logo.png
    ├── hero-house.jpg
    ├── property1.jpg
    ├── property2.jpg
    └── ...
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

### Screen Sizes
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1920px
- **Large Screens**: 1920px+ (24-inch and larger)

### Mobile Features
- Hamburger menu navigation
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Mobile-first responsive design

## 🎨 Design System

### Color Palette
- **Primary Color**: #A08050 (Warm Gold/Brown)
- **Primary Dark**: #8B6B3A
- **Secondary Color**: #000000 (Black)
- **Accent Color**: #B89B6E
- **White**: #FFFFFF
- **Light Gray**: #F8F9FA
- **Gray**: #6C757D

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive Font Sizes**: Automatically scales with screen size

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Property cards with hover effects
- **Modals**: Booking and virtual tour modals
- **Forms**: Contact and booking forms
- **Navigation**: Header and mobile navigation

## 🔧 Customization

### Adding Properties
To add new properties, edit the `properties` array in `script.js`:

```javascript
const properties = [
    {
        id: 7,
        title: "New Property Name",
        location: "Location, City",
        price: "KSh 1,500,000",
        type: "House",
        status: "For Sale",
        image: "new-property.jpg",
        features: {
            bedrooms: 3,
            bathrooms: 2,
            sqft: "1,500"
        },
        description: "Property description here"
    }
];
```

### Modifying Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #A08050;
    --primary-dark: #8B6B3A;
    --secondary-color: #000000;
    /* ... other colors */
}
```

### Adding Images
1. Place your images in an `images/` folder
2. Update image paths in the HTML and JavaScript files
3. Ensure images are optimized for web (recommended: 800x600px for property images)

## 📞 Contact Information

The website includes the following contact details:
- **Phone**: +254 700 000 000, +254 733 000 000
- **Email**: info@nyumbanikwehu.co.ke, sales@nyumbanikwehu.co.ke
- **Address**: Coast Road, Kilifi, Kenya
- **Working Hours**: Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 4:00 PM

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Features Checklist

- [x] Responsive design for all devices
- [x] Mobile hamburger menu
- [x] Property listings (For Sale & For Rent)
- [x] Property filtering system
- [x] Virtual tour technology
- [x] Booking system
- [x] Contact forms
- [x] Smooth scrolling navigation
- [x] Modern UI/UX design
- [x] Logo integration
- [x] Color scheme matching logo
- [x] Price range display (KSh 50,000 - 10,000,000)
- [x] Location coverage (Nyali, Shanzu, Kilifi, Mtwapa, Vipingo)
- [x] Interactive elements
- [x] Form validation
- [x] Notification system
- [x] Loading animations
- [x] SEO-friendly structure

## 🔮 Future Enhancements

Potential features for future development:
- **Property Search API**: Integration with real estate databases
- **User Authentication**: Client login and dashboard
- **Property Favorites**: Save favorite properties
- **Email Integration**: Automated email responses
- **Analytics**: Website usage tracking
- **CMS Integration**: Easy content management
- **Payment Gateway**: Online payment processing
- **Multi-language Support**: Swahili and English

## 📄 License

This project is created for Kilifi Properties. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Kilifi Properties** - Your trusted partner in finding your dream property in the idyllic coastal region of Kilifi.
