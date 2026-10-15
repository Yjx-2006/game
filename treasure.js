const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
:root{color-scheme:light;--ink:#172922;--muted:#748076;--paper:#f5f4ec;--green:#1b5945;--lime:#d8f06b;--line:#e5e5d9;--orange:#df8058}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif}button,input{font:inherit}button{cursor:pointer}#app{min-height:100vh}.topbar{height:64px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);background:#f9f8f2}.brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.02em}.brand-mark{width:30px;height:30px;display:grid;place-items:center;background:var(--green);color:var(--lime);font-family:'DM Mono',monospace;font-size:13px}.top-meta,.mono,.eyebrow,.map-tag,.step-time{font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:.12em;font-size:10px}.top-meta{color:var(--muted)}.layout{max-width:1380px;margin:0 auto;padding:34px 5vw 50px;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(340px,.9fr);gap:5vw;align-items:start}.eyebrow{display:flex;align-items:center;gap:9px;color:var(--green)}.eyebrow:before{content:'';width:20px;height:1px;background:currentColor}h1{font-family:'Playfair Display',serif;font-size:clamp(42px,5.2vw,72px);line-height:.98;letter-spacing:0;margin:18px 0 14px;max-width:660px}h1 em{color:var(--green);font-weight:600}.intro{margin:0;color:#627168;line-height:1.7;font-size:14px}.map-wrap{height:350px;margin-top:28px;position:relative;overflow:hidden;background:#e9eee0;border:1px solid #dbe2d3}.map-wrap:before,.map-wrap:after{content:'';position:absolute;inset:-30%;background-image:linear-gradient(32deg,transparent 48.8%,#d3ddcc 49%,#d3ddcc 49.35%,transparent 49.5%),linear-gradient(112deg,transparent 47%,#d5dfcf 47.2%,#d5dfcf 47.55%,transparent 47.7%);background-size:110px 96px,140px 120px;opacity:.7}.map-wrap:after{inset:0;background:radial-gradient(ellipse at 60% 45%,transparent 5%,#dce7d5 72%);opacity:.34}.map-grid{position:absolute;inset:0;z-index:1;background-image:linear-gradient(#80977e13 1px,transparent 1px),linear-gradient(90deg,#80977e13 1px,transparent 1px);background-size:36px 36px}.map-wash{position:absolute;width:80%;height:83%;left:10%;top:9%;background:#dce8d4;border:1px solid #c2d4bf;clip-path:polygon(25% 3%,42% 9%,57% 5%,63% 15%,76% 16%,79% 27%,89% 31%,84% 43%,92% 51%,79% 59%,75% 73%,64% 76%,58% 92%,47% 85%,39% 78%,28% 75%,24% 62%,12% 57%,16% 43%,8% 34%,18% 25%,16% 15%);z-index:1;opacity:.77}.map-city{position:absolute;z-index:2;font:10px 'DM Mono',monospace;color:#637968}.map-city:before{content:'';display:inline-block;width:5px;height:5px;margin:0 5px 1px 0;background:#78917d;border-radius:50%}.route-line{position:absolute;z-index:3;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}.route-line path{fill:none;stroke:var(--green);stroke-width:2;stroke-dasharray:5 6;vector-effect:non-scaling-stroke}.map-marker{position:absolute;z-index:4;width:13px;height:13px;border:3px solid white;border-radius:50%;background:var(--orange);box-shadow:0 0 0 2px var(--orange);transform:translate(-50%,-50%)}.map-marker.treasure{width:19px;height:19px;background:var(--lime);box-shadow:0 0 0 2px var(--green),0 0 0 8px #1b594522}.map-tag{position:absolute;z-index:5;left:14px;top:13px;background:#f8f8f1;padding:8px 10px;color:var(--green)}.map-caption{position:absolute;z-index:5;right:12px;bottom:10px;color:#758675;font:9px 'DM Mono',monospace}.map-note{position:absolute;z-index:5;left:13px;bottom:11px;color:#627168;font:10px 'DM Mono',monospace}.map-wrap.live-map:before,.map-wrap.live-map:after,.map-wrap.live-map .map-wash,.map-wrap.live-map .map-grid{display:none}.map-wrap.live-map{background:#e9eee0}.map-wrap.live-map .map-tag,.map-wrap.live-map .map-caption,.map-wrap.live-map .map-note{pointer-events:none}.left-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;color:var(--muted);font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.08em}.ak-form{display:flex;gap:7px;align-items:center}.ak-form input{width:145px;min-width:0;border:0;border-bottom:1px solid #bfc9b9;padding:6px 4px;background:transparent;outline:none;font:11px 'DM Mono',monospace}.ak-form button{border:0;background:transparent;color:var(--green);font-size:11px;font-weight:700}.panel{padding-top:5px}.panel-heading{display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--line)}.panel-heading h2{font-family:'Playfair Display',serif;font-size:25px;margin:0;letter-spacing:0}.status{color:var(--green);font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.1em}.status:before{content:'';display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:#92bc62;box-shadow:0 0 0 3px #92bc6230}.question-card{padding:24px 0 19px;border-bottom:1px solid var(--line)}.q-count{color:var(--muted);font:10px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}.question{min-height:62px;margin:15px 0 20px;font-size:21px;line-height:1.42;font-weight:600}.answers{display:grid;grid-template-columns:1fr 1fr;gap:10px}.answer{height:47px;border:1px solid #d7dccf;background:transparent;color:var(--ink);font-weight:700;transition:background .18s,color .18s,transform .18s}.answer:hover:not(:disabled){background:var(--green);color:white;transform:translateY(-2px)}.answer:first-child{background:var(--green);border-color:var(--green);color:white}.answer:first-child:hover:not(:disabled){background:#103e2f}.answer:disabled{opacity:.42;cursor:default}.timeline{padding-top:21px}.timeline-head{display:flex;justify-content:space-between;margin-bottom:16px;font:10px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}.timeline-head strong{color:var(--green);font-weight:500}.steps{display:flex;flex-direction:column}.step{position:relative;display:grid;grid-template-columns:19px 1fr auto;align-items:center;gap:11px;min-height:40px;color:#9aa197;font-size:12px}.step:not(:last-child):before{content:'';position:absolute;width:1px;height:19px;left:7px;top:26px;background:#dadfd5}.step-dot{width:15px;height:15px;border:1px solid #cbd2c6;border-radius:50%;background:var(--paper);z-index:1}.step.done{color:var(--ink)}.step.done .step-dot{background:var(--green);border-color:var(--green);box-shadow:inset 0 0 0 4px var(--paper)}.step.active{color:var(--green);font-weight:700}.step.active .step-dot{border:4px solid var(--green);background:var(--lime);box-shadow:0 0 0 4px #1b594414}.step-time{font-size:9px;color:#a3aa9f}.message{min-height:20px;margin-top:15px;color:#a14f35;font-size:12px}.replay{position:fixed;inset:0;z-index:20;display:grid;place-items:center;background:#10251d;overflow:hidden;color:#f5f4ec}.replay:before{content:'';position:absolute;width:70vmin;height:70vmin;border:1px solid #9cb79328;border-radius:50%;box-shadow:0 0 0 9vmin #9cb7930a,0 0 0 18vmin #9cb79308,0 0 0 27vmin #9cb79306}.replay-content{position:relative;width:min(700px,88vw);text-align:center}.replay-eyebrow{font:10px 'DM Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:var(--lime)}.replay h2{font:700 clamp(48px,9vw,96px)/.98 'Playfair Display',serif;margin:21px 0 14px;letter-spacing:0}.replay-copy{max-width:420px;margin:0 auto;color:#c6d1c3;line-height:1.7;font-size:14px}.replay-map{position:relative;height:170px;max-width:560px;margin:28px auto 18px;border:1px solid #78918155;background:radial-gradient(ellipse at center,#59756336,transparent 70%)}.replay-map:before{content:'';position:absolute;inset:12px;background-image:linear-gradient(#b1c4a612 1px,transparent 1px),linear-gradient(90deg,#b1c4a612 1px,transparent 1px);background-size:26px 26px}.replay-map svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}.replay-map path{fill:none;stroke:var(--lime);stroke-width:2;stroke-dasharray:6 7;stroke-dashoffset:500;animation:draw 3s ease forwards}.replay-star{position:absolute;font-size:28px;color:var(--lime);filter:drop-shadow(0 0 12px #d8f06b88);animation:twinkle 1.5s ease-in-out infinite alternate}.replay-events{display:flex;justify-content:center;gap:22px;flex-wrap:wrap;color:#c6d1c3;font:9px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.1em}.replay-events span:before{content:'+';color:var(--lime);margin-right:6px}.replay-close{margin-top:27px;border:1px solid #708678;background:transparent;color:#f5f4ec;padding:11px 19px;font-size:12px}.replay-close:hover{background:#f5f4ec;color:#10251d}.confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden}.confetti i{position:absolute;top:-15px;width:5px;height:11px;background:var(--lime);animation:fall 3.3s linear infinite}.confetti i:nth-child(3n){background:#e78b63}.confetti i:nth-child(4n){background:#f4eee0}@keyframes fall{to{transform:translateY(110vh) rotate(700deg)}}@keyframes draw{to{stroke-dashoffset:0}}@keyframes twinkle{to{transform:scale(1.3);opacity:.65}}.hidden{display:none!important}@media(max-width:850px){.layout{grid-template-columns:1fr;gap:32px;padding-top:27px}.map-wrap{height:300px}.panel{padding-bottom:20px}}@media(max-width:480px){.topbar{height:56px;padding:0 18px}.top-meta{font-size:8px}.layout{padding:25px 18px 35px}h1{font-size:47px}.map-wrap{height:255px}.left-foot{align-items:flex-start;gap:9px;flex-direction:column}.question{font-size:19px}.replay-events{gap:12px}}
`;

const app = document.getElementById('app');
const style = document.createElement('style');
style.textContent = styles + '.baidu-map{position:absolute;inset:0;z-index:0}.route-hint{min-height:35px;padding:12px 0 16px;border-bottom:1px solid var(--line);color:var(--muted);font:10px/1.6 "DM Mono",monospace;letter-spacing:.04em}.route-hint strong{color:var(--green);font-weight:500}';
document.head.append(style);

app.innerHTML = `
<header class="topbar"><div class="brand"><span class="brand-mark">寻</span>寻迹 TREASURE CLUB</div><div class="top-meta">中国 · 第 024 号寻宝任务</div></header>
<main class="layout">
  <section class="map-column"><div class="eyebrow">一场横跨中国的寻宝游戏</div><h1>答案藏在<br><em>每一个是</em>之后。</h1><p class="intro">用几个简单的问题，一起追踪一件失落千年的宝物。<br>准备好了吗？地图已经铺开。</p>
    <div class="map-wrap" id="map"><div class="baidu-map" id="baidu-map"></div><div class="map-grid"></div><div class="map-wash"></div><div class="map-tag" id="map-tag">地图待命 · 中国境内</div><div class="map-caption" id="map-caption">探索范围 / 中国</div><div class="map-note" id="map-note">等待第一条线索</div>
      <span class="map-city" style="left:53%;top:32%">西安</span><span class="map-city" style="left:65%;top:51%">武汉</span><span class="map-city" style="left:73%;top:63%">杭州</span><span class="map-city" style="left:37%;top:58%">成都</span><span class="map-city" style="left:78%;top:44%">南京</span>
      <svg class="route-line" id="route" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="route-path" d="" /></svg><span class="map-marker hidden" id="marker"></span>
    </div>
    <div class="left-foot"><span id="map-status">◌ 百度地图 · 等待代码配置</span></div>
  </section>
  <section class="panel"><div class="panel-heading"><h2>二十问寻宝</h2><span class="status" id="status">等待开始</span></div><div class="question-card"><div class="q-count" id="q-count">开始冒险</div><p class="question" id="question">准备好了吗？</p><div class="answers"><button class="answer" id="yes">是</button><button class="answer" id="no">不是</button></div></div><div class="route-hint" id="route-hint">每个答案，都会改变线索的方向。</div>
    <div class="timeline"><div class="timeline-head"><span>寻宝记录</span><strong id="progress">0 / 4 完成</strong></div><div class="steps" id="steps"><div class="step" data-step="0"><span class="step-dot"></span><span>接收第一条线索</span><span class="step-time">待开始</span></div><div class="step" data-step="1"><span class="step-dot"></span><span>解读古老地图</span><span class="step-time">待开始</span></div><div class="step" data-step="2"><span class="step-dot"></span><span>抵达藏宝地点</span><span class="step-time">待开始</span></div><div class="step" data-step="3"><span class="step-dot"></span><span>开启神秘宝箱</span><span class="step-time">待开始</span></div></div></div><div class="message" id="message" role="status"></div>
  </section>
</main><section class="replay hidden" id="replay"><div class="confetti" id="confetti"></div><div class="replay-content"><div class="replay-eyebrow">任务完成 · 探险回放</div><h2>找到宝藏了。</h2><p class="replay-copy">从最初的好奇，到跨越山海的追寻。每一个答案都把我们带得更近一些。</p><div class="replay-map"><svg viewBox="0 0 560 170" preserveAspectRatio="none"><path d="M55 126 C110 115 112 48 205 83 S318 131 372 61 S464 96 510 33"/></svg><span class="replay-star" style="left:89%;top:10%">✳</span></div><div class="replay-events"><span>图书馆 · 发现线索</span><span>古地图 · 成功解码</span><span>山海之间 · 抵达</span><span>宝箱 · 已开启</span></div><button class="replay-close" id="replay-close">再探一次 ↗</button></div></section>`;

const questions = [
  '你相信，古老的传说里藏着真实的宝藏吗？',
  '这件宝藏，曾经属于一位旅行家吗？',
  '最初的线索，是否藏在一本旧书里？',
  '那本书的主人曾到过中国西部吗？',
  '线索里提到了一条河流吗？',
  '这条河流流经高原吗？',
  '地图上有一座古老的石桥吗？',
  '目的地附近可以看到群山吗？',
  '你觉得宝藏藏在一座古城附近吗？',
  '这座古城曾经是丝绸之路上的驿站吗？',
  '第二条线索提到了一轮明月吗？',
  '它描述的地方，冬天会下雪吗？',
  '你愿意继续翻越眼前这座山吗？',
  '前方的路牌上，出现了熟悉的名字吗？',
  '地图上的终点已经离我们很近了吗？',
  '你听见风里传来古老的钟声了吗？',
  '最后一把钥匙，是否就在石阶下面？',
  '石门后面，真的有一只木箱吗？',
  '准备好和我一起打开它了吗？',
  '这就是传说中的那件宝藏，对吗？'
];
const $ = (id) => document.getElementById(id);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const BAIDU_MAP_AK = 't4jMfsqWCdxaSl9NH82reeVeclB1xNqG';
let questionIndex = -1;
let busy = false;
let mapInstance = null;
let mapSdkPromise = null;
const visitedPoints = [];
const treasures = {
  silk: {
    name: '敦煌·月光金匣',
    subtitle: '丝路古道的最后一盏灯',
    description: '你追随商旅留下的旧书与河流，沿丝绸之路向西，最终在敦煌的月色里找到一只鎏金宝匣。',
    route: [
      { name: '西安', x: 53, y: 37, lng: 108.94, lat: 34.34 },
      { name: '兰州', x: 45, y: 35, lng: 103.83, lat: 36.06 },
      { name: '敦煌', x: 33, y: 29, lng: 94.66, lat: 40.14 },
      { name: '月牙泉', x: 31, y: 34, lng: 94.67, lat: 40.09 }
    ]
  },
  river: {
    name: '江南·青瓷秘藏',
    subtitle: '水巷深处的一抹青色',
    description: '你顺着桥、钟声与水路一路向南，在层层叠叠的江南水巷里，揭开青瓷秘藏的故事。',
    route: [
      { name: '杭州', x: 75, y: 54, lng: 120.16, lat: 30.25 },
      { name: '南京', x: 70, y: 47, lng: 118.80, lat: 32.06 },
      { name: '景德镇', x: 65, y: 64, lng: 117.18, lat: 29.27 },
      { name: '婺源', x: 68, y: 59, lng: 117.86, lat: 29.25 }
    ]
  },
  star: {
    name: '雪山·星盘残卷',
    subtitle: '高原之上，星辰为钥',
    description: '你选择相信高原上的雪与星光，跟着山口间若隐若现的记号，寻到一卷古老的星盘。',
    route: [
      { name: '拉萨', x: 27, y: 68, lng: 91.13, lat: 29.65 },
      { name: '那曲', x: 30, y: 54, lng: 92.05, lat: 31.48 },
      { name: '格尔木', x: 42, y: 45, lng: 94.90, lat: 36.41 },
      { name: '昆仑山口', x: 39, y: 50, lng: 94.15, lat: 35.61 }
    ]
  }
};
const routeVotes = { silk: 0, river: 0, star: 0 };
const answerHistory = [];
let selectedTreasure = null;
const answerRoutes = [
  { yes: 'silk', no: 'river' }, { yes: 'silk', no: 'star' }, { yes: 'silk', no: 'river' }, { yes: 'silk', no: 'river' },
  { yes: 'river', no: 'star' }, { yes: 'star', no: 'river' }, { yes: 'river', no: 'silk' }, { yes: 'star', no: 'river' },
  { yes: 'silk', no: 'river' }, { yes: 'silk', no: 'star' }, { yes: 'star', no: 'river' }, { yes: 'star', no: 'river' },
  { yes: 'star', no: 'river' }, { yes: 'river', no: 'silk' }, { yes: 'silk', no: 'star' }, { yes: 'silk', no: 'river' },
  { yes: 'river', no: 'star' }, { yes: 'river', no: 'star' }, { yes: 'star', no: 'river' }, { yes: 'silk', no: 'river' }
];

async function loadBaiduMap(ak) {
  if (window.BMapGL || window.BMap) return window.BMapGL || window.BMap;
  if (mapSdkPromise) return mapSdkPromise;
  mapSdkPromise = new Promise((resolve, reject) => {
    const callback = `__treasureMapReady${Date.now()}`;
    const timer = setTimeout(() => { delete window[callback]; mapSdkPromise = null; reject(new Error('地图加载超时，请检查 AK 与网络。')); }, 12000);
    window[callback] = () => { clearTimeout(timer); resolve(window.BMapGL || window.BMap); };
    const script = document.createElement('script');
    script.src = `https://api.map.baidu.com/api?v=3.0&ak=${encodeURIComponent(ak)}&callback=${callback}&s=1`;
    script.onerror = () => { clearTimeout(timer); delete window[callback]; mapSdkPromise = null; reject(new Error('百度地图加载失败，请检查网络或 AK。')); };
    document.head.append(script);
  });
  return mapSdkPromise;
}

