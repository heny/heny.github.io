import{_ as i,c as s,o as e,a5 as a}from"./chunks/framework.CmFZ6rCi.js";const g=JSON.parse('{"title":"js-09 DOM","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/Javascript/js-09 DOM.md","filePath":"src/frontend/Javascript/js-09 DOM.md","lastUpdated":1620779353000}'),l={name:"src/frontend/Javascript/js-09 DOM.md"},t=a(`<h1 id="js-09-dom" tabindex="-1">js-09 DOM <a class="header-anchor" href="#js-09-dom" aria-label="Permalink to &quot;js-09 DOM&quot;">​</a></h1><h2 id="一、dom" tabindex="-1">一、DOM <a class="header-anchor" href="#一、dom" aria-label="Permalink to &quot;一、DOM&quot;">​</a></h2><p><code>DOM (document object model)</code> 文档对象模型，是W3C组织推荐的处理可扩展标记语言的标准编程接口；<code>node</code>（节点）；</p><p>元素节点（标签） 文本节点（换行或者文字） 注释节点（注释）</p><h2 id="二、获取子节点" tabindex="-1">二、获取子节点： <a class="header-anchor" href="#二、获取子节点" aria-label="Permalink to &quot;二、获取子节点：&quot;">​</a></h2><ol><li><code>父元素.children</code>；(常用)（非标准属性）获取只有元素节点；类数组</li><li><code>父元素.childNodes</code>；（标准属性）所有子节点，包括文本、空格、标签、注释；</li></ol><p>类数组：有长度，可以通过下标获取元素，但是不能使用数组的方法；</p><h2 id="三、节点类型" tabindex="-1">三、节点类型： <a class="header-anchor" href="#三、节点类型" aria-label="Permalink to &quot;三、节点类型：&quot;">​</a></h2><p><code>nodeType</code> <code>nodeName</code> <code>nodeValue</code>；</p><ol><li><p><code>nodeType</code>：返回1-12的数字，分别表示不同的节点；</p><p>1：标签节点；2：属性节点；3：文本节点； 8：注释节点； 9：文档节点；</p></li><li><p><code>nodeName</code>：返回节点的名字；</p><p>文本：#text；注释：#comment；标签：大写的标签名；</p></li><li><p><code>nodeValue</code>：认为只有文本才有内容，元素的节点为空null；获取的标签的文本节点使用innerHTML修改会将标签也替换掉，这个可以只修改文本内容；</p><p><code>li.firstChild.nodeValue</code>；才能获取到li里面的文本内容；</p><p><code>nodeValue = &quot;新内容&quot;</code>； 可以设置新内容；</p></li></ol><h2 id="四、元素的父元素" tabindex="-1">四、元素的父元素； <a class="header-anchor" href="#四、元素的父元素" aria-label="Permalink to &quot;四、元素的父元素；&quot;">​</a></h2><ol><li><code>parentNode</code>；直接父元素，<code>parentNode.parentNode</code>；父元素的父元素；（常用）</li><li><code>offsetParent</code>；返回离元素最近的有定位的父级，如果没有定位的父级，则返回body；</li></ol><h2 id="五、其他节点-了解" tabindex="-1">五、其他节点(了解)； <a class="header-anchor" href="#五、其他节点-了解" aria-label="Permalink to &quot;五、其他节点(了解)；&quot;">​</a></h2><p>父元素的子节点；</p><ol><li><code>firstChild</code>；父元素的第一个子节点；</li><li><code>firstElementChild</code>；父元素的第一个子元素节点；</li><li><code>lastChild</code>；父元素的最后一个子节点；</li><li><code>lastElementChild</code>；父元素的最后一个子元素节点； 以上不常用，推荐做法：</li></ol><p>第一个：<code>li[0]</code>，</p><p>最后一个：<code>li[li.length-1]</code>;</p><p>兄弟元素节点；</p><ol start="5"><li><code>previousSibling</code>；上一个兄弟子节点；（包括文本注释）</li><li><code>previousElementSibling</code>；上一个兄弟元素节点；</li><li><code>nextSibling</code>；下一个兄弟子节点；</li><li><code>nextElementSibling</code>；下一个兄弟元素节点；</li></ol><p>拓展：带Element的 标准浏览器支持的，返回元素节点，不带的是ie8及以下支持的，可能返回文本节点；</p><h2 id="六、在ie8及以下中兼容问题" tabindex="-1">六、在IE8及以下中兼容问题； <a class="header-anchor" href="#六、在ie8及以下中兼容问题" aria-label="Permalink to &quot;六、在IE8及以下中兼容问题；&quot;">​</a></h2><ol><li><code>children</code>：还可以获取到注释；</li><li><code>childNodes</code>：不能获取到换行；</li><li><code>firstChild</code>：不能获取到换行；</li><li><code>firstElementChild</code>：带Element的不能识别，返回值undefined；</li></ol><p>解决兼容办法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ul.firstElementchild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ul.firstChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> firstElementChild;</span></span></code></pre></div><h2 id="七、属性操作-常用" tabindex="-1">七、属性操作(常用)； <a class="header-anchor" href="#七、属性操作-常用" aria-label="Permalink to &quot;七、属性操作(常用)；&quot;">​</a></h2><ol><li><p>获取：<code>getAttribute(属性名)</code>；属性名用在ie里面需要写className；</p></li><li><p>设置：<code>setAttribute(属性名,属性值)</code>；直接是修改hdml标签里面的；</p></li><li><p>删除：<code>removeAttribute(属性名)</code>；直接删除属性；括号里面需要加引号；</p></li><li><p>检查：<code>hasAttribute(属性名)</code>，检查是否有指定属性名</p></li></ol><p>特点：可以操作元素原生的属性，也可以操作自定义属性，并且在html上可见没有兼容性问题；</p><p>以下不能操作自定义属性</p><p>点的形式：</p><p>box.title = &quot;abc&quot;;</p><h2 id="八、类名操作" tabindex="-1">八、类名操作 <a class="header-anchor" href="#八、类名操作" aria-label="Permalink to &quot;八、类名操作&quot;">​</a></h2><ol><li><code>元素.classList</code>；兼容ie11+；</li><li>可用属性：length 返回类名的长度；</li><li>方法：</li></ol><p>（1）<code>add(class1,class2...)</code> 添加一个或多个类名，如果存在则不会添加</p><p>（2）<code>contains(class)</code> 返回布尔值，判断元素是否有该类名；</p><p>（3）<code>item(index)</code> 返回元素索引值对应的类名；</p><p>（4）<code>remove(class1,class2...)</code> 移除类名；</p><p>（5）<code>toggle(class,[true|false])</code>； 切换类名，第二个参数可选，强制移除false或添加true；</p><h2 id="九、创建添加" tabindex="-1">九、创建添加 <a class="header-anchor" href="#九、创建添加" aria-label="Permalink to &quot;九、创建添加&quot;">​</a></h2><ol><li><p>创建元素节点：<code>document.createElement(&quot;新标签&quot;)</code>；创建的想要放进去，需要使用添加</p></li><li><p>创建文本节点：<code>document.createTextNode(&quot;文本内容&quot;)</code>；不常用,使用innerHTML；</p><p>获取节点内容：元素.textContent</p><p>设置节点内容：元素.textContent = &#39;&#39;；</p></li><li><p>添加文本节点：<code>appendChild(创建的标签)</code>；在结束标签之前添加；只能放到一个标签里，不能重复放；</p><p>可以直接放到body里面： 获取body标签：body = document.body；</p></li><li><p>添加到指定元素前面：<code>父元素.insertBefore（new,old）</code>；new新标签，old指定标签；</p><p>在IE9及以上，如果第二个参数不存在，则以appendChild添加，在IE8及以下，则报错；</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解决兼容问题：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ul.children[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ul.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ul.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}；</span></span></code></pre></div><p>js原生是没有insertAfter的，需要手动实现</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插入到节点之后</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> insertAfter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newDom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">oldDom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parentDom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldDom.parentNode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断是否是最后一个节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parentDom.lastChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldDom) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    parentDom.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newDom)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	parentDom.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newDom, oldDom.nextElementSibling)    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>技巧：</p><p>.link可以快速创建a标签</p><h2 id="十、删除替换克隆" tabindex="-1">十、删除替换克隆 <a class="header-anchor" href="#十、删除替换克隆" aria-label="Permalink to &quot;十、删除替换克隆&quot;">​</a></h2><ol><li><p>删除：<code>remove()</code>；谁调用的就删除谁，ie8及以下不兼容；</p><pre><code> \`父元素.removeChild(子元素)\`；将子元素从父元素中删除；
</code></pre></li><li><p>替换：<code>父元素.replaceChild(新标签，旧标签)</code>；</p></li><li><p>克隆：<code>元素.cloneNode()</code>；true，内容标签一起克隆，false,克隆标签；</p></li><li><p>包含：<code>父元素.contains(子元素)</code></p></li></ol><h2 id="十一、insertadjacenthtml" tabindex="-1">十一、insertAdjacentHTML <a class="header-anchor" href="#十一、insertadjacenthtml" aria-label="Permalink to &quot;十一、insertAdjacentHTML&quot;">​</a></h2><ol><li><p><code>element.insertAdjacentHTML(position, text)</code>，将text解析为html或xml，并将结果节点插入到DOM树中的指定位置，该方法比直接操作innerHTML操作更快</p></li><li><p>position是相对于元素的位置，必须是以下字符串之一</p><ul><li><p><code>beforebegin</code>：元素自身的前面。</p></li><li><p><code>afterbegin</code>：插入元素内部的第一个子节点之前。</p></li><li><p><code>beforeend</code>：插入元素内部的最后一个子节点之后。</p></li><li><p><code>afterend</code>：元素自身的后面。</p></li></ul></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> beforebegin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;!-- afterbegin --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello World&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;!-- beforeend --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> afterend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span></code></pre></div><p>示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ul&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertAdjacentHTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;afterbegin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;li id=&quot;first-item&quot;&gt;First&lt;/li&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="十二、元素的其他获取方式" tabindex="-1">十二、元素的其他获取方式； <a class="header-anchor" href="#十二、元素的其他获取方式" aria-label="Permalink to &quot;十二、元素的其他获取方式；&quot;">​</a></h2><ol><li><p><code>querySelector(css选择器)</code>；选择第一个直接是元素；</p></li><li><p><code>querySelectorAll(css选择器)</code>；选择所有的，结果是类数组</p></li><li><p><code>元素.closest(css选择器)</code>，返回当前节点最近匹配选择符的父元素，如果选择到自己相同的元素，则返回自己</p></li></ol><h2 id="十三、表格的获取方式" tabindex="-1">十三、表格的获取方式； <a class="header-anchor" href="#十三、表格的获取方式" aria-label="Permalink to &quot;十三、表格的获取方式；&quot;">​</a></h2><ol><li><p>获取表头：<code>table.tHead</code>；</p></li><li><p>获取表尾：<code>table.tFoot</code>；</p></li><li><p>获取主体：<code>table.tBodies[0]</code>；类数组，需要加下标；</p></li><li><p>获取行：<code>table.rows</code>；获取table下所有的tr；</p><p><code>table.tBodies</code>；获取主体下的所有的tr；</p></li><li><p>获取单元格：<code>table.rows[0].cells</code>；需要通过行来获取td；</p></li></ol><h2 id="十四、表单的获取方式" tabindex="-1">十四、表单的获取方式 <a class="header-anchor" href="#十四、表单的获取方式" aria-label="Permalink to &quot;十四、表单的获取方式&quot;">​</a></h2><h3 id="表单获取属性" tabindex="-1">表单获取属性： <a class="header-anchor" href="#表单获取属性" aria-label="Permalink to &quot;表单获取属性：&quot;">​</a></h3><p>通过form.name名 直接获取到某个标签；</p><h3 id="表单事件" tabindex="-1">表单事件： <a class="header-anchor" href="#表单事件" aria-label="Permalink to &quot;表单事件：&quot;">​</a></h3><p><code>form.onsubmit</code>；点击提交按钮事件时触发；</p><p><code>form.onreset</code>；表单重置事件；</p><p><code>form.user.onfocus</code>；输入框获得焦点时触发；</p><p><code>form.user.onblur</code>；输入框失去焦点时触发；提示输入完验证是否合格；</p><p><code>form.user.onchange</code>；当按下回车或失焦时触发，且内容与上次按下回车或失焦不同；</p><p><code>form.user.oninput</code>： 用户输入时触发；</p><h3 id="表单方法" tabindex="-1">表单方法： <a class="header-anchor" href="#表单方法" aria-label="Permalink to &quot;表单方法：&quot;">​</a></h3><p><code>return false</code>；阻止表单提交，判断是否有内容，没有则阻止提交；</p><p><code>form.submit()</code>；调用提交方法；常用于button；</p><p><code>form.reset()</code>；调用重置方法；</p><p><code>form.user.focus()</code>；输入框获得焦点；</p><p><code>form.user.blur()</code>；输入框失去焦点；</p><p><code>form.user.select()</code>；直接选中输入框的内容并获得焦点；</p><p>当输入框改动时，执行这个函数，每按下一次都会执行；</p><p><code>input.oninput = function(){}</code>，比onkeyup先触发；</p><h3 id="焦点事件" tabindex="-1">焦点事件 <a class="header-anchor" href="#焦点事件" aria-label="Permalink to &quot;焦点事件&quot;">​</a></h3><p><code>focus</code>：获得焦点，不支持冒泡；</p><p><code>blur</code>：失去焦点，不支持冒泡</p><p><code>focusin</code>：获得焦点，支持冒泡；</p><p><code>focusout</code>：失去焦点，支持冒泡；</p><p><code>input.focus()</code> 会自动滚动到获取焦点的地方，如果不希望滚动到获取焦点的地方，可以使用以下的代码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下面代码ie不兼容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ipt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">focus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    preventScroll: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="高频面试题" tabindex="-1">高频面试题 <a class="header-anchor" href="#高频面试题" aria-label="Permalink to &quot;高频面试题&quot;">​</a></h2><p>● DOM 怎样添加、移除、移动、复制、创建和查找节点</p>`,83),n=[t];function p(d,o,h,c,r,k){return e(),s("div",null,n)}const u=i(l,[["render",p]]);export{g as __pageData,u as default};