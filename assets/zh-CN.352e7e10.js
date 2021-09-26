import{_ as s}from"./IconSfc.576827a5.js";import{o as e,c as a,a5 as l}from"./vendor.d2d73257.js";const c={components:{}},n={class:"varlet-site-doc"},o=[l('<h1>国际化</h1><div class="card"><h3>介绍</h3><p>组件库使用中文作为默认语言，支持多语言切换，内置支持<code>中文</code>，<code>英文</code>。</p></div><div class="card"><h3>多语言切换</h3><p>引入<code>Locale</code>组件实现多语言切换，使用<code>Locale.add</code>进行语言扩展。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Locale } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/es/locale/en-US&#39;</span>\n\nLocale.add(<span class="hljs-string">&#39;en-US&#39;</span>, enUS)\n</code></pre><p>使用<code>Locale.use</code>进行切换语言</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.use(<span class="hljs-string">&#39;en-US&#39;</span>)\n</code></pre><p>使用<code>Locale.merge</code>进行语言合并</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.merge(<span class="hljs-string">&#39;en-US&#39;</span>, {\n  <span class="hljs-attr">dialogTitle</span>: <span class="hljs-string">&#39;Hello&#39;</span>\n})\n</code></pre></div>',3)];var r=s(c,[["render",function(s,l,c,r,p,d){return e(),a("div",n,o)}]]);export{r as default};