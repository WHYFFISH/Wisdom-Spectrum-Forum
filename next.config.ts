import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 启用静态导出模式
  basePath: "/Wisdom-Spectrum-Forum", // 设置基础路径
  assetPrefix: "/Wisdom-Spectrum-Forum/", // 设置资源前缀
};

export default nextConfig;
