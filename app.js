window.MonacoEnvironment = {
  getWorkerUrl: function() {
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
      self.MonacoEnvironment = { baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/' };
      importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/base/worker/workerMain.js');
    `)}`;
  }
};

/* ═══════════════════════════════════════
   UNIFIED TEMPLATES
═══════════════════════════════════════ */
const TEMPLATES = [
  {
    id:'blank', name:'Blank Canvas', desc:'Clean start.', tags:['minimal'],
    code:`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: system-ui, sans-serif; background: #0f1015; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; }\n    .box { text-align: center; padding: 40px; }\n    h1 { font-size: 2.5rem; margin-bottom: 12px; }\n    p { color: #94a3b8; margin-bottom: 20px; }\n    button { padding: 10px 24px; background: #6366f1; color: #fff; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <div class="box">\n    <h1>Hello World</h1>\n    <p>Start building!</p>\n    <button onclick="alert('hi')">Click me</button>\n  </div>\n  <script>\n    console.log("Ready!");\n  <\/script>\n</body>\n</html>`
  },
  {
    id:'particle', name:'Particle System', desc:'Animated canvas particle demo.', tags:['canvas','animation'],
    code:`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    *{margin:0;padding:0;box-sizing:border-box;}\n    body{background:#020409;overflow:hidden;font-family:system-ui,sans-serif;color:#fff;}\n    canvas{position:fixed;top:0;left:0;}\n    .ui{position:relative;z-index:1;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;}\n    h1{font-size:3rem;font-weight:800;background:linear-gradient(135deg,#6366f1,#d946ef);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}\n    p{color:#94a3b8;margin:10px 0 24px;}\n    button{padding:12px 28px;background:#6366f1;color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;}\n  </style>\n</head>\n<body>\n  <canvas id="c"></canvas>\n  <div class="ui">\n    <h1>CodeForge</h1>\n    <p>High-performance unified playground</p>\n    <button id="btn">Launch</button>\n  </div>\n  <script>\n    const c=document.getElementById("c"),ctx=c.getContext("2d");let w=c.width=innerWidth,h=c.height=innerHeight;window.addEventListener("resize",()=>{w=c.width=innerWidth;h=c.height=innerHeight;});const pts=Array.from({length:100},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.8,vy:(Math.random()-0.5)*0.8,r:Math.random()*2+1}));function loop(){ctx.clearRect(0,0,w,h);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(99,102,241,0.6)";ctx.fill();});requestAnimationFrame(loop);}loop();document.getElementById("btn").onclick=()=>console.log("Launched!");\n  <\/script>\n</body>\n</html>`
  },
  {
    id:'cssart', name:'CSS Art', desc:'Pure CSS planetary animation.', tags:['css','animation'],
    code:`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    *{margin:0;padding:0;box-sizing:border-box;}\n    body{background:#020409;display:flex;align-items:center;justify-content:center;min-height:100vh;overflow:hidden;font-family:system-ui,sans-serif;}\n    .scene{position:relative;width:300px;height:300px;display:flex;align-items:center;justify-content:center;}\n    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}\n    @keyframes orbit{from{transform:rotate(0deg) translateX(110px)}to{transform:rotate(360deg) translateX(110px)}}\n    .planet{width:130px;height:130px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#818cf8,#6366f1 55%,#312e81);box-shadow:0 0 40px rgba(99,102,241,0.6);animation:float 4s ease-in-out infinite;position:relative;}\n    .ring{position:absolute;width:190px;height:36px;border-radius:50%;border:8px solid rgba(167,139,250,0.4);top:50%;left:50%;transform:translate(-50%,-50%) rotateX(75deg);}\n    .orbit{position:absolute;width:220px;height:220px;animation:orbit 6s linear infinite;}\n    .moon{position:absolute;width:22px;height:22px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#e2e8f0,#94a3b8);box-shadow:0 0 10px rgba(255,255,255,0.4);top:-11px;left:50%;transform:translateX(-50%);}\n    .label{position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:0.7rem;font-weight:700;letter-spacing:3px;color:rgba(167,139,250,0.7);}\n  </style>\n</head>\n<body>\n  <div class="scene"><div class="planet"><div class="ring"></div></div><div class="orbit"><div class="moon"></div></div><p class="label">EXPLORE THE COSMOS</p></div>\n  <script>\n    console.log("CSS Art loaded");\n  <\/script>\n</body>\n</html>`
  }
];

const CDN_PRESETS = [
  {name:'Tailwind',url:'https://cdn.tailwindcss.com',type:'script'},
  {name:'Bootstrap CSS',url:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',type:'stylesheet'},
  {name:'GSAP',url:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',type:'script'},
  {name:'Three.js',url:'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',type:'script'},
  {name:'Chart.js',url:'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js',type:'script'},
];

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let S = { projects:{}, activeId:null, cdns:[] };
const STARTER = TEMPLATES[1];

function loadState() {
  const raw = localStorage.getItem('codeforge_v3_combined');
  if (raw) { try { S = JSON.parse(raw); } catch(e){} }
  if (!S.cdns) S.cdns = [];
  if (!S.projects || !Object.keys(S.projects).length) {
    const id = 'p_' + Date.now();
    S.projects = { [id]: { name:'Demo – Particles', code:STARTER.code, snaps:[], updated:Date.now() } };
    S.activeId = id;
    saveState();
  }
  if (!S.activeId || !S.projects[S.activeId]) S.activeId = Object.keys(S.projects)[0];
}
function saveState() { localStorage.setItem('codeforge_v3_combined', JSON.stringify(S)); }
function activeProj() { return S.projects[S.activeId]; }

/* ═══════════════════════════════════════
   DRAWER / SIDEBAR NAV
═══════════════════════════════════════ */
const drawer = document.getElementById('drawer');
let activeDrawer = 'projects';

document.querySelectorAll('.sb-btn[data-drawer]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.drawer;
    if (activeDrawer === key && !drawer.classList.contains('closed')) {
      drawer.classList.add('closed');
      btn.classList.remove('on');
      activeDrawer = null;
    } else {
      drawer.classList.remove('closed');
      document.querySelectorAll('.sb-btn[data-drawer]').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      document.querySelectorAll('.d-section').forEach(s => s.classList.remove('active'));
      document.getElementById('dsec-' + key).classList.add('active');
      activeDrawer = key;
    }
    setTimeout(() => window.editor && window.editor.layout(), 310);
  });
});

