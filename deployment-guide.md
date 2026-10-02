# Deployment Guide for Kilifi Properties Website

This guide provides step-by-step instructions for deploying the website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended - Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it's a static site
6. Click "Deploy"

**Configuration**: Uses `vercel.json` (already included)

### 2. Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Set build command: (leave empty)
6. Set publish directory: `.` (current directory)
7. Click "Deploy site"

**Configuration**: Uses `netlify.toml` (already included)

### 3. GitHub Pages
1. Go to your repository on GitHub
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Click Save

**Configuration**: Uses `.github/workflows/deploy.yml` (already included)

### 4. Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

**Configuration**: Uses `firebase.json` (already included)

## 📁 File Structure
```
nyumbani-developers/
├── index.html              # Main website
├── styles.css              # Styles
├── script.js               # JavaScript
├── placeholder-images.html # Image helper
├── README.md               # Documentation
├── vercel.json             # Vercel config
├── netlify.toml            # Netlify config
├── firebase.json           # Firebase config
├── package.json            # Node.js config
└── .github/workflows/      # GitHub Actions
    └── deploy.yml
```

## 🔧 Manual Deployment Steps

### For any static hosting service:

1. **Upload all files** to your hosting provider
2. **Set index.html as the default page**
3. **Ensure all file paths are correct**

### Common Issues & Solutions:

#### "Configuration file not found"
- **Solution**: Use one of the config files provided above
- **For Vercel**: Use `vercel.json`
- **For Netlify**: Use `netlify.toml`
- **For Firebase**: Use `firebase.json`

#### "Build command not found"
- **Solution**: This is a static site, no build needed
- **Set build command to empty** or use: `echo "Static site - no build required"`

#### "Publish directory not found"
- **Solution**: Set publish directory to `.` (current directory)

#### "404 errors on refresh"
- **Solution**: Configure URL rewriting to serve `index.html` for all routes

## 🌐 Domain Configuration

The live site is GitHub Pages at `https://kilifiproperties.co.ke`. The `CNAME` file in this project sets that name. Do not point the site at `kilificountyproperties.co.ke`. That name is not registered.

`www.kilifiproperties.co.ke` currently uses the same address records as the main name, so browsers show a certificate warning. At the company that manages DNS for `kilifiproperties.co.ke`, make these records:

**Main name (`@`)** — keep these four A records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**www** — delete any A or AAAA records on `www`, then add one CNAME:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `etiditalex.github.io` |

GitHub Pages will then issue a certificate that covers `www` and send `www` visitors to `https://kilifiproperties.co.ke`. In the GitHub repository, open Settings, then Pages, and leave **Enforce HTTPS** turned on. DNS can take a few hours to update.

## 📱 Testing Your Deployment

1. **Check all pages load correctly**
2. **Test responsive design** on mobile
3. **Verify all interactive features work**
4. **Test contact forms** (they'll show success messages)
5. **Check image loading** (placeholder images should work)

## 🔄 Updating Your Site

1. **Make changes** to your local files
2. **Commit and push** to GitHub
3. **Automatic deployment** will occur (if using GitHub Actions)
4. **Manual deployment** may be required for some platforms

## 📞 Support

If you encounter issues:
1. Check the platform's documentation
2. Verify all configuration files are present
3. Ensure all files are uploaded correctly
4. Check browser console for JavaScript errors

---

**Note**: This is a static website, so no server-side processing is required. All functionality runs in the browser.
