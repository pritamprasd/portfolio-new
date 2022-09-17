# portfolio-new

### Data: 
- site-config: 
    - link:  https://gist.github.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457
    - raw: https://gist.githubusercontent.com/pritamprasd/2383c2a6d34b6ae436412fbf82ccc457/raw/da0f72b309c1531dca499b7abaccf5ae36307d1b/site-config.yaml

### Installation:
yarn add next react react-dom
yarn dev

# Notes:
#### Data Fetching
- `getServerSideProps` (SSR): This function will be called by the server on every request.
- `getStaticProps`(Build Time) : from the same file. This function gets called at build time and lets you pass fetched data to the page's props on pre-render
- `getStaticPaths` :  Next.js will statically pre-render all the paths specified by getStaticPaths.
- `useEffect`: client side data fetching

#### Env:
- In general only one `.env.local` file is needed. 
- However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment. Next.js allows you to set defaults in `.env` (all environments), `.env.development` (development environment), and `.env.production` (production environment).
- `.env.local` always overrides the defaults set.(add to .gitignore).


### Updated site config gist??
- update RAW url in config.js

