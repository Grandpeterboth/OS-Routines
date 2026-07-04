// === BIBLIOTHÈQUE D'ICÔNES SVG ===
const svgLibrary = {
  'boite': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  'menage': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.6 4.3 2.1 6.7-5.5-4-5.5 4 2.1-6.7L2 9h7z"/></svg>`,
  'cuisine': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 18 18"/><path d="m14 8 2.2 2.2c.4.4.4 1 0 1.4l-6.4 6.4c-.4.4-1 .4-1.4 0L6.2 15.8c-.4-.4-.4-1 0-1.4l6.4-6.4c.4-.4 1-.4 1.4 0z"/></svg>`,
  'sport': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93 19.07 19.07"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/></svg>`,
  'briefcase': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  'heart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  'book': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  'music': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  'car': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="10" width="20" height="10" rx="2" ry="2"/><path d="M19 10l-2-6H7L5 10"/><circle cx="7" cy="15" r="1.5"/><circle cx="17" cy="15" r="1.5"/></svg>`,
  'sun': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
};

// === PALETTE DE COULEURS ===
const colorPalette = [
  '#0052FF', '#00C853', '#FF6D00', '#E11D48',
  '#7C3AED', '#DB2777', '#059669', '#D97706',
  '#2563EB', '#4F46E5', '#14B8A6', '#F59E0B'
];

// === DONNÉES PAR DÉFAUT ===
const defaultCategories = [
  { id: 'boite',   name: 'Boîte Entrée', color: '#0052FF', iconType: 'svg', iconVal: 'boite'   },
  { id: 'menage',  name: 'Ménage',        color: '#00C853', iconType: 'svg', iconVal: 'menage'  },
  { id: 'cuisine', name: 'Cuisine',        color: '#FF6D00', iconType: 'svg', iconVal: 'cuisine' }
];

const defaultRoutines = [
  { id: '1',  name: 'ENT/msg',           cat: 'boite',   days: [1,2,3,4,5]     },
  { id: '2',  name: 'webmel/msg',         cat: 'boite',   days: [0,1,2,3,4,5,6] },
  { id: '3',  name: 'Gmail',              cat: 'boite',   days: [1,4]            },
  { id: '4',  name: 'sms/Whatsapp',       cat: 'boite',   days: [0,1,2,3,4,5,6] },
  { id: '5',  name: 'OS',                 cat: 'boite',   days: [0,1,2,3,4,5,6] },
  { id: '6',  name: 'Barette',            cat: 'menage',  days: [1,4]            },
  { id: '7',  name: 'SDB/WC',             cat: 'menage',  days: [0,1,2,3,4,5,6] },
  { id: '8',  name: 'Cuisine',            cat: 'menage',  days: [0,1,2,3,4,5,6] },
  { id: '9',  name: 'Haut poussière +',   cat: 'menage',  days: [0,1,2,3,4,5,6] },
  { id: '10', name: 'Aspi',               cat: 'menage',  days: [3,6,0]          },
  { id: '11', name: 'Rangement',          cat: 'menage',  days: [0,1,2,3,4,5,6] },
  { id: '12', name: 'Plats semaine',      cat: 'cuisine', days: [6,0]            },
  { id: '13', name: 'Plats semaine prépa',cat: 'cuisine', days: [5]              },
  { id: '14', name: 'Salade / Fruit',     cat: 'cuisine', days: [0,1,2,3,4,5,6] },
  { id: '15', name: 'Courses communes',   cat: 'cuisine', days: [5]              }
];

