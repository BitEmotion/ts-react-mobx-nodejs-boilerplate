const FRONTEND_URL: string = process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://yoursite.com";
const BACKEND_URL: string = process.env.NODE_ENV === "development" 
    ? "http://localhost:4000" 
    : "https://yourServersite.com"

export { FRONTEND_URL, BACKEND_URL };
