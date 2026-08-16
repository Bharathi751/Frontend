/**
 * ============================================================================
 * MODEL: FeatureModel
 * Purpose: Provides data schema for 8 smart city modular features.
 * Architecture: IT Enterprise MVC - Model Layer
 * ============================================================================
 */

class FeatureModel {
    constructor() {
        this.features = [
            {
                id: "green-energy",
                emoji: "🌱",
                title: "Green Energy",
                desc: "Decentralized solar glass, wind micro-turbines, and kinetic walkways feeding hydrogen battery reserves.",
                tag: "100% Zero-Carbon",
                colorClass: "text-cyan-400"
            },
            {
                id: "intelligent-traffic",
                emoji: "🚦",
                title: "Intelligent Traffic",
                desc: "AI-synchronized adaptive signals, lane prioritization, and emergency vehicle auto-clearance.",
                tag: "Zero Congestion",
                colorClass: "text-blue-400"
            },
            {
                id: "smart-homes",
                emoji: "🏠",
                title: "Smart Homes",
                desc: "Ambient intelligence, biometric personalization, predictive climate control, and localized solar storage.",
                tag: "IoT Integrated",
                colorClass: "text-purple-400"
            },
            {
                id: "smart-healthcare",
                emoji: "🏥",
                title: "Smart Healthcare",
                desc: "Emergency medical drones, wearable telemetry monitoring, and AI predictive epidemic response.",
                tag: "2-Min Drone Response",
                colorClass: "text-emerald-400"
            },
            {
                id: "smart-water",
                emoji: "🚰",
                title: "Smart Water Management",
                desc: "Acoustic leak detection, greywater automated recycling, and real-time mineral purification monitoring.",
                tag: "99.9% Recycled",
                colorClass: "text-cyan-400"
            },
            {
                id: "ai-security",
                emoji: "🔐",
                title: "AI Security",
                desc: "Privacy-preserving biometric encryption, automated fire defense drones, and rapid crisis response.",
                tag: "Quantum Encrypted",
                colorClass: "text-purple-400"
            },
            {
                id: "smart-environment",
                emoji: "🌳",
                title: "Smart Environment",
                desc: "Vertical forest irrigation, automated urban cooling mist, and hyper-local atmospheric AQI sensors.",
                tag: "Bio-Regenerative",
                colorClass: "text-emerald-400"
            },
            {
                id: "autonomous-transit",
                emoji: "🚆",
                title: "Autonomous Transportation",
                desc: "Hyper-synchronized EV pods, magnetic levitation express trains, and zero-collision routing.",
                tag: "100% Autonomous",
                colorClass: "text-blue-400"
            }
        ];
    }

    getAllFeatures() {
        return [...this.features];
    }
}

if (typeof window !== 'undefined') {
    window.FeatureModel = FeatureModel;
}
