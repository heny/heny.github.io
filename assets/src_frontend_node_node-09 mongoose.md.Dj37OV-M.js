import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CmFZ6rCi.js";const g=JSON.parse('{"title":"node-09 mongoose","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/node/node-09 mongoose.md","filePath":"src/frontend/node/node-09 mongoose.md","lastUpdated":1615692881000}'),e={name:"src/frontend/node/node-09 mongoose.md"},l=n(`<h1 id="node-09-mongoose" tabindex="-1">node-09 mongoose <a class="header-anchor" href="#node-09-mongoose" aria-label="Permalink to &quot;node-09 mongoose&quot;">​</a></h1><p>文档：<a href="https://itbilu.com/nodejs/npm/B1FfBss6X.html" target="_blank" rel="noreferrer">https://itbilu.com/nodejs/npm/B1FfBss6X.html</a></p><h2 id="一、mongoose" tabindex="-1">一、mongoose <a class="header-anchor" href="#一、mongoose" aria-label="Permalink to &quot;一、mongoose&quot;">​</a></h2><ol><li><p>原生mongodb:</p><p>可以安装：npm i mongodb（原生的mongodb写法）</p><p>现在都是使用mongoose，封装的mongodb；</p></li><li><p>mongoose安装</p><p>npm i mongoose；安装到项目文件夹；</p></li><li><p>mongoose对象：</p><p>（1）<code>Schema</code>：约束（设计集合[表]结构的同时约束数据类型）；</p><p>（2）<code>Model</code>：模型 | 表 | 集合，用来操作具体的数据；</p><p>（3）<code>document</code>：一条一条的记录</p></li><li><p>mongoose操作mongodb的步骤</p></li></ol><p>（1）开启服务</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //  并引入mongoose</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mongoose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mongoose&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 连接数据库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongoose.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mongodb://localhost:27017/test,{useNewUrlParser:true})</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //test为数据库名，27017端口可以省略，默认端口是27017；</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义Schema</span></span></code></pre></div><p>（5）根据Schema创建Model对象（创建数据库名）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义Schemas</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Schemas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mongoose.Schema;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//数据库名需要加s，会转变副词，自动加s；</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> userModel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mongoose.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;users&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Schemas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    uname:String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age:Number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    sex:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type:String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        default:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;男&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通过Model对象进行CRUD操作（需要创建多个可以写入一个数组）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">userModel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({uname:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hny&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,age:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,sex:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;男&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">err) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ok&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="二、model-find-方法" tabindex="-1">二、Model.find()方法 <a class="header-anchor" href="#二、model-find-方法" aria-label="Permalink to &quot;二、Model.find()方法&quot;">​</a></h2><p><code>Model.find(conditions[,projection][,options][,callback])</code>; 返回一个数组；</p><ul><li><p><code>conditions</code>：find条件，查询的条件值可以为正则；</p></li><li><p><code>projection</code>：要展示的字段，0为不显示，1为显示，如果不需要设置，可以写null；</p><p>也可以使用字符串，用空格分开，不显示的用-减号；</p><p>示例：<code>model.find({name:/li/i},&#39;name -_id&#39;,()=&gt;{})</code>；</p></li><li><p><code>options</code>：查询选项，sort(排序)，limit(限制)，skip(跳过)；</p></li><li><p><code>callback</code>：回调函数，查找到的结果，从回调函数中获取所以函数需要两个形参(err,docs)；</p><p>示例：<code>model.find({name:&#39;hny&#39;},null,{skip:5},(err,dosc)=&gt;{})</code>；</p><p>如果不传递回调函数，则不会自动执行，返回一个query对象，需要调用exec()方法才能执行；</p><p>推荐使用不传递回调函数，方便前者指定复杂的条件，可以通过链式调用；</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findApiList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">conditions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">projection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Models.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(conditions, projection, options).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, results: val}))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, err}))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="三、model-update-方法" tabindex="-1">三、Model.update()方法 <a class="header-anchor" href="#三、model-update-方法" aria-label="Permalink to &quot;三、Model.update()方法&quot;">​</a></h2><p><code>model.update(条件,修改的内容[,options][,callback])</code>；</p><p>修改多条需要加<code>{multi:true}</code>；</p><p>不建议使用update(),建议使用以下两种方法</p><ul><li><code>model.updateOne()</code>；</li><li><code>model.updateMany()</code>；</li></ul><h2 id="四、查询条数" tabindex="-1">四、查询条数 <a class="header-anchor" href="#四、查询条数" aria-label="Permalink to &quot;四、查询条数&quot;">​</a></h2><p><code>model.countDocuments({条件},(err,cont)=&gt;{})</code>；</p><h2 id="五、model-remove" tabindex="-1">五、Model.remove()； <a class="header-anchor" href="#五、model-remove" aria-label="Permalink to &quot;五、Model.remove()；&quot;">​</a></h2><ul><li><p><code>model.remove(条件,fn)；</code></p></li><li><p><code>model.deleteOne()</code></p></li><li><p><code>model.deleteMany()；</code></p></li></ul><h2 id="六、findbyidandupdate" tabindex="-1">六、findByIdAndUpdate <a class="header-anchor" href="#六、findbyidandupdate" aria-label="Permalink to &quot;六、findByIdAndUpdate&quot;">​</a></h2><p><code>findByIdAndUpdate(&#39;条件&#39;,&#39;修改内容&#39;,&#39;限制&#39;,fn)</code>；</p><p>通过id修改内容</p><h2 id="七、文档对象" tabindex="-1">七、文档对象 <a class="header-anchor" href="#七、文档对象" aria-label="Permalink to &quot;七、文档对象&quot;">​</a></h2><ol><li><p>添加数据：<code>cur = model({})；cur.save()</code>；直接使用model创建数据，之后保存；</p><p>不需要调用<code>model.create</code>就可以创建数据；</p></li><li><p>find查找到数据之后可以直接操作查找到的数据，之后调用save()一下；</p></li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({},(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    docs[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lishi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    docs[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><ol start="3"><li>可以通过<code>docs.toObject()</code>转成普通对象，之后是不等于docs的；</li></ol>`,28),h=[l];function p(t,k,d,o,E,r){return a(),i("div",null,h)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};