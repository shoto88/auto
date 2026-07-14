# メディア・ポートフォリオ — 売却(バイアウト)を目指す3サイト

需要の時期・客層・収益モデルが異なる3つの比較・情報サイトを1リポジトリで運用するモノレポ。各サイトは独立してデプロイ・売却できる。

| サイト | ディレクトリ | 一言でいうと | 需要のピーク |
|---|---|---|---|
| **カスハラ対策ナビ** | [`sites/kasuhara-navi`](sites/kasuhara-navi) | 2026年10月義務化対応の情報・比較サイト(実在15サービスDB+ひな形+東京都奨励金) | 2026年10月前後 |
| **ペットホテルの教科書** | [`sites/pet-hotel-guide`](sites/pet-hotel-guide) | 初めて預ける飼い主向けの料金相場・選び方ガイド | 通年(連休に山) |
| **育成就労ナビ** | [`sites/ikusei-navi`](sites/ikusei-navi) | 2027年4月施行・育成就労制度と監理支援機関の情報サイト | 2027年4月前後 |

## ドキュメント

- **[docs/portfolio-strategy.md](docs/portfolio-strategy.md)** — 3サイト戦略の全体像・売却設計
- [docs/genre-research.md](docs/genre-research.md) — ジャンル選定の調査記録(検証して落とした候補も)
- [docs/strategy.md](docs/strategy.md) — カスハラ対策ナビの詳細事業計画
- [docs/data-guide.md](docs/data-guide.md) — カスハラ対策ナビの掲載データ運用ルール

## 技術構成

- 全サイト共通: [Astro](https://astro.build) 静的サイト+JSONデータ管理(維持費ほぼゼロ、非エンジニアに引き継ぎ可能)
- npm workspaces のモノレポ。各サイトは Cloudflare Pages / Vercel / Netlify の無料枠に個別デプロイ

## 開発

```bash
npm install            # ルートで1回(全ワークスペース分が入る)

npm run dev:kasuhara   # カスハラ対策ナビ (localhost:4321)
npm run dev:pet        # ペットホテルの教科書
npm run dev:ikusei     # 育成就労ナビ

npm run build          # 3サイト一括ビルド(各 sites/*/dist に出力)
```

## デプロイ(Cloudflare Pages の例・サイトごとに)

1. リポジトリを接続し、Root directory に `sites/kasuhara-navi` 等を指定
2. Build command: `npm run build` / Output directory: `dist`
3. 独自ドメイン設定後、各サイトの `astro.config.mjs` の `site` と `public/robots.txt` を差し替える
