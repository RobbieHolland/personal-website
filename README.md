# Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS.

## Features

- Responsive navigation with dropdown menu
- About page with profile section
- CV page with PDF download and HTML version
- Academic Papers page with Google Scholar integration
- Code Repositories page with GitHub API integration
- Fun section with:
  - Interactive Fractals visualization
  - Music and Videos page with embedded content
  - MDX-powered blog

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   GITHUB_USERNAME=RobbieHolland
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Starting Production Server

```bash
npm start
# or
yarn start
```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import your project on Vercel
3. Vercel will detect Next.js and set up the build configuration automatically
4. Your site will be deployed at `https://your-project.vercel.app`

### Netlify

1. Push your code to a GitHub repository
2. Create a new site on Netlify and import your repository
3. Set the build command to `npm run build` or `yarn build`
4. Set the publish directory to `.next`
5. Deploy your site

### Custom Server

You can also deploy to any hosting provider that supports Node.js:

1. Build your application: `npm run build`
2. Start the production server: `npm start`
3. Set up a reverse proxy (e.g., Nginx) to forward requests to your Node.js server

## Customization

- Update the content in the respective page components
- Add your own blog posts in the `src/content/blog` directory
- Modify the styling in the Tailwind CSS classes
- Update the navigation items in `src/components/Navigation.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details. 