import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: 独自ドメイン取得後に差し替える(例: https://ikusei-navi.jp)
export default defineConfig({
  site: 'https://ikusei-navi.example.com',
  integrations: [sitemap()],
});
