# Smart Cities of the Future (2035) — Enterprise MVC Web Application

An enterprise-grade, responsive futuristic web application built using standard **IT Company MVC (Model-View-Controller)** architecture.

---

## 🏛️ Project Directory & MVC Architecture

```
Task/
├── assets/                          # Static Frontend Assets
│   ├── css/
│   │   └── main.css                 # Enterprise Design System (variables, glassmorphism, glows)
│   └── images/                      # Vector Graphics & Brand Assets
│       ├── logo.svg                 # Futuristic brand vector logo
│       ├── hero-city.svg            # 2035 Metropolis skyline illustration
│       ├── ai-brain.svg             # Neural computing vector asset
│       ├── iot-sensors.svg          # 6G sensor mesh telemetry vector
│       ├── smart-transport.svg      # Autonomous V2X transit vector
│       └── green-energy.svg         # Clean renewable microgrid vector
│
├── models/                          # Data Layer (Models)
│   ├── CityDataModel.js             # Telemetry metrics, real-time live jitter simulation
│   ├── TechnologyModel.js           # Tech specs repository (AI, IoT, Transit, Energy)
│   ├── FeatureModel.js              # 8 modular smart city infrastructure features
│   └── TimelineModel.js             # 24-hour autonomous city schedule dataset
│
├── controllers/                     # Application Logic & Event Handlers (Controllers)
│   ├── AppController.js             # Navigation, sticky navbar, mobile drawer, toast system
│   ├── DashboardController.js       # Live municipal metrics ticker & telemetry binder
│   ├── TechModalController.js       # Dynamic technology spec modal rendering & event handler
│   └── ContactController.js         # Inquiry forms, validation, and feedback dispatch
│
├── views/                           # Dedicated View Pages
│   ├── technologies.html            # Core Technologies deep-dive view
│   ├── infrastructure.html          # Modular Smart Infrastructure view
│   ├── dashboard.html               # Real-time Municipal Operations Command Center view
│   ├── vision.html                  # 2035 Horizon Vision & Sustainability Pillars view
│   └── contact.html                 # Civic Tech Council & Collaboration Portal view
│
├── index.html                       # Main Enterprise Portal Entry
└── README.md                        # Project & Architecture Documentation
```

---

## 🔄 MVC Design Pattern Breakdown

| Layer | Component | Responsibility |
| :--- | :--- | :--- |
| **Model** | `CityDataModel.js` | Manages city sensor counts, power harvest stats, latency, and simulated telemetry stream. |
| **Model** | `TechnologyModel.js` | Encapsulates full system architecture specs for AI, IoT, Transport, and Energy. |
| **Model** | `FeatureModel.js` | Stores modular feature descriptions, metrics, and tags. |
| **Model** | `TimelineModel.js` | Houses the 24-hour schedule events from dawn sync to nocturnal AI defense. |
| **View** | `index.html` + `views/*.html` | Clean semantic HTML5 presentation layouts styled with Tailwind CSS & custom glassmorphism. |
| **Controller**| `AppController.js` | Listens for user navigation, scroll triggers, mobile menu toggles, and fires toast alerts. |
| **Controller**| `DashboardController.js` | Periodically requests updated state from `CityDataModel` and updates the DOM metrics dynamically. |
| **Controller**| `TechModalController.js` | Bridges user clicks on technology cards to render rich specification views from `TechnologyModel`. |
| **Controller**| `ContactController.js` | Validates citizen inquiries and newsletter submissions, coordinating feedback with `AppController`. |

---

## 🚀 How to Run the Application

No build tools or heavy Node dependencies required — the project runs directly in any modern browser:

1. Double-click `index.html` or open with any local server (e.g. VS Code Live Server / Python HTTP server).
2. Navigate between the **Main Portal**, **AI & IoT**, **Infrastructure**, **Live Telemetry**, **Future Vision**, and **Contact** pages.
3. Click any **"Learn More"** button on the technology cards to trigger dynamic specifications from `TechnologyModel`.
4. Observe the live municipal telemetry metrics updating in real time in the Operations Hub.
