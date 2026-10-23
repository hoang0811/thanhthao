# Social Service Landing

Landing page built with Nuxt 4 and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Free deployment with Cloudflare Pages

1. Create an empty repository on GitHub. Do not initialize it with a README, license, or `.gitignore`.
2. From this project folder, connect and push the project (replace the URL with your repository URL):

   ```sh
   git add .
   git commit -m "Prepare landing page for deployment"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select the GitHub repository.
4. Set the build command to `npm run generate` and the build output directory to `.output/public`.
5. Set the production branch to `master`.
6. Add the environment variable `NODE_VERSION` with value `22.21.0`, then save and deploy.

The generated site is static and can also be previewed locally with:

```sh
npm run generate
npx serve .output/public
```
