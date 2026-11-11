// Kopiert den Activ-Ordner nach www/ und macht mobile.html zur Startseite der App.
const fs = require('fs'), path = require('path');
const SRC = path.join(__dirname, '..', 'Activ');          // Activ-Ordner liegt NEBEN Activ-iOS
const DST = path.join(__dirname, 'www');
if (!fs.existsSync(path.join(SRC, 'mobile.html'))) { console.error('❌ Activ-Ordner nicht gefunden: ' + SRC); process.exit(1); }
fs.rmSync(DST, { recursive: true, force: true });
fs.cpSync(SRC, DST, { recursive: true });
fs.copyFileSync(path.join(DST, 'mobile.html'), path.join(DST, 'index.html'));
const need = ['core','data','data2','models','models2','models3','world','world2','factory','game','update','ship','render','fp','ui','city','casino','expedition','auth','main','v11','v12','v12b','v13','v14','v14m'];
const miss = need.filter(n => !fs.existsSync(path.join(DST, 'js', n + '.js')));
if (miss.length) { console.error('❌ Im js-Ordner fehlen: ' + miss.map(n => n + '.js').join(', ')); process.exit(1); }
console.log('✔ www/ bereit – Start = mobile.html (' + need.length + ' Skripte gefunden)');
