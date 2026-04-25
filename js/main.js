/* ═══════════════════════════════════
   PIXEL CHARACTER RENDERER
═══════════════════════════════════ */
const CHARS = {
  idle(f){
    const bob = f%2===0?0:1;
    return `<svg width="48" height="72" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg" image-rendering="pixelate">
      <rect x="2" y="${bob}" width="8" height="1" fill="#3d1a00"/>
      <rect x="2" y="${1+bob}" width="8" height="5" fill="#f5c89a"/>
      <rect x="3" y="${3+bob}" width="2" height="1" fill="#1a1209"/>
      <rect x="7" y="${3+bob}" width="2" height="1" fill="#1a1209"/>
      <rect x="4" y="${5+bob}" width="4" height="1" fill="#d47060"/>
      <rect x="2" y="${6+bob}" width="8" height="5" fill="#e8892a"/>
      <rect x="1" y="${6+bob}" width="2" height="4" fill="#e8892a"/>
      <rect x="9" y="${6+bob}" width="2" height="4" fill="#e8892a"/>
      <rect x="2" y="${11+bob}" width="4" height="6" fill="#2d4a7a"/>
      <rect x="6" y="${11+bob}" width="4" height="6" fill="#2d4a7a"/>
      <rect x="1" y="${16+bob}" width="4" height="2" fill="#3d1a00"/>
      <rect x="7" y="${16+bob}" width="4" height="2" fill="#3d1a00"/>
    </svg>`;
  },
  eating(f){
    const chew = f%4<2;
    return `<svg width="48" height="72" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg" image-rendering="pixelate">
      <rect x="2" y="0" width="8" height="1" fill="#3d1a00"/>
      <rect x="2" y="1" width="8" height="5" fill="#f5c89a"/>
      <rect x="3" y="3" width="2" height="1" fill="#1a1209"/>
      <rect x="7" y="3" width="2" height="1" fill="#1a1209"/>
      <rect x="${chew?4:5}" y="5" width="${chew?4:2}" height="1" fill="#d47060"/>
      <rect x="2" y="6" width="8" height="5" fill="#e8892a"/>
      <rect x="1" y="6" width="2" height="4" fill="#e8892a"/>
      <!-- arm up with food -->
      <rect x="9" y="4" width="3" height="2" fill="#e8892a"/>
      <rect x="11" y="2" width="3" height="3" fill="#f4e234"/>
      <rect x="11" y="1" width="3" height="2" fill="#e8c030"/>
      <rect x="2" y="11" width="4" height="6" fill="#2d4a7a"/>
      <rect x="6" y="11" width="4" height="6" fill="#2d4a7a"/>
      <rect x="1" y="16" width="4" height="2" fill="#3d1a00"/>
      <rect x="7" y="16" width="4" height="2" fill="#3d1a00"/>
    </svg>`;
  },
  watering(f){
    const pour = f%3;
    return `<svg width="72" height="72" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" image-rendering="pixelate">
      <rect x="2" y="0" width="8" height="1" fill="#3d1a00"/>
      <rect x="2" y="1" width="8" height="5" fill="#f5c89a"/>
      <rect x="3" y="3" width="2" height="1" fill="#1a1209"/>
      <rect x="7" y="3" width="2" height="1" fill="#1a1209"/>
      <rect x="4" y="5" width="4" height="1" fill="#d47060"/>
      <rect x="2" y="6" width="8" height="5" fill="#6aaa3c"/>
      <rect x="1" y="6" width="2" height="4" fill="#6aaa3c"/>
      <!-- arm with can -->
      <rect x="9" y="5" width="3" height="2" fill="#6aaa3c"/>
      <rect x="11" y="3" width="4" height="4" fill="#5b9bd5"/>
      <rect x="14" y="4" width="2" height="1" fill="#4a8bc5"/>
      <!-- water drops -->
      ${pour>0?`<rect x="${13+pour}" y="7" width="1" height="2" fill="#5b9bd5" opacity=".7"/>`:''}
      ${pour>1?`<rect x="${12}" y="8" width="1" height="2" fill="#5b9bd5" opacity=".5"/>`:''}
      <!-- plant -->
      <rect x="15" y="12" width="2" height="5" fill="#5aad4e"/>
      <rect x="13" y="10" width="4" height="3" fill="#6aaa3c"/>
      <rect x="12" y="11" width="3" height="2" fill="#7dc96e"/>
      <rect x="2" y="11" width="4" height="6" fill="#2d4a7a"/>
      <rect x="6" y="11" width="4" height="6" fill="#2d4a7a"/>
      <rect x="1" y="16" width="4" height="2" fill="#3d1a00"/>
      <rect x="7" y="16" width="4" height="2" fill="#3d1a00"/>
    </svg>`;
  },
  sightseeing(f){
    const look = f%6<3;
    return `<svg width="56" height="72" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg" image-rendering="pixelate">
      <!-- hat -->
      <rect x="2" y="0" width="10" height="2" fill="#f4a835"/>
      <rect x="3" y="2" width="8" height="1" fill="#e8892a"/>
      <rect x="2" y="1" width="10" height="1" fill="#f4a835"/>
      <rect x="3" y="3" width="8" height="5" fill="#f5c89a"/>
      <rect x="${look?4:5}" y="5" width="2" height="1" fill="#1a1209"/>
      <rect x="${look?8:7}" y="5" width="2" height="1" fill="#1a1209"/>
      <rect x="5" y="7" width="4" height="1" fill="#d47060"/>
      <rect x="3" y="8" width="8" height="5" fill="#c04870"/>
      <rect x="2" y="8" width="2" height="4" fill="#c04870"/>
      <!-- arm with camera -->
      <rect x="10" y="8" width="4" height="2" fill="#c04870"/>
      <rect x="12" y="6" width="4" height="4" fill="#2c2416"/>
      <rect x="13" y="5" width="2" height="2" fill="#1a1209"/>
      <rect x="13" y="7" width="1" height="1" fill="#5b9bd5"/>
      <rect x="3" y="13" width="4" height="4" fill="#2d4a7a"/>
      <rect x="7" y="13" width="4" height="4" fill="#2d4a7a"/>
      <rect x="2" y="16" width="4" height="2" fill="#3d1a00"/>
      <rect x="7" y="16" width="4" height="2" fill="#3d1a00"/>
    </svg>`;
  },
  sleeping(f){
    const zz = f%8;
    return `<svg width="80" height="56" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" image-rendering="pixelate">
      <!-- sleeping on ground -->
      <rect x="0" y="8" width="16" height="4" fill="#2d4a7a"/>
      <rect x="0" y="10" width="16" height="2" fill="#1a2d4a"/>
      <rect x="1" y="6" width="8" height="5" fill="#f5c89a"/>
      <rect x="2" y="7" width="2" height="1" fill="#1a1209"/>
      <rect x="5" y="7" width="2" height="1" fill="#1a1209"/>
      <rect x="3" y="9" width="3" height="1" fill="#d47060"/>
      <rect x="1" y="5" width="8" height="2" fill="#3d1a00"/>
      ${zz>4?`<rect x="9" y="2" width="2" height="1" fill="#5b9bd5" opacity=".8"/>
      <rect x="11" y="0" width="2" height="1" fill="#5b9bd5" opacity=".5"/>`:''}
    </svg>`;
  }
};