/* ═══════════════════════════════════════
   SPLIT RESIZER
═══════════════════════════════════════ */
const resizer = document.getElementById('resizer'), edPane = document.getElementById('edPane'), ws = document.getElementById('ws');
let dragging = false;
resizer.addEventListener('mousedown', e => { dragging = true; resizer.classList.add('drag'); document.getElementById('sandbox').style.pointerEvents = 'none'; e.preventDefault(); });
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const rect = ws.getBoundingClientRect();
  let left = Math.max(200, Math.min(rect.width - 250, e.clientX - rect.left));
  edPane.style.width = left + 'px'; edPane.style.flex = 'none';
  window.editor && window.editor.layout();
});
document.addEventListener('mouseup', () => { if (dragging) { dragging = false; resizer.classList.remove('drag'); document.getElementById('sandbox').style.pointerEvents = 'auto'; }});

/* ═══════════════════════════════════════
   MONACO EDITOR
═══════════════════════════════════════ */
let mCode;
let autoRunTimer = null;
let syncLock = false;

function initMonaco() {
  require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
  require(['vs/editor/editor.main'], () => {
    const p = activeProj();
    mCode = monaco.editor.createModel(p.code, 'html');

    window.editor = monaco.editor.create(document.getElementById('monacoMount'), {
      model: mCode, theme:'vs-dark', automaticLayout:true, fontSize:13, fontFamily:"'JetBrains Mono',Consolas,monospace",
      tabSize:2, wordWrap:'on', quickSuggestions:{other:true,comments:false,strings:true}, formatOnType: true
    });

    window.editor.onDidChangeModelContent(() => {
      if (syncLock) return;
      activeProj().code = window.editor.getValue();
      activeProj().updated = Date.now();
      if (document.getElementById('chkAutoSave').checked) saveState();
      if (document.getElementById('chkAutoRun').checked) {
        clearTimeout(autoRunTimer);
        autoRunTimer = setTimeout(buildPreviewFull, 700);
      }
    });

    window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, buildPreviewFull);
    window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, saveSnap);
    window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP, openCP);

    buildPreviewFull();
  });
}

