import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CmFZ6rCi.js";const c=JSON.parse('{"title":"linux-07 shell语句","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/Server/linux-07 shell语句.md","filePath":"src/frontend/Server/linux-07 shell语句.md","lastUpdated":1643189244000}'),h={name:"src/frontend/Server/linux-07 shell语句.md"},l=n(`<h1 id="linux-07-shell语句" tabindex="-1">linux-07 shell语句 <a class="header-anchor" href="#linux-07-shell语句" aria-label="Permalink to &quot;linux-07 shell语句&quot;">​</a></h1><h2 id="一、条件语句" tabindex="-1">一、条件语句 <a class="header-anchor" href="#一、条件语句" aria-label="Permalink to &quot;一、条件语句&quot;">​</a></h2><h3 id="根据文件类型进行判断" tabindex="-1">根据文件类型进行判断 <a class="header-anchor" href="#根据文件类型进行判断" aria-label="Permalink to &quot;根据文件类型进行判断&quot;">​</a></h3><p>以下命令都需要进行判断文件是否存在，并且为描述文件，命令后面跟文件名</p><ul><li><code>-b</code>：块设备文件</li><li><code>-c</code>：字符设备文件</li><li><code>-d</code>：目录文件</li><li><code>-e</code>：仅判断文件是否存在</li><li><code>-f</code>：普通文件</li><li><code>-L</code>：符号链接文件</li><li><code>-p</code>：管道文件</li><li><code>-s</code>：非空</li><li><code>-S</code>：套接字文件</li></ul><p><strong>两种判断格式</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第一种</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/install.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第二种</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /root/install.log ] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /root ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 判断同时输出</span></span></code></pre></div><p><code>[]</code> 单中括号和双中括号的区别：</p><p>双中括号支持输入正则表示式，中括号前后必须有空格</p><h3 id="按照文件权限进行判断" tabindex="-1">按照文件权限进行判断 <a class="header-anchor" href="#按照文件权限进行判断" aria-label="Permalink to &quot;按照文件权限进行判断&quot;">​</a></h3><p>以下命令都需要判断文件是否存在，并且为描述文件，命令后面跟文件名</p><ul><li><code>-r</code>：拥有读权限</li><li><code>-w</code>：拥有写权限</li><li><code>-x</code>：拥有执行权限</li><li><code>-u</code>：拥有SUID权限</li><li><code>-g</code>：拥有SGID权限</li><li><code>-k</code>：拥有SBit权限</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-w</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> student.txt ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span></span></code></pre></div><h3 id="两个文件之间进行比较" tabindex="-1">两个文件之间进行比较 <a class="header-anchor" href="#两个文件之间进行比较" aria-label="Permalink to &quot;两个文件之间进行比较&quot;">​</a></h3><ul><li><code>文件1 -nt 文件2</code>：判断文件1的修改时间是否比文件2的新</li><li><code>文件1 -ot 文件2</code>：判断文件1的修改时间是否比文件2的旧</li><li><code>文件1 -ef 文件2</code>：判断文件1是否和文件2的Inode号一致，可以理解为两个文件是否同一个文件，这个判断用于判断硬链接是很好的方法</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#创建硬链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/student.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/stu.txt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ /root/student.txt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-ef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /tmp/stu.txt ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span></span></code></pre></div><h3 id="两个整数之间比较" tabindex="-1">两个整数之间比较 <a class="header-anchor" href="#两个整数之间比较" aria-label="Permalink to &quot;两个整数之间比较&quot;">​</a></h3><ul><li><code>整数1 -eq 整数2</code>：判断整数1是否和整数2相等</li><li><code>-ne</code>：不相等</li><li><code>-gt</code>：大于</li><li><code>-lt</code>：小于</li><li><code>-ge</code>：大于等于</li><li><code>-le</code>：小于</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -ge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span></span></code></pre></div><h3 id="字符串的判断" tabindex="-1">字符串的判断 <a class="header-anchor" href="#字符串的判断" aria-label="Permalink to &quot;字符串的判断&quot;">​</a></h3><ul><li><code>-z 字符串</code>：判断字符串是否为空</li><li><code>-n 字符串</code>：非空</li><li><code>字串1 == 字串2</code>：是否相等</li><li><code>字串1 != 字串2</code>：是否不等</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 判断name变量是否为空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-z</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span></span></code></pre></div><h3 id="多重条件判断" tabindex="-1">多重条件判断 <a class="header-anchor" href="#多重条件判断" aria-label="Permalink to &quot;多重条件判断&quot;">​</a></h3><ul><li><code>判断1 -a 判断2</code>：逻辑与，判断1和判断2都成立，最终结果为真</li><li><code>判断1 -o 判断2</code>：逻辑或，判断1和判断2有一个成立，最终结果为真</li><li><code>! 判断</code>：逻辑非，使原始的判断式取反</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aa</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">11</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$aa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$aa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -gt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yes&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span></span></code></pre></div><h2 id="文件比较符" tabindex="-1">文件比较符 <a class="header-anchor" href="#文件比较符" aria-label="Permalink to &quot;文件比较符&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且为目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且为常规文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且为符号链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-h</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且为软链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且长度不为0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且可读</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且可写</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且可执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且属于当前用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断对象是否存在，并且属于当前用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-nt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断file1是否比file2新</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/data/file1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -nt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/data/file2&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-ot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 判断file1是否比file2旧</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/data/file1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/data/file2&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ]</span></span></code></pre></div><h2 id="二、if流程控制语句" tabindex="-1">二、if流程控制语句 <a class="header-anchor" href="#二、if流程控制语句" aria-label="Permalink to &quot;二、if流程控制语句&quot;">​</a></h2><h3 id="单分支if条件语句" tabindex="-1">单分支if条件语句 <a class="header-anchor" href="#单分支if条件语句" aria-label="Permalink to &quot;单分支if条件语句&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[ 条件判断式 ]];</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[ 条件判断式 ]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><p>注意：</p><ul><li>if语句使用fi结尾，和一般语言使用大括号结尾不同</li><li>[ 条件判断式 ]就是使用test命令判断，所以中括号和条件判断式之间必须有空格</li><li>then后面跟符合条件之后执行的程序，可以放在[]之后，用&#39;;&#39;分割，也可以换行写入，就不需要&#39;;&#39;了</li></ul><p>例子：判断分区使用率</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把根分区使用率作为变量值赋予变量rate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/dev/sda3&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $5}&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ $rate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-ge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;warning! /dev/sda3 is full!!&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fi</span></span></code></pre></div><h3 id="双分支if条件语句" tabindex="-1">双分支if条件语句 <a class="header-anchor" href="#双分支if条件语句" aria-label="Permalink to &quot;双分支if条件语句&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ 条件判断式 ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		#条件成立时，执行的程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	#条件不成立时，执行的另一个程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><h3 id="多分支if条件语句" tabindex="-1">多分支if条件语句 <a class="header-anchor" href="#多分支if条件语句" aria-label="Permalink to &quot;多分支if条件语句&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ 条件判断式1 ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 当条件1成立时，执行程序1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">elif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ 条件判断2 ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	then</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 当条件判断2成立时，执行程序2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#...省略更多条件..</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 当所有条件都不成立时，最后执行此程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><h2 id="三、case流程控制语句" tabindex="-1">三、case流程控制语句 <a class="header-anchor" href="#三、case流程控制语句" aria-label="Permalink to &quot;三、case流程控制语句&quot;">​</a></h2><p>多分支case条件语句</p><p>case语句和if...elif...else语句一样都是多分支条件语句，不过和if多分支条件语句不同的是，case语句只能判断一种条件关系，而if语句可以判断多种关系</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $变量名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;值1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 如果变量的值等于1，则执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;值2&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	# 条件2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    *)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    	# 最后的条件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">esac</span></span></code></pre></div><h2 id="四、for流程控制语句" tabindex="-1">四、for流程控制语句 <a class="header-anchor" href="#四、for流程控制语句" aria-label="Permalink to &quot;四、for流程控制语句&quot;">​</a></h2><p>语法一</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量 in 值1 值2 值3...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		#程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span></code></pre></div><p>例子：批量解压缩脚本</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lamp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $i &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/dev/null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lamp/ls.log</span></span></code></pre></div><p>语法二</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((初始值;循环控制条件;变量变化))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span></code></pre></div><p>例子：从1加到100</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(($s+$i))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;The sum of 1+2+..+100 is: </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h2 id="五、while循环" tabindex="-1">五、while循环 <a class="header-anchor" href="#五、while循环" aria-label="Permalink to &quot;五、while循环&quot;">​</a></h2><p>while循环是不定循环，也称作条件循环，只要条件判断式成立，循环就会一直继续，直到条件判断式不成立，循环才会停止，这就和for的固定循环不太一样了；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ 条件判断式 ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		#程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span></code></pre></div><p>例子：1加到100</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ $i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-le</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(( $s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$i ))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$(( $i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">+1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;the sum is:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h2 id="六、until循环" tabindex="-1">六、until循环 <a class="header-anchor" href="#六、until循环" aria-label="Permalink to &quot;六、until循环&quot;">​</a></h2><p>until循环和while循环相反，until循环时只要条件判断式不成立则进行循环，并执行循环程序，一旦循环条件成立，则终止循环</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">until</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ 条件判断式 ]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	do</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    done</span></span></code></pre></div><h2 id="七、shell函数" tabindex="-1">七、shell函数 <a class="header-anchor" href="#七、shell函数" aria-label="Permalink to &quot;七、shell函数&quot;">​</a></h2><p><a href="https://www.runoob.com/linux/linux-shell-func.html" target="_blank" rel="noreferrer">https://www.runoob.com/linux/linux-shell-func.html</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">funWithParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第一个参数为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第二个参数为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第十个参数为 </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第十个参数为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\${10}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第十一个参数为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\${11}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;参数总数有 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 个!&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;作为一个字符串输出所有参数 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">funWithParam</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 34</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 73</span></span></code></pre></div>`,62),t=[l];function p(k,e,d,r,F,g){return a(),i("div",null,t)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};
