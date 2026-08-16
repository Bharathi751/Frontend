/**
 * ============================================================================
 * MODEL: TechnologyModel
 * Purpose: Provides data schema and deep specifications for city technologies.
 * Architecture: IT Enterprise MVC - Model Layer
 * ============================================================================
 */

class TechnologyModel {
    constructor() {
        this.technologies = [
            {
                id: "ai-intelligence",
                title: "AI Intelligence",
                category: "Neural Core",
                icon: "fa-solid fa-brain",
                image: "assets/images/ai-brain.svg",
                badge: "Deep Learning Core",
                shortDesc: "Artificial Intelligence continuously analyzes petabytes of real-time municipal data to predict traffic surges, optimize municipal budgets, and make automated decisions.",
                fullSpec: "Our deep learning neural networks act as the central nervous system for 2035 cities. They predict energy spikes, autonomously coordinate emergency services within seconds, and simulate urban growth with precision digital twins. Trained across trillions of urban data parameters with continuous reinforcement learning.",
                specs: [
                    { label: "Inference Latency", value: "0.38 ms" },
                    { label: "Throughput", value: "1.2M QPS" },
                    { label: "Decisions / Day", value: "480M+" }
                ]
            },
            {
                id: "iot-mesh",
                title: "Internet of Things",
                category: "6G Mesh Grid",
                icon: "fa-solid fa-satellite-dish",
                image: "assets/images/iot-sensors.svg",
                badge: "1.4B Active Nodes",
                shortDesc: "Billions of connected micro-sensors and edge devices monitor air purity, structural integrity, water pipelines, and pedestrian flow in real time with 6G mesh protocols.",
                fullSpec: "Every streetlamp, bridge, water pipe, and building foundation houses self-powered nano-sensors. Over 1.4 billion endpoints continuously stream environmental telemetry back to decentralized edge data centers with zero data packet loss.",
                specs: [
                    { label: "Protocol", value: "6G Ultra-Mesh" },
                    { label: "Node Density", value: "25,000 / km²" },
                    { label: "Power Draw", value: "Zero (Kinetic / Solar)" }
                ]
            },
            {
                id: "smart-transport",
                title: "Smart Transportation",
                category: "Autonomous V2X",
                icon: "fa-solid fa-car-side",
                image: "assets/images/smart-transport.svg",
                badge: "Zero Collisions",
                shortDesc: "Autonomous electric vehicles, AI-synchronized traffic lights, and self-scheduling magnetic public transport work harmoniously to virtually eliminate accidents and commute congestion.",
                fullSpec: "Integrated vehicle-to-everything (V2X) communication allows autonomous shuttles and delivery drones to cross intersections without stopping, reducing travel time across the metropolis by 85%.",
                specs: [
                    { label: "Safety Rating", value: "99.999% Zero Collision" },
                    { label: "Commute Reduction", value: "-42 min avg" },
                    { label: "Fleet Electrification", value: "100%" }
                ]
            },
            {
                id: "smart-energy",
                title: "Smart Energy",
                category: "Renewable Grid",
                icon: "fa-solid fa-solar-panel",
                image: "assets/images/green-energy.svg",
                badge: "Net-Zero Carbon",
                shortDesc: "100% renewable power generated through transparent solar facades, kinetic pavements, and distributed hydrogen storage grids that balance energy loads in real time.",
                fullSpec: "Buildings act as decentralized power plants that generate surplus clean energy during daylight and feed it into city-wide solid-state battery reserves for night usage, achieving absolute carbon neutrality.",
                specs: [
                    { label: "Renewable Share", value: "100%" },
                    { label: "Grid Waste", value: "< 0.2%" },
                    { label: "Storage Tech", value: "Hydrogen + Solid-State" }
                ]
            }
        ];
    }

    getAllTechnologies() {
        return [...this.technologies];
    }

    getTechnologyById(id) {
        return this.technologies.find(tech => tech.id === id) || null;
    }
}

if (typeof window !== 'undefined') {
    window.TechnologyModel = TechnologyModel;
}