async function connectMap() {
  const ak = BAIDU_MAP_AK.trim();
  if (!ak || ak === 'YOUR_BAIDU_MAP_AK') { $('map-status').textContent = '◌ 请在 treasure.js 配置百度地图 AK'; return; }
  $('map-status').textContent = '◌ 正在连接百度地图…';
  try {
    const BMap = await loadBaiduMap(ak);
    if (!BMap) throw new Error('没有收到百度地图响应，请检查 AK。');
    if (!mapInstance) {
      mapInstance = new BMap.Map('baidu-map');
      const center = new BMap.Point(105, 35);
      mapInstance.centerAndZoom(center, 4);
      if (BMap.NavigationControl) mapInstance.addControl(new BMap.NavigationControl({ anchor: BMap.BMAP_ANCHOR_TOP_RIGHT }));
      if (BMap.ScaleControl) mapInstance.addControl(new BMap.ScaleControl());
      $('map').classList.add('live-map');
    }
    $('map-status').textContent = '● 百度地图 · 已连接';
    $('map-tag').textContent = '实时地图 · 中国境内';
    if (visitedPoints.length) renderMapRoute();
  } catch (error) { $('map-status').textContent = `◌ ${error.message}`; }
}

function renderMapRoute() {
  const BMap = window.BMapGL || window.BMap;
  if (!mapInstance || !BMap) return;
  mapInstance.clearOverlays();
  const points = visitedPoints.map((point) => new BMap.Point(point.lng, point.lat));
  points.forEach((point, index) => {
    const marker = new BMap.Marker(point);
    mapInstance.addOverlay(marker);
    if (index === points.length - 1 && BMap.Label) {
      const label = new BMap.Label(visitedPoints[index].name, { position: point, offset: new BMap.Size(15, -18) });
      mapInstance.addOverlay(label);
    }
  });
  if (points.length > 1 && BMap.Polyline) mapInstance.addOverlay(new BMap.Polyline(points, { strokeColor: '#1b5945', strokeWeight: 4, strokeOpacity: .8 }));
  if (points.length) mapInstance.panTo(points[points.length - 1]);
}

