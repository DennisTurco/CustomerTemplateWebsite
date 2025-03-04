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
* `npm install react-icons`
* `npm install sass`
* `npm install -g @sanity/client`
* `npm install framer-motion`

## Sanity Configuration
* Check if sanity is installed: `sanity --version` or `npx sanity --version`
* Login to sanity: `npx sanity login`
* Check if project is binded: `npx sanity projects list`
* Add a new file from the root of the project named ".env.local" with the following content:
    ```txt
    NEXT_PUBLIC_SANITY_PROJECT_ID="project_id"
    NEXT_PUBLIC_SANITY_DATASET="production"
    ```

---
---
---

## Getting Started

First, run the development server:

Run the project
```bash
npm run dev
```

* Website [http://localhost:3000](http://localhost:3000)
* Sanity control panel [http://localhost:3000/studio](http://localhost:3000)

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


## Init Sanity
```bash
PS C:\Users\Utente\Desktop\Dennis\Programmazione\CustomerTemplateWebsite> sanity init
⚠ No authentication credentials found in your Sanity config

? Please log in or create a new account E-mail / password

Opening browser at https://api.sanity.io/v1/auth/login/sanity?type=token&label=DESKTOP-5IB8D1L+%2F+Windows&origin=http%3A%2F%2Flocalhost%3A4321%2Fcallback

✓ Login successful
✓ Fetching existing projects

? Project name: customerTemplateWebsite
Your content will be stored in a dataset that can be public or private, depending on
whether you want to query your content with or without authentication.
The default dataset configuration has a public dataset named "production".
? Use the default dataset configuration? Yes
✓ Creating dataset
? Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
⚠ ╭────────────────────────────────────────────────────────────╮
⚠ │                                                            │
⚠ │ It looks like you are using Next.js 15 and React 19        │
⚠ │ Please read our compatibility guide.                       │
⚠ │ https://www.sanity.io/help/react-19                        │
⚠ │                                                            │
⚠ ╰────────────────────────────────────────────────────────────╯
? Do you want to use TypeScript? Yes
? Would you like an embedded Sanity Studio? Yes
? What route do you want to use for the Studio? /studio
? Select project template to use Clean project with no predefined schema types    
? Would you like to add the project ID and dataset to your .env.local file? Yes
```