/**
 * ============================================================================
 * CONTROLLER: TechModalController
 * Purpose: Manages dynamic technology specification modal dialogues.
 * Architecture: IT Enterprise MVC - Controller Layer
 * ============================================================================
 */

class TechModalController {
    constructor(technologyModel) {
        this.model = technologyModel || new TechnologyModel();
        this.modal = document.getElementById('tech-modal');
        this.init();
    }

    init() {
        if (!this.modal) return;

        // Close on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target.id === 'tech-modal') {
                this.close();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        });
    }

    /**
     * Open modal by tech ID or direct title & description
     */
    open(techIdOrTitle, fallbackDesc = '') {
        if (!this.modal) return;

        const tech = this.model.getTechnologyById(techIdOrTitle);
        const titleElem = document.getElementById('modal-title');
        const descElem = document.getElementById('modal-desc');
        const specsContainer = document.getElementById('modal-specs-container');

        if (tech) {
            if (titleElem) titleElem.textContent = tech.title;
            if (descElem) descElem.textContent = tech.fullSpec;

            if (specsContainer && tech.specs) {
                specsContainer.innerHTML = tech.specs.map(s => `
                    <div class="p-3 rounded-xl bg-dark-900/90 border border-white/5">
                        <div class="text-[11px] text-slate-400 font-medium">${s.label}</div>
                        <div class="text-sm font-bold font-mono text-cyan-300 mt-0.5">${s.value}</div>
                    </div>
                `).join('');
                specsContainer.classList.remove('hidden');
            }
        } else {
            if (titleElem) titleElem.textContent = techIdOrTitle;
            if (descElem) descElem.textContent = fallbackDesc;
            if (specsContainer) specsContainer.classList.add('hidden');
        }

        this.modal.classList.remove('hidden');
        this.modal.classList.add('flex');
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.add('hidden');
        this.modal.classList.remove('flex');
    }
}

if (typeof window !== 'undefined') {
    window.TechModalController = TechModalController;
}