/* ═══════════════════════════════════════
   PREVIEW BUILDER & INJECTOR
═══════════════════════════════════════ */
let designMode = false;
let selectedPath = null;

function cdnTags() {
  return S.cdns.map(l => l.type === 'stylesheet'
    ? `<link rel="stylesheet" href="${l.url}" data-cfs-cdn="1">`
    : `<script src="${l.url}" data-cfs-cdn="1"><\/script>`
  ).join('\n');
}

function buildPreviewFull() {
  if (!mCode) return;
  let rawCode = mCode.getValue();
  const cdns = cdnTags();
  if (cdns) {
    if (rawCode.includes('</head>')) rawCode = rawCode.replace('</head>', cdns + '\n</head>');
    else rawCode = cdns + '\n' + rawCode;
  }

  const designStyle = `
  <style id="__cfs_design_style">
    [data-cfs-hover] { outline: 2px dashed rgba(91,106,240,0.5) !important; cursor: pointer !important; }
    [data-cfs-selected] { outline: 2px solid #5b6af0 !important; resize: both; overflow: auto; }
  </style>`;

  const designScript = `
  <script id="__cfs_design_script">
    let _sel = null;
    let _dragEl = null, _startX, _startY, _initX, _initY;

    function _path(el){if(!el||el===document.body)return 'body';const tag=el.tagName.toLowerCase();const par=el.parentElement;const sibs=par?Array.from(par.children).filter(c=>c.tagName===el.tagName):[];const idx=sibs.indexOf(el);const nth=sibs.length>1?':nth-of-type('+(idx+1)+')':'';return _path(par)+' > '+tag+nth;}
    
    function syncToParent() {
      let clone = document.documentElement.cloneNode(true);
      ['#__cfs_design_style', '#__cfs_design_script', '#__cfs_console_script'].forEach(sel => {
        const el = clone.querySelector(sel);
        if (el) el.remove();
      });
      clone.querySelectorAll('[data-cfs-cdn]').forEach(el => el.remove());
      clone.querySelectorAll('[data-cfs-hover], [data-cfs-selected]').forEach(el => {
        el.removeAttribute('data-cfs-hover');
        el.removeAttribute('data-cfs-selected');
      });
      window.parent.postMessage({ type: 'sync-full-code', code: '<!DOCTYPE html>\\n<html lang="en">\\n' + clone.innerHTML + '\\n</html>' }, '*');
    }

    let ro = new ResizeObserver(() => { if(_sel) syncToParent(); });

    document.addEventListener('mouseover', e => { const el=e.target; if(el===document.body||el===document.documentElement)return; el.setAttribute('data-cfs-hover','1'); e.stopPropagation(); }, true);
    document.addEventListener('mouseout', e => { e.target.removeAttribute('data-cfs-hover'); }, true);
    
    document.addEventListener('mousedown', e => {
      if (e.target.hasAttribute('data-cfs-selected')) {
         _dragEl = e.target; _startX = e.clientX; _startY = e.clientY;
         let cs = window.getComputedStyle(_dragEl);
         if (cs.position === 'static') _dragEl.style.position = 'relative';
         _initX = parseFloat(cs.left) || 0; _initY = parseFloat(cs.top) || 0;
      }
    });
    
    document.addEventListener('mousemove', e => {
       if (_dragEl) {
           _dragEl.style.left = (_initX + e.clientX - _startX) + 'px';
           _dragEl.style.top = (_initY + e.clientY - _startY) + 'px';
       }
    });

    document.addEventListener('mouseup', () => { if(_dragEl) { _dragEl = null; syncToParent(); } });

    document.addEventListener('click', e => {
      if(_dragEl) return;
      e.preventDefault(); e.stopPropagation();
      if(_sel) { _sel.removeAttribute('data-cfs-selected'); ro.unobserve(_sel); }
      _sel = e.target;
      if(_sel===document.body||_sel===document.documentElement){_sel=null; return;}
      
      _sel.setAttribute('data-cfs-selected','1');
      ro.observe(_sel);

      const cs=window.getComputedStyle(_sel);
      window.parent.postMessage({
        type:'select', path:_path(_sel), tag:_sel.tagName.toLowerCase(),
        text:_sel.childNodes.length===1&&_sel.childNodes[0].nodeType===3?_sel.textContent:null,
        innerHTML:_sel.innerHTML,
        styles:{color:cs.color, backgroundColor:cs.backgroundColor, fontSize:cs.fontSize, fontWeight:cs.fontWeight, padding:cs.padding, margin:cs.margin, borderRadius:cs.borderRadius, textAlign:cs.textAlign, display:cs.display, width:cs.width, height:cs.height, opacity:cs.opacity},
        attrs:{id:_sel.id||'',className:_sel.className||''}
      },'*');
    }, true);

    window.addEventListener('message', e => {
      if(!e.data || e.data.type !== 'apply-inline') return;
      if(_sel) {
         if (e.data.prop === 'innerHTML') _sel.innerHTML = e.data.val;
         else _sel.style[e.data.prop] = e.data.val;
         syncToParent();
      }
    });
  <\/script>`;

  let srcdoc = rawCode;
  if (designMode) {
    if (srcdoc.includes('</head>')) srcdoc = srcdoc.replace('</head>', designStyle + '\n</head>');
    else srcdoc = designStyle + srcdoc;
    if (srcdoc.includes('</body>')) srcdoc = srcdoc.replace('</body>', designScript + '\n</body>');
    else srcdoc += designScript;
  }

  const consoleScript = `<script id="__cfs_console_script">
    (function(){
      var _l=console.log,_w=console.warn,_e=console.error;
      function _s(t,a){window.parent.postMessage({type:'log',lt:t,msg:a.map(x=>x===null?'null':x===undefined?'undefined':typeof x==='object'?JSON.stringify(x):String(x)).join(' ')},'*');}
      console.log=function(){_l.apply(this,arguments);_s('log',[].slice.call(arguments));};
      console.warn=function(){_w.apply(this,arguments);_s('warn',[].slice.call(arguments));};
      console.error=function(){_e.apply(this,arguments);_s('error',[].slice.call(arguments));};
      window.onerror=function(m,u,l){_s('error',[m+' (line '+l+')']);};
    })();
  <\/script>`;
  
  if (srcdoc.includes('<head>')) srcdoc = srcdoc.replace('<head>', '<head>\n' + consoleScript);

  document.getElementById('sandbox').srcdoc = srcdoc;
}

