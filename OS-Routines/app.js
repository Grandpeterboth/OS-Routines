const defaultRoutines = [
  { id: '1', name: 'ENT/msg', cat: 'boite', days: [1,2,3,4,5] },
  { id: '2', name: 'webmel/msg', cat: 'boite', days: [0,1,2,3,4,5,6] },
  { id: '3', name: 'Gmail', cat: 'boite', days: [1,4] },
  { id: '4', name: 'sms/Whatsapp', cat: 'boite', days: [0,1,2,3,4,5,6] },
  { id: '5', name: 'OS', cat: 'boite', days: [0,1,2,3,4,5,6] },
  
  { id: '6', name: 'Barette', cat: 'menage', days: [1,4] },
  { id: '7', name: 'SDB/WC', cat: 'menage', days: [0,1,2,3,4,5,6] },
  { id: '8', name: 'Cuisine', cat: 'menage', days: [0,1,2,3,4,5,6] },
  { id: '9', name: 'Haut poussière +', cat: 'menage', days: [0,1,2,3,4,5,6] },
  { id: '10', name: 'Aspi', cat: 'menage', days: [3,6,0] },
  { id: '11', name: 'Rangement', cat: 'menage', days: [0,1,2,3,4,5,6] },
  
  { id: '12', name: 'Plats semaine', cat: 'cuisine', days: [6,0] },
  { id: '13', name: 'Plats semaine prépa', cat: 'cuisine', days: [5] },
  { id: '14', name: 'Salade / Fruit', cat: 'cuisine', days: [0,1,2,3,4,5,6] },
  { id: '15', name: 'Courses communes', cat: 'cuisine', days: [5] }
];

const categoryLabels = {
  boite: 'Boîte Entrée',
  menage: 'Ménage',
  cuisine: 'Cuisine'
};

const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

class App {
  constructor() {
    this.routines = [];
    this.history = {}; // { 'YYYY-MM-DD': ['id1', 'id2'] }
    this.currentDateStr = this.getTodayStr();
    this.currentTab = 'today';
    
    this.init();
  }
  
