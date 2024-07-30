import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CmFZ6rCi.js";const g=JSON.parse('{"title":"js-11 事件对象","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/Javascript/js-11 事件对象.md","filePath":"src/frontend/Javascript/js-11 事件对象.md","lastUpdated":1615692881000}'),e={name:"src/frontend/Javascript/js-11 事件对象.md"},n=t(`<h1 id="js-11-事件对象" tabindex="-1">js-11 事件对象 <a class="header-anchor" href="#js-11-事件对象" aria-label="Permalink to &quot;js-11 事件对象&quot;">​</a></h1><h2 id="一、事件" tabindex="-1">一、事件 <a class="header-anchor" href="#一、事件" aria-label="Permalink to &quot;一、事件&quot;">​</a></h2><p>事件函数：事件要调用的函数；</p><p>事件处理函数：事件触发时要执行的函数；</p><p>事件对象：事件发生时，与这个事件有关的信息保存的一个对象；</p><p>当一个事件发生时，将有关信息保存在事件函数的内置全局对象event当中，可以直接使用，包括事件类型，操作对象，鼠标位置；</p><p><strong>常用的内置对象：</strong></p><ul><li><p><code>type</code>：获取事件类型；</p></li><li><p><code>target</code>(srcElement(ie8-))：获取触发事件的对象；</p></li><li><p><code>clientX/Y</code>：鼠标到文档可视区的坐标点；</p></li><li><p><code>offsetX/Y</code>：当前位置距离上一个定位元素的距离</p></li><li><p><code>screenX/Y</code>：当前位置距离屏幕的坐标点</p></li><li><p><code>pageX/Y</code>,鼠标到文档的距离，包括滚动的地方；ie8以下没有；</p></li><li><p><code>e.button</code> 0是鼠标左键，1是滚动按下 2是鼠标右键</p></li></ul><p>IE/谷歌：使用事件函数内的内置对象；</p><p>标准浏览器：使用事件函数的第一个参数形参；</p><p>做兼容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//如果不做ie8兼容，就可以不用写</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.event;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="二、事件绑定" tabindex="-1">二、事件绑定 <a class="header-anchor" href="#二、事件绑定" aria-label="Permalink to &quot;二、事件绑定&quot;">​</a></h2><ol><li>定义：在一个元素上绑定多个事件，不会覆盖，都会执行；</li><li><code>obj.addEventListener(&quot;click&quot;,fn,false)</code>; 标准，true(捕获)，false(冒泡)；this指向自己；</li></ol><p>事件不需要加on，事件处理函数，布尔值)； 缺点：不兼容IE；</p><ol start="3"><li>元素.<code>attachEvent</code>(事件(要加on)，事件处理函数)；只有冒泡；倒序执行；IE8及以下；非标准；this指向window；</li></ol><p>做兼容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">even</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//元素，事件，事件处理函数；</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.attachEvent){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attachEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;on&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> even,fn);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(even,fn,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>标准浏览器的事件绑定和 ie 浏览器的事件绑定的区别：</p><p>（1）ie 没有捕获，标准有捕获</p><p>（2）ie 的事件名称前面有 on，标准没有</p><p>（3）标准的 ie 会根据事件的顺序正序执行，非 ie 标准逆序，标准正序</p><p>（4）ie 的 this 是 window，标准的是触发这个事件的对象</p><p>（4）标准浏览器的事件绑定和 ie 浏览器的事件绑定是不共存的，因此我们需要进行一个兼容的操作，一般情况下，如果是两个方法的兼容，那么就拿出其中一个方法，在各个浏览器中查看获取的值，标准浏览器和 ie 浏览器会得到不一样的结果。</p><h2 id="三、取消事件绑定" tabindex="-1">三、取消事件绑定 <a class="header-anchor" href="#三、取消事件绑定" aria-label="Permalink to &quot;三、取消事件绑定&quot;">​</a></h2><p>取消事件绑定最好明确函数的名字，不然会有很多不确定的因素；</p><ol><li>普通的：元素.onclick = null；</li><li>addEventListener事件函数：<code>removeEventListener</code>(&quot;事件&quot;,事件处理函数)；</li><li>attachEvent事件函数：<code>detachEvent</code>(&quot;事件&quot;,事件处理函数)；</li></ol><h2 id="四、事件流" tabindex="-1">四、事件流 <a class="header-anchor" href="#四、事件流" aria-label="Permalink to &quot;四、事件流&quot;">​</a></h2><p><strong>捕获</strong>： 当父元素和子元素都绑定了事件，先触发父元素，再触发子元素，从外到内；</p><p><strong>冒泡</strong>： 先触发子元素再触发父元素，从内到外；</p><p>事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个传播过程即 DOM 事件流。</p><p>DOM 事件流会有 3 个阶段：</p><p>事件捕获阶段：事件的传播是从最不特定的事件目标到最特定的事件目标。即从 DOM树的根到叶子。</p><p>确定目标阶段：通过捕获确定具体触发事件的元素</p><p>事件冒泡阶段：事件的传播是从最特定的事件目标到最不特定的事件目标。即从 DOM树的叶子到根。</p><h2 id="五、阻止冒泡事件-掌握" tabindex="-1">五、阻止冒泡事件（掌握） <a class="header-anchor" href="#五、阻止冒泡事件-掌握" aria-label="Permalink to &quot;五、阻止冒泡事件（掌握）&quot;">​</a></h2><p>问题：子元素设置事件，再给其父元素设置事件，当触发子元素事件的时候，其父元素的事件也触发了，子元素监听到触发事件，所有包含事件的父元素都会触发；</p><p>阻止：</p><p><code>event.stopPropagation()</code>；IE8以下不兼容； Propagation 传播传递</p><p><code>event.cancelBubble=true</code>；IE8以下兼容； Bubble冒泡，cancel取消;</p><p>做兼容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.stopPropagation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopPropagation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.event.cancelBubble </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>注意：不是所有的事件都能冒泡，<code>blur</code>、<code>focus</code>、<code>load</code>、<code>unload</code>不能冒泡；</p><h2 id="六、事件委托" tabindex="-1">六、事件委托 <a class="header-anchor" href="#六、事件委托" aria-label="Permalink to &quot;六、事件委托&quot;">​</a></h2><ol><li>将子元素要做的事情委托给父元素；<code>event.target</code>;</li><li>使用场景：子元素很多，事件相同的使用，后添加的相同元素会有相同的脚本；</li><li>原理：事件委托是利用事件冒泡原理来实现的，因为点击子元素会冒泡到父元素，那么给父元素做点击事件，里面的元素做点击事件时，都会冒泡到父元素身上，这就是事件委托，委托它们的父级代为执行事件；</li><li>事件委托实现：将事件添加到父元素上，当事件发生时，父元素会找到对应触发事件的子元素去处理，后期添加的子元素，依然有这个事件。</li></ol><p>事件源不兼容IE8-，IE8支持：<code>event.srcElement</code>；</p><p>事件源兼容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ev.srcElement;</span></span></code></pre></div><h2 id="七、取消事件默认行为" tabindex="-1">七、取消事件默认行为 <a class="header-anchor" href="#七、取消事件默认行为" aria-label="Permalink to &quot;七、取消事件默认行为&quot;">​</a></h2><ol><li><code>return false</code>；对事件绑定设置的不起作用，也可以直接使用以下的两种；</li><li>事件绑定的阻止默认行为：<code>event.preventDefault()</code>；</li><li>IE事件绑定：<code>event.returnValue = false</code>；</li></ol><p>总结：</p><table tabindex="0"><thead><tr><th></th><th>事件绑定</th><th>取消事件绑定</th><th>阻止事件冒泡</th><th>事件委托</th><th>取消默认行为</th></tr></thead><tbody><tr><td>通常</td><td>obj.事件=函数</td><td>onclick = null</td><td></td><td></td><td>return false</td></tr><tr><td>标准浏览器</td><td>addEventListener</td><td>removeEventListener</td><td>stopPropagation</td><td>event.target</td><td>event.preventDefault()</td></tr><tr><td>非标准浏览器</td><td>attachEvent</td><td>detachEvent</td><td>cancelBubble</td><td>event.srcElement</td><td>event.returnValue = false；</td></tr></tbody></table><h2 id="八、键盘事件" tabindex="-1">八、键盘事件 <a class="header-anchor" href="#八、键盘事件" aria-label="Permalink to &quot;八、键盘事件&quot;">​</a></h2><ol><li><code>onkeydown</code>；按下；不区分大小写</li><li><code>onkeyup</code>；抬起；</li><li><code>onkeypress</code>；比onkeydown后触发，区分大小写，只能包含数字和字母，大小写是反过来的；不能获取到功能键，如箭头；</li></ol><p>键盘值： <code>event.key</code> 获得按下的键；</p><p><code>event.keyCode</code> 获得按下的键码值，字母为大写的Unicode码；</p><p><code>event.shiftKey</code>；是否按下shift键，返回布尔值；</p><p><code>event.ctrlKey</code>；是否按下ctrl键；</p><p><code>event.altKey</code>；是否按下alt键；</p><ul><li>扩展</li></ul><p><code>compositionstart</code> 中文输入法输入开始时触发。</p><p><code>compositionend</code> 中文输入法输入结束时触发。</p><h2 id="九、鼠标滚轮事件" tabindex="-1">九、鼠标滚轮事件： <a class="header-anchor" href="#九、鼠标滚轮事件" aria-label="Permalink to &quot;九、鼠标滚轮事件：&quot;">​</a></h2><p><code>元素.onmousewheel</code> 滚动的时候触发；</p><p><code>event.wheelDelta</code>：120向上滚动；-120向下滚动；</p><p>火狐浏览器需要通过绑定事件获取：</p><p><code>div.addEventListener(&quot;DOMMouseScroll&quot;，事件处理函数)</code>；</p><p><code>event.detail</code>：-3向上滚动，3向下滚动；</p><h2 id="十、customevent事件" tabindex="-1">十、customEvent事件 <a class="header-anchor" href="#十、customevent事件" aria-label="Permalink to &quot;十、customEvent事件&quot;">​</a></h2><p>自定义事件，就跟vue里面的on跟emit一样</p><p>监听自定义事件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;follow&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.detail)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {name:&#39;前端&#39;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>派发自定义事件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispatchEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;follow&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    detail:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;前端&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span></code></pre></div><p>例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> div </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;被点击了111111&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> click </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">div.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispatchEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(click)</span></span></code></pre></div><h2 id="十一、监控事件" tabindex="-1">十一、监控事件 <a class="header-anchor" href="#十一、监控事件" aria-label="Permalink to &quot;十一、监控事件&quot;">​</a></h2><ul><li>使用 <code>monitorEvents</code> 侦听特定类型的事件。</li><li>使用 <code>unmonitorEvents</code> 停止侦听。</li><li>使用 <code>getEventListeners</code> 获取 DOM 元素的所有事件</li><li>使用<code>“Event Listeners Inspector”</code>面板获取有关事件侦听器的信息。</li></ul><p>获取元素绑定的事件对象：<code>getEventListeners(元素)</code>； 需要在控制台打印：</p><p>监控元素上的事件命令： <code>monitorEvents</code> 和 <code>unmonitorEvents</code></p><p><code>monitorEvents(元素，[可选的事件名字])</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monitorEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="十二、try-catch" tabindex="-1">十二、try catch <a class="header-anchor" href="#十二、try-catch" aria-label="Permalink to &quot;十二、try  catch&quot;">​</a></h2><p>用来捕获出错的代码，try..catch只能捕获同步代码，不能捕获异步代码的错误；</p><p>如果出错了，则不能执行下面的步骤，因此可以使用try来捕获错误</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //可能成功的事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //捕获错误</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 无论成功于否都会执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="高频面试题" tabindex="-1">高频面试题 <a class="header-anchor" href="#高频面试题" aria-label="Permalink to &quot;高频面试题&quot;">​</a></h2><p>● 事件、IE 与火狐的事件机制有什么区别？</p><p>● 如何阻止冒泡？</p><p>● 事件绑定和普通事件有什么区别。</p><p>● 如何用原生 js 给元素绑定两个 click 事件？</p><p>● 解释一下事件流？</p><p>● 事件委托是什么。</p><p>● 给 10000 个 li 添加点击事件。</p>`,94),l=[n];function p(h,k,d,o,r,E){return a(),i("div",null,l)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