function addCluePoint() {
  const point = selectedTreasure.route[Math.min(visitedPoints.length, selectedTreasure.route.length - 1)];
  visitedPoints.push(point);
  const marker = $('marker');
  marker.classList.remove('hidden');
  marker.classList.toggle('treasure', visitedPoints.length === 4);
  marker.style.left = `${point.x}%`;
  marker.style.top = `${point.y}%`;
  $('map-note').textContent = `线索 ${String(visitedPoints.length).padStart(2, '0')} / ${point.name}`;
  $('map-tag').textContent = `${selectedTreasure.name} · 线索 ${visitedPoints.length}/4`;
  $('route-path').setAttribute('d', visitedPoints.map((item, index) => `${index ? 'L' : 'M'} ${item.x} ${item.y}`).join(' '));
  if (mapInstance) renderMapRoute();
}

function updateQuestion() {
  $('q-count').textContent = `问题 ${String(questionIndex + 1).padStart(2, '0')} / 20`;
  $('question').textContent = questions[questionIndex];
  $('status').textContent = questionIndex === 0 ? '正在探索' : `第 ${questionIndex + 1} 题`;
  $('yes').textContent = '是';
  $('no').textContent = '不是';
}

function updateRouteHint() {
  const leader = Object.keys(routeVotes).sort((a, b) => routeVotes[b] - routeVotes[a])[0];
  const hint = { silk: '线索正指向西行的丝路。', river: '水巷与古桥的线索正在浮现。', star: '雪线之上，星光正在指路。' }[leader];
  $('route-hint').innerHTML = `当前线索 · <strong>${hint}</strong>`;
}

