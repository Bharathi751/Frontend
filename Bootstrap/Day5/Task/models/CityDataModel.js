/**
 * ============================================================================
 * MODEL: CityDataModel
 * Purpose: Manages municipal telemetry data, real-time counters & node states.
 * Architecture: IT Enterprise MVC - Model Layer
 * ============================================================================
 */

class CityDataModel {
    constructor() {
        this.baseMetrics = {
            energyEfficiency: 98,
            trafficReduction: 85,
            connectedDevices: 92,
            carbonReduction: 76,
            activeNodes: 1489203,
            latencyMs: 0.38,
            energyHarvestGWh: 14.8,
            aqiIndex: 99.4,
            transitSyncPercent: 99.8,
            aiQueriesPerSec: 1245000
        };

        this.systemStatus = {
            status: "OPTIMAL",
            version: "v4.8.2-Enterprise",
            quantumEncryption: "ACTIVE",
            edgeNodesOnline: "100%",
            lastSyncTimestamp: new Date().toISOString()
        };
    }

    /**
     * Get all municipal telemetry metrics
     */
    getMetrics() {
        return { ...this.baseMetrics };
    }

    /**
     * Simulates real-time live network telemetry changes (jitter)
     */
    simulateLiveTick() {
        // Small realistic variations for live enterprise simulation
        const jitter = (Math.random() - 0.5) * 0.04;
        this.baseMetrics.latencyMs = Math.max(0.25, +(this.baseMetrics.latencyMs + jitter).toFixed(2));
        this.baseMetrics.activeNodes += Math.floor((Math.random() - 0.45) * 12);
        this.baseMetrics.energyHarvestGWh = +(this.baseMetrics.energyHarvestGWh + (Math.random() * 0.01)).toFixed(2);
        this.systemStatus.lastSyncTimestamp = new Date().toISOString();

        return {
            metrics: this.getMetrics(),
            system: { ...this.systemStatus }
        };
    }
}

// Global Export for browser & modular imports
if (typeof window !== 'undefined') {
    window.CityDataModel = CityDataModel;
}
