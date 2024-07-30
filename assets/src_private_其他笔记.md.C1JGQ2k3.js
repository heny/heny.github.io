import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.CmFZ6rCi.js";const m=JSON.parse('{"title":"steam打开epic游戏","description":"","frontmatter":{},"headers":[],"relativePath":"src/private/其他笔记.md","filePath":"src/private/其他笔记.md","lastUpdated":1722239423000}'),e={name:"src/private/其他笔记.md"},l=n(`<h2 id="印象云笔记转md" tabindex="-1">印象云笔记转md <a class="header-anchor" href="#印象云笔记转md" aria-label="Permalink to &quot;印象云笔记转md&quot;">​</a></h2><p>安装：<code>npm install enex-dump -g</code></p><p>转换：<code>enex-dump --src ./my-notes.enex</code></p><h2 id="网易云音乐" tabindex="-1">网易云音乐 <a class="header-anchor" href="#网易云音乐" aria-label="Permalink to &quot;网易云音乐&quot;">​</a></h2><p>1、下载项目：<a href="https://github.com/nondanee/UnblockNeteaseMusic" target="_blank" rel="noreferrer">https://github.com/nondanee/UnblockNeteaseMusic</a> 2、打开cmd，输入：ping music.163.com，并记住ip地址； 3、解压项目，在项目根目录打开cmd，输入<code>node app.js -p 2333:2334 -f 59.111.181.60</code>(这里的ip地址改成你本地ping到的地址) 4、打开网易云音乐设置，找到工具--&gt;自定义代理--&gt;服务器输入：127.0.0.1，端口输入2333(或者node命令指定的端口)</p><h2 id="坚果云同步" tabindex="-1">坚果云同步 <a class="header-anchor" href="#坚果云同步" aria-label="Permalink to &quot;坚果云同步&quot;">​</a></h2><ol start="2"><li><p>创建<code>customExtRules.conf</code>文件，放进上面的<code>C:\\Users\\你的用户名\\AppData\\Roaming\\Nutstore\\db_**</code>，重点带db开头就行，里面如果包含以下三个文件之一就行：</p><ul><li>event.db</li><li>nustore.db</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 坚果云自定义同步规则</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 详细使用说明: http://help.jianguoyun.com/?p=1825 </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略所有扩展名为 .bak 的文件, 删除下一行行首的 &#39;#&#39; 即可 (保留行首空格不影响配置文件)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *.bak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 忽略 D:\\work\\test 文件夹, 删除下一行行首的 &#39;#&#39; 即可 (保留行首空格不影响配置文件)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">D:\\vite-note\\node_modules</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">D:\\vite-note\\.vitepress\\dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 强制同步所有扩展名为 .lock 的文件, 删除下一行行首的 &#39;#&#39; 即可 (保留行首空格不影响配置文件)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># !*.lock</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 .lock 文件已经包含在选择性同步的路径中，则此类型文件不会被同步</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果在配置文件中同时存在 *.lock 和 !*.lock，则此类型文件不会被同步</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置开始</span></span></code></pre></div><p><strong>修改完成需要重启坚果云</strong></p></li></ol><h2 id="charles配置方法" tabindex="-1">charles配置方法 <a class="header-anchor" href="#charles配置方法" aria-label="Permalink to &quot;charles配置方法&quot;">​</a></h2><ol><li><p>下载安装：<a href="https://www.charlesproxy.com/download/" target="_blank" rel="noreferrer">https://www.charlesproxy.com/download/</a></p></li><li><p>安装证书：Help --&gt; SSL Proxying --&gt; Install Charles Root Certificate</p><p><img src="https://s4.ax1x.com/2022/02/18/Ho0VyR.png" alt="Ho0VyR.png"></p></li><li><p>配置抓取的网站</p><p>1）Proxy --&gt; SSL Proxying Settings</p><p>2）添加两个*，之后保存</p><p><img src="https://s4.ax1x.com/2022/02/18/HoBvV0.png" alt="HoBvV0.png"></p><p><img src="https://s4.ax1x.com/2022/02/18/HoBz5T.png" alt="HoBz5T.png"></p></li></ol><h2 id="手机共享vpn" tabindex="-1">手机共享vpn <a class="header-anchor" href="#手机共享vpn" aria-label="Permalink to &quot;手机共享vpn&quot;">​</a></h2><p>局域网手机共享vpn <strong>v2ray</strong></p><ol><li>进入设置</li><li>开启允许来自局域网的连接，记住下面的HTTP代理端口</li><li>进入wifi，查看当前wifi连接的ip地址</li><li>去需要连接的手机或电脑，设置当前连接的wifi，设置手动代理，填写共享手机的wifi ip地址和http代理端口即可</li></ol><p><strong>SSR or Clash</strong> 下载 <a href="https://hny.lanzouq.com/iK7g700ersje" target="_blank" rel="noreferrer">https://hny.lanzouq.com/iK7g700ersje</a> 之后开启代理即可</p><h1 id="steam打开epic游戏" tabindex="-1">steam打开epic游戏 <a class="header-anchor" href="#steam打开epic游戏" aria-label="Permalink to &quot;steam打开epic游戏&quot;">​</a></h1><ol><li><p>下载地址：<a href="https://github.com/derrod/legendary" target="_blank" rel="noreferrer">https://github.com/derrod/legendary</a></p><p>下载<code>legendary</code>和<code>legendary.exe</code>两个文件</p></li><li><p>常用命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 授权，需要退出科学上网</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">legendary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示游戏列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">legendary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-games</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装游戏，需要跟游戏列表的app name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">legendary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> appName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从已安装目录导入游戏</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">legendary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import-game</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> appName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filePath</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看已安装的游戏列表，加check-updates可以验证游戏更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">legendary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-installed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --check-updates</span></span></code></pre></div></li><li><p>steam添加非steam游戏，并添加<code>legendary.exe</code>文件</p></li><li><p>之后右键游戏属性，更改名字和图标，启动选项输入<code>launch appName</code>即可</p></li><li><p>游戏美化图标网址：<a href="https://www.steamgriddb.com/" target="_blank" rel="noreferrer">https://www.steamgriddb.com/</a></p></li></ol>`,15),p=[l];function t(h,r,o,c,d,k){return i(),a("div",null,p)}const y=s(e,[["render",t]]);export{m as __pageData,y as default};