const ACTIONS = ['idle','idle','idle','eating','watering','sightseeing','sleeping'];
let charAction = 'idle', charFrame = 0, charActionTimer = 0;

function tickChar(){
  charFrame++;
  charActionTimer++;
  if(charActionTimer > 120){
    charAction = ACTIONS[Math.floor(Math.random()*ACTIONS.length)];
    charActionTimer = 0;
  }
  const el = document.getElementById('sb-char');
  if(el && CHARS[charAction]) el.innerHTML = CHARS[charAction](charFrame);
}
setInterval(tickChar, 200);

/* ═══════════════════════════════════
   TAPE DESIGNS (SVG patterns)
═══════════════════════════════════ */
const TAPES = [
  {name:'clear',  fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(220,210,180,.6)" rx="2"/><rect width="${w}" height="1" y="${(h-1)/2}" fill="rgba(255,255,255,.3)"/>`},
  {name:'stripe', fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(180,210,240,.7)" rx="2"/>${Array.from({length:Math.floor(w/6)},(_,i)=>`<rect x="${i*6}" width="3" height="${h}" fill="rgba(255,255,255,.25)"/>`).join('')}`},
  {name:'dots',   fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(240,180,200,.7)" rx="2"/>${Array.from({length:8},(_,i)=>`<circle cx="${5+i*7}" cy="${h/2}" r="2" fill="rgba(255,255,255,.5)"/>`).join('')}`},
  {name:'star',   fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(255,230,100,.75)" rx="2"/>${Array.from({length:6},(_,i)=>`<text x="${4+i*9}" y="${h-2}" font-size="7" fill="rgba(200,160,0,.7)">★</text>`).join('')}`},
  {name:'check',  fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(160,220,170,.7)" rx="2"/>${Array.from({length:Math.floor(w/6)},(_,i)=>`<rect x="${i*6}" width="3" height="${Math.floor(h/2)}" fill="rgba(255,255,255,.3)"/>`).join('')}`},
  {name:'washi',  fn:(w,h)=>`<rect width="${w}" height="${h}" fill="rgba(200,170,230,.7)" rx="2"/><path d="M0,${h/2} Q${w/4},2 ${w/2},${h/2} Q${3*w/4},${h-2} ${w},${h/2}" stroke="rgba(255,255,255,.5)" stroke-width="1.5" fill="none"/>`},
];

function tapeSVG(idx,w=60,h=20){
  const t = TAPES[idx%TAPES.length];
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">${t.fn(w,h)}</svg>`;
}

/* ═══════════════════════════════════
   DATA & AUTH
═══════════════════════════════════ */
let currentUser = null;
let DB = {}; // {username:{hash,data:{entries,goals,photos,theme,tapeChoices}}}

function simpleHash(s){let h=0;for(const c of s)h=(Math.imul(31,h)+c.charCodeAt(0))|0;return h.toString(36);}

function loadDB(){try{DB=JSON.parse(localStorage.getItem('cloud_db_v2')||'{}');}catch{DB={};}}
function saveDB(){try{localStorage.setItem('cloud_db_v2',JSON.stringify(DB));}catch{}}
function loadSession(){try{const u=localStorage.getItem('cloud_session');if(u&&DB[u])return u;}catch{}return null;}
function saveSession(u){try{localStorage.setItem('cloud_session',u||'');}catch{}}

function userData(){return currentUser?DB[currentUser].data:null;}

/* ═══════════════════════════════════
   AUTH FUNCTIONS
═══════════════════════════════════ */
function openAuth(mode){
  document.getElementById('auth-overlay').classList.add('open');
  switchAuthTab(mode);
}
function closeAuth(){document.getElementById('auth-overlay').classList.remove('open');}
function switchAuthTab(t){
  document.getElementById('auth-signup-form').style.display=t==='signup'?'block':'none';
  document.getElementById('auth-login-form').style.display=t==='login'?'block':'none';
  document.getElementById('tab-signup-btn').classList.toggle('active',t==='signup');
  document.getElementById('tab-login-btn').classList.toggle('active',t==='login');
  document.getElementById('auth-title-txt').textContent=t==='signup'?'☁ Create Account':'☁ Welcome Back';
}
function doSignup(){
  const name=document.getElementById('su-name').value.trim().toLowerCase();
  const pass=document.getElementById('su-pass').value;
  const pass2=document.getElementById('su-pass2').value;
  const err=document.getElementById('su-err');
  err.classList.remove('show');
  if(!name||name.length<2){showErr(err,'Username must be 2+ chars.');return;}
  if(DB[name]){showErr(err,'Username already taken.');return;}
  if(pass.length<4){showErr(err,'Password must be 4+ chars.');return;}
  if(pass!==pass2){showErr(err,"Passwords don't match.");return;}
  DB[name]={hash:simpleHash(pass),data:{entries:[],goals:[{text:'Read for 20 min',done:false},{text:'Go for a walk',done:false},{text:'Write in journal',done:false}],photos:[],theme:'ghibli',tapeChoices:{}}};
  saveDB();
  loginUser(name);
}
function doLogin(){
  const name=document.getElementById('li-name').value.trim().toLowerCase();
  const pass=document.getElementById('li-pass').value;
  const err=document.getElementById('li-err');
  err.classList.remove('show');
  if(!DB[name]){showErr(err,'Account not found.');return;}
  if(DB[name].hash!==simpleHash(pass)){showErr(err,'Incorrect password.');return;}
  loginUser(name);
}
function showErr(el,msg){el.textContent=msg;el.classList.add('show');}
function loginUser(name){
  currentUser=name;
  saveSession(name);
  closeAuth();
  enterApp();
}
function logout(){
  currentUser=null;
  saveSession(null);
  goToLanding();
}

/* ═══════════════════════════════════
   NAVIGATION
═══════════════════════════════════ */
function fadeTransition(cb){
  const t=document.getElementById('trans');
  t.classList.add('in');
  setTimeout(()=>{cb();setTimeout(()=>t.classList.remove('in'),400);},400);
}
function enterApp(){
  fadeTransition(()=>{
    document.getElementById('screen-landing').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');
    initApp();
  });
}
function goToLanding(){
  fadeTransition(()=>{
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-landing').classList.add('active');
    drawFlowers();
  });
}

/* ═══════════════════════════════════
   APP INIT
═══════════════════════════════════ */
const TIPS=[
  {icon:'🥤',text:'Drink 8 glasses of water. Hydration lifts focus and mood.'},
  {icon:'🚶',text:'10-min walk outside. Fresh air resets your mind.'},
  {icon:'😴',text:'7-9 hrs of sleep. That\'s when your brain consolidates memories.'},
  {icon:'🍎',text:'Eat a piece of fruit. Natural sugars fuel your brain gently.'},
  {icon:'🧘',text:'Try 3 deep breaths: in 4, hold 4, out 6.'},
  {icon:'📵',text:'30 min phone-free. Your focus will thank you.'},
  {icon:'🌿',text:'Touch some grass. Nature reduces cortisol levels.'},
  {icon:'💪',text:'Stretch for 5 min. Sitting compresses your spine — release it.'},
  {icon:'☀️',text:'Get morning sunlight to set your circadian rhythm.'},
  {icon:'🎵',text:'Music you love releases dopamine and lifts your mood.'},
];

let calDate=new Date(), currentMoodVal=null, lbSlotIndex=null;

function initApp(){
  const d=userData();
  if(!d)return;
  document.getElementById('sb-user-name').textContent='Hi, '+currentUser+'!';
  document.getElementById('wd-date').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  const tip=TIPS[Math.floor(Math.random()*TIPS.length)];
  document.getElementById('tip-icon').textContent=tip.icon;
  document.getElementById('tip-txt').textContent=tip.text;
  setTheme(d.theme||'ghibli',true);
  renderGoals();renderCalendar();renderPolaroids();fetchWeather();
  charAction='idle';charFrame=0;
}

/* ═══════════════════════════════════
   THEME
═══════════════════════════════════ */
function setTheme(t,silent){
  document.body.className=t==='ghibli'?'':'theme-'+t;
  document.querySelectorAll('.theme-dot').forEach(d=>d.classList.toggle('active',d.dataset.theme===t));
  if(!silent&&userData()){userData().theme=t;saveDB();}
}

/* ═══════════════════════════════════
   WEATHER
═══════════════════════════════════ */
function fetchWeather(){
  if(!navigator.geolocation){setWxFallback();return;}
  navigator.geolocation.getCurrentPosition(pos=>{
    const {latitude:la,longitude:lo}=pos.coords;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${la}&longitude=${lo}&current_weather=true&temperature_unit=fahrenheit`)
      .then(r=>r.json()).then(d=>{
        const w=d.current_weather;
        document.getElementById('wx-icon').textContent=wxIcon(w.weathercode);
        document.getElementById('wx-temp').textContent=Math.round(w.temperature)+'°F';
        document.getElementById('wx-desc').textContent=wxDesc(w.weathercode);
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${la}&lon=${lo}&format=json`)
          .then(r=>r.json()).then(g=>{
            document.getElementById('wx-loc').textContent=g.address?.city||g.address?.town||'Your area';
          }).catch(()=>{});
      }).catch(setWxFallback);
  },setWxFallback);
}
function wxIcon(c){if(c===0)return'☀️';if(c<=2)return'⛅';if(c===3)return'☁️';if(c<=49)return'🌫';if(c<=59)return'🌦';if(c<=69)return'🌧';if(c<=79)return'❄️';if(c<=99)return'⛈';return'🌤';}
function wxDesc(c){if(c===0)return'Clear sky';if(c<=2)return'Partly cloudy';if(c===3)return'Overcast';if(c<=49)return'Foggy';if(c<=59)return'Drizzle';if(c<=69)return'Rainy';if(c<=79)return'Snowy';if(c<=99)return'Thunderstorm';return'Cloudy';}
function setWxFallback(){document.getElementById('wx-icon').textContent='🌤';document.getElementById('wx-temp').textContent='—°';document.getElementById('wx-desc').textContent='Unavailable';document.getElementById('wx-loc').textContent='Enable location';}

/* ═══════════════════════════════════
   GOALS
═══════════════════════════════════ */
function renderGoals(){
  const d=userData();if(!d)return;
  document.getElementById('goals-list').innerHTML=d.goals.map((g,i)=>`
    <div class="goal-item ${g.done?'done':''}" onclick="toggleGoal(${i})">
      <div class="goal-check">${g.done?'✓':''}</div>
      <span class="goal-txt">${g.text.replace(/</g,'&lt;')}</span>
    </div>`).join('');
}
function toggleGoal(i){const d=userData();d.goals[i].done=!d.goals[i].done;saveDB();renderGoals();}
function addGoal(){const t=prompt('New goal:');if(t&&t.trim()){userData().goals.push({text:t.trim(),done:false});saveDB();renderGoals();}}

/* ═══════════════════════════════════
   TABS
═══════════════════════════════════ */
function showTab(t){
  ['home','write','entries'].forEach(x=>{
    document.getElementById('tab-'+x).style.display=x===t?'block':'none';
  });
  document.querySelectorAll('.nav-tab').forEach((el,i)=>el.classList.toggle('active',['home','write','entries'][i]===t));
  if(t==='entries')renderEntriesWall();
}

/* ═══════════════════════════════════
   JOURNAL ENTRIES
═══════════════════════════════════ */
const MOOD_EMO={5:'😄',4:'🙂',3:'😐',2:'😔',1:'😞'};
function pickMood(btn){
  document.querySelectorAll('.mood-mb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');currentMoodVal=parseInt(btn.dataset.m);
}
function ins(t){
  const ta=document.getElementById('write-body');
  const s=ta.selectionStart;ta.value=ta.value.slice(0,s)+t+ta.value.slice(ta.selectionEnd);
  ta.selectionStart=ta.selectionEnd=s+t.length;ta.focus();
}
function saveEntry(){
  const d=userData();if(!d)return;
  const title=document.getElementById('write-title').value.trim();
  const body=document.getElementById('write-body').value.trim();
  if(!body&&!title){alert('Write something first!');return;}
  d.entries.unshift({id:Date.now(),dateKey:new Date().toDateString(),dateLabel:new Date().toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric',year:'numeric'}),title:title||'Untitled',body,mood:currentMoodVal,ts:Date.now()});
  saveDB();renderCalendar();
  const ok=document.getElementById('save-ok');ok.classList.add('show');setTimeout(()=>ok.classList.remove('show'),2500);
  document.getElementById('write-title').value='';document.getElementById('write-body').value='';
  currentMoodVal=null;document.querySelectorAll('.mood-mb').forEach(b=>b.classList.remove('active'));
}
function renderEntriesWall(){
  const d=userData();if(!d)return;
  const wall=document.getElementById('entries-wall');
  if(!d.entries.length){wall.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--ink-soft);"><div style="font-family:var(--font-pixel);font-size:9px;margin-bottom:10px;">No entries yet</div><div style="font-size:13px;">Start writing to see your entries here.</div></div>';return;}
  wall.innerHTML=d.entries.map((e,i)=>`
    <div class="entry-card" onclick="openEntry(${i})">
      <div class="ec-date">${e.dateLabel}</div>
      ${e.mood?`<div class="ec-mood">${MOOD_EMO[e.mood]}</div>`:''}
      <div class="ec-title">${(e.title||'Untitled').replace(/</g,'&lt;')}</div>
      ${e.body?`<div class="ec-prev">${e.body.replace(/</g,'&lt;')}</div>`:'<div style="font-style:italic;color:#aaa;font-size:13px;">No content.</div>'}
    </div>`).join('');
}
function openEntry(i){
  const e=userData().entries[i];
  document.getElementById('ed-mood').textContent=e.mood?MOOD_EMO[e.mood]:'';
  document.getElementById('ed-date').textContent=e.dateLabel;
  document.getElementById('ed-title').textContent=e.title||'Untitled';
  document.getElementById('ed-body').textContent=e.body||'(No content)';
  document.getElementById('edet').classList.add('open');
}
function closeEdet(){document.getElementById('edet').classList.remove('open');}

/* ═══════════════════════════════════
   CALENDAR
═══════════════════════════════════ */
function renderCalendar(){
  const d=userData();
  const y=calDate.getFullYear(),m=calDate.getMonth();
  const mons=['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('cal-mon').textContent=mons[m]+' '+y;
  const entryDays=new Set((d?.entries||[]).map(e=>e.dateKey));
  const today=new Date();let html='';
  ['Su','Mo','Tu','We','Th','Fr','Sa'].forEach(n=>html+=`<div class="cal-dn">${n}</div>`);
  const first=new Date(y,m,1).getDay(),last=new Date(y,m+1,0).getDate();
  for(let i=0;i<first;i++)html+=`<div class="cal-d empty"></div>`;
  for(let dd=1;dd<=last;dd++){
    const key=new Date(y,m,dd).toDateString();
    const isT=dd===today.getDate()&&m===today.getMonth()&&y===today.getFullYear();
    const hasE=entryDays.has(key);
    html+=`<div class="cal-d ${isT?'today':''} ${hasE?'has-e':''}">${dd}</div>`;
  }
  document.getElementById('cal-grid').innerHTML=html;
}
function calPrev(){calDate.setMonth(calDate.getMonth()-1);renderCalendar();}
function calNext(){calDate.setMonth(calDate.getMonth()+1);renderCalendar();}

/* ═══════════════════════════════════
   POLAROIDS
═══════════════════════════════════ */
function renderPolaroids(){
  const d=userData();if(!d)return;
  const row=document.getElementById('polaroid-row');
  row.innerHTML='';
  // Max 6 slots
  for(let i=0;i<6;i++){
    const photo=d.photos[i];
    const tapeIdx=(d.tapeChoices&&d.tapeChoices[i]!=null)?d.tapeChoices[i]:i%TAPES.length;
    const slot=document.createElement('div');
    slot.className='polaroid-slot';
    if(photo){
      slot.innerHTML=`
        <div class="polaroid-wrap">
          <div class="tape">${tapeSVG(tapeIdx,44,18)}</div>
          <img class="polaroid-img" src="${photo.src}" alt="photo">
          <div class="p-caption">${photo.caption||''}</div>
        </div>`;
      slot.addEventListener('dblclick',()=>openLightbox(i));
    } else {
      slot.innerHTML=`
        <div class="polaroid-wrap" style="opacity:.5;">
          <div class="tape">${tapeSVG(tapeIdx,44,18)}</div>
          <div class="polaroid-empty"><span>📷</span><span>Add photo</span></div>
          <div class="p-caption">empty</div>
        </div>`;
      slot.addEventListener('click',()=>{lbSlotIndex=i;document.getElementById('photo-upload').click();});
    }
    row.appendChild(slot);
  }
}

function handleUpload(ev){
  const d=userData();if(!d)return;
  const files=Array.from(ev.target.files);
  if(!files.length)return;
  const f=files[0];
  const r=new FileReader();
  r.onload=e=>{
    const caption=new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'});
    const idx=lbSlotIndex!=null?lbSlotIndex:(d.photos.length<6?d.photos.length:0);
    if(!d.photos[idx])d.photos[idx]={src:e.target.result,caption};
    else d.photos[idx]={src:e.target.result,caption:d.photos[idx].caption||caption};
    saveDB();renderPolaroids();
    if(lbSlotIndex!=null){openLightbox(lbSlotIndex);}
    lbSlotIndex=null;
  };
  r.readAsDataURL(f);
  ev.target.value='';
}

/* ═══════════════════════════════════
   LIGHTBOX
═══════════════════════════════════ */
function openLightbox(i){
  const d=userData();if(!d||!d.photos[i])return;
  lbSlotIndex=i;
  const photo=d.photos[i];
  const tapeIdx=(d.tapeChoices&&d.tapeChoices[i]!=null)?d.tapeChoices[i]:i%TAPES.length;
  document.getElementById('lb-img').src=photo.src;
  document.getElementById('lb-caption').textContent=photo.caption||'';
  document.getElementById('lb-tape-svg').innerHTML=TAPES[tapeIdx].fn(60,24);
  // tape selector row
  const trow=document.getElementById('lb-tape-row');
  trow.innerHTML=TAPES.map((t,ti)=>`
    <div class="lb-tape-opt ${ti===tapeIdx?'active':''}" onclick="changeTape(${i},${ti})" title="${t.name}">
      <svg width="44" height="18" viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg">${t.fn(60,24)}</svg>
    </div>`).join('');
  document.getElementById('lightbox').classList.add('open');
}
function changeTape(slotIdx,tapeIdx){
  const d=userData();if(!d)return;
  if(!d.tapeChoices)d.tapeChoices={};
  d.tapeChoices[slotIdx]=tapeIdx;
  saveDB();renderPolaroids();openLightbox(slotIdx);
}
function closeLb(){document.getElementById('lightbox').classList.remove('open');lbSlotIndex=null;}
function triggerPhotoChange(){if(lbSlotIndex!=null)document.getElementById('photo-upload').click();}

/* ═══════════════════════════════════
   FLOWER CANVAS
═══════════════════════════════════ */
function drawFlowers(){
  const c=document.getElementById('flower-canvas');
  if(!c)return;
  const W=c.width=c.offsetWidth,H=c.height=c.offsetHeight;
  const ctx=c.getContext('2d');ctx.imageSmoothingEnabled=false;
  const colors=[['#f43b3b'],['#f4e234'],['#f48adc'],['#ffffff'],['#f4a835'],['#b8f43b'],['#a78bfa']];
  const N=Math.floor(W/16);
  for(let i=0;i<N;i++){
    const x=(i/N)*W+Math.random()*14,y=H-Math.random()*(H*.5)-10;
    const sz=6+Math.floor(Math.random()*6)*2;
    const col=colors[Math.floor(Math.random()*colors.length)][0];
    const sh=14+Math.floor(Math.random()*18);
    ctx.fillStyle='#2d7a1e';ctx.fillRect(Math.round(x),Math.round(y-sh),2,sh);
    const px=Math.round(x-sz/2+1),py=Math.round(y-sh-sz);
    ctx.fillStyle=col;
    ctx.fillRect(px,py,sz/2,sz/2);ctx.fillRect(px+sz/2,py+sz/2,sz/2,sz/2);
    ctx.fillRect(px+sz/2,py,sz/2,sz/2);ctx.fillRect(px,py+sz/2,sz/2,sz/2);
    ctx.fillStyle='#f5e434';ctx.fillRect(px+sz/4,py+sz/4,sz/2,sz/2);
  }
}

/* ═══════════════════════════════════
   BOOT
═══════════════════════════════════ */
loadDB();
window.addEventListener('load',()=>{
  setTimeout(drawFlowers,60);
  window.addEventListener('resize',drawFlowers);
  // Auto login if session exists
  const sess=loadSession();
  if(sess){currentUser=sess;enterApp();}
});
