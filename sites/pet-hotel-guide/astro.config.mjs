import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: 独自ドメイン取得後に差し替える(例: https://pethotel-guide.jp)
export default defineConfig({
  site: 'https://pethotel-guide.example.com',
  integrations: [sitemap()],
});
