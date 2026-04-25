// In production (Vercel), set REACT_APP_BACKEND_URL to your Render backend URL
const server = process.env.REACT_APP_BACKEND_URL || `http://${window.location.hostname}:8000`;

export default server;