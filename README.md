# ショトログ — ショート動画運用代行の比較データベース

TikTok・YouTubeショート・Instagramリールの運用代行会社を、料金・対応範囲・最低契約期間で横断比較できるニッチ特化メディア。**最終目標はスモールM&A市場での売却(バイアウト)。**

- 事業計画・売却までのロードマップ: [`docs/strategy.md`](docs/strategy.md)
- 掲載データの集め方・入力ガイド: [`docs/data-guide.md`](docs/data-guide.md)

> ⚠️ 現在の掲載企業データはすべてサンプル(架空)です。実データの整備方法は `docs/data-guide.md` を参照。

## 技術構成

- [Astro](https://astro.build) による完全静的サイト(サーバー不要・維持費ほぼゼロ)
- 掲載データは `src/data/agencies.json` の1ファイルで管理(非エンジニアでも更新可能 → 売却時に引き継ぎやすい)
- Cloudflare Pages / Vercel / Netlify の無料枠でホスティング可能

## 開発

```bash
npm install
npm run dev      # 開発サーバー (http://localhost:4321)
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド結果の確認
```

## ページ構成

| パス | 内容 |
|---|---|
| `/` | 比較表(プラットフォーム絞り込み付き) |
| `/agencies/[slug]/` | 各社の詳細ページ(データから自動生成) |
| `/guide/` | 料金相場ガイド(SEO集客の起点) |
| `/about/` | 運営者情報・掲載基準・問い合わせ |

## デプロイ(Cloudflare Pages の例)

1. このリポジトリを Cloudflare Pages に接続
2. Build command: `npm run build` / Output directory: `dist`
3. 独自ドメインを設定したら `astro.config.mjs` の `site` と `public/robots.txt` の URL を差し替える
