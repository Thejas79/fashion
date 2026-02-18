# Vogue Atelier - Fashion Store

A modern, responsive fashion e-commerce website built with HTML, CSS, and JavaScript, designed to showcase clothing products with images served through a JSON API.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Categories**: Filter products by Men, Women, Accessories, or view All
- **Modern UI**: Clean, elegant design with smooth animations and hover effects
- **API Integration**: Products are served through a REST API endpoint
- **Image Optimization**: Product images with fallback handling
- **Vercel Ready**: Optimized for deployment on Vercel platform

## Project Structure

```
fashion/
├── index.html          # Main HTML page
├── style.css           # Styling and responsive design
├── script.js           # Frontend JavaScript functionality
├── products.json       # Product data with image paths
├── api/
│   └── products.js     # API endpoint for product data
├── images/             # Product images organized by category
│   ├── men/
│   ├── women/
│   └── accessories/
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## Getting Started

### Local Development

1. **Clone or download** the project to your local machine
2. **Serve the files** using a local web server (required for API calls):

   Using Node.js:
   ```bash
   npm install -g serve
   serve .
   ```

   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Open your browser** and navigate to `http://localhost:8000`

### Adding New Products

To add new products to your store:

1. **Add product images** to the appropriate category folder in `/images/`
2. **Update `products.json`** with new product entries:

   ```json
   {
     "id": 13,
     "title": "Product Name",
     "price": 49.99,
     "category": "men",
     "subcategory": "shirts",
     "image": "images/men/shirts/new-product.jpg",
     "description": "Product description here"
   }
   ```

3. **Ensure unique IDs** for each product
4. **Use correct image paths** relative to the root directory

## API Endpoints

### GET /api/products
Returns all products or filtered by category.

**Parameters:**
- `category` (optional): Filter by category (`men`, `women`, `accessories`)

**Examples:**
```javascript
// Get all products
fetch('/api/products')

// Get men's products only
fetch('/api/products?category=men')
```

**Response Format:**
```json
[
  {
    "id": 1,
    "title": "Men's Classic Blue Shirt",
    "price": 29.99,
    "category": "men",
    "subcategory": "shirts",
    "image": "images/men/shirts (1).jpg",
    "description": "Classic blue shirt perfect for office and casual wear"
  }
]
```

## Deployment on Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration and deploy

3. **Custom Domain** (optional):
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings as provided by Vercel

## Customization

### Styling
- Modify `style.css` to change colors, fonts, and layout
- The design uses CSS Grid for responsive product cards
- Colors are defined in CSS variables for easy theming

### Functionality
- Edit `script.js` to add new features like:
  - Shopping cart functionality
  - Product search
  - Sorting options
  - User authentication

### Categories
- Add new categories by:
  1. Creating new image folders in `/images/`
  2. Adding category buttons to `index.html`
  3. Updating navigation logic in `script.js`

## Image Guidelines

- **Format**: Use JPG, PNG, or WebP formats
- **Size**: Optimize images for web (recommended: 800x600px for product cards)
- **Naming**: Use descriptive names with spaces or hyphens
- **Consistency**: Maintain consistent aspect ratios for better visual appeal

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Technologies Used

- **HTML5**: Semantic markup and modern features
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript ES6+**: Modern JavaScript features
- **Vercel**: Deployment and serverless functions

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions:
1. Check the browser console for error messages
2. Ensure all file paths are correct
3. Verify images exist in the specified locations
4. Test API endpoints directly in your browser

---

**Vogue Atelier** - Modern Fashion E-Commerce Solution