/* ═══════════════════════════════════════
   MESSAGE BUS & EXPORTS (SCREENSHOT / RECORDING)
═══════════════════════════════════════ */
window.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.type === 'log') addLog(e.data.lt, e.data.msg);
  if (e.data.type === 'select') handleElementSelect(e.data);
  if (e.data.type === 'sync-full-code') {
    syncLock = true;
    mCode.setValue(e.data.code);
    activeProj().code = e.data.code;
    if (document.getElementById('chkAutoSave').checked) saveState();
    syncLock = false;
  }
});

// Screenshot Download Feature via html2canvas
document.getElementById('btnScreenshot').addEventListener('click', async () => {
  const iframe = document.getElementById('sandbox');
  try {
    const canvas = await html2canvas(iframe.contentDocument.body, {scale: 2, useCORS: true});
    const link = document.createElement('a');
    link.download = (activeProj().name || 'output') + '_screenshot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    addLog('log', 'Screenshot downloaded successfully.');
  } catch (err) {
    addLog('error', 'Could not capture screenshot: ' + err.message);
  }
});

// Video Recording Feature via MediaRecorder API
let mediaRecorder = null;
let recordedChunks = [];

document.getElementById('btnRecord').addEventListener('click', async () => {
  const btn = document.getElementById('btnRecord');
  const iframe = document.getElementById('sandbox');
  
  if (!mediaRecorder || mediaRecorder.state === 'inactive') {
    try {
      const iframeWin = iframe.contentWindow;
      let stream = null;
      
      const canvasEl = iframeWin.document.querySelector('canvas');
      if (canvasEl && canvasEl.captureStream) {
        stream = canvasEl.captureStream(30);
      } else if (iframe.captureStream) {
        stream = iframe.captureStream(30);
      } else {
        alert('Video recording requires an active HTML5 Canvas or browser stream support.');
        return;
      }

      const mimeTypes = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'];
      const mimeType = mimeTypes.find(type => MediaRecorder.isTypeSupported(type)) || '';

      recordedChunks = [];
      mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

      mediaRecorder.ondataavailable = e => { if (e.data.size > 0) recordedChunks.push(e.data); };
      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = (activeProj().name || 'output') + '_recording.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
        addLog('log', 'Video recording downloaded successfully.');
      };

      mediaRecorder.start();
      btn.classList.add('recording');
      btn.innerHTML = `<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"/></svg> Stop`;
      addLog('log', 'Video recording started...');
    } catch(err) {
      addLog('error', 'Recording failed: ' + err.message);
    }
  } else {
    mediaRecorder.stop();
    btn.classList.remove('recording');
    btn.innerHTML = `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> Record`;
  }
});

