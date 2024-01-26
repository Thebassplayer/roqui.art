/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dukkbmkvk/image/upload/",
  },
};

export default nextConfig;
