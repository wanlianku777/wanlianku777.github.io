'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('#article-body');
  if (article) {
    const toc = document.querySelector('#toc-links');
    article.querySelectorAll('h2').forEach((h, i) => {
      if (!h.id) h.id = 'section-' + (i + 1);
      const a = document.createElement('a'); a.href = '#' + h.id; a.textContent = h.textContent; toc.append(a);
    });
    if (!toc.children.length) document.querySelector('.toc').hidden = true;
    const progress = document.querySelector('.reading-progress');
    const update = () => {
      const start = article.getBoundingClientRect().top + window.scrollY;
      const end = Math.max(1, article.offsetHeight - window.innerHeight / 2);
      progress.style.width = Math.min(100, Math.max(0, (window.scrollY - start + 180) / end * 100)) + '%';
    };
    window.addEventListener('scroll', update, {passive:true}); update();
    document.querySelector('#copy-link').addEventListener('click', async () => {
      const status = document.querySelector('#copy-status');
      try { await navigator.clipboard.writeText(document.querySelector('link[rel=canonical]').href); status.textContent = ' 已复制'; }
      catch { status.textContent = ' 请复制浏览器地址栏链接'; }
    });
  }
  const filters = document.querySelector('#archive-filters');
  if (filters) {
    const applyFilter = () => {
      const category = new URLSearchParams(location.search).get('category') || '';
      let count = 0;
      document.querySelectorAll('[data-post-category]').forEach(row => { row.hidden = !!category && row.dataset.postCategory !== category; if (!row.hidden) count++; });
      filters.querySelectorAll('a').forEach(a => { const active = (new URL(a.href).searchParams.get('category') || '') === category; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); });
      const empty = document.querySelector('#archive-empty'); empty.hidden = count > 0;
      empty.textContent = category ? '暂无匹配文章，可浏览其他专题。' : '暂无匹配文章，可浏览专题导航。';
    };
    filters.addEventListener('click', e => { const a=e.target.closest('a'); if(!a || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)return; e.preventDefault(); history.pushState(null,'',a.href);applyFilter(); });
    window.addEventListener('popstate',applyFilter);applyFilter();
  }
  const form = document.querySelector('#search-form');
  if (form) {
    const input = document.querySelector('#query'), status = document.querySelector('#search-status'), results = document.querySelector('#search-results');
    const data = JSON.parse(document.querySelector('#search-data').textContent);
    const run = () => {
      const q = input.value.trim().toLocaleLowerCase('zh-CN'); results.replaceChildren();
      if (!q) { status.textContent = '输入关键词，搜索文章标题、摘要和正文。'; return; }
      const matches = data.filter(p => q.split(/\s+/).every(t => (p.title+' '+p.description+' '+p.category+' '+p.content).toLocaleLowerCase('zh-CN').includes(t)));
      status.textContent = matches.length ? '找到 '+matches.length+' 篇相关文章' : '暂时没有找到相关文章。试试“合作”“资源”，或浏览专题导航。';
      matches.forEach(p => {const row=document.createElement('article');row.className='search-result';const meta=document.createElement('div');meta.className='eyebrow';meta.textContent=p.category+' · '+p.date;const h=document.createElement('h2');const a=document.createElement('a');a.href=p.url;a.textContent=p.title;h.append(a);const desc=document.createElement('p');desc.textContent=p.description;row.append(meta,h,desc);results.append(row);});
    };
    form.addEventListener('submit',e=>{e.preventDefault();const url=new URL(location.href);if(input.value.trim())url.searchParams.set('q',input.value.trim());else url.searchParams.delete('q');history.replaceState(null,'',url);run();});
    input.value = new URLSearchParams(location.search).get('q') || '';run();
  }
});
