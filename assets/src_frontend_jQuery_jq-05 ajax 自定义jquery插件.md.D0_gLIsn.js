import{_ as s,c as i,o as a,a5 as p}from"./chunks/framework.CmFZ6rCi.js";const y=JSON.parse('{"title":"jq-05 ajax 自定义jquery插件","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/jQuery/jq-05 ajax 自定义jquery插件.md","filePath":"src/frontend/jQuery/jq-05 ajax 自定义jquery插件.md","lastUpdated":1645598277000}'),t={name:"src/frontend/jQuery/jq-05 ajax 自定义jquery插件.md"},n=p(`<h1 id="jq-05-ajax-自定义jquery插件" tabindex="-1">jq-05 ajax 自定义jquery插件 <a class="header-anchor" href="#jq-05-ajax-自定义jquery插件" aria-label="Permalink to &quot;jq-05 ajax 自定义jquery插件&quot;">​</a></h1><h2 id="一、ajax" tabindex="-1">一、ajax <a class="header-anchor" href="#一、ajax" aria-label="Permalink to &quot;一、ajax&quot;">​</a></h2><p>ajax的优势和不足： ● 优势： 1. 不需要插件支持 2. 优秀的用户体验 3. 提高 web 程序的性能 4. 减轻服务器和带宽的负担 ● 不足：<br> 1. 破坏浏览器前进、后退按钮的正常功能 2. 对搜索引擎的支持不足</p><ol><li>$.ajax({}),括号内容填写一个对象；里面写参数</li></ol><p>常用参数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ajax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 请求的地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 请求的方式（get/post），默认为 get</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cache: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 给链接加缓存</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    async: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //是否异步</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timeout: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 设置请求超时时间，单位毫秒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送到后端的数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dataType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 预期服务器返回的数据类型，有 xml, html, script,json, jsonp,text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 成功的回调</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 失败的回调</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    complete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 请求完成后调用的函数，请求成功或失败均调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    global: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否触发全局的 ajax 事件，默认为 true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ol start="2"><li>$.get()；</li></ol><p>$.get(url,{}，function(){},type)；</p><p>第一个参数：url地址；</p><p>第二个参数：向后台发送的数据；</p><p>第三个参数：成功的处理函数；需要一个形参用来接收，第二个形参是状态status；</p><p>第四个参数：返回类型，一般是json；</p><p>以get方式传递数据，只能处理成功的信息，想要处理失败的信息需要使用$.ajax()；</p><ol start="3"><li>$.post()；</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url,{},</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){},type)；</span></span></code></pre></div><ol start="4"><li><p>get 请求和 post 请求的区别 （1）get 请求参数跟在 URL 后进行传递，而 post 请求则是作为 HTTP 消息的实体内容发送给 WEB 服务器。当然，在 ajax 请求中，这种区别对用户是不可见的。</p><pre><code> （2）get 请求方式对传输的数据有大小限制（通常不能大于 2KB），而使用 post 方式传递的数据量要比 get 方式大得多（理论上不受限制）。
 
 （3）get 方式请求的数据会被浏览器缓存起来，因此其他人就可以从浏览器的历史记录中读取到这些数据，例如账号和密码等。在某种情况下，get方式会带来严重的安全性问题，而 post 方式相对来说可以避免这些问题。
 
 （4）get 方式和 post 方式传递的数据在服务器端获取也不相同。在 php 中，get 方式的数据可以用 $_GET[] 获取，而 post 方式可以用 $_POST[] 获取。两种方式都可以用 $_REQUEST[] 来获取。
</code></pre></li><li><p>.load(url,[data],[callback]);</p></li></ol><p>将服务器的数据或其他文件的内容加载到调用元素的内容中，如果调用的元素不存在，则不会调用；</p><p>常用于加载页面的一个片段，放的一个空标签，往里面填写内容；</p><p>url插入地址，callback方法完成后所执行的函数名称；</p><p>url地址也可以紧跟空格后写jQuery选择器：$(&quot;div&quot;).load(&quot;1.txt #demo&quot;);另一个文件中除了这个选择器外的内容被抛弃；</p><p>异步5秒刷新：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location.href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; #content&gt;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="二、jquery中的jsonp" tabindex="-1">二、jQuery中的jsonp <a class="header-anchor" href="#二、jquery中的jsonp" aria-label="Permalink to &quot;二、jQuery中的jsonp&quot;">​</a></h2><p>jsonp 是 jQuery 中的跨域处理；</p><ol><li>跨域</li></ol><p>跨域概念：a.cn 下面的 js 不能调用 b.cn 中的js。因为 a.cn 和 b.cn是不同域，所以跨域就出现了。</p><p>同域的概念：域名、端口、协议相同。</p><ol start="2"><li>jQuery 的 jsonp 如何发起跨域请求及其原理</li></ol><p>先准备两个环境：</p><p>我们一个用京东的：<a href="https://p.3.cn/prices/mgets?skuIds=J_5089253&amp;type=1" target="_blank" rel="noreferrer">https://p.3.cn/prices/mgets?skuIds=J_5089253&amp;type=1</a></p><p>另一个用我们本地的环境，这样两个就会产生跨域，直接发起 ajax 请求，如下图 , 浏览器会发出警告</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ‘https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//p.3.cn/prices/mgets?skuIds=J_5089253&amp;type=1’;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ajax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: url,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/jq-05_ajax_%E8%87%AA%E5%AE%9A%E4%B9%89jquery%E6%8F%92%E4%BB%B6-01.png" alt="image"> 3. jsonp方式及其原理解析；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 请求的 url 地址</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://p.3.cn/prices/mgets?skuIds=J_5089253&amp;type=1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个全局函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> showData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 点击时，在 head 中创建一个 script 标签，标签的 src 即我们要跨域的地址，后面跟上 &amp;callback=showData</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        $</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(‘head’).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;script src=&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;callback=showData&quot;&gt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">script&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>注意：script标签的反斜杠需要转义；</p><p>利用script标签可以引用线上script的js文件，没有跨域的限制，当获取跨域数据时，添加一个script标签来跨域请求，地址后面需要带一个callback函数，用来包裹请求到的数据；数据返回到前端后，就是showData(data) 的形式，因为是 script 脚本，所以自动调用全局的 showData 函数，而data 就是 showData 的参数。</p><p>这种方式比较麻烦，需要自己写脚本发起请求，然后写个回调函数处理数据，不是很方便。</p><ol start="4"><li><p>jQuery 的 jsonp 方式跨域请求</p><p>在 jQuery 中，只需配置一个 dataType:&#39;jsonp&#39;，就可以发起一个跨域请求。jsonp指定服务器返回的数据类型为 jsonp 格式，可以看发起的请求路径，自动带了一个callback=xxx，xxx 是 jQuery 随机生成的一个回调函数名称。</p><p>注意：jsonp 方式不支持 POST 方式跨域请求，就算指定成 POST 方式，会自动转为 GET 方式；而后端如果设置成 POST 方式了，那就请求不了了；</p></li></ol><h2 id="三、数据串连化" tabindex="-1">三、数据串连化 <a class="header-anchor" href="#三、数据串连化" aria-label="Permalink to &quot;三、数据串连化&quot;">​</a></h2><p>我们用 serialize() 方法和 serializeArray() 两个方法来序列化元素</p><p>格式：</p><pre><code>表单 form.serialize();

表单 form.serializeArray();
</code></pre><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”text”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”a”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”1”</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”text”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”b”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”2”</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”text”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”c”</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">”3”</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol><li>$(‘form’).serialize() 返回的是 a=1&amp;b=2&amp;c=3，它其实是把 name 值和 value值用等号连接成一组，用 &amp; 再把每个组连接起来，这样，一个表单的数据，可以很方便的发送给后端。</li><li>$(‘form’).serializeArray() 返回的是一个数组数组里的每一项是一个对象，对象里有 name 和 value 两个属性，分别对应 input 的 name 和 value。返回值：[{ name : &#39;a&#39; , value : &#39;1&#39; },{ name : &#39;b&#39; , value : &#39;2&#39; },{ name: &#39;c&#39; , value : &#39;3&#39; }]</li></ol><h2 id="四、跨域" tabindex="-1">四、跨域 <a class="header-anchor" href="#四、跨域" aria-label="Permalink to &quot;四、跨域&quot;">​</a></h2><p>跨域问题：a.cn去请求b.cn；</p><p>解决跨域三种方法：</p><ol><li>代理：让服务器代理请求；</li><li>XHR2（XMLHTTPREQUESTLevel2）IE10不支持；</li><li>jsonP；</li></ol><p>jsonP原理：利用script标签中没有跨域的限制，所以将要请求的地址放到script标签的src中，同时在请求的地址后面添加一个回调函数（&amp;callback=aa），这个aa是自定义一个函数的作用，就是去包裹请求回来的数据，需要在aa函数中写一个形参用来接收请求到的数据；</p><p>在使用$.ajax()中，需要在对象里填写dataType，指定值jsonP，回调函数默认使用success函数；</p><p>一般用第一种和第三种；</p><p>注意：jsonp 方式不支持 POST 方式跨域请求，就算指定成 POST 方式，会自动转为 GET 方式；而后端如果设置成 POST 方式了，那就请求不了了；</p><h2 id="五、validate" tabindex="-1">五、validate <a class="header-anchor" href="#五、validate" aria-label="Permalink to &quot;五、validate&quot;">​</a></h2><ol><li>操作方法</li></ol><p>一款基于jquery用于验证表单的插件，使用前需要引入jquery文件；</p><p>内置验证规则，支持自定义验证规则，简单强大的验证信息提示；</p><p>下载地址：<a href="https://jqueryvalidation.org/" target="_blank" rel="noreferrer">https://jqueryvalidation.org/</a></p><p>下载好之后找到解压文件里面的dist/jquery.validate.js,和dist/localization/messages_zh.js；导出这两个文件，并引入；</p><ol start="2"><li>$(&quot;form&quot;).validate()；接收的是一个对象；对象的值：</li></ol><p>rules：验证规则，值是一个对象，填写需要验证的内容，里面的键名是form表单的name名；</p><p>如果只是简单的规则required这些也可以直接写到标签的class类名里面；</p><p>单选项作为键名写到函数对象中，需要写true；</p><p>对于radio、checkbox、select选项，需要设置相同的name；</p><p>debug : true；表单不提交，进行调试；</p><p>messages：提示信息，一个对象，可以修改rule验证的每一项提示信息；键名对应rules的键名，键值填写提示信息；</p><p>submitHandler：是一个函数，用来验证成功执行的函数；用于提交事件，form.submit()；</p><p>常用的属性：</p><p>required 必须输入；</p><p>equalTo:&quot;#field&quot; 密码必须一样；</p><p>(1) required:true 必输字段</p><p>(2) remote:&quot;remote-valid.jsp&quot; 使用ajax方法调用remote-valid.jsp验证输入值</p><p>(3) email:true 必须输入正确格式的电子邮件</p><p>(4) url:true 必须输入正确格式的网址</p><p>(5) date:true 必须输入正确格式的日期，日期校验ie6出错，慎用</p><p>(6) dateISO:true 必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性</p><p>(7) number:true 必须输入合法的数字(负数，小数)</p><p>(8) digits:true 必须输入整数</p><p>(9) creditcard:true 必须输入合法的信用卡号</p><p>(10) equalTo:&quot;#password&quot; 输入值必须和#password相同</p><p>(11) accept: 输入拥有合法后缀名的字符串（上传文件的后缀）</p><p>(12) maxlength:5 输入长度最多是5的字符串(汉字算一个字符)</p><p>(13) minlength:10 输入长度最小是10的字符串(汉字算一个字符)</p><p>(14) rangelength:[5,10] 输入长度必须介于 5 和 10 之间的字符串&quot;)(汉字算一个字符)</p><p>(15) range:[5,10] 输入值必须介于 5 和 10 之间</p><p>(16) max:5 输入值不能大于5</p><p>(17) min:10 输入值不能小于10</p><ol start="3"><li>美化提示文字；validate的属性名；</li></ol><p>（1）errorClass：错误时使用的class类名；默认是error；</p><p>（2）errorElement：包裹错误文字的标签；默认是label；</p><p>（3）success：成功执行的操作，在标签验证通过时触发；</p><p>值可以填写一个字符串，这个字符串是一成功的class类名，</p><p>也可以填写一个函数，需要传一个形参，函数形参指向成功的标签；</p><p>（4）showErrors：验证出错执行的函数；</p><p>两个形参，第一个形参指向提示信息对象，第二个形参是一个数组，数组中包含所有验证出错的表单；</p><p>函数里面必须填写this.defaultShowErrors()方法；否则看不到提示文字；</p><p>因为如果输入错误之后，成功的类名不会删除，所以需要使用这一步删除下一个标签的类名；</p><p>（5）errorPlacement：错误元素放置的位置</p><p>两个形参（error,element），第一个形参指向错误标签；第二个形参指向错误表单；</p><p>默认情况是：error.appendTo(element.parent());即把错误信息放在验证的元素后面。</p><ol start="4"><li>将错误信息放置到统一的容器显示：</li></ol><p>（1）errorContainer：显示或者隐藏验证信息，可以自动实现有错误信息出现时把容器属性变为显示，无错误时隐藏，需要用到将错误信息统一放置的时候使用,值为容器,</p><p>（2）errorLabelContainer：把错误信息统一放在一个容器里；jquery选择器；</p><p>（3）wrapper：用什么标签再把上边的errorElement包起来；</p><p>一般这三个属性同时使用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">errorContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div.container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">errorLabelContainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div.container ul&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;li&quot;</span></span></code></pre></div><ol start="5"><li>设置validate默认值；</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.validator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    submitHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;提交事件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ol start="6"><li>自定义添加验证规则</li></ol><p>$.validator.addMethod(name,method,message);</p><p>name：规则名字，message：输入错误提示信息；</p><p>method：是一个函数，三个形参：value,element,pram；</p><p>函数里面写一个正则，之后用正则来验证value并返回</p><p>return reg.test(value)；</p><p>自定义一个密码验证规则：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.validator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;passd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(?=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[a-zA-Z]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)(?=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[1-9]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)(?=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[\\W]</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{6,}$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;密码至少6-32位,且包含数字、字母、符号&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="六、cookie插件" tabindex="-1">六、cookie插件 <a class="header-anchor" href="#六、cookie插件" aria-label="Permalink to &quot;六、cookie插件&quot;">​</a></h2><p>下载地址：<a href="https://github.com/carhartl/jquery-cookie" target="_blank" rel="noreferrer">https://github.com/carhartl/jquery-cookie</a></p><p>cookie插件是基于jquery的cookie插件，使用时必须同时引入jquery文件；</p><ol><li>设置</li></ol><p>设置：$.cookie(名，值)；</p><p>设置有过期时间：$.cookie(名，值，{expires:7})；</p><p>设置路径：$.cookie(名，值，{expires:7,path:&quot;/&quot;})；/放在根目录；</p><ol start="2"><li>获取：</li></ol><p>$.cookie(名)；传入一个名，返回值；</p><p>当传入没有的名时，返回undefined；</p><p>当不传入参数的时候，返回一个对象；</p><ol start="3"><li>删除</li></ol><p>$.removeCookie(名)；删除；</p><p>当有值时，删除返回true，当传入的名没有时，返回false；</p><p>当删除一个带路径的，需要把路径也加上，加入路径需要写一个对象；</p><p>$.removeCookie(&quot;name&quot;,{path:&quot;/&quot;})；</p><h2 id="七、自定义插件" tabindex="-1">七、自定义插件 <a class="header-anchor" href="#七、自定义插件" aria-label="Permalink to &quot;七、自定义插件&quot;">​</a></h2><ol><li>基于对象的插件；</li></ol><p>$.fn.extend({}),在对象里面写插件；键名键值的方式写函数，取方法时直接点调用；</p><p>为了能在函数里面写$符，需要写一个闭包，括号外面写一个</p><p>注：写方法时为了能够链式调用需要加个return返回出去；</p><ol start="2"><li>全局插件</li></ol><p>$.extend({})，全局调用：$.方法();</p><p>.selector可以和.context一起使用，确定查询的选择器，不是方法，不需要加小括号；</p><p>.selector返回选择器里面填写的内容；</p><p>在将自定义的方法函数放在js文件时，可以在前后都添加一个分号，避免压缩时出错；</p><h2 id="八、使用别人的插件" tabindex="-1">八、使用别人的插件 <a class="header-anchor" href="#八、使用别人的插件" aria-label="Permalink to &quot;八、使用别人的插件&quot;">​</a></h2><ol><li>去网上搜，下载，下载后的文件，一般都是一个压缩包，也可以是一个文件夹；</li><li>引入下载后的css文件；</li><li>引入下载后的js文件；</li><li>使用f12找到需要的板块，之后复制class类名，查看页面源代码，搜索复制的class类名，复制html中的结构的代码；</li><li>复制html中实现功能的代码到页面加载的事件中； 一般情况在使用插件的时候，测试的时候，先把这个代码直接复制到一个div（一个标签），调整整体的大小，位置，样式，然后直接放在自己的页面的某个位置当中，进行使用；</li></ol><h2 id="高频面试题" tabindex="-1">高频面试题 <a class="header-anchor" href="#高频面试题" aria-label="Permalink to &quot;高频面试题&quot;">​</a></h2><p>● 怎么解决跨域问题？</p><p>● ajax 的缺点？</p><p>● ajax 如何实现异步定时 5 秒刷新？</p><p>● 页面编码和被请求的资源编码如果不一致如何处理？</p><p>● jquery 中 $.get() 提交和 $.post() 提交有区别吗？</p><p>● jquery.extend 与 jquery.fn.extend 的区别？</p>`,150),l=[n];function h(e,k,r,E,d,o){return a(),i("div",null,l)}const c=s(t,[["render",h]]);export{y as __pageData,c as default};