/* ═══════════════════════════════════════
   ELEMENT SELECTION + PROPERTIES PANEL
═══════════════════════════════════════ */
function handleElementSelect(data) {
  selectedPath = data.path;
  const body = document.getElementById('propsBody');
  const s = data.styles;

  body.innerHTML = `
    <div class="tag-chip">&lt;${data.tag}&gt;</div>
    ${data.path !== 'body' ? `<div style="font-size:0.65rem;color:var(--txt3);margin-bottom:12px;word-break:break-all;">${data.path}</div>` : ''}
    ${data.innerHTML !== null ? `
    <div class="prop-group">
      <div class="prop-label">Inner HTML</div>
      <textarea id="pp-html" style="width:100%;padding:6px 8px;background:var(--bg3);border:1px solid var(--border);border-radius:6px;color:var(--txt);font-size:0.72rem;resize:vertical;min-height:60px;font-family:'JetBrains Mono',monospace;">${escHtml(data.innerHTML)}</textarea>
      <button class="small-btn" style="margin-top:5px;width:100%;" id="pp-html-apply">Apply HTML</button>
    </div>` : ''}
    <div class="prop-group">
      <div class="prop-label">Colors</div>
      <div class="prop-row"><span class="prop-name">Text Color</span><input type="color" class="prop-color" id="pp-color" value="${rgbToHex(s.color)}"></div>
      <div class="prop-row"><span class="prop-name">Background</span><input type="color" class="prop-color" id="pp-bg" value="${rgbToHex(s.backgroundColor)}"></div>
    </div>
    <div class="prop-group">
      <div class="prop-label">Spacing &amp; Layout</div>
      <div class="prop-row"><span class="prop-name">Font Size</span><input type="text" class="prop-input" id="pp-fs" value="${s.fontSize}"></div>
      <div class="prop-row"><span class="prop-name">Padding</span><input type="text" class="prop-input" id="pp-pad" value="${s.padding}"></div>
      <div class="prop-row"><span class="prop-name">Radius</span><input type="text" class="prop-input" id="pp-rad" value="${s.borderRadius}"></div>
    </div>
  `;

  function applyInline(prop, val) {
    document.getElementById('sandbox').contentWindow.postMessage({ type: 'apply-inline', prop, val }, '*');
  }

  const ppHtml = document.getElementById('pp-html-apply');
  if (ppHtml) ppHtml.onclick = () => applyInline('innerHTML', document.getElementById('pp-html').value);
  document.getElementById('pp-color').oninput = e => applyInline('color', e.target.value);
  document.getElementById('pp-bg').oninput = e => applyInline('backgroundColor', e.target.value);
  document.getElementById('pp-fs').onchange = e => applyInline('fontSize', e.target.value);
  document.getElementById('pp-pad').onchange = e => applyInline('padding', e.target.value);
  document.getElementById('pp-rad').onchange = e => applyInline('borderRadius', e.target.value);
}

