import{_ as n,c as s,o as a,d as t}from"./app.8aafc8a7.js";const m='{"title":"React-08 React\u642D\u5EFA\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76EE\u5F55","slug":"\u76EE\u5F55"},{"level":2,"title":"\u5728react\u4E2D\u4F7F\u7528stylus","slug":"\u5728react\u4E2D\u4F7F\u7528stylus"},{"level":2,"title":"\u642D\u5EFAredux + persist\u6570\u636E\u6301\u4E45\u5316 + redux-devtools\u6269\u5C55\u67E5\u770B;","slug":"\u642D\u5EFAredux-persist\u6570\u636E\u6301\u4E45\u5316-redux-devtools\u6269\u5C55\u67E5\u770B"},{"level":2,"title":"\u5F15\u5165\u56FE\u7247\u7684\u4E24\u79CD\u65B9\u5F0F","slug":"\u5F15\u5165\u56FE\u7247\u7684\u4E24\u79CD\u65B9\u5F0F"},{"level":2,"title":"\u5728\u811A\u624B\u67B6\u4E2D\u4FEE\u6539\u7AEF\u53E3\u53F7","slug":"\u5728\u811A\u624B\u67B6\u4E2D\u4FEE\u6539\u7AEF\u53E3\u53F7"},{"level":2,"title":"\u914D\u7F6Ewebpack","slug":"\u914D\u7F6Ewebpack"},{"level":2,"title":"\u914D\u7F6E\u522B\u540D","slug":"\u914D\u7F6E\u522B\u540D"},{"level":2,"title":"\u6DFB\u52A0\u811A\u624B\u67B6\u89C4\u8303\u6587\u4EF6","slug":"\u6DFB\u52A0\u811A\u624B\u67B6\u89C4\u8303\u6587\u4EF6"},{"level":3,"title":"\u6DFB\u52A0prettier","slug":"\u6DFB\u52A0prettier"},{"level":2,"title":"\u6DFB\u52A0eslint","slug":"\u6DFB\u52A0eslint"},{"level":2,"title":"\u6DFB\u52A0stylelint","slug":"\u6DFB\u52A0stylelint"},{"level":3,"title":"\u6DFB\u52A0commitlint","slug":"\u6DFB\u52A0commitlint"},{"level":3,"title":"\u6DFB\u52A0lint-staged","slug":"\u6DFB\u52A0lint-staged"},{"level":3,"title":"\u6DFB\u52A0husky","slug":"\u6DFB\u52A0husky"},{"level":2,"title":"antd\u4F7F\u7528\u6280\u5DE7","slug":"antd\u4F7F\u7528\u6280\u5DE7"},{"level":2,"title":"react\u767E\u5EA6\u57CB\u70B9\u6280\u5DE7","slug":"react\u767E\u5EA6\u57CB\u70B9\u6280\u5DE7"},{"level":2,"title":"\u4F7F\u7528hooks\u642D\u5EFA\u4E00\u4E2A\u5C0F\u578B\u7684redux","slug":"\u4F7F\u7528hooks\u642D\u5EFA\u4E00\u4E2A\u5C0F\u578B\u7684redux"}],"relativePath":"src/frontend/React/React\u642D\u5EFA\u9879\u76EE.md","lastUpdated":1660203533000}',p={},o=t(`<h1 id="react-08-react\u642D\u5EFA\u9879\u76EE" tabindex="-1">React-08 React\u642D\u5EFA\u9879\u76EE <a class="header-anchor" href="#react-08-react\u642D\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h1><p>\u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token function">yarn</span> global <span class="token function">add</span> create-react-app
</code></pre></div><p>\u751F\u6210\u9879\u76EE</p><div class="language-bash"><pre><code><span class="token function">yarn</span> create react-app demo<span class="token punctuation">(</span>\u9879\u76EE\u540D\u79F0<span class="token punctuation">)</span>  <span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u811A\u624B\u67B6\uFF08\u5E26hook\u4F9D\u8D56\u68C0\u6D4B\uFF09</span>
<span class="token function">yarn</span> create react-app demo --template typescript <span class="token comment"># \u521B\u5EFA\u4E00\u4E2Atypescript\u7684react\u811A\u624B\u67B6</span>
</code></pre></div><h2 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h2><p>\u5728src\uFF0C\u521B\u5EFA\u76EE\u5F55</p><p>assets\u3001common\u3001components\u3001router</p><p>\u5982\u679C\u9700\u8981\u5F15\u5165api\uFF0C\u53EF\u4EE5\u5728common\u6587\u4EF6\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2Aapi\u7684\u6587\u4EF6\uFF1B</p><p>\u8868\u5355\u9A8C\u8BC1\u6846\u67B6\uFF1Arc-form\uFF0C\u7528\u6CD5\u53EF\u4EE5\u76F4\u63A5\u53C2\u7167antd\u7684form\u8868\u5355\uFF0C\u4F7F\u7528\u65B9\u6CD5\u4E00\u81F4\uFF1B</p><h2 id="\u5728react\u4E2D\u4F7F\u7528stylus" tabindex="-1">\u5728react\u4E2D\u4F7F\u7528stylus <a class="header-anchor" href="#\u5728react\u4E2D\u4F7F\u7528stylus" aria-hidden="true">#</a></h2><ol><li>\u6253\u5F00git bash\uFF0C\u4F9D\u6B21\u8FD0\u884C\u4EE5\u4E0B\u4EE3\u7801</li></ol><div class="language-bash"><pre><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;description&#39;</span>
</code></pre></div><ol start="2"><li>\u6253\u5F00cmd\u8FD0\u884C\uFF1A</li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> run <span class="token function">eject</span>
<span class="token function">yarn</span> <span class="token function">add</span> stylus stylus-loader
</code></pre></div><p>\u6CE8\u610F\uFF1A\u6B64\u65F6\u91CD\u542F\uFF0C\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u5220\u9664node_nodules\uFF0C\u6267\u884Cyarn install\u91CD\u65B0\u5B89\u88C5\u6240\u6709\u7684\u5305\u91CD\u542F\u5373\u53EF\uFF1B</p><ol start="3"><li>\u5230\u9879\u76EE\u6587\u4EF6\u5939\u4E0B\uFF0C\u627E\u5230config --&gt; webpack.config.js</li></ol><p>\uFF081\uFF09\u5728320\u884C\u5DE6\u53F3\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-jsx"><pre><code><span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;stylus-loader&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\uFF082\uFF09\u5982\u679C\u9700\u8981\u914D\u7F6E\u522B\u540D@\u7B26</p><div class="language-jsx"><pre><code><span class="token comment">// \u5728274\u884C\u5DE6\u53F3\u4FEE\u6539</span>
<span class="token string-property property">&#39;react-native&#39;</span><span class="token operator">:</span> <span class="token string">&#39;react-native-web&#39;</span>
<span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;../src&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u642D\u5EFAredux-persist\u6570\u636E\u6301\u4E45\u5316-redux-devtools\u6269\u5C55\u67E5\u770B" tabindex="-1">\u642D\u5EFAredux + persist\u6570\u636E\u6301\u4E45\u5316 + redux-devtools\u6269\u5C55\u67E5\u770B; <a class="header-anchor" href="#\u642D\u5EFAredux-persist\u6570\u636E\u6301\u4E45\u5316-redux-devtools\u6269\u5C55\u67E5\u770B" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7D\u5B89\u88C5\uFF1A <code>npm i redux react-redux redux-persist redux-devtools-extension redux-thunk</code></p></li><li><p>\u521B\u5EFAstore/reducers/index.js</p></li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/*...*/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u521B\u5EFAstore/index.js</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> applyMiddleware<span class="token punctuation">,</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">&#39;./reducers&#39;</span> <span class="token comment">//\u81EA\u52A8\u83B7\u53D6index.js</span>

<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span> <span class="token comment">// \u5F02\u6B65\u5904\u7406\u4E2D\u95F4\u4EF6</span>
<span class="token comment">// \u8C37\u6B4C\u5DE5\u5177\u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeWithDevTools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-devtools-extension&#39;</span>
<span class="token comment">// \u5F15\u5165\u6570\u636E\u6301\u4E45\u5316</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> persistReducer<span class="token punctuation">,</span> persistStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist&#39;</span>
<span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/lib/storage&#39;</span>

<span class="token keyword">const</span> rootPersistConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    storage<span class="token punctuation">,</span>
    <span class="token comment">/* blacklist: [/*\u586B\u5165reduers/index.js\u91CC\u9762\u6709\u6301\u4E45\u5316\u7684\u6570\u636E\u7684\u5B57\u6BB5key\u503C*/</span><span class="token punctuation">]</span> \u5982\u679Creduers\u6587\u4EF6\u5939\u91CC\u9762\u6CA1\u6709\u4F7F\u7528persist\u5219\u53EF\u4EE5\u4E0D\u5199blacklist   <span class="token operator">*</span><span class="token operator">/</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> persistedReducer <span class="token operator">=</span> <span class="token function">persistReducer</span><span class="token punctuation">(</span>rootPersistConfig<span class="token punctuation">,</span> rootReducer<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
    persistedReducer<span class="token punctuation">,</span>
    <span class="token function">composeWithDevTools</span><span class="token punctuation">(</span>
        <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> persistor <span class="token operator">=</span> <span class="token function">persistStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u521B\u5EFAstore/actions\uFF0Cstore/action-types.js</li></ol><p>\u5728actions\u6587\u4EF6\u5939\u91CC\u9762\uFF0C\u5BFC\u51FA\u89E6\u53D1\u7684\u65B9\u6CD5\uFF0C\u5728action-types.js\u91CC\u9762\u7BA1\u7406\u53D8\u91CF\u540D\uFF1B</p><ol start="5"><li>\u5728src/index.js\u6587\u4EF6\u914D\u7F6E</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PersistGate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-persist/integration/react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store<span class="token punctuation">,</span> persistor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PersistGate</span></span> <span class="token attr-name">persistor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>persistor<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PersistGate</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5F15\u5165\u56FE\u7247\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1">\u5F15\u5165\u56FE\u7247\u7684\u4E24\u79CD\u65B9\u5F0F <a class="header-anchor" href="#\u5F15\u5165\u56FE\u7247\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u4F7F\u7528import\u5F15\u5165</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token constant">IMG</span> <span class="token keyword">from</span> <span class="token string">&#39;../...&#39;</span>
</code></pre></div><ol start="2"><li>\u5728\u72B6\u6001\u673A\u5F15\u5165</li></ol><div class="language-jsx"><pre><code>state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;....&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>img<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token comment">// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728src\u91CC\u9762\u5F15\u5165</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="\u5728\u811A\u624B\u67B6\u4E2D\u4FEE\u6539\u7AEF\u53E3\u53F7" tabindex="-1">\u5728\u811A\u624B\u67B6\u4E2D\u4FEE\u6539\u7AEF\u53E3\u53F7 <a class="header-anchor" href="#\u5728\u811A\u624B\u67B6\u4E2D\u4FEE\u6539\u7AEF\u53E3\u53F7" aria-hidden="true">#</a></h2><ol><li>node_model ==&gt; react-script ==&gt; script ==&gt; start.js</li></ol><p>\u627E\u5230DEFAULT_PORT\uFF0C\u5E76\u4FEE\u6539\u5373\u53EF\uFF0C\u4FEE\u6539\u4E86\u670D\u52A1\u5668\u9700\u8981\u8FDB\u884C\u91CD\u542F\uFF1B</p><ol start="2"><li>\u5728\u542F\u52A8\u65F6\u76F4\u63A5\u4FEE\u6539\u7AEF\u53E3\u542F\u52A8</li></ol><p>\u5728package.json\u91CC\u9762\u4FEE\u6539script--&gt;start</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;set PORT=9000 &amp;&amp; react-scripts start&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>&amp; \u4E3A\u5E76\u884C\u6267\u884C\uFF0C\u540C\u65F6\u6267\u884C\uFF0C</p><p>&amp;&amp; \u4E3A\u7EE7\u53D1\u6267\u884C\uFF0C\u524D\u4E00\u4E2A\u6210\u529F\u624D\u6267\u884C\u540E\u4E00\u4E2A</p><ol start="3"><li>\u76F4\u63A5\u5728config.overrides.js\u4FEE\u6539</li></ol><div class="language-jsx"><pre><code>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">3006</span>
</code></pre></div><h2 id="\u914D\u7F6Ewebpack" tabindex="-1">\u914D\u7F6Ewebpack <a class="header-anchor" href="#\u914D\u7F6Ewebpack" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><p><code>yarn add react-app-rewired customize-cra -D</code></p><p>\u7531\u4E8Ecustomize-cra\u4F9D\u8D56react-app-rewired\uFF0C\u6240\u4EE5\u9700\u8981\u5B89\u88C5\u4E24\u4E2A\u63D2\u4EF6</p><p>\u5B98\u7F51\uFF1A <a href="https://github.com/arackaf/customize-cra" target="_blank" rel="noopener noreferrer">https://github.com/arackaf/customize-cra</a></p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\uFF1A<code>craco</code>\uFF1B</p><ol start="2"><li>\u4FEE\u6539package.json</li></ol><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-app-rewired start&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-app-rewired build&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-app-rewired test --env=jsdom&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;eject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts eject&quot;</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ol start="3"><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u65B0\u5EFA\uFF1Aconfig-overrides.js</li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> override <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>\u6DFB\u52A0\u914D\u7F6E\uFF0C\u8DE8\u57DF\u8BBE\u7F6E\u3001\u589E\u52A0less\u652F\u6301\u3001px\u8F6Crem\u3001ant-design-mobile\u6309\u9700\u52A0\u8F7D\u3001\u6253\u5305\u538B\u7F29js\u548Ccss\u3001\u5173\u95EDconsole</li></ol><div class="language-jsx"><pre><code><span class="token comment">// \u5B89\u88C5less less-loader</span>
yarn add less less<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// \u5B89\u88C5compression-webpack-plugin \u538B\u7F29js\u4E3Agzip</span>
yarn add compression<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> 
    override<span class="token punctuation">,</span> 
    overrideDevServer<span class="token punctuation">,</span> 
    addLessLoader<span class="token punctuation">,</span> 
    addPostcssPlugins<span class="token punctuation">,</span>
    addWebpack 
    fixBabelImports <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5305\u914D\u7F6E</span>
<span class="token keyword">const</span> <span class="token function-variable function">addCustomize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5173\u95EDsourceMap</span>
    config<span class="token punctuation">.</span>devtool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// \u914D\u7F6E\u6253\u5305\u540E\u7684\u6587\u4EF6\u4F4D\u7F6E</span>
    config<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path <span class="token operator">=</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;../dist/demo/&#39;</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>output<span class="token punctuation">.</span>publicPath <span class="token operator">=</span> <span class="token string">&#39;./demo&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6DFB\u52A0js\u6253\u5305gzip\u914D\u7F6E</span>
    config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8DE8\u57DF\u914D\u7F6E</span>
<span class="token keyword">const</span> <span class="token function-variable function">devServerConfig</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token comment">// \u670D\u52A1\u5F00\u542Fgzip</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u751F\u4EA7\u73AF\u5883\u53BB\u9664console</span>
<span class="token keyword">const</span> <span class="token function-variable function">dropConsole</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span>minimizer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span>minimizer<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">minimizer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minimizer<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;TerserPlugin&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          minimizer<span class="token punctuation">.</span>options<span class="token punctuation">.</span>terserOptions<span class="token punctuation">.</span>compress<span class="token punctuation">.</span>drop_console <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">webpack</span><span class="token operator">:</span> <span class="token function">override</span><span class="token punctuation">(</span>
    <span class="token function">fixBabelImports</span><span class="token punctuation">(</span><span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">dropConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">addLessLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">addPostcssPlugins</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-pxtorem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">selectorBlackList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;am-&#39;</span><span class="token punctuation">]</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">addCustomize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">//devServer\u9700\u8981\u5206\u5F00\u914D\u7F6E</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token function">overrideDevServer</span><span class="token punctuation">(</span>
    <span class="token function">devServerConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="5"><li>\u6DFB\u52A0webpack\u5176\u4ED6\u63D2\u4EF6</li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> addWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> AntdDayjsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;antd-dayjs-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
    <span class="token function">addWebpackPlugin</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="6"><li>\u81EA\u5B9A\u4E49override\u7684\u51FD\u6570</li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">curtomFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// \u586B\u5199\u9700\u8981\u505A\u7684\u4E8B\u60C5</span>
    <span class="token keyword">return</span> config
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
    <span class="token function">curtomFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// \u5728\u91CC\u9762\u8C03\u7528\u4E00\u4E0B\u5373\u53EF</span>
    <span class="token comment">// \u8FD8\u53EF\u4EE5\u5728\u51FD\u6570\u540E\u9762\u8C03\u7528</span>
    <span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span>env</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> config
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><ol start="7"><li>\u914D\u7F6Eflex\u5E03\u5C40\u5728\u4F4E\u7248\u672C\u624B\u673A\u4E0D\u517C\u5BB9</li></ol><p>\u76F4\u63A5\u4FEE\u6539package.json\u6587\u4EF6</p><div class="language-json"><pre><code><span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;defaults&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;not ie &lt; 11&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iOS 7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 3 iOS versions&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="8"><li>\u5982\u679C\u8981\u4F7F\u7528\u7C7B\u7684\u88C5\u9970\u5668decorators</li></ol><p>\u7531\u4E8E\u662F\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u5B98\u65B9\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u56E0\u6B64\u9700\u8981\u624B\u52A8\u5F00\u542F</p><p>npm i @babel/plugin-proposal-decorators</p><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> fixBabelImports<span class="token punctuation">,</span> addLessLoader<span class="token punctuation">,</span> addDecoratorsLegacy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span> 
    <span class="token function">addDecoratorsLegacy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u914D\u7F6E\u522B\u540D" tabindex="-1">\u914D\u7F6E\u522B\u540D <a class="header-anchor" href="#\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5\u63D2\u4EF6 <code>yarn add react-app-rewired customize-cra</code></li><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2Aconfig-overrides.js\uFF0C\u7528\u4E8E\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF1B</li><li>\u4EE3\u7406\u6587\u4EF6\u8DEF\u5F84</li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> override<span class="token punctuation">,</span> addWebpackAlias <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;customize-cra&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">override</span><span class="token punctuation">(</span>
    <span class="token function">addWebpackAlias</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;components&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;assets&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src/assets&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// \u5C06\u5E38\u7528\u7684\u51E0\u4E2A\u6587\u4EF6\u5939\u6302\u8F7D;</span>
<span class="token punctuation">)</span>
</code></pre></div><p><img src="https://notecdn.hrhe.cn/images/react-08_React%E6%90%AD%E5%BB%BA%E9%A1%B9%E7%9B%AE-01.png" alt="image"></p><p>\u6253\u5305</p><ol><li>\u5728package.json\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u53E5 &quot;homepage&quot;: &quot;.&quot;,</li></ol><p><img src="https://notecdn.hrhe.cn/images/react-08_React%E6%90%AD%E5%BB%BA%E9%A1%B9%E7%9B%AE-02.png" alt="image"></p><ol start="2"><li>\u4E4B\u540E\u8FD0\u884Cnpm run build\uFF1B</li></ol><h2 id="\u6DFB\u52A0\u811A\u624B\u67B6\u89C4\u8303\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0\u811A\u624B\u67B6\u89C4\u8303\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0\u811A\u624B\u67B6\u89C4\u8303\u6587\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u6DFB\u52A0prettier" tabindex="-1">\u6DFB\u52A0prettier <a class="header-anchor" href="#\u6DFB\u52A0prettier" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev --save-exact prettier

<span class="token comment"># \u521B\u5EFA\u7A7A\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span> .prettierrc.json

<span class="token comment"># \u521B\u5EFA.prettierignore\uFF0C\u5E76\u5199\u5165\u914D\u7F6E</span>
<span class="token comment"># Ignore artifacts:</span>
build
coverage

<span class="token comment"># \u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u683C\u5F0F\u5316\u4EE3\u7801</span>
npx prettier --write <span class="token builtin class-name">.</span>

<span class="token comment"># \u6821\u9A8C\u662F\u5426\u8FD0\u884C\u4E86prettier</span>
npx prettier --check <span class="token builtin class-name">.</span>
</code></pre></div><p>\u5982\u679C\u6709eslint\u6216\u5176\u4ED6\u7684linter\uFF0Ceslint\u9700\u8981\u5B89\u88C5<code>eslint-config-prettier</code>\u76F8\u4E92\u914D\u5408</p><p>stylelint\u6709\u7C7B\u4F3C\u7684stylelint-config-prettier</p><h2 id="\u6DFB\u52A0eslint" tabindex="-1">\u6DFB\u52A0eslint <a class="header-anchor" href="#\u6DFB\u52A0eslint" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>npx eslint --init
</code></pre></div><p>\u5173\u4E8Eeslint\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\u53EF\u4EE5\u770B\uFF1A<a href="https://www.jianshu.com/p/eaa94b26cf97" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/eaa94b26cf97</a></p><h2 id="\u6DFB\u52A0stylelint" tabindex="-1">\u6DFB\u52A0stylelint <a class="header-anchor" href="#\u6DFB\u52A0stylelint" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev stylelint stylelint-config-standard stylelint-config-prettier
</code></pre></div><p>\u521B\u5EFA<code>.stylelintrc.json</code></p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stylelint-config-prettier&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6DFB\u52A0commitlint" tabindex="-1">\u6DFB\u52A0commitlint <a class="header-anchor" href="#\u6DFB\u52A0commitlint" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/config-conventional @commitlint/cli

<span class="token comment"># \u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot;</span> <span class="token operator">&gt;</span> commitlint.config.js
</code></pre></div><h3 id="\u6DFB\u52A0lint-staged" tabindex="-1">\u6DFB\u52A0lint-staged <a class="header-anchor" href="#\u6DFB\u52A0lint-staged" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev lint-staged
</code></pre></div><p>packagejson\u6DFB\u52A0Lint-staged</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/*.{ts,tsx}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --cache --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/*.{css,less}&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier --write --ignore-unknown&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6DFB\u52A0husky" tabindex="-1">\u6DFB\u52A0husky <a class="header-anchor" href="#\u6DFB\u52A0husky" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">pnpm</span> <span class="token function">add</span> husky -D

<span class="token comment"># package.json\u6DFB\u52A0\u811A\u672C</span>
<span class="token comment"># &quot;prepare&quot;: &quot;husky install&quot;</span>

<span class="token comment"># \u8FD0\u884Chusky\u5B89\u88C5</span>
<span class="token function">pnpm</span> husky

<span class="token comment"># \u521B\u5EFAcommit-msg</span>
npx husky <span class="token function">add</span> .husky/commit-msg
<span class="token comment"># \u6253\u5F00.husky/commit-msg\uFF0C\u66FF\u6362undefined\u4E3Anpx --no -- commitlint --edit &quot;$1&quot;</span>

<span class="token comment"># \u521B\u5EFApre-commit</span>
npx husky <span class="token function">add</span> .husky/pre-commit
<span class="token comment"># \u6253\u5F00.husky/pre-commit\uFF0C\u66FF\u6362undefined\u4E3A npx lint-staged</span>
</code></pre></div><h2 id="antd\u4F7F\u7528\u6280\u5DE7" tabindex="-1">antd\u4F7F\u7528\u6280\u5DE7 <a class="header-anchor" href="#antd\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a></h2><p>\u9632\u6B62message\u5F39\u7A97\u70B9\u51FB\u4E00\u76F4\u589E\u52A0</p><div class="language-jsx"><pre><code>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
<span class="token function-variable function">message2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>timer<span class="token punctuation">)</span> <span class="token keyword">return</span>
    message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5199\u5165\u5185\u5BB9\u4E3AReactNode\u7684\u8282\u70B9\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF1B</p><div class="language-jsx"><pre><code>footer<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="react\u767E\u5EA6\u57CB\u70B9\u6280\u5DE7" tabindex="-1">react\u767E\u5EA6\u57CB\u70B9\u6280\u5DE7 <a class="header-anchor" href="#react\u767E\u5EA6\u57CB\u70B9\u6280\u5DE7" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFAutils/tracking.js</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getPreHost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/basic/utils&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5224\u65AD\u73AF\u5883, \u751F\u4EA7\u73AF\u5883\u624D\u7EDF\u8BA1</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getPreHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;prod&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _hmt <span class="token operator">=</span> _hmt <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> hm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    hm<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> s <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>hm<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7981\u6B62\u81EA\u52A8\u53D1\u9001pv\u3001uv\u7EDF\u8BA1, \u624B\u52A8\u53BB\u7EDF\u8BA1</span>
  _hmt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;_setAutoPageview&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u521B\u5EFA\u5B8C\u6210\u5728index.js\u624B\u52A8\u5F15\u5165</li></ol><div class="language-jsx"><pre><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;src/utils/tracking&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u521B\u5EFAutils/index \uFF0C\u6DFB\u52A0\u8282\u6D41\u51FD\u6570\u548C\u767E\u5EA6\u7EDF\u8BA1\u65B9\u6CD5</li></ol><div class="language-jsx"><pre><code><span class="token comment">/**
* \u8282\u6D41\u51FD\u6570
* @param {func} fn \u5F85\u6267\u884C\u7684\u51FD\u6570\u4F53
* @param {number} timeout \u63A7\u5236\u8282\u6D41\u65F6\u95F4
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> timeout <span class="token operator">=</span> <span class="token number">300</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> canRun <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canRun<span class="token punctuation">)</span> <span class="token keyword">return</span>
    canRun <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
      canRun <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
* \u89E6\u53D1\u6570\u636E\u7EDF\u8BA1,\u5728\u9700\u8981\u57CB\u70B9\u7684\u5730\u65B9\u5199\u5165\u7EDF\u8BA1
* \u767E\u5EA6\u7EDF\u8BA1\u6587\u6863\uFF1Ahttps://tongji.baidu.com/web/help/index?from=2
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trackData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> _hmt <span class="token punctuation">}</span> <span class="token operator">=</span> window
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_hmt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _hmt<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u521B\u5EFATracking.js\u7EC4\u4EF6</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>withRouter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>trackData<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/utils&#39;</span>
<span class="token keyword">const</span> trackRunning <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>trackData<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span> <span class="token comment">// \u4F7F\u7528\u8282\u6D41\u51FD\u6570, \u9632\u6B62\u9875\u9762\u89E6\u53D1\u591A\u6B21</span>

<span class="token keyword">class</span> <span class="token class-name">Tracking</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span><span class="token parameter">next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">trackRunning</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;_trackPageview&#39;</span><span class="token punctuation">,</span> next<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>Tracking<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="5"><li>\u5728index\u521B\u5EFAApp.js\u65F6\uFF0C\u4F7F\u7528Tracking.js\u7EC4\u4EF6\u8FDB\u884C\u5305\u88F9\uFF0C\u6240\u6709\u4EE3\u7801\u5199\u5728\u8BE5\u7EC4\u4EF6\u4E0B\u9762</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> Tracking <span class="token keyword">from</span> <span class="token string">&#39;./Tracking&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tracking</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tracking</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="6"><li>\u57CB\u70B9\u793A\u4F8B</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>trackData<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;utils&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">tracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">trackData</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;_trackEvent&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6D4B\u8BD5\u767E\u5EA6\u7EDF\u8BA1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u89E6\u53D1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528hooks\u642D\u5EFA\u4E00\u4E2A\u5C0F\u578B\u7684redux" tabindex="-1">\u4F7F\u7528hooks\u642D\u5EFA\u4E00\u4E2A\u5C0F\u578B\u7684redux <a class="header-anchor" href="#\u4F7F\u7528hooks\u642D\u5EFA\u4E00\u4E2A\u5C0F\u578B\u7684redux" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFAcontext/reducer.js</li></ol><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token punctuation">{</span>type<span class="token punctuation">,</span> <span class="token operator">...</span>payloads<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;SET_VALUE&quot;</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>state<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>payloads<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token operator">:</span> payloads<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;DELETE_VALUE&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> curState <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">delete</span> curState<span class="token punctuation">[</span>payloads<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> curState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u521B\u5EFAcontext/index.js</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&quot;./reducer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createBaseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">useBaseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctxConst <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>ctxConst<span class="token punctuation">)</span> 
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;useBaseContext must be inside a Provider with a value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ctxConst<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>ctx<span class="token punctuation">,</span> useBaseContext<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// ts\u8BB0\u5F97\u52A0as const\u4FDD\u8BC1\u7C7B\u578B</span>
  <span class="token comment">// return [ctx, useBaseContext] as const;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>Context<span class="token punctuation">,</span> useBaseContext<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createBaseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">usePageContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pageContext <span class="token operator">=</span> <span class="token function">useBaseContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// TODO custom some</span>
  <span class="token keyword">return</span> pageContext<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">PageContext</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initState<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getValue</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;SET_VALUE&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">delValue</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;DELETE_VALUE&quot;</span><span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> ctx <span class="token operator">=</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    dispatch<span class="token punctuation">,</span>
    getValue<span class="token punctuation">,</span>
    setValue<span class="token punctuation">,</span>
    delValue
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fatherPageCtx <span class="token operator">=</span> <span class="token function">usePageContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>fatherPageCtx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ctx <span class="token operator">=</span> fatherPageCtx<span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;Use father page context&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Context<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>ctx<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Context<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u5728\u5165\u53E3\u6587\u4EF6\u5F15\u5165</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PageContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./context&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PageContext</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PageContext</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u4F7F\u7528\u65F6\uFF1A</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePageContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./context&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> state <span class="token punctuation">}</span>  <span class="token operator">=</span> <span class="token function">usePageContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,123),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