function chooseTreasure() {
  const lastAnswer = answerHistory[answerHistory.length - 1];
  const preferred = answerRoutes[answerHistory.length - 1][lastAnswer ? 'yes' : 'no'];
  const leaders = Object.keys(routeVotes).filter((route) => routeVotes[route] === Math.max(...Object.values(routeVotes)));
  const route = leaders.includes(preferred) ? preferred : leaders[0];
  selectedTreasure = treasures[route];
  return selectedTreasure;
}

async function completeStep(index, label) {
  const step = document.querySelector(`[data-step="${index}"]`);
  step.classList.add('active');
  step.querySelector('.step-time').textContent = '进行中';
  await delay(750);
  step.classList.remove('active');
  step.classList.add('done');
  step.querySelector('.step-time').textContent = label;
  $('progress').textContent = `${index + 1} / 4 完成`;
  addCluePoint();
}

async function findTreasure() {
  try {
    const treasure = chooseTreasure();
    $('status').textContent = '线索汇合中';
    $('message').textContent = '';
    $('route-hint').innerHTML = `最终目的地 · <strong>${treasure.name}</strong>`;
    $('map-tag').textContent = `${treasure.name} · 路线已锁定`;
    await completeStep(0, '线索已收');
    $('message').textContent = `${treasure.route[0].name}：旧书页间，浮出了一张泛黄的地图…`;
    await completeStep(1, '解码成功');
    $('message').textContent = `路线经过 ${treasure.route[1].name}，继续向宝藏靠近…`;
    await completeStep(2, '已经抵达');
    $('message').textContent = `抵达${treasure.route[3].name}。石门后传来轻轻的回响…`;
    await completeStep(3, '宝藏发现');
    $('status').textContent = '任务完成';
    $('q-count').textContent = '宝藏已发现';
    $('question').textContent = `恭喜你，找到了「${treasure.name}」！`;
    $('message').textContent = '';
    $('yes').disabled = true;
    $('no').disabled = true;
    await delay(1000);
    showReplay();
  } catch (error) {
    $('status').textContent = '寻宝中断';
    $('message').textContent = `寻宝遇到问题：${error.message}`;
    busy = false;
  }
}