function rgbToHex(rgb) {
  if (!rgb || rgb === 'transparent' || !rgb.startsWith('rgb')) return '#000000';
  const parts = rgb.match(/\d+/g);
  if (!parts || parts.length < 3) return '#000000';
  return '#' + parts.slice(0,3).map(n => parseInt(n).toString(16).padStart(2,'0')).join('');
}
function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ═══════════════════════════════════════
   DESIGN MODE TOGGLE
═══════════════════════════════════════ */
document.getElementById('btnDesignMode').addEventListener('click', function() {
  designMode = !designMode;
  this.textContent = '🎨 Design: ' + (designMode ? 'ON' : 'OFF');
  this.classList.toggle('active-state', designMode);
  document.getElementById('previewFrame').classList.toggle('design-on', designMode);
  const pp = document.getElementById('propsPanel');
  if (designMode) pp.classList.remove('closed');
  else { pp.classList.add('closed'); selectedPath = null; }
  buildPreviewFull();
  setTimeout(() => window.editor && window.editor.layout(), 310);
});

document.getElementById('btnPropsToggle').addEventListener('click', () => {
  document.getElementById('propsPanel').classList.toggle('closed');
  setTimeout(() => window.editor && window.editor.layout(), 310);
});

/* ═══════════════════════════════════════
   CONSOLE
═══════════════════════════════════════ */
const consolePanel = document.getElementById('consolePanel');
const consoleBody  = document.getElementById('consoleBody');

document.getElementById('consoleHdr').addEventListener('click', e => {
  if (e.target.closest('#btnClearLog')) return;
  consolePanel.classList.toggle('closed');
  document.getElementById('consoleChev').textContent = consolePanel.classList.contains('closed') ? '▲' : '▼';
  setTimeout(() => window.editor && window.editor.layout(), 310);
});
document.getElementById('btnClearLog').addEventListener('click', () => { consoleBody.innerHTML = ''; });

function addLog(type, msg) {
  const el = document.createElement('div');
  el.className = 'log-line ' + type;
  const t = new Date().toLocaleTimeString().split(' ')[0];
  el.innerHTML = `<span style="color:var(--txt3);margin-right:6px;">[${t}]</span>${escHtml(msg)}`;
  consoleBody.appendChild(el);
  consoleBody.scrollTop = consoleBody.scrollHeight;
}

/* ═══════════════════════════════════════
   RUN / FORMAT
═══════════════════════════════════════ */
document.getElementById('btnRun').addEventListener('click', () => { buildPreviewFull(); addLog('log','Ran manually.'); });
document.getElementById('btnFmt').addEventListener('click', () => {
  window.editor && window.editor.getAction('editor.action.formatDocument').run();
  addLog('log', 'Formatted.');
});

/* ═══════════════════════════════════════
   PROJECTS & TEMPLATES
═══════════════════════════════════════ */
function renderProjects() {
  const list = document.getElementById('projList');
  list.innerHTML = '';
  const entries = Object.entries(S.projects);
  entries.forEach(([id, p]) => {
    const el = document.createElement('div');
    el.className = 'proj-item' + (id === S.activeId ? ' on' : '');
    el.innerHTML = `
      <div class="proj-head">
        <div class="proj-name">${escHtml(p.name)}</div>
        ${entries.length > 1 ? `<button class="proj-del" title="Delete Project">✕</button>` : ''}
      </div>
      <div class="proj-date">${new Date(p.updated).toLocaleDateString()}</div>
    `;
    el.addEventListener('click', e => {
      if (e.target.closest('.proj-del')) {
        delete S.projects[id];
        if (S.activeId === id) S.activeId = Object.keys(S.projects)[0];
        saveState();
        loadProj(S.activeId);
        return;
      }
      loadProj(id);
    });
    list.appendChild(el);
  });
}

function loadProj(id) {
  S.activeId = id; saveState();
  const p = S.projects[id];
  if (mCode) mCode.setValue(p.code);
  renderProjects(); renderSnaps(); buildPreviewFull();
}

