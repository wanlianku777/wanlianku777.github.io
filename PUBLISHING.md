# 万联库博客发文说明

正式名称：万联库商机资源最新资讯。

- 网站：https://wanlianku777.github.io/
- 仓库：https://github.com/wanlianku777/wanlianku777.github.io
- 本地源文件：E:\wangzhan\wanlianku-blog
- 官网：https://www.wanlianku.com/
- 部署：GitHub Pages，main 分支根目录，Jekyll 构建。

## 发布一篇文章

1. 先同步仓库 main 的最新内容，避免覆盖其他窗口更新。未配置 Git 授权时，使用浏览器中 wanlianku777 账号的 GitHub 网页编辑器。
2. 在 `_posts/` 新建 `YYYY-MM-DD-unique-english-slug.md`。文件名是稳定文章地址的重要组成部分，发布后不要随意改变。
3. 复制根目录 `article-template.md` 的结构，填写标题、description、真实北京时间、栏目、作者、摘要、资料来源和正文。内容未经审核保留 `published: false`；正式发文改为 `published: true`。
4. category 使用六大栏目之一：招商加盟、推广获客、渠道合作、资源合作、服务承接、需求发布。站点公告可用“站点动态”。每篇只选一个主栏目。
5. 配图存到 `images/`，设置 image 和准确 image_alt，正文图片也要有说明。不要填写不存在的图片路径，不使用无授权图片。
6. 检查事实、来源链接、摘要和正文是否一致，确认没有复制竞品或重复其他已投稿全文。
7. 提交 main。GitHub 自动生成独立文章页、首页列表、专题、搜索数据、RSS 和 sitemap。无需手改生成文件。
8. 在仓库 Actions 检查 pages-build-deployment 成功，再访问文章地址确认正文、配图、链接、手机布局和 canonical。只有页面已上线才记录“发布成功”。

## 并行窗口约定

- 发文窗口只新增自己的 `_posts/` 与 `images/` 文件。先同步，再提交；遇到冲突保留双方文章，不能强推覆盖。
- 不要改 `_config.yml`、布局、CSS、JS 或网站地址，除非用户要求。
- 每个窗口选唯一 slug，先检查是否已经存在；不覆盖他人的草稿。
- 浏览器新增文件时，名称框直接填写 `_posts/2026-10-12-your-slug.md`，正文使用 Markdown。
- 更新旧文保留原 URL；真实修改时才更新 last_modified_at。
- 本站独立于万联库官网。不要改动官网后端，也不要把其他平台发文规则当作本仓库的自动授权。

## SEO 与 GEO 内容要求

- 一个页面解决一个清晰问题。开头先给直接答案，并说明适用条件。
- 使用有意义的 H2/H3、真实作者、公开来源与核对日期。支持重要结论的来源须可核实。
- 写自然中文，不堆关键词、不编造权威背书、不虚构用户数量与交易数据。
- 相关文章之间添加有意义的内链，外链使用真实目标。
- 页面 HTML 已包含正文、独立标题/摘要、canonical、BlogPosting、面包屑及日期。请确保字段真实完整。
- robots.txt、sitemap.xml、feed.xml、llms.txt 会随构建更新。llms.txt 仅辅助描述，不是任何平台的收录保证。
- Google Search Console / Bing Webmaster Tools / 百度搜索资源平台需要站点所有者验证后提交 sitemap；当前未代办账号验证，未声称已收录。
- 官网 CTA 已带 UTM 来源参数；只有官网实际接入统计后，才能计算真实引流效果。禁止展示虚构点击量。

## 验证与迁移

线上验证为准：本机未安装 Ruby/Jekyll 时，不将简单 HTML 预览视为完整构建通过。
如需本地构建，安装 Ruby 后运行 `bundle install`、`bundle exec jekyll serve`。
后续绑定独立域名时，需同时更新 `_config.yml` 的 url 与 Pages 域名设置，确认 HTTPS、重定向、canonical、站点地图，再更新站长平台。不要购买或绑定未经用户指定的域名。
