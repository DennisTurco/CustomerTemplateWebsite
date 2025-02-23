# Configuration and install guide
## Install Node.js and npm
1. Download from: https://nodejs.org/
2. Set-ExecutionPolicy Unrestricted
3. `npm install`
4. After the installation check if is it correctly installed:
    ```powershell
    node -v
    npm -v
    ```
## Install Next.js
1. Open your terminal and run: `npx create-next-app@latest projectname`
    During setup choose: 
    1. ✅ TypeScript (Recommended)
    2. ✅ ESLint
    3. ❌ No to Tailwind (we’ll install it manually)
2. Navigate to your project folder: `cd catcafe`

## Start the Development Server
1. Once installed, start the Next.js app with: npm run dev
2. Your site should now be live at http://localhost:3000

## Install Tailwind CSS (Optional, but Recommended) 
To add Tailwind CSS, run:
1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. Modify tailwind.config.js and add the Next.js file paths:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    };
    ```
4. Add Tailwind to app/globals.css:
    ```js
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Packages
* npm install react-icons
* npm install sass

---
---
---

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
