
# HomeHub - Real Estate Marketplace

A modern real estate marketplace application built with React, TypeScript, and Tailwind CSS for Chennai and Tamil Nadu properties.

## Project Structure

The project follows a component-based architecture:

- `/src/components`: UI components organized by domain
- `/src/pages`: Page components for different routes
- `/src/hooks`: Custom React hooks
- `/src/lib`: Utility functions

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- VS Code (recommended for development)

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd homehub
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Running in VS Code

1. Open the project folder in VS Code:
   ```
   code .
   ```

2. Install recommended extensions (optional):
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

3. Open a terminal in VS Code and run:
   ```
   npm run dev
   ```

4. The development server will start and you can access the application at [http://localhost:8080](http://localhost:8080)

## Building for Production

1. Build the project:
   ```
   npm run build
   ```

2. Preview the production build locally:
   ```
   npm run preview
   ```

## Deployment

### Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project in Vercel
3. Configure build settings if necessary (build command: `npm run build`)
4. Deploy

### Netlify

1. Push your code to a Git repository
2. Import the project in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### GitHub Pages

1. Install gh-pages:
   ```
   npm install gh-pages --save-dev
   ```

2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Update the base path in vite.config.js if deploying to a subdirectory:
   ```javascript
   base: '/your-repo-name/'
   ```

4. Deploy:
   ```
   npm run deploy
   ```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui Components
- React Router
- Tanstack Query