const dayNames  = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
const editIcon  = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
const resetIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-8.31l5.67-5.67"/></svg>`;
const refreshIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`;
const upIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
const downIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

class App {
  constructor() {
    this.categories      = [];
    this.routines        = [];
    this.history         = {};
    this.currentDateStr  = this.getTodayStr();
    this.currentTab      = 'today';
    this.currentManageTab = 'routines';
    this.init();
  }

  // ─────────────────────────────────────────────────────────────
  // INITIALISATION
  // ─────────────────────────────────────────────────────────────
  init() {
    this.loadData();
    this.setupListeners();
    this.render();

    setInterval(() => {
      const newDateStr = this.getTodayStr();
      if (newDateStr !== this.currentDateStr) {
        this.currentDateStr = newDateStr;
        this.render();
      }
    }, 60000);
  }

  getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  // ─────────────────────────────────────────────────────────────
  // PERSISTANCE
  // ─────────────────────────────────────────────────────────────
  loadData() {
    const savedCats = localStorage.getItem('os-categories');
    this.categories = savedCats ? JSON.parse(savedCats) : [...defaultCategories];
    if (!savedCats) localStorage.setItem('os-categories', JSON.stringify(this.categories));

    const savedRoutines = localStorage.getItem('os-routines');
    if (savedRoutines) {
      // Nettoyage de l'ancien 'type' (V2) et 'altTag' (V3)
      this.routines = JSON.parse(savedRoutines).map(r => {
        delete r.type;
        delete r.options;
        delete r.altTag; 
        return r;
      });
    } else {
      this.routines = [...defaultRoutines];
      localStorage.setItem('os-routines', JSON.stringify(this.routines));
    }

    const savedHistory = localStorage.getItem('os-history');
    this.history = savedHistory ? JSON.parse(savedHistory) : {};
  }

  saveData() {
    localStorage.setItem('os-categories', JSON.stringify(this.categories));
    localStorage.setItem('os-routines',   JSON.stringify(this.routines));
    localStorage.setItem('os-history',    JSON.stringify(this.history));
  }

  // ─────────────────────────────────────────────────────────────
  // STATISTIQUES ET SÉLECTIONS DE CLUSTERS
  // ─────────────────────────────────────────────────────────────
  getHistoricalCount(routineId) {
    let count = 0;
    for (const date in this.history) {
      // Ignorer les clés spéciales de sélections
      if (!date.includes('_selections') && Array.isArray(this.history[date])) {
        if (this.history[date].includes(routineId)) count++;
      }
    }
    return count;
  }

  getSelectionsForToday() {
    const key = this.currentDateStr + '_selections';
    if (!this.history[key]) this.history[key] = {};
    return this.history[key];
  }

  openClusterChoice(clusterId) {
    const todayDayOfWeek = new Date(this.currentDateStr).getDay();
    const options = this.routines.filter(r => r.clusterId === clusterId && r.days.includes(todayDayOfWeek));
    
    const list = document.getElementById('cluster-choice-list');
    list.innerHTML = options.map(opt => {
      const count = this.getHistoricalCount(opt.id);
      return `
        <button class="cluster-choice-btn" onclick="app.selectClusterChoice('${clusterId}', '${opt.id}')">
          <span>${opt.name}</span>
          <span class="stat-badge">Fait ${count} fois</span>
        </button>
      `;
    }).join('');
    
    document.getElementById('modal-cluster-choice').classList.add('active');
  }

  selectClusterChoice(clusterId, routineId) {
    const selections = this.getSelectionsForToday();
    selections[clusterId] = routineId;
    this.saveData();
    this.closeModal('modal-cluster-choice');
    this.render();
  }

  resetClusterChoice(clusterId, routineId) {
    // Supprimer le choix
    const selections = this.getSelectionsForToday();
    delete selections[clusterId];
    
    // Décocher la tâche si elle était faite
    const completed = this.history[this.currentDateStr];
    if (completed) {
      const idx = completed.indexOf(routineId);
      if (idx > -1) completed.splice(idx, 1);
    }
    
    this.saveData();
    this.render();
  }

  // ─────────────────────────────────────────────────────────────
  // GESTION DES COMPLETIONS
  // ─────────────────────────────────────────────────────────────
  toggleTask(id) {
    if (!this.history[this.currentDateStr]) this.history[this.currentDateStr] = [];
    const completed = this.history[this.currentDateStr];
    
    const idx = completed.indexOf(id);
    if (idx > -1) completed.splice(idx, 1);
    else completed.push(id);

    this.saveData();
    this.render();
  }

  isCompleted(id) {
    return this.history[this.currentDateStr]?.includes(id) || false;
  }

  // ─────────────────────────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────────────────────────
  setupListeners() {
    document.querySelectorAll('.day-btn').forEach(btn => {
      btn.addEventListener('click', e => e.target.classList.toggle('selected'));
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${tabId}`).classList.add('active');
    this.render();
  }

  switchManageTab(tabId) {
    this.currentManageTab = tabId;
    document.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`seg-${tabId}`).classList.add('active');

    if (tabId === 'routines') {
      document.getElementById('manage-routines-section').style.display   = 'block';
      document.getElementById('manage-categories-section').style.display = 'none';
      this.renderManageRoutines();
    } else {
      document.getElementById('manage-routines-section').style.display   = 'none';
      document.getElementById('manage-categories-section').style.display = 'block';
      this.renderManageCategories();
    }
  }

  // ─────────────────────────────────────────────────────────────
  // RENDU PRINCIPAL
  // ─────────────────────────────────────────────────────────────
  render() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('display-date').textContent =
      new Date().toLocaleDateString('fr-FR', options).replace(/^./, c => c.toUpperCase());

    const todayDayOfWeek = new Date().getDay();
    const todayTasks     = this.routines.filter(r => r.days.includes(todayDayOfWeek));

    if (this.currentTab === 'today') {
      this.renderTaskList('today-container', todayTasks, true);
      this.updateProgress(todayTasks);
    } else if (this.currentTab === 'manage') {
      if (this.currentManageTab === 'routines') this.renderManageRoutines();
      else this.renderManageCategories();
    }
  }

  updateProgress(todayTasks) {
    if (todayTasks.length === 0) {
      document.getElementById('progress-bar').style.width = '100%';
      document.getElementById('progress-text').textContent = "Aucune tâche aujourd'hui !";
      return;
    }

    const uniquePoints = [];
    let completedPoints = 0;

    todayTasks.forEach(task => {
      const pointId = task.clusterId ? `cluster_${task.clusterId}` : `task_${task.id}`;
      
      if (!uniquePoints.includes(pointId)) {
        uniquePoints.push(pointId);
        
        if (task.clusterId) {
          const siblings = todayTasks.filter(r => r.clusterId === task.clusterId);
          const isAnySiblingCompleted = siblings.some(s => this.isCompleted(s.id));
          if (isAnySiblingCompleted) completedPoints++;
        } else {
          if (this.isCompleted(task.id)) completedPoints++;
        }
      }
    });

    const percent = Math.round((completedPoints / uniquePoints.length) * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-text').textContent = `${percent}% complété (${completedPoints}/${uniquePoints.length})`;
  }

  // ─────────────────────────────────────────────────────────────
  // RENDU DES LISTES DE TÂCHES
  // ─────────────────────────────────────────────────────────────
  getCategoryInfo(catId) {
    return this.categories.find(c => c.id === catId) || this.categories[0] || { name: '?', color: '#888', iconType: 'svg', iconVal: 'boite' };
  }

  renderIcon(cat) {
    if (cat.iconType === 'photo' && cat.iconVal)
      return `<img src="${cat.iconVal}" alt="${cat.name}">`;
    return svgLibrary[cat.iconVal] || svgLibrary['boite'];
  }

  renderTaskList(containerId, tasks, isTodayView) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (tasks.length === 0) {
      container.innerHTML = `<div class="empty-state">Rien de prévu !</div>`;
      return;
    }

    const byCategory = {};
    this.categories.forEach(c => byCategory[c.id] = []);
    tasks.forEach(t => { if (byCategory[t.cat]) byCategory[t.cat].push(t); });

    this.categories.forEach(cat => {
      const catTasks = byCategory[cat.id];
      if (!catTasks || catTasks.length === 0) return;

      const section  = document.createElement('div');
      section.className = 'category-section';
      const iconHtml = this.renderIcon(cat);

      let html = `<div class="category-title" style="--cat-color: ${cat.color}"><div class="cat-icon-display">${iconHtml}</div> ${cat.name}</div><div class="task-list">`;

      const processedClusters = [];
      const selections = this.getSelectionsForToday();

      catTasks.forEach(task => {
        if (!task.clusterId) {
          // Tâche normale
          html += this.buildSingleCardHtml(task, cat);
        } else {
          // Tâche avec Cluster
          if (processedClusters.includes(task.clusterId)) return; 
          processedClusters.push(task.clusterId);
          
          const siblings = catTasks.filter(t => t.clusterId === task.clusterId);
          
          if (siblings.length === 1 || !isTodayView) {
            // Si c'est la seule tâche de ce cluster ce jour, ou vue globale -> normale
            html += this.buildSingleCardHtml(task, cat);
          } else {
            // Plusieurs tâches -> Gestion du choix
            const chosenId = selections[task.clusterId];
            if (chosenId) {
              const chosenTask = siblings.find(s => s.id === chosenId);
              if (chosenTask) {
                html += this.buildSingleCardHtml(chosenTask, cat, task.clusterId);
              }
            } else {
              // Aucun choix fait, afficher le bouton d'attente
              const siblingNames = siblings.map(s => s.name).join(' ou ');
              html += `
                <div class="task-cluster-pending" style="--color-boite: ${cat.color}; --color-boite-light: ${cat.color}11" onclick="app.openClusterChoice('${task.clusterId}')">
                  ${refreshIcon} Choix : ${siblingNames}
                </div>
              `;
            }
          }
        }
      });

      html += `</div>`;
      section.innerHTML = html;
      container.appendChild(section);
    });
  }

  /** Rendu d'une tâche (avec potentiellement un bouton reset si elle vient d'un cluster) */
  buildSingleCardHtml(task, cat, clusterId = null) {
    const checked  = this.isCompleted(task.id);
    const daysText = task.days.length === 7 ? 'Tous les jours' : task.days.map(d => dayNames[d]).join(', ');
    
    let resetBtn = '';
    if (clusterId) {
      resetBtn = `<button class="reset-choice-btn" onclick="event.stopPropagation(); app.resetClusterChoice('${clusterId}', '${task.id}')" title="Changer le choix">${resetIcon}</button>`;
    }

    return `
      <div class="task-card ${checked ? 'checked' : ''}" style="--cat-color: ${cat.color}" onclick="app.toggleTask('${task.id}')">
        <div class="task-info">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="task-name">${task.name}</span>
            ${resetBtn}
          </div>
          <span class="task-days">${daysText}</span>
        </div>
        <div class="task-checkbox">${checked ? checkIcon : ''}</div>
      </div>`;
  }

  // ─────────────────────────────────────────────────────────────
  // GESTION DES ROUTINES (CRUD)
  // ─────────────────────────────────────────────────────────────
  renderManageRoutines() {
    const container = document.getElementById('manage-routines-container');
    container.innerHTML = '';

    this.routines.forEach(task => {
      const cat      = this.getCategoryInfo(task.cat);
      const daysText = task.days.length === 7 ? 'Tous les jours' : task.days.map(d => dayNames[d]).join(', ');
      const div      = document.createElement('div');
      div.className  = 'edit-task-card';

      let badge = task.clusterId ? `<span class="group-badge" style="background:${cat.color}22; color:${cat.color}; font-size:0.7rem; margin-left:6px;">Liée (Alternative)</span>` : '';

      div.innerHTML = `
        <div class="task-info">
          <span class="task-name" style="color:var(--text-main)">${task.name}${badge}</span>
          <span class="task-days">${cat.name} • ${daysText}</span>
        </div>
        <div class="edit-actions">
          <button class="icon-btn primary" onclick="app.editRoutine('${task.id}')">${editIcon}</button>
          <button class="icon-btn danger"  onclick="app.deleteRoutine('${task.id}')">${trashIcon}</button>
        </div>`;
      container.appendChild(div);
    });
  }

  showRoutineModal(id = null) {
    const modal     = document.getElementById('modal-routine');
    const titleEl   = document.getElementById('modal-routine-title');
    const selectCat = document.getElementById('form-routine-cat');

    selectCat.innerHTML = this.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('selected'));

    let currentClusterId = null;

    if (id) {
      const routine = this.routines.find(r => r.id === id);
      titleEl.textContent = "Modifier la routine";
      document.getElementById('form-routine-id').value   = routine.id;
      document.getElementById('form-routine-name').value = routine.name;
      selectCat.value = routine.cat;
      routine.days.forEach(d => document.querySelector(`.day-btn[data-day="${d}"]`).classList.add('selected'));
      currentClusterId = routine.clusterId;
    } else {
      titleEl.textContent = "Nouvelle Routine";
      document.getElementById('form-routine-id').value   = '';
      document.getElementById('form-routine-name').value = '';
      if (this.categories.length > 0) selectCat.value = this.categories[0].id;
    }

    // Peupler les cases à cocher de cluster
    const clusterList = document.getElementById('form-routine-cluster-list');
    clusterList.innerHTML = this.routines
      .filter(r => r.id !== id)
      .map(r => {
        // Est cochée si l'autre routine a le même clusterId que la routine actuelle
        const isChecked = (currentClusterId && r.clusterId === currentClusterId) ? 'checked' : '';
        return `
          <div class="cluster-checkbox-row">
            <input type="checkbox" id="cluster_check_${r.id}" value="${r.id}" ${isChecked}>
            <label for="cluster_check_${r.id}">${r.name}</label>
          </div>
        `;
      }).join('');

    modal.classList.add('active');
  }

  saveRoutine() {
    const id   = document.getElementById('form-routine-id').value || Date.now().toString();
    const name = document.getElementById('form-routine-name').value.trim();
    const cat  = document.getElementById('form-routine-cat').value;

    const days = [];
    document.querySelectorAll('.day-btn.selected').forEach(b => days.push(parseInt(b.getAttribute('data-day'))));

    if (!name)             { alert("Veuillez saisir un nom."); return; }
    if (days.length === 0) { alert("Sélectionnez au moins un jour."); return; }

    const routine = { id, name, cat, days };

    // Gestion du ClusterId
    const checkedCheckboxes = Array.from(document.querySelectorAll('#form-routine-cluster-list input:checked'));
    const uncheckCheckboxes = Array.from(document.querySelectorAll('#form-routine-cluster-list input:not(:checked)'));

    let currentRoutineIdx = this.routines.findIndex(r => r.id === id);
    let originalClusterId = currentRoutineIdx > -1 ? this.routines[currentRoutineIdx].clusterId : null;

    if (checkedCheckboxes.length > 0) {
      // S'il y a des routines liées, on a besoin d'un clusterId
      const newClusterId = originalClusterId || ('cluster_' + Date.now().toString());
      routine.clusterId = newClusterId;

      // On donne ce clusterId à toutes les routines cochées
      checkedCheckboxes.forEach(cb => {
        const linkedRoutine = this.routines.find(r => r.id === cb.value);
        if (linkedRoutine) linkedRoutine.clusterId = newClusterId;
      });
      
      // On retire le clusterId de celles qui ont été DÉCOCHÉES mais qui l'avaient avant
      uncheckCheckboxes.forEach(cb => {
        const linkedRoutine = this.routines.find(r => r.id === cb.value);
        if (linkedRoutine && linkedRoutine.clusterId === newClusterId) {
          delete linkedRoutine.clusterId;
        }
      });
    } else {
      // Aucune case cochée, on enlève le clusterId (s'il existait, on le retire aussi des ex-frères)
      if (originalClusterId) {
        uncheckCheckboxes.forEach(cb => {
          const linkedRoutine = this.routines.find(r => r.id === cb.value);
          if (linkedRoutine && linkedRoutine.clusterId === originalClusterId) {
            delete linkedRoutine.clusterId;
          }
        });
      }
    }

    if (currentRoutineIdx > -1) {
      this.routines[currentRoutineIdx] = routine;
    } else {
      this.routines.push(routine);
    }

    this.saveData();
    this.closeModal('modal-routine');
    this.render();
  }

  editRoutine(id)   { this.showRoutineModal(id); }

  deleteRoutine(id) {
    if (confirm("Supprimer cette routine ?")) {
      this.routines = this.routines.filter(r => r.id !== id);
      this.saveData();
      this.render();
    }
  }

  // ─────────────────────────────────────────────────────────────
  // GESTION DES CATÉGORIES (CRUD)
  // ─────────────────────────────────────────────────────────────
  renderManageCategories() {
    const container = document.getElementById('manage-categories-container');
    container.innerHTML = '';

    this.categories.forEach((cat, index) => {
      const isFirst = index === 0;
      const isLast = index === this.categories.length - 1;
      
      const iconHtml = this.renderIcon(cat);
      const div      = document.createElement('div');
      div.className  = 'edit-cat-card';
      div.style.setProperty('--cat-color', cat.color);
      div.innerHTML = `
        <div class="task-info" style="flex-direction:row; align-items:center; gap:10px;">
          <div class="cat-icon-display" style="color:${cat.color}">${iconHtml}</div>
          <span class="task-name" style="color:var(--text-main)">${cat.name}</span>
        </div>
        <div class="edit-actions">
          <button class="icon-btn" onclick="app.moveCategoryUp('${cat.id}')" ${isFirst ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} title="Monter">${upIcon}</button>
          <button class="icon-btn" onclick="app.moveCategoryDown('${cat.id}')" ${isLast ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} title="Descendre">${downIcon}</button>
          <button class="icon-btn primary" onclick="app.editCategory('${cat.id}')">${editIcon}</button>
          <button class="icon-btn danger"  onclick="app.deleteCategory('${cat.id}')">${trashIcon}</button>
        </div>`;
      container.appendChild(div);
    });
  }

  showCategoryModal(id = null) {
    const modal = document.getElementById('modal-category');
    const title = document.getElementById('modal-cat-title');

    document.getElementById('color-grid').innerHTML = colorPalette.map(color =>
      `<div class="color-circle" data-color="${color}" style="background-color:${color}" onclick="app.selectCatColor('${color}')"></div>`
    ).join('');

    document.getElementById('icon-grid').innerHTML = Object.keys(svgLibrary).map(key =>
      `<div class="icon-option" data-icon="${key}" onclick="app.selectCatIcon('${key}')">${svgLibrary[key]}</div>`
    ).join('');

    document.getElementById('photo-preview-container').style.display = 'none';

    if (id) {
      const cat = this.categories.find(c => c.id === id);
      title.textContent = "Modifier la rubrique";
      document.getElementById('form-cat-id').value   = cat.id;
      document.getElementById('form-cat-name').value = cat.name;
      this.selectCatColor(cat.color);
      if (cat.iconType === 'photo') this.setCatPhoto(cat.iconVal);
      else this.selectCatIcon(cat.iconVal);
    } else {
      title.textContent = "Nouvelle Rubrique";
      document.getElementById('form-cat-id').value   = '';
      document.getElementById('form-cat-name').value = '';
      this.selectCatColor(colorPalette[0]);
      this.selectCatIcon('sport');
    }

    modal.classList.add('active');
  }

  selectCatColor(color) {
    document.getElementById('form-cat-color').value = color;
    document.querySelectorAll('.color-circle').forEach(el =>
      el.classList.toggle('selected', el.getAttribute('data-color') === color));
  }

  selectCatIcon(iconKey) {
    document.getElementById('form-cat-icon-type').value = 'svg';
    document.getElementById('form-cat-icon-val').value  = iconKey;
    document.getElementById('photo-preview-container').style.display = 'none';
    document.querySelectorAll('.icon-option').forEach(el =>
      el.classList.toggle('selected', el.getAttribute('data-icon') === iconKey));
  }

  setCatPhoto(base64Data) {
    document.getElementById('form-cat-icon-type').value = 'photo';
    document.getElementById('form-cat-icon-val').value  = base64Data;
    document.querySelectorAll('.icon-option').forEach(el => el.classList.remove('selected'));
    const previewImg = document.getElementById('photo-preview');
    previewImg.src = base64Data;
    document.getElementById('photo-preview-container').style.display = 'block';
  }

  handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx    = canvas.getContext('2d');
        const size   = 150;
        canvas.width = canvas.height = size;
        const minDim = Math.min(img.width, img.height);
        const sx     = (img.width  - minDim) / 2;
        const sy     = (img.height - minDim) / 2;
        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
        this.setCatPhoto(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  saveCategory() {
    const id       = document.getElementById('form-cat-id').value || 'cat_' + Date.now();
    const name     = document.getElementById('form-cat-name').value.trim();
    const color    = document.getElementById('form-cat-color').value;
    const iconType = document.getElementById('form-cat-icon-type').value;
    const iconVal  = document.getElementById('form-cat-icon-val').value;

    if (!name) { alert("Veuillez saisir un nom."); return; }

    const cat = { id, name, color, iconType, iconVal };
    const idx = this.categories.findIndex(c => c.id === id);
    if (idx > -1) this.categories[idx] = cat;
    else          this.categories.push(cat);

    this.saveData();
    this.closeModal('modal-category');
    this.render();
  }

  editCategory(id) { this.showCategoryModal(id); }

  deleteCategory(id) {
    const count = this.routines.filter(r => r.cat === id).length;
    if (count > 0) {
      alert(`Impossible de supprimer : ${count} routine(s) sont associées à cette rubrique.`);
      return;
    }
    if (confirm("Supprimer cette rubrique ?")) {
      this.categories = this.categories.filter(c => c.id !== id);
      this.saveData();
      this.render();
    }
  }

  moveCategoryUp(id) {
    const index = this.categories.findIndex(c => c.id === id);
    if (index > 0) {
      const temp = this.categories[index - 1];
      this.categories[index - 1] = this.categories[index];
      this.categories[index] = temp;
      this.saveData();
      this.render();
    }
  }

  moveCategoryDown(id) {
    const index = this.categories.findIndex(c => c.id === id);
    if (index < this.categories.length - 1) {
      const temp = this.categories[index + 1];
      this.categories[index + 1] = this.categories[index];
      this.categories[index] = temp;
      this.saveData();
      this.render();
    }
  }

  // ─────────────────────────────────────────────────────────────
  // MODALS & UTILITAIRES
  // ─────────────────────────────────────────────────────────────
  closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
  }

  showBackupModal() {
    const data = { categories: this.categories, routines: this.routines, history: this.history };
    document.getElementById('backup-data').value = JSON.stringify(data, null, 2);
    document.getElementById('modal-backup').classList.add('active');
  }

  copyBackup() {
    const ta = document.getElementById('backup-data');
    ta.select();
    document.execCommand('copy');
    alert("Données copiées !");
  }

  restoreBackup() {
    try {
      const data = JSON.parse(document.getElementById('backup-data').value);
      if (!data.routines || !data.history) { alert("Format invalide."); return; }
      this.categories = data.categories || [...defaultCategories];
      // On retire type et options si ça vient du mauvais backup de la V2.5
      this.routines   = data.routines.map(r => { delete r.type; delete r.options; return r; });
      this.history    = data.history;
      this.saveData();
      this.closeModal('modal-backup');
      this.render();
      alert("Restauration réussie !");
    } catch (e) {
      alert("Erreur de restauration. JSON invalide.");
    }
  }

  exportToFile() {
    const data = { categories: this.categories, routines: this.routines, history: this.history };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `os-routines-backup-${this.getTodayStr()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  triggerFileImport() {
    document.getElementById('backup-file-input').click();
  }

  handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.routines || !data.history) { alert("Format de fichier invalide."); return; }
        this.categories = data.categories || [...defaultCategories];
        this.routines   = data.routines.map(r => { delete r.type; delete r.options; return r; });
        this.history    = data.history;
        this.saveData();
        this.closeModal('modal-backup');
        this.render();
        alert("Fichier importé avec succès !");
      } catch (err) {
        alert("Erreur de lecture. Le fichier n'est pas un JSON valide.");
      }
      // Réinitialiser l'input pour permettre de réimporter le même fichier si besoin
      event.target.value = "";
    };
    reader.readAsText(file);
  }

  forceUpdate() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(r => r.unregister());
        window.location.reload(true);
      });
    } else {
      window.location.reload(true);
    }
  }
}

const app = new App();
