/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add file-loader rule to handle mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos", // Output path for the videos
            publicPath: "/_next/static/videos", // Public path for the videos
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
