/**
 * ============================================================================
 * CONTROLLER: DashboardController
 * Purpose: Controls live municipal operations dashboard, telemetry updates & animation.
 * Architecture: IT Enterprise MVC - Controller Layer
 * ============================================================================
 */

class DashboardController {
    constructor(cityDataModel) {
        this.model = cityDataModel || new CityDataModel();
        this.timer = null;
        this.init();
    }

    init() {
        this.renderMetrics();
        this.startLiveSimulation();
    }

    renderMetrics() {
        const metrics = this.model.getMetrics();

        // Update DOM elements if present on page
        const latencyElem = document.getElementById('metric-latency');
        const nodesElem = document.getElementById('metric-nodes');
        const energyHarvestElem = document.getElementById('metric-energy-harvest');

        if (latencyElem) latencyElem.textContent = `${metrics.latencyMs} ms`;
        if (nodesElem) nodesElem.textContent = Number(metrics.activeNodes).toLocaleString();
        if (energyHarvestElem) energyHarvestElem.textContent = `+${metrics.energyHarvestGWh} GWh`;
    }

    startLiveSimulation() {
        // Update telemetry every 3 seconds for realistic enterprise monitoring
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.model.simulateLiveTick();
            this.renderMetrics();
        }, 3000);
    }
}

if (typeof window !== 'undefined') {
    window.DashboardController = DashboardController;
}
