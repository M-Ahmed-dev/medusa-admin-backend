import { loadEnv, defineConfig } from "@medusajs/framework/utils";



// import { loadEnv } from "@medusajs/medusa";
loadEnv(process.env.NODE_ENV || "development", process.cwd());
// loadEnv(); // loads .env variables

const config = {
  projectConfig: {
    database_url: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || "supersecret",
    cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
    },
  },
  plugins: [
    {
      resolve: "@medusajs/admin-bundler",
      options: {
        outDir: "dist/admin",
      },
    },
    // add other plugins if needed
  ],
};

export default config;