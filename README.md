# 最高學以致用法・教學導讀網站

《最高學以致用法》(樺澤紫苑 著)的教學導讀網站,以 Astro + Starlight 建置。
內容為重點整理、白話解說與思考題,**並非原書全文**;原文引用僅限每章至多兩句短金句。

## 開發

```bash
npm ci
npm run dev      # http://localhost:4321/power-of-output/
npm run build    # 產出 dist/
npm run preview
```

## 結構

- 內容:`src/content/docs/unit*.md`(共 12 篇)+ `index.mdx`(首頁)
- 側欄:`astro.config.mjs` 的 `sidebar`(去編號標題)+ `src/styles/sidebar-num.css`(小號編號),新增章節兩邊都要同步
- 主題:pink,樣式在 `src/styles/theme.css`
- Callout:`:::tip[標題]`、`:::note[標題]`、`:::caution[標題]`;中英數字間加半形空格;範圍用「–」

線上網址:https://yaericure.github.io/power-of-output/(push main 自動部署)
