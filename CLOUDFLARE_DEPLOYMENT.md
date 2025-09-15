# Cloudflare Pages Deployment Configuration

This project is optimized for deployment on Cloudflare Pages.

## Build Settings

**Framework preset**: React (Vite)
**Build command**: `npm run build`
**Build output directory**: `dist`

## Environment Variables

If you need environment variables, add them in the Cloudflare Pages dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add any required variables

## Custom Domain

To use a custom domain:
1. Go to your Cloudflare Pages project
2. Navigate to "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## Deployment Process

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build configuration as mentioned above
3. Deploy automatically on push to main branch

## Performance Optimizations

This project includes:
- ✅ Vite build optimization
- ✅ Image optimization via Cloudflare
- ✅ Automatic minification
- ✅ CDN delivery
- ✅ HTTP/2 and HTTP/3 support

## Features Available on Free Plan

- ✅ Unlimited bandwidth
- ✅ Custom domain support
- ✅ SSL certificates
- ✅ Git integration
- ✅ Preview deployments
- ✅ Analytics (basic)

## File Structure

```
/
├── index.html           # Main HTML file
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   └── data/           # Static data
├── public/             # Static assets
└── dist/               # Build output (generated)
```

## Performance Tips

1. Images are optimized through Cloudflare's image optimization
2. CSS and JS are automatically minified
3. Gzip compression is enabled by default
4. HTTP caching headers are set automatically

## Contact

For support with this deployment, contact: info@chrismario-foto.de