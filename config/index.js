const isProduction = process.env.NODE_ENV === 'production';

export const API_URL = isProduction ? 'https://nextjs-playground-ne0rad.vercel.app' : 'http://localhost:3000';
