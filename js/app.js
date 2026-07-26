/* ==========================================================================
   Pedagogical Friction & Tertiary Algorithmicity
   Application Core Engine & Interactive State Manager
   Author: Micah J. Miner
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    activeModule: 'module-1',
    activeStageId: 'stage-5',
    selectedStreamId: 'stream-1',
    currentScenarioIndex: 0,
    userScenarioChoices: {},
    userRationales: {},
    badges: {
      mediaEcologist: false,
      frictionArchitect: false,
      methodologicalSage: false,
      criticalTechnoskeptic: false
    },
    activeReaderTab: 'ch1',
    searchQuery: ''
  };

  // DOM Elements Initialization
  initNavigation();
  initModule1Timeline();
  initModule2Crucible();
  initModule3Lab();
  initModule4Citations();
  initModule5Reader();
  initModule6Reflection();
  updateQuestTracker();

  // Navigation Controller
  function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-item-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetModule = e.target.getAttribute('data-module');
        if (targetModule) {
          switchModule(targetModule);
        }
      });
    });
  }

  function switchModule(moduleId) {
    state.activeModule = moduleId;
    
    // Update nav button active states
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      if (btn.getAttribute('data-module') === moduleId) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      }
    });

    // Toggle module sections
    document.querySelectorAll('.module-section').forEach(sec => {
      if (sec.id === moduleId) {
        sec.classList.add('active-module');
      } else {
        sec.classList.remove('active-module');
      }
    });

    // Check quest badges
    if (moduleId === 'module-1') unlockBadge('mediaEcologist');
    if (moduleId === 'module-3') unlockBadge('frictionArchitect');
    if (moduleId === 'module-5') unlockBadge('methodologicalSage');
    if (moduleId === 'module-2') unlockBadge('criticalTechnoskeptic');

    updateQuestTracker();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // MODULE 1: Media Ecology Stage Journey
  function initModule1Timeline() {
    const stagesContainer = document.getElementById('timeline-stages');
    if (!stagesContainer) return;

    stagesContainer.innerHTML = LIT_DATA.stages.map(stage => `
      <div class="stage-card ${stage.id === state.activeStageId ? 'active-stage' : ''}" data-stage-id="${stage.id}">
        <span class="stage-number">${stage.number}</span>
        <h3 class="stage-title">${stage.name}</h3>
        <span class="stage-period">${stage.period}</span>
      </div>
    `).join('');

    stagesContainer.querySelectorAll('.stage-card').forEach(card => {
      card.addEventListener('click', () => {
        const stageId = card.getAttribute('data-stage-id');
        state.activeStageId = stageId;
        renderStageDetail(stageId);
        stagesContainer.querySelectorAll('.stage-card').forEach(c => c.classList.remove('active-stage'));
        card.classList.add('active-stage');
      });
    });

    renderStageDetail(state.activeStageId);
    renderRupturesAndPressures();
  }

  function renderStageDetail(stageId) {
    const stage = LIT_DATA.stages.find(s => s.id === stageId);
    const detailPanel = document.getElementById('stage-detail-panel');
    if (!stage || !detailPanel) return;

    detailPanel.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="font-mono text-gold" style="font-weight: 700;">${stage.number} · ${stage.scholar}</span>
        <h2 style="font-size: 2rem; margin: 6px 0 12px;">${stage.name} (${stage.period})</h2>
        <p style="font-size: 1.1rem; color: var(--mjm-ink);">${stage.summary}</p>
      </div>
      <div class="stage-detail-grid">
        <div class="detail-block">
          <div class="detail-block-title">Noetic World & Cognitive Operations</div>
          <p style="color: var(--mjm-muted); font-size: 0.95rem;">${stage.details.noeticWorld}</p>
        </div>
        <div class="detail-block">
          <div class="detail-block-title">Gain & Loss Pattern / Media Rupture</div>
          <p style="color: var(--mjm-muted); font-size: 0.95rem;">${stage.details.gainAndLoss}</p>
        </div>
      </div>
    `;
  }

  function renderRupturesAndPressures() {
    const rupturesContainer = document.getElementById('ruptures-container');
    const pressuresContainer = document.getElementById('pressures-container');

    if (rupturesContainer) {
      rupturesContainer.innerHTML = LIT_DATA.rupturedAssumptions.map(r => `
        <div class="rupture-card">
          <span class="font-mono text-rust" style="font-size: 0.75rem; font-weight: 700;">Ruptured Ong Assumption</span>
          <h4 style="font-size: 1.15rem; margin: 6px 0 10px;">${r.name}</h4>
          <p style="font-size: 0.88rem; color: var(--mjm-muted); margin-bottom: 8px;"><strong>Ong Baseline:</strong> ${r.ongBaseline}</p>
          <p style="font-size: 0.88rem; color: var(--mjm-ink);"><strong>Tertiary Rupture:</strong> ${r.tertiaryRupture}</p>
        </div>
      `).join('');
    }

    if (pressuresContainer) {
      pressuresContainer.innerHTML = LIT_DATA.mediaEcologicalPressures.map(p => `
        <div class="pressure-card">
          <span class="font-mono text-violet" style="font-size: 0.75rem; font-weight: 700;">Media-Ecological Pressure</span>
          <h4 style="font-size: 1.15rem; margin: 6px 0 6px;">${p.name} <span style="font-size: 0.8rem; font-weight: normal; color: var(--mjm-muted);">(${p.dimension})</span></h4>
          <p style="font-size: 0.88rem; color: var(--mjm-muted); margin-bottom: 10px;">${p.desc}</p>
          <div style="background: rgba(170, 161, 220, 0.1); border: 1px solid var(--mjm-violet); padding: 8px 12px; border-radius: 4px; font-size: 0.82rem;" class="font-mono text-violet">
            <strong>Framework Counterpart:</strong> ${p.counterpart}
          </div>
        </div>
      `).join('');
    }
  }

  // MODULE 2: Dialectical Crucible
  function initModule2Crucible() {
    const grid = document.getElementById('crucible-grid');
    if (!grid) return;

    grid.innerHTML = LIT_DATA.theoreticalStreams.map(stream => `
      <div class="stream-card ${stream.id === state.selectedStreamId ? 'selected-stream' : ''}" data-stream-id="${stream.id}">
        <span class="font-mono text-gold" style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Theoretical Stream</span>
        <h4 style="font-size: 1.1rem; margin: 8px 0;">${stream.name}</h4>
        <p style="font-size: 0.8rem; color: var(--mjm-muted); font-style: italic; margin-bottom: 10px;">${stream.scholars}</p>
        <p style="font-size: 0.85rem; color: var(--mjm-ink);">${stream.keyIdeas.substring(0, 110)}...</p>
      </div>
    `).join('');

    grid.querySelectorAll('.stream-card').forEach(card => {
      card.addEventListener('click', () => {
        const streamId = card.getAttribute('data-stream-id');
        state.selectedStreamId = streamId;
        grid.querySelectorAll('.stream-card').forEach(c => c.classList.remove('selected-stream'));
        card.classList.add('selected-stream');
        renderStreamDetail(streamId);
      });
    });

    renderStreamDetail(state.selectedStreamId);
  }

  function renderStreamDetail(streamId) {
    const stream = LIT_DATA.theoreticalStreams.find(s => s.id === streamId);
    const detailBox = document.getElementById('stream-detail-box');
    if (!stream || !detailBox) return;

    detailBox.innerHTML = `
      <h3 style="font-size: 1.4rem; color: var(--mjm-gold); margin-bottom: 8px;">${stream.name}</h3>
      <p style="font-family: var(--mjm-mono); font-size: 0.85rem; color: var(--mjm-teal); margin-bottom: 16px;">Key Scholars: ${stream.scholars}</p>
      <div style="background: var(--mjm-surface-2); padding: 18px; border-radius: var(--radius-sm); border: 1px solid var(--mjm-line); margin-bottom: 16px;">
        <h4 style="font-size: 0.9rem; font-family: var(--mjm-mono); color: var(--mjm-ink); text-transform: uppercase; margin-bottom: 6px;">Core Theoretical Propositions</h4>
        <p style="color: var(--mjm-muted); font-size: 0.95rem;">${stream.keyIdeas}</p>
      </div>
      <div style="background: rgba(240, 189, 69, 0.08); padding: 18px; border-radius: var(--radius-sm); border: 1px solid var(--mjm-gold);">
        <h4 style="font-size: 0.9rem; font-family: var(--mjm-mono); color: var(--mjm-gold); text-transform: uppercase; margin-bottom: 6px;">Dissertation Convergence & Synthesis</h4>
        <p style="color: var(--mjm-ink); font-size: 0.95rem;">${stream.roleInDissertation}</p>
      </div>
    `;
  }

  // MODULE 3: Gamified Friction Classifier Lab
  function initModule3Lab() {
    renderCurrentScenario();

    const nextBtn = document.getElementById('lab-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.currentScenarioIndex < SCENARIOS.length - 1) {
          state.currentScenarioIndex++;
          renderCurrentScenario();
        } else {
          switchModule('module-6');
        }
      });
    }
  }

  function renderCurrentScenario() {
    const scen = SCENARIOS[state.currentScenarioIndex];
    const container = document.getElementById('scenario-container');
    if (!scen || !container) return;

    const currentChoice = state.userScenarioChoices[scen.id];

    container.innerHTML = `
      <div class="scenario-header-bar">
        <span class="font-mono text-gold" style="font-size: 0.8rem; font-weight: 700;">Scenario ${state.currentScenarioIndex + 1} of ${SCENARIOS.length} · ${scen.context}</span>
        <span class="badge-pill unlocked font-mono">Practitioner Lab Active</span>
      </div>
      <div class="scenario-card">
        <h3 class="scenario-title">${scen.title}</h3>
        <p class="scenario-body">${scen.description}</p>
      </div>
      <h4 style="font-family: var(--mjm-mono); font-size: 0.85rem; text-transform: uppercase; color: var(--mjm-muted); margin-bottom: 14px;">Classify this instructional dilemma:</h4>
      <div class="options-grid">
        ${scen.options.map(opt => `
          <button class="option-btn ${currentChoice === opt.id ? 'selected' : ''}" data-option-id="${opt.id}">
            <span class="option-type-tag">${opt.category}</span>
            <strong style="font-size: 0.98rem; font-family: var(--mjm-display);">${opt.label}</strong>
          </button>
        `).join('')}
      </div>
      <div id="feedback-panel" class="feedback-panel ${currentChoice ? 'active-feedback' : ''}">
        ${currentChoice ? getOptionFeedbackHTML(scen, currentChoice) : ''}
      </div>
    `;

    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const optionId = btn.getAttribute('data-option-id');
        state.userScenarioChoices[scen.id] = optionId;
        renderCurrentScenario();
      });
    });

    // Update rationale text if present
    const rationaleArea = document.getElementById('scen-rationale-text');
    if (rationaleArea) {
      rationaleArea.value = state.userRationales[scen.id] || '';
      rationaleArea.addEventListener('input', (e) => {
        state.userRationales[scen.id] = e.target.value;
      });
    }
  }

  function getOptionFeedbackHTML(scen, optionId) {
    const opt = scen.options.find(o => o.id === optionId);
    if (!opt) return '';

    return `
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
        <span class="badge-pill unlocked font-mono" style="background: ${opt.isCorrect ? 'rgba(103,185,170,0.2)' : 'rgba(220,137,94,0.2)'}; color: ${opt.isCorrect ? 'var(--mjm-teal)' : 'var(--mjm-rust)'};">
          ${opt.isCorrect ? 'Correct Classification' : 'Workable Alternative / Distinction'}
        </span>
      </div>
      <p style="color: var(--mjm-ink); font-size: 0.95rem; line-height: 1.6; margin-bottom: 14px;">${opt.feedback}</p>
      <div class="rationale-input-group">
        <label style="font-family: var(--mjm-mono); font-size: 0.75rem; color: var(--mjm-muted); display: block; margin-bottom: 6px;" for="scen-rationale-text">
          Practitioner Reflection Note (Optional):
        </label>
        <textarea id="scen-rationale-text" class="rationale-textarea" placeholder="Record your rationale for committee/peer reflection..."></textarea>
      </div>
    `;
  }

  // MODULE 4: Citation Nexus & Scholar Graph
  function initModule4Citations() {
    const searchInput = document.getElementById('citation-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        renderCitationsGrid();
      });
    }
    renderCitationsGrid();
  }

  function renderCitationsGrid() {
    const grid = document.getElementById('citations-grid');
    if (!grid) return;

    const filtered = CITATIONS.filter(c => 
      c.author.toLowerCase().includes(state.searchQuery) ||
      c.title.toLowerCase().includes(state.searchQuery) ||
      c.domain.toLowerCase().includes(state.searchQuery) ||
      c.relevance.toLowerCase().includes(state.searchQuery)
    );

    grid.innerHTML = filtered.map(c => `
      <div class="citation-card" data-citation-id="${c.id}">
        <div>
          <span class="citation-tag-pill">${c.domain}</span>
          <h4 class="citation-author" style="margin-top: 8px;">${c.author} (${c.year})</h4>
          <p class="citation-work">${c.title}</p>
          <p style="font-size: 0.85rem; color: var(--mjm-ink); font-style: italic; margin-bottom: 12px;">"${c.quote}"</p>
        </div>
        <p style="font-size: 0.8rem; color: var(--mjm-muted); border-top: 1px solid var(--mjm-line); padding-top: 8px;">
          <strong>Relevance:</strong> ${c.relevance.substring(0, 90)}...
        </p>
      </div>
    `).join('');

    grid.querySelectorAll('.citation-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-citation-id');
        openCitationModal(id);
      });
    });
  }

  function openCitationModal(id) {
    const c = CITATIONS.find(item => item.id === id);
    const modal = document.getElementById('citation-modal');
    const content = document.getElementById('modal-content');
    if (!c || !modal || !content) return;

    content.innerHTML = `
      <span class="citation-tag-pill" style="margin-bottom: 12px;">${c.domain}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 4px;">${c.author} (${c.year})</h2>
      <p style="font-size: 1.1rem; color: var(--mjm-gold); font-style: italic; margin-bottom: 16px;">${c.title}</p>
      <div style="background: var(--mjm-surface-2); padding: 18px; border-radius: var(--radius-sm); border-left: 3px solid var(--mjm-teal); margin-bottom: 20px;">
        <p style="font-size: 1rem; color: var(--mjm-ink); font-style: italic;">"${c.quote}"</p>
      </div>
      <h4 style="font-family: var(--mjm-mono); font-size: 0.85rem; color: var(--mjm-teal); text-transform: uppercase; margin-bottom: 6px;">Theoretical Relevance & Framework Connection</h4>
      <p style="color: var(--mjm-ink); font-size: 0.95rem; line-height: 1.6;">${c.relevance}</p>
    `;

    modal.classList.add('active-modal');
  }

  // Close Modal Handler
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('citation-modal').classList.remove('active-modal');
    });
  }

  // MODULE 5: Reader Tabs
  function initModule5Reader() {
    const tabs = document.querySelectorAll('.reader-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.target.getAttribute('data-tab');
        state.activeReaderTab = targetTab;
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');

        document.querySelectorAll('.reader-article').forEach(art => {
          if (art.id === `reader-${targetTab}`) {
            art.style.display = 'block';
          } else {
            art.style.display = 'none';
          }
        });
      });
    });
  }

  // MODULE 6: Reflection Audit Exporter
  function initModule6Reflection() {
    const exportBtn = document.getElementById('export-reflection-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Helper Functions
  function unlockBadge(badgeKey) {
    if (!state.badges[badgeKey]) {
      state.badges[badgeKey] = true;
    }
  }

  function updateQuestTracker() {
    const totalBadges = Object.keys(state.badges).length;
    const unlockedCount = Object.values(state.badges).filter(Boolean).length;
    const percent = Math.round((unlockedCount / totalBadges) * 100);

    const fill = document.getElementById('quest-progress-fill');
    const text = document.getElementById('quest-progress-text');

    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `${unlockedCount} / ${totalBadges} Quests (${percent}%)`;

    Object.keys(state.badges).forEach(key => {
      const pill = document.getElementById(`badge-${key}`);
      if (pill) {
        if (state.badges[key]) {
          pill.classList.add('unlocked');
        } else {
          pill.classList.remove('unlocked');
        }
      }
    });
  }
});