  init() {
    this.loadData();
    this.setupListeners();
    this.render();
    
    // Vérification du changement de jour toutes les minutes
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
  
  loadData() {
    const savedRoutines = localStorage.getItem('os-routines');
    if (savedRoutines) {
      this.routines = JSON.parse(savedRoutines);
    } else {
      this.routines = [...defaultRoutines];
      this.saveRoutines();
    }
    
    const savedHistory = localStorage.getItem('os-history');
    if (savedHistory) {
      this.history = JSON.parse(savedHistory);
    }
  }
  
  saveRoutines() {
    localStorage.setItem('os-routines', JSON.stringify(this.routines));
  }
  
  saveHistory() {
    localStorage.setItem('os-history', JSON.stringify(this.history));
  }
  
  toggleTask(id) {
    if (!this.history[this.currentDateStr]) {
      this.history[this.currentDateStr] = [];
    }
    const completedToday = this.history[this.currentDateStr];
    const index = completedToday.indexOf(id);
    
    if (index > -1) {
      completedToday.splice(index, 1);
    } else {
      completedToday.push(id);
    }
    
    this.saveHistory();
    this.render();
  }
  
  isCompleted(id) {
    return this.history[this.currentDateStr]?.includes(id) || false;
  }
  
  setupListeners() {
    // Sélection de jours dans la modale
    document.querySelectorAll('.day-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.target.classList.toggle('selected');
      });
    });
  }
  
  switchTab(tabId) {
    this.currentTab = tabId;
    
    // Update nav classes
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Update views
    document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${tabId}`).classList.add('active');
    
    this.render();
  }
  
  render() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('display-date').textContent = new Date().toLocaleDateString('fr-FR', options).replace(/^./, c => c.toUpperCase());
    
    const d = new Date();
    const todayDayOfWeek = d.getDay();
    
    const todayTasks = this.routines.filter(r => r.days.includes(todayDayOfWeek));
    
    if (this.currentTab === 'today') {
      this.renderTaskList('today-container', todayTasks, true);
      this.updateProgress(todayTasks);
    } else if (this.currentTab === 'all') {
      this.renderTaskList('all-container', this.routines, false);
      this.updateProgress(todayTasks); // Keep progress logic based on today's tasks
    } else if (this.currentTab === 'manage') {
      this.renderManageList();
    }
  }
  
  updateProgress(todayTasks) {
    if (todayTasks.length === 0) {
      document.getElementById('progress-bar').style.width = '100%';
      document.getElementById('progress-text').textContent = "Aucune tâche aujourd'hui !";
      return;
    }
    
    let completed = 0;
    todayTasks.forEach(task => {
      if (this.isCompleted(task.id)) completed++;
    });
    
    const percent = Math.round((completed / todayTasks.length) * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-text').textContent = `${percent}% complété (${completed}/${todayTasks.length})`;
  }
  
  renderTaskList(containerId, tasks, filterEmptyCategories) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (tasks.length === 0) {
      container.innerHTML = `<div class="empty-state">Rien de prévu !</div>`;
      return;
    }
    
    const byCategory = { boite: [], menage: [], cuisine: [] };
    tasks.forEach(t => {
      if(byCategory[t.cat]) byCategory[t.cat].push(t);
    });
    
    Object.keys(byCategory).forEach(cat => {
      const catTasks = byCategory[cat];
      if (filterEmptyCategories && catTasks.length === 0) return;
      
      const section = document.createElement('div');
      section.className = 'category-section';
      
      let icon = '';
      if(cat === 'boite') icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
      if(cat === 'menage') icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.6 4.3 2.1 6.7-5.5-4-5.5 4 2.1-6.7L2 9h7z"/></svg>`;
      if(cat === 'cuisine') icon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 18 18"/><path d="m14 8 2.2 2.2c.4.4.4 1 0 1.4l-6.4 6.4c-.4.4-1 .4-1.4 0L6.2 15.8c-.4-.4-.4-1 0-1.4l6.4-6.4c.4-.4 1-.4 1.4 0z"/></svg>`;
      
      let html = `<div class="category-title ${cat}">${icon} ${categoryLabels[cat]}</div><div class="task-list">`;
      
      catTasks.forEach(task => {
        const checked = this.isCompleted(task.id);
        const daysText = task.days.length === 7 ? 'Tous les jours' : task.days.map(d => dayNames[d]).join(', ');
        
        html += `
          <div class="task-card ${checked ? 'checked' : ''}" data-cat="${task.cat}" onclick="app.toggleTask('${task.id}')">
            <div class="task-info">
              <span class="task-name">${task.name}</span>
              <span class="task-days">${daysText}</span>
            </div>
            <div class="task-checkbox">${checked ? checkIcon : ''}</div>
          </div>
        `;
      });
      html += `</div>`;
      section.innerHTML = html;
      container.appendChild(section);
    });
  }
  
  renderManageList() {
    const container = document.getElementById('manage-container');
    container.innerHTML = '';
    
    this.routines.forEach(task => {
      const daysText = task.days.length === 7 ? 'Tous les jours' : task.days.map(d => dayNames[d]).join(', ');
      const div = document.createElement('div');
      div.className = 'edit-task-card';
      div.innerHTML = `
        <div class="task-info">
          <span class="task-name" style="color:var(--text-main)">${task.name}</span>
          <span class="task-days">${categoryLabels[task.cat]} • ${daysText}</span>
        </div>
        <div class="edit-actions">
          <button class="icon-btn primary" onclick="app.editRoutine('${task.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="icon-btn danger" onclick="app.deleteRoutine('${task.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      `;
      container.appendChild(div);
    });
  }
  
  showRoutineModal(id = null) {
    const modal = document.getElementById('modal-routine');
    const title = document.getElementById('modal-title');
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('selected'));
    
    if (id) {
      const routine = this.routines.find(r => r.id === id);
      title.textContent = "Modifier la routine";
      document.getElementById('form-id').value = routine.id;
      document.getElementById('form-name').value = routine.name;
      document.getElementById('form-cat').value = routine.cat;
      routine.days.forEach(d => {
        document.querySelector(`.day-btn[data-day="${d}"]`).classList.add('selected');
      });
    } else {
      title.textContent = "Nouvelle Routine";
      document.getElementById('form-id').value = '';
      document.getElementById('form-name').value = '';
      document.getElementById('form-cat').value = 'boite';
    }
    
    modal.classList.add('active');
  }
  
  closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
  }
  
  saveRoutine() {
    const id = document.getElementById('form-id').value || Date.now().toString();
    const name = document.getElementById('form-name').value.trim();
    const cat = document.getElementById('form-cat').value;
    
    const days = [];
    document.querySelectorAll('.day-btn.selected').forEach(b => {
      days.push(parseInt(b.getAttribute('data-day')));
    });
    
    if (!name || days.length === 0) {
      alert("Veuillez saisir un nom et sélectionner au moins un jour.");
      return;
    }
    
    const routine = { id, name, cat, days };
    
    const existingIndex = this.routines.findIndex(r => r.id === id);
    if (existingIndex > -1) {
      this.routines[existingIndex] = routine;
    } else {
      this.routines.push(routine);
    }
    
    this.saveRoutines();
    this.closeModal('modal-routine');
    this.render();
  }
  
  editRoutine(id) {
    this.showRoutineModal(id);
  }
  
  deleteRoutine(id) {
    if (confirm("Supprimer cette routine ?")) {
      this.routines = this.routines.filter(r => r.id !== id);
      this.saveRoutines();
      this.render();
    }
  }
  
  showBackupModal() {
    const data = {
      routines: this.routines,
      history: this.history
    };
    document.getElementById('backup-data').value = JSON.stringify(data, null, 2);
    document.getElementById('modal-backup').classList.add('active');
  }
  
  copyBackup() {
    const text = document.getElementById('backup-data');
    text.select();
    document.execCommand('copy');
    alert("Données copiées !");
  }
  
  restoreBackup() {
    try {
      const text = document.getElementById('backup-data').value;
      const data = JSON.parse(text);
      
      if (data.routines && data.history) {
        this.routines = data.routines;
        this.history = data.history;
        this.saveRoutines();
        this.saveHistory();
        this.closeModal('modal-backup');
        this.render();
        alert("Restauration réussie !");
      } else {
        alert("Format invalide.");
      }
    } catch (e) {
      alert("Erreur de restauration. JSON invalide.");
    }
  }
}

const app = new App();
