/**
 * ============================================================================
 * MODEL: TimelineModel
 * Purpose: Provides data for the 24-Hour Autonomous Smart City schedule.
 * Architecture: IT Enterprise MVC - Model Layer
 * ============================================================================
 */

class TimelineModel {
    constructor() {
        this.schedule = [
            {
                time: "06:00 AM",
                phase: "Dawn Sync",
                title: "Smart Home Energy Optimization",
                desc: "Smart homes optimize energy usage, charging vehicles and adjusting climate from stored solar power.",
                icon: "fa-solid fa-sun",
                color: "cyan"
            },
            {
                time: "08:00 AM",
                phase: "Morning Commute",
                title: "AI Traffic Management",
                desc: "AI signals synchronize with rush hour traffic, keeping transit smooth, green, and stop-free.",
                icon: "fa-solid fa-route",
                color: "blue"
            },
            {
                time: "12:00 PM",
                phase: "Solar Peak",
                title: "Smart Buildings Adjust Climate",
                desc: "Commercial spires dynamically tint smart windows and balance HVAC loads during maximum solar exposure.",
                icon: "fa-solid fa-building",
                color: "purple"
            },
            {
                time: "05:00 PM",
                phase: "Evening Flow",
                title: "Autonomous Transit Congestion Relief",
                desc: "Autonomous public transport scales pod counts dynamically to eliminate peak congestion.",
                icon: "fa-solid fa-bus-simple",
                color: "indigo"
            },
            {
                time: "10:00 PM",
                phase: "Night Guard",
                title: "AI City Security & Ambient Dimming",
                desc: "AI-powered surveillance & drone nodes monitor quiet streets, automated streetlights dim to conserve power.",
                icon: "fa-solid fa-shield-halved",
                color: "emerald"
            }
        ];
    }

    getSchedule() {
        return [...this.schedule];
    }
}

if (typeof window !== 'undefined') {
    window.TimelineModel = TimelineModel;
}