let modalCb = null;
function showModal(title, desc, defaultVal, label, cb) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalInput').value = defaultVal;
  document.getElementById('modalOk').textContent = label;
  document.getElementById('modalBd').classList.add('open');
  modalCb = cb;
}
document.getElementById('modalCancel').onclick = () => document.getElementById('modalBd').classList.remove('open');
document.getElementById('modalOk').onclick = () => {
  const val = document.getElementById('modalInput').value.trim();
  document.getElementById('modalBd').classList.remove('open');
  if (modalCb) modalCb(val);
};
document.getElementById('btnNewProj').addEventListener('click', () => {
  showModal('New Project','Name your project.','Untitled Project','Create', name => {
    const id = 'p_' + Date.now();
    S.projects[id] = { name: name||'New Project', code:TEMPLATES[0].code, snaps:[], updated:Date.now() };
    loadProj(id);
  });
});

function renderTemplates() {
  const grid = document.getElementById('tplGrid');
  grid.innerHTML = TEMPLATES.map(t => `
    <div class="tpl-card" onclick="applyTemplate('${t.id}')">
      <div class="tpl-name">${t.name}</div>
      <div class="tpl-desc">${t.desc}</div>
    </div>
  `).join('');
}
window.applyTemplate = function(id) {
  const t = TEMPLATES.find(x => x.id === id);
  const pid = 'p_' + Date.now();
  S.projects[pid] = { name: t.name, code: t.code, snaps: [], updated: Date.now() };
  loadProj(pid);
};

/* ═══════════════════════════════════════
   CDN & SNAPSHOTS
═══════════════════════════════════════ */
function renderCdnList() {
  document.getElementById('cdnList').innerHTML = S.cdns.map((c, i) => `
    <div class="cdn-item-row">
      <span class="cdn-badge ${c.type === 'stylesheet' ? 'css' : 'js'}">${c.type === 'stylesheet' ? 'CSS' : 'JS'}</span>
      <span class="cdn-url">${escHtml(c.url)}</span>
      <button class="cdn-rm" onclick="removeCdn(${i})">✕</button>
    </div>
  `).join('') || '<div class="empty-state">No CDNs added.</div>';
}
function renderPresets() {
  document.getElementById('presetWrap').innerHTML = CDN_PRESETS.map(p => `
    <button class="preset-chip" onclick="addPreset('${p.url}','${p.type}')">${p.name}</button>
  `).join('');
}
window.addPreset = function(url, type) {
  if (S.cdns.some(c => c.url === url)) return;
  S.cdns.push({url, type}); saveState(); renderCdnList(); buildPreviewFull();
};
window.removeCdn = function(i) { S.cdns.splice(i,1); saveState(); renderCdnList(); buildPreviewFull(); };
document.getElementById('btnAddCdn').addEventListener('click', () => {
  const url = document.getElementById('cdnInput').value.trim();
  if(!url) return;
  S.cdns.push({url, type: url.endsWith('.css')?'stylesheet':'script'});
  saveState(); renderCdnList(); buildPreviewFull();
  document.getElementById('cdnInput').value = '';
});

function renderSnaps() {
  const p = activeProj();
  document.getElementById('snapList').innerHTML = (p.snaps||[]).map((sn, i) => `
    <div class="snap-item">
      <div>
        <div class="snap-meta">Version ${i+1}</div>
        <div class="snap-time">${new Date(sn.ts).toLocaleTimeString()}</div>
      </div>
      <button class="snap-restore" onclick="restoreSnap(${i})">Restore</button>
    </div>
  `).join('') || '<div class="empty-state">No snapshots.</div>';
}
function saveSnap() {
  const p = activeProj();
  if (!p.snaps) p.snaps = [];
  p.snaps.push({ ts:Date.now(), code:mCode.getValue() });
  saveState(); renderSnaps();
  addLog('log', 'Snapshot saved.');
}
document.getElementById('btnNewSnap').addEventListener('click', saveSnap);
window.restoreSnap = function(i) {
  mCode.setValue(activeProj().snaps[i].code);
  buildPreviewFull();
  addLog('log', `Restored Version ${i+1}`);
};

