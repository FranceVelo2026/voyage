const days=[
{n:1,date:'Mardi 1er septembre 2026',title:'Arrivée à Lyon',spirit:'Arriver, récupérer les vélos et s’installer sans se presser.',facts:[['Transport','Rhônexpress'],['Hébergement','56, rue Baraban'],['Priorité','Remonter les vélos'],['Rythme','Journée légère']],stops:[['Aéroport Lyon–Saint-Exupéry','Récupérer les bagages et les boîtes de vélo.'],['Rhônexpress','Rejoindre Lyon Part-Dieu.'],['Airbnb','Marcher jusqu’au 56, rue Baraban, puis s’installer.'],['Soirée','Remonter les vélos, recharger les appareils et prendre un repas simple.']]},
{n:2,date:'Mercredi 2 septembre 2026',title:'Découverte de Lyon',spirit:'Découvrir Lyon librement, sans horaire imposé.',facts:[['Organisation','Aucun horaire fixe'],['Déplacement','À pied et en transport urbain'],['Rythme','Selon vos envies'],['Objectif','Profiter sans contrainte']],stops:[['Vieux-Lyon','Prévoir environ 1 h 30 à 2 h.'],['Fourvière et son belvédère','Prévoir environ 45 à 60 min.'],['Presqu’île et places centrales','Prévoir environ 1 h 30 à 2 h.'],['Halles Paul Bocuse','Prévoir environ 1 h à 1 h 30.'],['Parc de la Tête d’Or','Prévoir environ 1 h à 2 h.']]},
{n:3,date:'Jeudi 3 septembre 2026',title:'Lyon → Strasbourg',spirit:'Transformer le trajet en train en une transition douce vers le début du voyage.',facts:[['Transport','Train avec 2 vélos'],['Arrivée','Gare de Strasbourg'],['Hébergement','17, rue des Orfèvres'],['Statut','Horaire à confirmer']],stops:[['Résumé','7 h 26 • 3 TER • 2 correspondances • Vélo sans réservation'],['⚠️ À confirmer','Horaires et numéros de train à confirmer lors de l’achat des billets SNCF.'],['Avant le départ','Prévoir de l’eau et des collations.'],['Gare Lyon Part-Dieu','Arriver tôt pour repérer la voiture vélo et installer les bicyclettes.'],['Gare de Strasbourg → Airbnb','Rejoindre le 17, rue des Orfèvres à vélo.'],['Installation','Déposer les bagages et sécuriser les vélos.']],links:[['🚆 SNCF Connect','https://www.sncf-connect.com/'],['🚲 Vélo à bord','https://www.veloabord.fr']],actions:[['🚴 Strasbourg → Obernai — RideWithGPS','share-gpx','gare-strasbourg-airbnb.gpx']],links:[['🗺️ Voir le trajet dans Google Maps','https://www.google.com/maps/dir/?api=1&origin=Gare+de+Strasbourg,+Strasbourg&destination=17+Rue+des+Orf%C3%A8vres,+67000+Strasbourg&travelmode=bicycling']]},
{n:4,date:'Vendredi 4 septembre 2026',title:'Découverte de Strasbourg',spirit:'Découvrir Strasbourg avant le grand départ.',facts:[['Type','Journée de visite'],['Hébergement','17, rue des Orfèvres'],['Rythme','Libre'],['Départ vélo','Le lendemain']],stops:[['Cathédrale Notre-Dame','Visite selon l’envie.'],['Petite France','Flâner le long des canaux.'],['Barrage Vauban','Profiter de la vue sur les ponts couverts.'],['Quartier européen','Option à vélo si le temps le permet.']]},
{n:5,date:'Samedi 5 septembre 2026',title:'Strasbourg → Obernai',spirit:'Première vraie journée à vélo : prendre le rythme et profiter des villages sans se presser.',facts:[['Distance','40,1 km'],['Dénivelé positif','Environ 370 m'],['Temps de vélo','Environ 2 h 30'],['Arrivée','Centre d’Obernai']],stops:[['Départ — Airbnb de Strasbourg','Départ directement du 17, rue des Orfèvres.'],['Route des Vins d’Alsace','Rouler tranquillement vers le sud.'],['Rosheim','Pause recommandée dans le centre ancien. Prévoir environ 30 à 60 minutes.'],['Boersch','Petit détour facultatif.'],['Arrivée — centre d’Obernai','Le GPX se termine près de la Place du Marché.'],
['Hébergement','Utilisez le bouton ci-dessous 24 à 48 heures avant l’arrivée pour demander une sélection à jour selon vos critères.'],
['💡 Conseil d’Alice','Gardez un peu d’énergie pour l’arrivée à Obernai : la Place du Marché et les petites rues du centre se découvrent très bien à pied après avoir rangé les vélos.']],links:[['🚴 Strasbourg → Obernai — RideWithGPS','https://ridewithgps.com/routes/56119326?privacy_code=gR1X6B7fXNiKgXeQr0U5Vr9FZRj7y1XW'],['🏡 Trouver un Airbnb avec Alice','https://chatgpt.com/'],
['📍 Centre d’Obernai dans Google Maps','https://www.google.com/maps/search/?api=1&query=Place+du+March%C3%A9,+67210+Obernai'],['🥐 Boulangeries près du centre','https://www.google.com/maps/search/?api=1&query=boulangerie+centre+Obernai'],['🛒 Épiceries et marchés','https://www.google.com/maps/search/?api=1&query=%C3%A9picerie+march%C3%A9+Obernai']]},
...Array.from({length:22},(_,i)=>({n:i+6,date:`${i+6} septembre 2026`,title:i===21?'Arrivée à Sète':'Étape vélo à préciser',spirit:i===21?'Atteindre la Méditerranée et savourer le chemin parcouru.':'Cette étape sera complétée lorsque le découpage définitif sera confirmé.',pending:i!==21,facts:[['Statut',i===21?'Arrivée prévue':'À compléter'],['Parcours','Voir RideWithGPS']],stops:[['Préparation','Cette journée sera détaillée lorsque le découpage définitif des étapes sera confirmé.']]}))
];
function route(){const id=(location.hash||'#accueil').slice(1).split('?')[0];document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));(document.getElementById(id)||document.getElementById('accueil')).classList.add('active');window.scrollTo(0,0)}
function renderDays(){dayList.innerHTML=days.map(d=>`<div class="dayitem ${d.pending?'pending':''}" data-day="${d.n}"><div class="daynum">${d.n}</div><div><b>${d.title}</b><small>${d.date}${d.pending?' · à compléter':''}</small></div></div>`).join('');dayList.onclick=e=>{const x=e.target.closest('[data-day]');if(x){renderDay(+x.dataset.day);location.hash='day'}}}
function renderDay(n){const d=days.find(x=>x.n===n);dayContent.innerHTML=`<p class="eyebrow">JOUR ${d.n}</p><h1>${d.title}</h1><p class="muted">${d.date}</p>${d.pending?'<div class="panel warning"><b>Étape provisoire</b><p>Le découpage, la distance et l’hébergement restent à confirmer.</p></div>':''}<div class="spirit"><small>L’ESPRIT DE LA JOURNÉE</small><strong>${d.spirit}</strong></div><div class="facts">${d.facts.map(f=>`<div class="fact"><small>${f[0]}</small><b>${f[1]}</b></div>`).join('')}</div><h2>Programme</h2><div class="timeline">${d.stops.map(s=>`<div class="stop"><b>${s[0]}</b><p>${s[1]}</p></div>`).join('')}</div>${d.actions?`<div class="daylinks">${d.actions.map(a=>`<button class="btn route-action" data-action="${a[1]}" data-file="${a[2]}">${a[0]}</button>`).join('')}</div>`:''}${d.links?`<div class="daylinks">${d.links.map(l=>`<a class="btn" target="_blank" rel="noopener" href="${l[1]}">${l[0]}</a>`).join('')}</div>`:''}${d.n>=6?'<a class="btn" target="_blank" rel="noopener" href="https://ridewithgps.com/routes/53578421?privacy_code=kkxuelJLVp05PTeBOPnZdw6jLSiA1Exd">Ouvrir RideWithGPS</a>':''}`}

