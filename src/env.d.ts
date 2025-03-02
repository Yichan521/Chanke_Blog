/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { AstroIntegration } from "@swup/astro";

declare global {
  // Remove twikoo import error
  interface Window {
    swup: AstroIntegration;
  }
}

declare module "twikoo" {
  // 声明默认导出为一个包含 init 方法的对象
  const twikoo: {
    init: (options: {
      envId: string;
      region?: string;
      el?: string;
    }) => Promise<void>;
  };
  export default twikoo;
}

