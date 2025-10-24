# Deployment Guide

This guide will help you deploy your Nuxt 4 portfolio website to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier available)
- Your portfolio code pushed to a Git repository

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to a Git repository:

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### 2. Deploy to Vercel

1. **Sign up/Login to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up or login with your Git provider account

2. **Import Your Project**

   - Click "New Project" on your Vercel dashboard
   - Import your Git repository
   - Vercel will automatically detect it's a Nuxt project

3. **Configure Build Settings**

   - **Framework Preset**: Nuxt.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.output/public` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy" to start the deployment process
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### 3. Custom Domain (Optional)

1. **Add Custom Domain**

   - Go to your project settings in Vercel
   - Navigate to "Domains" tab
   - Add your custom domain
   - Follow Vercel's DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Your site will be accessible via HTTPS

## Environment Variables

If you need to add environment variables:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables" tab
3. Add your variables (e.g., API keys, database URLs)
4. Redeploy your project

## Automatic Deployments

Vercel automatically deploys your site when you push changes to your main branch:

- **Production**: Deploys from your main branch
- **Preview**: Creates preview deployments for pull requests

## Performance Optimization

Your Nuxt 4 site is already optimized for Vercel:

- **Static Generation**: Pages are pre-rendered for optimal performance
- **Edge Functions**: Server-side functionality runs at the edge
- **CDN**: Global content delivery for fast loading
- **Image Optimization**: Automatic image optimization

## Monitoring

Vercel provides built-in analytics:

- **Performance Metrics**: Core Web Vitals
- **Traffic Analytics**: Page views and visitors
- **Error Monitoring**: Real-time error tracking

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Check your `package.json` dependencies
   - Ensure all required environment variables are set
   - Review build logs in Vercel dashboard

2. **404 Errors**

   - Verify your routing configuration
   - Check if all pages are properly exported

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check if all CSS files are imported correctly

### Getting Help

- [Vercel Documentation](https://vercel.com/docs)
- [Nuxt Documentation](https://nuxt.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Next Steps

After successful deployment:

1. **Test Your Site**: Visit your live URL and test all functionality
2. **Update Content**: Modify your portfolio content as needed
3. **Share**: Share your portfolio with potential clients or employers
4. **Monitor**: Keep an eye on performance and analytics

Your portfolio is now live and ready to showcase your work! 🚀