async function answer(isYes) {
  if (busy) return;
  if (questionIndex === -1 && !isYes) {
    $('message').textContent = '没关系，线索会在这里等你。准备好了再出发。';
    return;
  }
  $('message').textContent = '';
  if (questionIndex === -1) {
    busy = true;
    $('yes').disabled = true;
    $('no').disabled = true;
    await delay(350);
    $('yes').disabled = false;
    $('no').disabled = false;
    questionIndex = 0;
    updateQuestion();
    busy = false;
    return;
  }
  busy = true;
  $('yes').disabled = true;
  $('no').disabled = true;
  answerHistory.push(isYes);
  const route = answerRoutes[questionIndex][isYes ? 'yes' : 'no'];
  routeVotes[route]++;
  updateRouteHint();
  questionIndex++;
  if (questionIndex < questions.length) updateQuestion();
  if (questionIndex >= questions.length) {
    await findTreasure();
    return;
  }
  await delay(180);
  $('yes').disabled = false;
  $('no').disabled = false;
  busy = false;
}

function showReplay() {
  const treasure = selectedTreasure;
  document.querySelector('.replay-content h2').textContent = treasure.name;
  document.querySelector('.replay-copy').textContent = treasure.description;
  const replayPoints = treasure.route.map((point) => `${Math.round(point.x * 5.6)} ${Math.round(point.y * 1.7)}`);
  const replayPath = replayPoints.map((point, index) => `${index ? 'L' : 'M'} ${point}`).join(' ');
  document.querySelector('.replay-map path').setAttribute('d', replayPath);
  document.querySelector('.replay-map .replay-star').style.left = `${treasure.route[3].x}%`;
  document.querySelectorAll('.replay-events span').forEach((event, index) => {
    event.textContent = `${treasure.route[index].name} · ${['发现线索', '解读地图', '抵达目的地', '找到宝藏'][index]}`;
  });
  const confetti = $('confetti');
  confetti.innerHTML = Array.from({ length: 38 }, (_, index) => `<i style="left:${(index * 37) % 100}%;animation-delay:${(index % 11) * -.28}s;animation-duration:${2.5 + (index % 5) * .35}s"></i>`).join('');
  $('replay').classList.remove('hidden');
}

