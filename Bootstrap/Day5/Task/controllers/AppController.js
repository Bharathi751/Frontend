/**
 * ============================================================================
 * CONTROLLER: AppController
 * Purpose: Controls application navigation, sticky navbar, mobile menus & toasts.
 * Architecture: IT Enterprise MVC - Controller Layer
 * ============================================================================
 */

class AppController {
    constructor() {
        this.initNavbar();
        this.initMobileMenu();
        this.initSmoothScroll();
    }

    /**
     * Initializes dynamic sticky navbar styling
     */
    initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('shadow-lg', 'shadow-black/50', 'bg-dark-950/95');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/50', 'bg-dark-950/95');
            }
        });
    }

    /**
     * Handles mobile menu drawer open/close
     */
    initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (!mobileMenuBtn || !mobileMenu) return;

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            if (menuIcon) {
                menuIcon.className = isHidden ? 'fa-solid fa-bars-staggered text-lg' : 'fa-solid fa-xmark text-lg';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuIcon) {
                    menuIcon.className = 'fa-solid fa-bars-staggered text-lg';
                }
            });
        });
    }

    /**
     * Initializes smooth scrolling for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    /**
     * Show notification toast
     */
    showToast(message, type = 'success') {
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = 'pointer-events-auto flex items-center gap-3 p-4 rounded-xl glass-panel border border-cyan-500/30 text-white text-xs shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0';
        toast.innerHTML = `
            <div class="w-7 h-7 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 text-sm">
                <i class="${type === 'success' ? 'fa-solid fa-circle-check text-emerald-400' : 'fa-solid fa-circle-info text-cyan-400'}"></i>
            </div>
            <div class="flex-1 font-medium">${message}</div>
        `;

        toastContainer.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-4', 'opacity-0');
        });

        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-6');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
}

if (typeof window !== 'undefined') {
    window.AppController = AppController;
}
