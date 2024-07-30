import{_ as s,c as i,o as a,a5 as l}from"./chunks/framework.CmFZ6rCi.js";const g=JSON.parse('{"title":"canvas","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/other/canvas.md","filePath":"src/frontend/other/canvas.md","lastUpdated":1722256713000}'),n={name:"src/frontend/other/canvas.md"},p=l(`<h1 id="canvas" tabindex="-1">canvas <a class="header-anchor" href="#canvas" aria-label="Permalink to &quot;canvas&quot;">​</a></h1><h2 id="一、canvas入门" tabindex="-1">一、canvas入门 <a class="header-anchor" href="#一、canvas入门" aria-label="Permalink to &quot;一、canvas入门&quot;">​</a></h2><ol><li>canvas属性html5新增属性，它是一个画布，其本身不具备绘制能力；</li><li>绘制工具是javascript，使用getContext(&#39;2d&#39;)绘制；</li><li>canvas有默认宽和高（300*150），默认颜色黑色，黑色比较浅；</li><li>定义canvas的宽高</li></ol><p>标签属性直接定义width+height，有点类似于img图片标签定义，省略了px单位；</p><p>不能在css里面定义width+height，会造成坐标点的拉伸和变形，绘制图像造成错误变形；</p><ol start="5"><li>img有alt属性，canvas的alt属性写在标签内部（标签内容），当canvas不被支持才显示内容；</li><li>canvas兼容IE9+，使用canvas就不能考虑IE8-用户；</li><li>canvas的坐标系问题：符合正常开发者的页面浏览顺序，从左到右为x正方向，从上到下y为正方向；</li><li>如果需要canvas居中，需要转块在margin:0 auto;</li></ol><p>设置canvas的宽高</p><p>使用canvas.width设置，不要使用getContext之后的变量设置；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.canvas&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ctx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>温馨提示：</p><p>在vscode编辑器中，只要是通过id方式获取的canvas都没有自动补全功能；</p><h2 id="二、绘制矩形" tabindex="-1">二、绘制矩形 <a class="header-anchor" href="#二、绘制矩形" aria-label="Permalink to &quot;二、绘制矩形&quot;">​</a></h2><ol><li>直接绘制</li></ol><p>（1）绘制实心矩形：cas.fillRect(x,y,w,h)；</p><p>​ x,y 起始坐标轴；w,h 绘制宽高；</p><p>（2）绘制空心矩形：cas.strokeRect(x,y,w,h);</p><ol start="2"><li>路径绘制</li></ol><p>（1）开始路径：cas.beginPath();</p><p>（2）绘制：cas.rect(x,y,w,h);</p><p>（3）闭合路径：cas.closePath();</p><p>（4）绘制：cas.fill()或cas.stroke()；</p><ol start="3"><li>清除画布：cas.clearRect(x,y,w,h);</li></ol><p>x,y：起始位置，w,h：要清除的内容宽高；</p><h2 id="三、描边-填充同时存在" tabindex="-1">三、描边+填充同时存在 <a class="header-anchor" href="#三、描边-填充同时存在" aria-label="Permalink to &quot;三、描边+填充同时存在&quot;">​</a></h2><ol><li><p>cas.fillStyle=&#39;red&#39; 填充颜色</p></li><li><p>cas.strokeStyle=&#39;green&#39; 线条颜色</p></li><li><p>cas.lineWidth=10 线条的两边各5px</p><p>注意： 所有的样式声明和属性设置都必须要写在绘制前面；（重点）</p></li></ol><p>继承：以上属性都可以继承，后续的可以不用再写，如有需要改变可以写;</p><p>权重：越靠后的绘制内容，就越靠上层显示；</p><h2 id="四、绘制三角形" tabindex="-1">四、绘制三角形 <a class="header-anchor" href="#四、绘制三角形" aria-label="Permalink to &quot;四、绘制三角形&quot;">​</a></h2><p>只能通过路径绘制三角形，闭合路径首尾端点自动实现闭合；</p><ol><li>起始端点：cas.moveTo(x,y)有且仅有一个起始端点；</li><li>连接端点：cas.lineTo(x,y)可以有多个；</li></ol><p>最后一条边可以使用闭合路径，会自动连接，如果不使用闭合路劲，会有bug</p><ol start="3"><li>闭合连接：cas.closePath()；</li></ol><p>如果没有闭合路径，加此属性也能实现效果(第三条边)，但是有个bug，它不具备闭合路径，绘制三角形时会发生缺角；</p><h2 id="五、绘制圆形" tabindex="-1">五、绘制圆形 <a class="header-anchor" href="#五、绘制圆形" aria-label="Permalink to &quot;五、绘制圆形&quot;">​</a></h2><ol><li><p>也是只能通过路径绘制，以圆规的原理画圆</p></li><li><p>因为y轴由向下为正，所以坐标系的象限也改变了，为顺时针；</p></li><li><p>cas.arc(x,y,r,angleStart,angleEnd,false);</p><p>x,y表示圆心的坐标，r绘制半径；</p><p>angleStart,angleEnd为起始弧度和终止弧度</p><p>false：是否逆时针，默认为false；</p></li><li><p>绘制半径根据Math.PI来计算，0的位置在右边，画圆：</p><p>cas.arc(250,250,250,0,Math.PI*2);</p></li></ol><p>圆形的坐标系：</p><p><img src="https://notecdn.hrhe.cn/images/canvas-01.png" alt="image"></p><h2 id="六、碰撞的小球" tabindex="-1">六、碰撞的小球 <a class="header-anchor" href="#六、碰撞的小球" aria-label="Permalink to &quot;六、碰撞的小球&quot;">​</a></h2><ol><li>创建getContext(&#39;2d&#39;)之后，返回一个对象，里面有canvas对象，里面有各种属性；</li><li>常用的canvas对象属性有：cas.canvas.width 画布的宽，cas.canvas.height 画布的高</li><li>判断边界：和</li></ol><p>画布的宽高减去小球的半径，为小球的正方向边缘；</p><p>当x，y值小于小球的半径时，为负方向边缘；</p><h2 id="七、其他绘制" tabindex="-1">七、其他绘制 <a class="header-anchor" href="#七、其他绘制" aria-label="Permalink to &quot;七、其他绘制&quot;">​</a></h2><ol><li>lineCap（线帽）</li></ol><p>（1）控制线条末端的形状</p><p>（2）属性值：butt(默认没有)、round(圆形)、square(方形)</p><p>（3）示例：cas.lineCap=&#39;butt&#39;</p><p>（4）圆形线帽：以lineWidth的一半为两头的半径；</p><p>画线不需要闭合；</p><ol start="2"><li>lineJoin（连接）</li></ol><p>（1）线条的连接方式，控制线条相交的方式是</p><p>（2）属性值：圆交(round)、斜交(bevel)、斜接(mitter)</p><p>（3）示例：cas.lineJoin=&#39;mitter&#39;</p><h2 id="八、绘制阴影" tabindex="-1">八、绘制阴影 <a class="header-anchor" href="#八、绘制阴影" aria-label="Permalink to &quot;八、绘制阴影&quot;">​</a></h2><ol><li>cas.shadowOffsetX = num; //阴影在x轴的偏移量</li><li>cas.shadowOffsetY = num; //阴影在y轴的偏移量</li><li>cas.shadowColor = &#39;red&#39;; //阴影的颜色</li><li>cas.shadowBlur = num; //阴影模糊程度；</li></ol><h2 id="九、裁剪" tabindex="-1">九、裁剪 <a class="header-anchor" href="#九、裁剪" aria-label="Permalink to &quot;九、裁剪&quot;">​</a></h2><ol><li>裁剪之后只能在当前区域显示</li><li>cas.clip()表示裁剪区域，分三个步骤：</li></ol><p>（1）绘制裁剪区域</p><p>（2）cas.clip();</p><p>（3）再绘制其他图形，查看裁剪效果；</p><h2 id="十、绘制渐变" tabindex="-1">十、绘制渐变 <a class="header-anchor" href="#十、绘制渐变" aria-label="Permalink to &quot;十、绘制渐变&quot;">​</a></h2><ol><li>线性渐变</li></ol><p>（1）创建一个线性渐变：cas.createLinearGradient(x1,y1,x2,y2);</p><pre><code>      x1,y1：渐变的起始点，x2,y2：渐变的终点；
</code></pre><p>（2）线性渐变是根据一条线来画的，里面的每一个分段代表一个断点；</p><p>（3）添加断点：变量.addColorStop(值,颜色)；添加一个断点，可以无限添加；</p><pre><code>     断点的第一个参数不能超过1；

     值可以是百分比，也可以是0-1的小数；
</code></pre><p>（3）使用：添加出来的就相当于一个颜色，给对应的fillStyle赋值就可以了；</p><ol start="2"><li>径向渐变</li></ol><p>（1）创建径向渐变：cas.createRadialGradient(x1,y1,r1,x2,y2,r2);</p><p>x1,y1,r1 径向小圆的圆心坐标+半径；</p><p>x2,y2,r2 径向大圆的圆心坐标+半径；</p><p>（2）相当于水滴一环一环的改变；</p><h2 id="十一、绘制文本" tabindex="-1">十一、绘制文本 <a class="header-anchor" href="#十一、绘制文本" aria-label="Permalink to &quot;十一、绘制文本&quot;">​</a></h2><ol><li>cas.fillText(字符串,x,y,[options]) 绘制实心文字（使用最多）</li><li>cas.strokeText(字符串,x,y,[options]) 绘制空心文字</li><li>参数：第一个为需要写入的字符串，x轴y轴坐标，第三个为可选的最大像素宽度</li><li>属性：</li></ol><p>（1）cas.font=&#39;italic bold 30px/50px 楷体；字号和字体不能省略；</p><p>（2）cas.textAlign=&#39;center&#39;; 可选：start、end、center；（不建议使用left,right）；相对于起始点对齐；</p><p>（3）cas.textBaseline = &#39;middle&#39;; 可选：top、middle、bottom；</p><p>textBaseline可选的值：&quot;top&quot; 、 &quot;hanging&quot; 、 &quot;middle&quot; 、 &quot;alphabetic&quot; 、&quot;ideographic&quot; 和 &quot;bottom&quot; 。</p><p>从上往下走;</p><h2 id="十二、cos、sin" tabindex="-1">十二、cos、sin <a class="header-anchor" href="#十二、cos、sin" aria-label="Permalink to &quot;十二、cos、sin&quot;">​</a></h2><ol><li>对应的三角函数，用于计算x轴和y轴的；</li><li>Math.cos(角度) = 邻边/斜边</li><li>Math.sin(角度) = 对边/斜边</li><li>Math.PI：不带小括号，为180度；</li></ol><h2 id="十三、改变圆心点" tabindex="-1">十三、改变圆心点 <a class="header-anchor" href="#十三、改变圆心点" aria-label="Permalink to &quot;十三、改变圆心点&quot;">​</a></h2><ol><li><p>平移画布中心点：<code>cas.translate(x,y)</code>;</p></li><li><p>旋转画布：<code>cas.rotate()</code>;</p><p>js不接受deg，仅支持Math.PI</p></li><li><p>保存当前状态：<code>cas.save()</code>;</p></li><li><p>恢复保存的状态：<code>cas.restore()</code>;</p></li></ol><p>如果画布有旋转或平移，则需要保存和恢复一下，否则第二次将会发生变化；</p><h2 id="十四、图像" tabindex="-1">十四、图像 <a class="header-anchor" href="#十四、图像" aria-label="Permalink to &quot;十四、图像&quot;">​</a></h2><ol><li>绘制图像与绘制重复图像</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./1.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ol start="2"><li><p>因为img的加载速度是滞缓与js的运行速度的；所以需要图片加载完成才能绘制 img.onload =function(){};</p></li><li><p>绘制图像</p></li></ol><p>（1） 3参数法：<code>cas.drawImage(img,x,y)</code></p><p>​ img 表示当前的图片</p><p>​ x,y表示绘制图像的起点；</p><p>（2）5参数法（带宽高）：<code>cas.drawImage(img,x,y,w,h)</code>；</p><p>w,h 表示绘制的图像宽高；</p><p>（3）9参数法（剪裁加绘制）：<code>cas.drawImage(img,x1,y1,w1,h1,x,y,w,h)</code></p><p>​ img表示原始图片</p><p>​ x1,y1表示剪裁图像的起始位置，</p><p>​ w1,h1表示剪裁图像的宽高</p><p>​ x,y表示剪裁后的图像的绘制位置</p><p>​ w,h 表示剪裁后的图像的显示宽高；</p><p>​ 截取位置可以通过ps来获取定点；尺寸--标注，获取起始点，再获取宽高；</p><h3 id="绘制重复图像" tabindex="-1">绘制重复图像 <a class="header-anchor" href="#绘制重复图像" aria-label="Permalink to &quot;绘制重复图像&quot;">​</a></h3><p>（1）创建</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createPattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(img,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;repeat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>（2）作为颜色填充进矩形;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cas.fillStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pattern;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fillRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>如果需要描边，可以赋值给strokeStyle=&#39;&#39;，并设置lineWith值;</p><h3 id="下载绘制的canvas图片" tabindex="-1">下载绘制的canvas图片 <a class="header-anchor" href="#下载绘制的canvas图片" aria-label="Permalink to &quot;下载绘制的canvas图片&quot;">​</a></h3><p>（1）获取图片的base64地址</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDataURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image/jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>（2）将图片转换成file文件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// canvas.toBlob(callback, [type=&#39;image/png&#39;], [encoderOptions])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBlob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">blob</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(blob, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;new-img&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {type: blob.type})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image/jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第三个为压缩质量, 当type类型为jpeg或webp时可用;</span></span></code></pre></div><h2 id="十五、canvas录制视频" tabindex="-1">十五、canvas录制视频 <a class="header-anchor" href="#十五、canvas录制视频" aria-label="Permalink to &quot;十五、canvas录制视频&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 捕获当前流</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> stream</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">captureStrem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建MediaRecorder录制对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> recorder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MediaRecorder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stream, {mimeType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;video/webm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">recorder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ondataavailable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.data.size) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当停止录制时获取当前video的url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">recorder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onstop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createObjectURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Blob</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data, {type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;video/webm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#video&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始录制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">recorder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 录制6秒视频</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    recorder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="十六、截图canvas实例" tabindex="-1">十六、截图canvas实例 <a class="header-anchor" href="#十六、截图canvas实例" aria-label="Permalink to &quot;十六、截图canvas实例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.video, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDataURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image/png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="画时钟" tabindex="-1">画时钟 <a class="header-anchor" href="#画时钟" aria-label="Permalink to &quot;画时钟&quot;">​</a></h2><p>大致分为两步</p><p>（1）绘制手表 Clock()</p><p>（2）动起来 setInterval()</p><p>1.绘制手表</p><p>1.1绘制表盘</p><p>（1）每次绘制时，建议清除一下画布；</p><p>1.1.1画圆</p><p>1.1.2渐变</p><p>给圆填充颜色；</p><p>1.2绘制刻度</p><p>（1）刻度需要平移画布到中心点，</p><p>（2）可以通过旋转</p><p>1.2.1绘制时针刻度</p><p>1.2.2绘制分针刻度</p><p>1.3绘制指针</p><p>1.3.0获取世界时间</p><p>1.3.1绘制时针</p><p>（1）时针跟着分针和秒针一起动的；</p><p>（2）获取正确的时针，应该是需要加上分针和秒针；</p><p>（3）hours = now.getHours+minutes/60+second/60/60；</p><p>是将分钟和秒钟转化为小时;</p><p>（4）时针对应的度数是30度；</p><p>1.3.2绘制分针</p><p>1.3.3绘制秒针</p><p>1.3.4绘制表钉</p><p>1.4绘制文字</p><p>1.4.1绘制商标 1.4.2绘制十二时</p><p>（1）需要根据Math.sin()和Math.cos()，计算出x和y的值;</p><p>x = Math.cos(角度)*半径</p><p>y = Math.sin(角度)*半径</p>`,146),t=[p];function h(e,k,r,d,E,c){return a(),i("div",null,t)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