function resetGame() {
  questionIndex = -1; busy = false; visitedPoints.length = 0; answerHistory.length = 0; selectedTreasure = null;
  Object.keys(routeVotes).forEach((route) => { routeVotes[route] = 0; });
  document.querySelectorAll('.step').forEach((step) => { step.classList.remove('active', 'done'); step.querySelector('.step-time').textContent = '待开始'; });
  $('progress').textContent = '0 / 4 完成'; $('status').textContent = '等待开始'; $('q-count').textContent = '开始冒险';
  $('question').textContent = '准备好了吗？'; $('message').textContent = '';
  $('route-hint').textContent = '每个答案，都会改变线索的方向。';
  $('yes').textContent = '是'; $('no').textContent = '不是'; $('yes').disabled = false; $('no').disabled = false;
  $('route-path').setAttribute('d', ''); $('marker').classList.add('hidden'); $('map-note').textContent = '等待第一条线索';
  $('map-tag').textContent = mapInstance ? '实时地图 · 中国境内' : '地图待命 · 中国境内';
  $('map-status').textContent = mapInstance ? '● 百度地图 · 已连接' : '◌ 百度地图 · 尚未连接';
  if (mapInstance) { mapInstance.clearOverlays(); mapInstance.centerAndZoom(new (window.BMapGL || window.BMap).Point(105, 35), 4); }
  $('replay').classList.add('hidden');
}

$('yes').addEventListener('click', () => answer(true));
$('no').addEventListener('click', () => answer(false));
$('replay-close').addEventListener('click', resetGame);
connectMap();