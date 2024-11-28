import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 启用静态导出模式
  basePath: "/Wisdom-Spectrum-Forum", // 设置基础路径
  assetPrefix: "/Wisdom-Spectrum-Forum/", // 设置资源前缀
  images: {
    unoptimized: true, // 关闭图片优化，确保静态导出时图片正常加载
  },
  webpack: (config) => {
    // 支持 src/asset 目录下的静态文件引入
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/images/[name].[hash][ext]", // 自定义输出文件路径
      },
    });
    return config;
  },
};

export default nextConfig;
