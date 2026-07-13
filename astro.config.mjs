// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/power-of-output',
  integrations: [
    starlight({
      title: '最高學以致用法',
      description: '樺澤紫苑的腦科學輸出法：用說、寫、行動把學習轉化為成果',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '前言', slug: 'unit00' },
        {
          label: '輸出的基本法則',
          items: [
            { label: '輸出的基本法則', slug: 'unit01' },
          ],
        },
        {
          label: '以科學為根據的表達術',
          items: [
            { label: '說話與提問的基本技巧', slug: 'unit02' },
            { label: '請託、拒絕與讚美斥責的溝通術', slug: 'unit03' },
            { label: '道歉、說明與銷售表達術', slug: 'unit04' },
          ],
        },
        {
          label: '激發極限能力的書寫方法',
          items: [
            { label: '手寫與基礎寫作技巧', slug: 'unit05' },
            { label: '靈感激發與筆記整理術', slug: 'unit06' },
            { label: '引用、目標設定與企劃寫作術', slug: 'unit07' },
          ],
        },
        {
          label: '成效遠勝過他人的行動力',
          items: [
            { label: '從行動到堅持的實踐力', slug: 'unit08' },
            { label: '情緒調節與身心管理術', slug: 'unit09' },
          ],
        },
        {
          label: '提升輸出力的訓練',
          items: [
            { label: '提升輸出力的七大訓練', slug: 'unit10' },
          ],
        },
        { label: '結語', slug: 'unit11' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