async function shareGpx(fileName){
  try{
    const response=await fetch(fileName,{cache:'no-store'});
    if(!response.ok)throw new Error('Fichier GPX introuvable');
    const blob=await response.blob();
    const file=new File([blob],fileName,{type:'application/gpx+xml'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){
      await navigator.share({
        files:[file],
        title:fileName.includes('jour-05')?'Jour 5 — Strasbourg → Obernai':'Parcours Gare de Strasbourg → Airbnb',
        text:'Ouvrir ce parcours dans RideWithGPS'
      });
    }else{
      const a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      a.download=fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(()=>URL.revokeObjectURL(a.href),1000);
      alert('Le fichier GPX a été téléchargé. Ouvrez-le depuis Fichiers, puis choisissez RideWithGPS.');
    }
  }catch(err){
    if(err&&err.name==='AbortError')return;
    alert('Impossible d’ouvrir le GPX automatiquement. Utilisez le lien Google Maps ou réessayez.');
  }
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-action="share-gpx"]');
  if(b){e.preventDefault();shareGpx(b.dataset.file);}
});

function loadNotes(){const a=JSON.parse(localStorage.getItem('france2026notes')||'[]');notes.innerHTML=a.map((n,i)=>`<div class="noteitem"><button data-del="${i}">Supprimer</button><b>${escapeHtml(n.t)}</b><p>${escapeHtml(n.x).replace(/\n/g,'<br>')}</p></div>`).join('')||'<p class="muted">Aucune note enregistrée.</p>'}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
saveNote.onclick=()=>{if(!noteText.value.trim())return;const a=JSON.parse(localStorage.getItem('france2026notes')||'[]');a.unshift({t:noteTitle.value.trim()||new Date().toLocaleDateString('fr-CA'),x:noteText.value.trim()});localStorage.setItem('france2026notes',JSON.stringify(a));noteTitle.value=noteText.value='';loadNotes()};notes.onclick=e=>{if(e.target.dataset.del!==undefined){const a=JSON.parse(localStorage.getItem('france2026notes')||'[]');a.splice(+e.target.dataset.del,1);localStorage.setItem('france2026notes',JSON.stringify(a));loadNotes()}};document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>location.hash=b.dataset.go);window.addEventListener('hashchange',route);renderDays();loadNotes();route();if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
