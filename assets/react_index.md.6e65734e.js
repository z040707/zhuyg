import{_ as s,o as a,c as n,X as l}from"./chunks/framework.3b4788da.js";const A=JSON.parse('{"title":"React 入门","description":"","frontmatter":{},"headers":[],"relativePath":"react/index.md","filePath":"react/index.md","lastUpdated":null}'),o={name:"react/index.md"},t=l(`<h1 id="react-入门" tabindex="-1">React 入门 <a class="header-anchor" href="#react-入门" aria-label="Permalink to &quot;React 入门&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vite 快速创建</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装所有依赖项</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 项目运行</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><h1 id="文件目录分析" tabindex="-1">文件目录分析 <a class="header-anchor" href="#文件目录分析" aria-label="Permalink to &quot;文件目录分析&quot;">​</a></h1><h2 id="src-main-jsx" tabindex="-1"><code>src/main.jsx</code> <a class="header-anchor" href="#src-main-jsx" aria-label="Permalink to &quot;\`src/main.jsx\`&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ReactDOM </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">react-dom/client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./App.jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRoot</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">React.StrictMode</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title"><code>StrictMode</code></p><ul><li>严格模式组件，默认控制组件在状态更新后，渲染两次，方便查找副作用错误</li><li>这个组件只会在开发模式下生效</li></ul></div>`,7),p=[t];function e(c,r,i,D,y,F){return a(),n("div",null,p)}const d=s(o,[["render",e]]);export{A as __pageData,d as default};
