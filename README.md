<div align="center">
  <img src="favicon.png" alt="EcotraceX Logo" width="120" />
  <h1>EcotraceX</h1>
  <p><b>Carbon Footprint Awareness Platform with AI Insights</b></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Submission](https://img.shields.io/badge/PromptWars-Virtual_2026-blue)](https://hack2skill.com)
  [![Optimization](https://img.shields.io/badge/Architecture-Single_File-success)](#)
  [![AI Powered](https://img.shields.io/badge/AI-NVIDIA_Llama_3-orange)](#)
</div>

<br/>

EcotraceX is a modern, ultra-lightweight, and fully responsive web application built to help individuals track, understand, and reduce their environmental impact. Submitted for **PromptWars Virtual 2026 - Challenge 3**, EcotraceX is engineered as a highly optimized, zero-dependency, single-file application (`index.html`) weighing under 100KB, making it lightning fast and heavily optimized for web accessibility (A11y).

---

## ✨ Key Features

*   **⚡ Zero-Dependency Architecture:** All HTML, CSS, and JS logic is consolidated into a single file. No build steps, no complex package managers, and well under the 10MB Hackathon limit.
*   **🧠 NVIDIA Llama-3 AI Insights:** Deep integration with NVIDIA's Llama-3 API to generate personalized, dynamic, and actionable carbon reduction tips based on the user's calculated footprint.
*   **📊 IPCC-Aligned Calculator:** Accurate emission factors calculating carbon impact across four major categories: Transport, Diet, Energy, and Consumption.
*   **🏆 Gamified Progress:** "Eco Hero" streaks, milestone badges, and comparative benchmarking against national and global averages to incentivize behavioral change.
*   **♿ Enterprise-Grade Accessibility:** Full keyboard navigation support, comprehensive ARIA labeling, skip links, and a dedicated High-Contrast mode for visually impaired users.
*   **📱 Mobile-First Biophilic Design:** A gorgeous, organic, fully responsive UI utilizing modern typography (Plus Jakarta Sans & Inter) and dynamic CSS variables.

---

## 🛠️ Tech Stack

*   **Core:** HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3
*   **Typography:** Google Fonts (Plus Jakarta Sans, Inter)
*   **AI Engine:** NVIDIA Llama-3 API (`integrate.api.nvidia.com`)
*   **Security:** DOMPurify (XSS prevention)

---

## 🚀 Setup & Installation

Because EcotraceX is built as a highly optimized vanilla application, deployment is instantaneous.

### Option 1: Local Testing
1. Clone the repository:
   ```bash
   git clone https://github.com/poovarasu638178-rgb/ecotracex.git
   ```
2. Open the directory:
   ```bash
   cd ecotracex
   ```
3. Open `index.html` in your favorite modern web browser. No local server is strictly required, though you can use tools like Live Server for auto-reloading.

### Option 2: Deployment
EcotraceX is perfectly primed for static hosting. You can easily deploy it manually or automatically via GitHub integrations to platforms like:
*   Vercel
*   Netlify
*   GitHub Pages

*(Note: To utilize the AI Insights feature, ensure you provide a valid NVIDIA API key when the application prompts you, or inject it securely if modifying the source code for production.)*

---

## 💻 Usage Instructions

1.  **Calculate:** Click "Start Calculating" from the home screen and fill out the simple metrics (car usage, flights, diet type, energy bill).
2.  **Review Dashboard:** View your Annual Footprint gauge and see exactly how you stack up against the global and national averages.
3.  **Get AI Insights:** Navigate to the "AI Insights" tab to receive an AI-generated, personalized plan on how to reduce your specific impact.
4.  **Track Progress:** Check the "Progress" tab to view your logging streaks and unlocked achievement badges.

---

## ⚖️ License

This project is licensed under the MIT License - see the terms below.

**MIT License**
Copyright (c) 2026 Poovarasu S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
*Built with ❤️ for the PromptWars Virtual 2026 Hackathon.*