/* ═══════════════════════════════════════
   EXPORT, IMPORT & DEVICE CONTROLS
═══════════════════════════════════════ */
document.getElementById('btnExportHTML').addEventListener('click', () => {
  const blob = new Blob([activeProj().code], {type:'text/html'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = activeProj().name + '.html'; a.click();
});
document.getElementById('btnExportZip').addEventListener('click', () => {
  const zip = new JSZip(); zip.file('index.html', activeProj().code);
  zip.generateAsync({type:'blob'}).then(b => {
    const a = document.createElement('a'); a.href = URL.createObjectURL(b);
    a.download = activeProj().name + '.zip'; a.click();
  });
});

document.getElementById('btnImport').addEventListener('click', () => {
  document.getElementById('importFile').click();
});
document.getElementById('importFile').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const id = 'p_' + Date.now();
    const cleanName = file.name.replace(/\.[^/.]+$/, '');
    S.projects[id] = { name: cleanName, code: ev.target.result, snaps: [], updated: Date.now() };
    loadProj(id);
    addLog('log', `Imported "${file.name}".`);
  };
  reader.readAsText(file);
  e.target.value = '';
});

document.getElementById('selDevice').addEventListener('change', e => {
  const frame = document.getElementById('previewFrame');
  frame.classList.remove('mob', 'tab', 'lap', 'landscape');
  if (e.target.value !== 'full') frame.classList.add(e.target.value);
});

document.getElementById('btnOrientation').addEventListener('click', () => {
  const frame = document.getElementById('previewFrame');
  if (document.getElementById('selDevice').value === 'full') return;
  frame.classList.toggle('landscape');
});

document.getElementById('btnFullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) document.getElementById('prevPane').requestFullscreen();
  else document.exitFullscreen();
});

document.getElementById('btnTheme').addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  if (window.monaco) {
    monaco.editor.setTheme(isLight ? 'vs' : 'vs-dark');
  }
});

/* ═══════════════════════════════════════
   COMMAND PALETTE
═══════════════════════════════════════ */
const cpOverlay = document.getElementById('cpOverlay');
const cpInput = document.getElementById('cpInput');
const cpResults = document.getElementById('cpResults');
const COMMANDS = [
  {label:'Run Code', desc:'Build preview', action:buildPreviewFull},
  {label:'Format Document', desc:'Auto-indent code in editor', action:()=>document.getElementById('btnFmt').click()},
  {label:'Toggle Design Mode', desc:'Inspect & drag preview elements', action:()=>document.getElementById('btnDesignMode').click()},
  {label:'Take PNG Screenshot', desc:'Capture output as image', action:()=>document.getElementById('btnScreenshot').click()},
  {label:'Record Video', desc:'Record canvas/frame animation', action:()=>document.getElementById('btnRecord').click()},
  {label:'Save Snapshot', desc:'Create restore point', action:saveSnap},
  {label:'Toggle Light/Dark Theme', desc:'Switch UI and editor theme', action:()=>document.getElementById('btnTheme').click()}
];

function openCP() { cpOverlay.classList.add('open'); cpInput.value = ''; cpInput.focus(); renderCP(); }
function closeCP() { cpOverlay.classList.remove('open'); }
function renderCP(filter = '') {
  const q = filter.toLowerCase();
  const filtered = COMMANDS.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
  cpResults.innerHTML = filtered.map(c => {
    const idx = COMMANDS.indexOf(c);
    return `<div class="cp-item" onclick="runCmd(${idx})"><div><div class="cp-label">${c.label}</div><div class="cp-desc">${c.desc}</div></div></div>`;
  }).join('') || '<div class="empty-state">No matching commands.</div>';
}
cpInput.addEventListener('input', e => renderCP(e.target.value));
window.runCmd = function(i) { closeCP(); COMMANDS[i].action(); };
document.getElementById('btnCP').addEventListener('click', openCP);
cpOverlay.addEventListener('click', e => { if(e.target === cpOverlay) closeCP(); });

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
    e.preventDefault();
    cpOverlay.classList.contains('open') ? closeCP() : openCP();
  } else if (e.key === 'Escape') {
    closeCP();
    document.getElementById('modalBd').classList.remove('open');
  }
});

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  loadState(); renderProjects(); renderSnaps(); renderTemplates(); renderCdnList(); renderPresets(); initMonaco();
});
