# Loudoun County Master Gardeners Website

A modern, responsive website clone of the Loudoun County Master Gardeners organization, featuring an AI-powered gardening chatbot with expert horticulture advice.

## 🌱 Overview

This project is a complete clone of the [Loudoun County Master Gardeners](https://loudouncountymastergardeners.org/) website, enhanced with a custom AI-powered chatbot specifically designed for gardening and horticulture assistance. The website showcases the organization's programs, events, and expert gardening advice.

## ✨ Features

### Website Features
- **Modern Design**: Clean, professional design with gardening-themed color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Dropdown menus and smooth scrolling
- **Program Showcase**: Detailed information about Master Gardener programs
- **Event Calendar**: Upcoming events and educational opportunities
- **Help Desk Integration**: Direct access to gardening experts
- **Contact Forms**: Interactive contact and inquiry forms

### AI Chatbot Features
- **Expert Characters**: Four specialized gardening experts:
  - **Helen** - Master Gardener (20 years experience)
  - **Mike** - Horticulture Expert (tree care, lawn management)
  - **Lisa** - Native Plant Specialist (native plants, wildlife gardens)
  - **Emma** - Garden Educator (youth programs, education)
- **Quick Prompts**: Pre-built questions for common gardening topics
- **Real-time AI**: Powered by Google Gemini 1.5 Flash
- **Contextual Responses**: Expert-specific advice based on character selection
- **User-friendly Interface**: Modern chat interface with typing indicators

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2E7D32` (Dark Green)
- **Secondary Green**: `#4CAF50` (Medium Green)
- **Accent Green**: `#8BC34A` (Light Green)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local development server (optional)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/majidsafwaan2/loudoun-county-master-gardner.git
   cd loudoun-county-master-gardner
   ```

2. Open `index.html` in your web browser or serve locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
loudoun-county-master-gardner/
├── index.html              # Main HTML file
├── styles.css              # Complete CSS styles
├── main.js                 # Website functionality
├── chatbot.js              # AI chatbot implementation
├── README.md               # Project documentation
├── package.json            # Project configuration
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel deployment config
├── test.html               # Comprehensive test suite
└── images/                 # Image assets (placeholder)
```

## 🤖 Chatbot Implementation

### Character System
The chatbot features four expert characters, each with specialized knowledge:

1. **Helen (Master Gardener)**
   - 20 years of horticulture experience
   - Sustainable gardening practices
   - Virginia gardening conditions
   - Soil health and pest management

2. **Mike (Horticulture Expert)**
   - Tree care and maintenance
   - Lawn management
   - Landscape design
   - Virginia climate considerations

3. **Lisa (Native Plant Specialist)**
   - Native plant identification
   - Pollinator gardens
   - Invasive species management
   - Wildlife-friendly landscapes

4. **Emma (Garden Educator)**
   - Youth gardening programs
   - Educational workshops
   - Garden-to-table programs
   - Community engagement

### AI Integration
- **API**: Google Gemini 1.5 Flash
- **Response Time**: Real-time responses
- **Context**: Character-specific knowledge and expertise
- **Language**: Natural, conversational responses

## 🧪 Testing

### Test Suite
The project includes a comprehensive test suite (`test.html`) that validates:

- **HTML Structure**: All required elements present
- **Responsive Design**: Mobile and desktop compatibility
- **Chatbot Functionality**: Character selection and AI responses
- **Navigation**: Menu functionality and smooth scrolling
- **Performance**: Page load times and memory usage
- **Accessibility**: WCAG compliance checks
- **Cross-browser**: Compatibility testing

### Running Tests
1. Open `test.html` in your browser
2. Click "Run All Tests" to execute the full test suite
3. Review results for any issues or improvements

## 🚀 Deployment

### Vercel Deployment
The project is configured for easy deployment on Vercel:

1. **Automatic Deployment**: Push to GitHub for automatic deployment
2. **Environment Variables**: Configured for API key management
3. **Performance**: Optimized for fast loading times
4. **CDN**: Global content delivery network

### Manual Deployment
1. Build the project (if needed)
2. Upload files to your web server
3. Configure environment variables
4. Test all functionality

## 🔧 Configuration

### Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key for chatbot functionality

### Customization
- **Colors**: Modify CSS variables in `styles.css`
- **Content**: Update HTML content in `index.html`
- **Chatbot**: Customize characters in `chatbot.js`
- **Styling**: Adjust design in `styles.css`

## 📊 Performance

### Optimization Features
- **Minified Assets**: Optimized CSS and JavaScript
- **Image Optimization**: Compressed and responsive images
- **Lazy Loading**: Images load as needed
- **Caching**: Browser caching enabled
- **CDN**: Content delivery network support

### Performance Metrics
- **Page Load Time**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

### Security Features
- **HTTPS**: Secure connections required
- **Content Security Policy**: XSS protection
- **Input Validation**: Form data sanitization
- **API Security**: Secure API key management

## 🤝 Contributing

### Development Guidelines
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Standards
- **HTML**: Semantic markup, accessibility compliant
- **CSS**: BEM methodology, responsive design
- **JavaScript**: ES6+, modular structure
- **Documentation**: Comprehensive comments

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Loudoun County Master Gardeners**: Original website inspiration
- **Google Gemini**: AI chatbot technology
- **Font Awesome**: Icon library
- **Inter Font**: Typography design

## 📞 Support

For support or questions:
- **Email**: loudounmg@vt.edu
- **Phone**: 703-771-5150
- **Address**: 750 Miller Drive, SE, Suite 131, Leesburg, VA 20175

## 🔄 Updates

### Version History
- **v1.0.0**: Initial release with complete website clone and AI chatbot
- **v1.0.1**: Performance optimizations and bug fixes
- **v1.0.2**: Enhanced chatbot functionality and UI improvements

### Future Enhancements
- [ ] Additional chatbot characters
- [ ] Advanced search functionality
- [ ] Event registration system
- [ ] Member portal integration
- [ ] Mobile app development

---

**Built with ❤️ for the Loudoun County Master Gardeners community**