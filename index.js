import { GoogleGenAI } from "https://aistudiocdn.com/@google/genai@^1.27.0";

// --- CONSTANTS & DATA ---

const PROJECTS = [
    {
        title: "Stock Price Prediction Using Sentiment Analysis & LSTMs",
        description: "An end-to-end pipeline to forecast Tesla stock prices by integrating historical data with real-time sentiment analysis of financial news and tweets.",
        tags: ["LSTM", "PyTorch", "Sentiment Analysis", "Hugging Face", "NLP"],
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/stock-prediction-lstm",
        liveUrl: "#",
    },
    {
        title: "Image-to-Image Translation with Cycle-GAN",
        description: "Developed a Cycle-GAN for unpaired image-to-image translation, successfully transforming artistic styles and object domains with enhanced fidelity using Sinkhorn Divergence.",
        tags: ["Cycle-GAN", "Deep Learning", "Computer Vision", "Generative AI"],
        imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/cycle-gan-project",
    },
    {
        title: "3D Augmentation for Live Weather Forecasting",
        description: "Built a model for aerospace applications that ingests real-time weather API data, using a CNN for time-series regression and Plotly for interactive 3D visualization.",
        tags: ["CNN", "Time Series", "Data Visualization", "Plotly", "API"],
        imageUrl: "https://images.unsplash.com/photo-1594480621371-290a7d97d02b?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/weather-forecasting-3d",
    },
    {
        title: "Temporal Analysis of Investment Patterns",
        description: "Conducted a comprehensive analysis of investment patterns across fiscal quarters (pre, during, and post-pandemic) using NetworkX to model and visualize temporal networks.",
        tags: ["NetworkX", "Data Analysis", "Pandas", "Temporal Networks"],
        imageUrl: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/investment-pattern-analysis",
    },
    {
        title: "Bayesian Linear Regression for Mid-Price Forecasting",
        description: "Engineered a robust regression model using Bayesian principles to forecast mid-price changes in volatile Amazon Limit Order Book (LOB) data.",
        tags: ["Bayesian Regression", "Finance", "Time Series", "Quant"],
        imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/bayesian-lob-forecast",
    }
];

const SKILLS_DATA = [
    {
        category: "Programming & Scripting",
        skills: ["Python", "Java", "R", "C++", "JavaScript", "Bash"]
    },
    {
        category: "AI/ML Frameworks",
        skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Transformers", "Pandas", "NumPy"]
    },
    {
        category: "Models & Architectures",
        skills: ["Transformers", "GANs", "VAEs", "RNN/LSTM", "CNN", "BERT", "GPT Models"]
    },
    {
        category: "AI/ML Concepts",
        skills: ["Generative AI", "LLMs", "Computer Vision", "NLP", "Fine-Tuning", "Reinforcement Learning", "Prompt Engineering"]
    },
    {
        category: "Agentic Frameworks",
        skills: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI"]
    },
    {
        category: "Data & Databases",
        skills: ["SQL", "PostgreSQL", "MongoDB", "Vector DBs (FAISS, Pinecone)", "NetworkX", "Kafka"]
    },
    {
        category: "Web & Deployment",
        skills: ["Flask", "Django", "React", "FastAPI", "Docker", "Kubernetes", "Git"]
    },
    {
        category: "Cloud Platforms",
        skills: ["GCP (Vertex AI, GCS)", "AWS (S3, SageMaker)", "Azure"]
    },
    {
        category: "BI & Data Viz",
        skills: ["Power BI", "Tableau", "Matplotlib", "Plotly", "Seaborn"]
    }
];


const PERSONAL_INFO = {
  name: "Anvit More",
  title: "ML & AI Engineer",
  email: "anviit22@gmail.com",
  linkedin: "https://linkedin.com/in/anvit22",
  github: "https://github.com/dunkinflicka",
};

const EDUCATION = [
  {
    degree: "MSc in Data Science",
    university: "University of Edinburgh, Edinburgh, UK",
    details: "Expected graduation November 2024. Focused on Bayesian modelling, Generative AI, and state-of-the-art frameworks."
  },
  {
    degree: "BSc in Computer Science",
    university: "Fergusson College, Pune, India",
    details: "Graduated June 2023 with a CGPA of 9.6/10.0. Built a strong foundation in algorithms and software engineering."
  }
];

const WORK_EXPERIENCE = [
    {
        role: "ML/AI Engineer ",
        company: "Plus 91 Technologies Pvt. Ltd.",
        duration: "March 2025 - Present",
        details: [
            "Developed and fine-tuned a Transformer-based model for sentiment analysis, improving prediction accuracy by 18% on financial news data.",
            "Engineered a real-time data ingestion pipeline using Kafka and Python, processing over 10,000 tweets per minute for the stock prediction project.",
            "Collaborated on deploying a Cycle-GAN model to a cloud environment (GCP), creating a REST API endpoint for internal testing.",
            "Authored technical documentation for model architecture and deployment procedures, enhancing team knowledge sharing."
        ]
    },
    {
        role: "Project Lead",
        company: "Department of Computer Science, Fergusson College",
        duration: "September 2022 - May 2023",
        details: [
            "Led a team of 4 students to develop a platform for digitizing campus services, managing project timelines and delegating tasks using Agile methodologies.",
            "Architected the backend using Django and designed a PostgreSQL database schema to handle user data and service requests.",
            "Integrated a recommendation engine to suggest campus events to students, increasing event participation by 25%."
        ]
    },
    {
        role: "Research Assistant",
        company: "Department of Electronic Science, Fergusson College",
        duration: "July 2021 - May 2022",
        details: [
            "Assisted in research on IoT-based environmental monitoring, focusing on CO2 level detection with Arduino microcontrollers.",
            "Wrote Python scripts to automate data collection, cleaning, and processing from sensor logs, reducing manual effort by 90%.",
            "Designed and built an interactive Power BI dashboard to visualize real-time CO2 emissions and atmospheric correlations."
        ]
    }
];

const LANGUAGES = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "German", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" },
];

const SECTIONS = ['Hero', 'About', 'Work Experience', 'Education', 'Projects', 'Skills', 'Languages', 'AI Assistant', 'Contact'];

// --- SVG ICONS ---
const ICON_CLASS = "w-6 h-6";
const GithubIcon = () => `<svg class="${ICON_CLASS}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const LinkedinIcon = () => `<svg class="${ICON_CLASS}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
const MailIcon = () => `<svg class="${ICON_CLASS}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const ExternalLinkIcon = () => `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`;

// --- TEMPLATING COMPONENTS (HTML STRING GENERATORS) ---

const Section = (id, children) => `
    <section id="${id}" class="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div class="w-full">${children}</div>
    </section>
`;

const Header = () => `
    <header id="app-header" class="fixed top-0 z-30 w-full transition-all duration-300 bg-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 mr-4">
                    <a href="#hero" class="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                       ${PERSONAL_INFO.name}
                    </a>
                </div>
                <nav class="hidden md:flex flex-grow">
                    <ul class="flex flex-grow justify-end flex-wrap items-center space-x-6">
                        ${SECTIONS.slice(1).map(item => `
                            <li>
                              <a href="#${item.toLowerCase().replace(/\s+/g, '-')}" class="text-[var(--muted)] hover:text-[var(--text)] px-3 py-2 transition duration-150 ease-in-out font-medium">
                                ${item}
                              </a>
                            </li>
                        `).join('')}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
`;

const AnimatedDiv = (className, delay, children) => `<div class="scroll-reveal ${className}" style="transition-delay: ${delay}ms">${children}</div>`;

const Hero = () => `
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden text-center md:text-left bg-[var(--bg)]">
        <canvas id="dynamic-network-canvas" class="absolute top-0 left-0 w-full h-full z-0"></canvas>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            ${AnimatedDiv('', 100, `
                <h1 class="text-5xl md:text-7xl font-extrabold mb-4 font-heading text-[var(--text)] hero-text-shadow">
                    ${PERSONAL_INFO.name}
                </h1>
            `)}
            ${AnimatedDiv('', 300, `
                <p class="text-xl md:text-3xl text-[var(--accent)] font-medium mb-6 hero-text-shadow">
                    Architecting Intelligence. Engineering the Future.
                </p>
            `)}
            ${AnimatedDiv('', 500, `
                <p class="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto md:mx-0 mb-10">
                    AI and Machine Learning Specialist passionate about bridging the gap between cutting-edge research and impactful real-world applications.
                </p>
            `)}
            ${AnimatedDiv('flex justify-center md:justify-start items-center gap-6', 700, `
                <a href="${PERSONAL_INFO.github}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2">${GithubIcon()}</a>
                <a href="${PERSONAL_INFO.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2">${LinkedinIcon()}</a>
                <a href="https://mail.google.com/mail/?view=cm&to=${PERSONAL_INFO.email}" class="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2">${MailIcon()}</a>
            `)}
        </div>
    </section>
`;

const SectionTitle = (title) => AnimatedDiv('', 0, `<h2 class="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-16 font-heading">${title}</h2>`);

const About = () => Section('about', `
    <div class="max-w-5xl mx-auto">
        ${SectionTitle('About Me')}
        ${AnimatedDiv('flex flex-col md:flex-row items-center gap-12 content-card p-6 sm:p-8 md:p-12 rounded-3xl', 200, `
            <div class="md:w-1/3">
                <div class="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--primary)]/50 glowing-border">
                  <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop" alt="${PERSONAL_INFO.name}" class="w-full h-full object-cover"/>
                </div>
            </div>
            <div class="md:w-2/3 text-lg text-[var(--muted)] space-y-4">
                <p>I am a Machine Learning Engineer driven by a passion for building intelligent systems that solve real-world problems. With a strong foundation in computer science and a Master's in Data Science, my work focuses on the intersection of Generative AI, Bayesian modeling, and deep learning frameworks like PyTorch and TensorFlow.</p>
                <p>From forecasting financial markets with LSTMs to generating novel visuals with GANs, I thrive on the entire development lifecycle—from conceptualization and research to deployment and optimization. I am dedicated to pushing the boundaries of what's possible with AI and am always eager to connect with fellow innovators.</p>
            </div>
        `)}
    </div>
`);

const WorkExperience = () => Section('work-experience', `
    <div class="max-w-4xl mx-auto w-full">
        ${SectionTitle('Work Experience')}
        <div class="relative ml-4 timeline-container">
            <div class="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out timeline-line"></div>
            ${WORK_EXPERIENCE.map((item, index) => AnimatedDiv(
                `mb-12 pl-10 relative before:content-[''] before:absolute before:-left-[9px] before:top-1.5 before:w-4 before:h-4 before:bg-[var(--surface)] before:rounded-full before:border-2 before:border-[var(--accent)] transition-all duration-500 before:scale-0 floating-text-shadow timeline-item`, 
                200 * (index + 1), 
                `
                    <h3 class="text-xl font-bold text-[var(--text)] font-heading">${item.role}</h3>
                    <p class="block mb-2 text-md font-normal leading-none text-[var(--accent)]">${item.company} | ${item.duration}</p>
                    <ul class="list-disc list-inside text-base font-normal text-[var(--muted)] space-y-2">
                        ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                `
            )).join('')}
        </div>
    </div>
`);

const Education = () => Section('education', `
    <div class="max-w-4xl mx-auto w-full">
        ${SectionTitle('Education')}
        <div class="relative ml-4 timeline-container">
            <div class="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out timeline-line"></div>
            ${EDUCATION.map((item, index) => AnimatedDiv(
                `mb-12 pl-10 relative before:content-[''] before:absolute before:-left-[9px] before:top-1.5 before:w-4 before:h-4 before:bg-[var(--surface)] before:rounded-full before:border-2 before:border-[var(--primary)] transition-all duration-500 before:scale-0 floating-text-shadow timeline-item`, 
                200 * (index + 1), 
                `
                    <h3 class="text-xl font-bold text-[var(--text)] font-heading">${item.degree}</h3>
                    <p class="block mb-2 text-md font-normal leading-none text-[var(--primary)]">${item.university}</p>
                    <p class="text-base font-normal text-[var(--muted)]">${item.details}</p>
                `
            )).join('')}
        </div>
    </div>
`);

const ProjectCard = (project) => `
    <div class="group relative overflow-hidden content-card project-card rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10 glowing-border h-full flex flex-col">
        <div class="image-container h-48">
          <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
        </div>
        <div class="p-6 relative z-10 flex-grow flex flex-col">
            <h3 class="text-lg font-bold text-[var(--text)] mb-2 font-heading">${project.title}</h3>
            <p class="text-[var(--muted)] mb-4 text-sm flex-grow">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `<span class="text-xs bg-[var(--primary)]/20 text-[var(--primary)] font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
            </div>
             <div class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm">${GithubIcon()}</a>
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm">${ExternalLinkIcon()}</a>` : ''}
            </div>
        </div>
    </div>
`;

const Projects = () => Section('projects', `
    <div class="max-w-7xl mx-auto">
        ${SectionTitle('Projects')}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${PROJECTS.map((p, i) => AnimatedDiv('', i * 150, ProjectCard(p))).join('')}
        </div>
    </div>
`);

const Skills = () => Section('skills', `
    <div class="max-w-6xl mx-auto">
        ${SectionTitle('Core Competencies')}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${SKILLS_DATA.map((categoryItem, catIndex) => AnimatedDiv('flex', catIndex * 100, `
                <div class="content-card p-6 rounded-2xl w-full glowing-border flex flex-col">
                    <h3 class="text-lg font-bold text-center text-[var(--primary)] mb-4 font-heading">${categoryItem.category}</h3>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${categoryItem.skills.map(skill => `
                            <span class="bg-[var(--bg)]/60 text-[var(--muted)] font-medium px-3 py-1 text-sm rounded-full">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `)).join('')}
        </div>
    </div>
`);

const Languages = () => Section('languages', `
    <div class="max-w-4xl mx-auto">
        ${SectionTitle('Languages')}
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            ${LANGUAGES.map((lang, index) => AnimatedDiv('', index * 100, `
                <div class="content-card p-6 rounded-2xl glowing-border h-full flex flex-col justify-center items-center">
                    <h3 class="text-xl font-bold text-[var(--text)] font-heading">${lang.name}</h3>
                    <p class="text-[var(--primary)]">${lang.level}</p>
                </div>
            `)).join('')}
        </div>
    </div>
`);

const AiAssistant = () => Section('ai-assistant', `
    <div class="max-w-3xl mx-auto text-center">
        ${SectionTitle('AI Assistant')}
        <div class="content-card p-6 sm:p-8 md:p-12 rounded-3xl">
            ${AnimatedDiv('', 200, `
                <p class="text-[var(--muted)] mb-8 floating-text-shadow">
                    The field of AI is always evolving. Ask my AI assistant what cutting-edge topics I'm currently diving into.
                </p>
                <button 
                    id="ai-assistant-button"
                    class="relative px-8 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-[var(--primary-contrast)] font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed glowing-border hero-text-shadow"
                    style="animation: pulse-glow 4s ease-in-out infinite"
                >
                    Ask My AI Assistant
                </button>
            `)}
        </div>
        <div id="ai-response-container" class="mt-8"></div>
    </div>
`);

const Contact = () => Section('contact', `
    <div class="max-w-3xl mx-auto text-center">
        ${SectionTitle('Get In Touch')}
        <div class="content-card p-6 sm:p-8 md:p-12 rounded-3xl">
            ${AnimatedDiv('', 200, `
              <p class="text-[var(--muted)] mb-8 max-w-xl mx-auto floating-text-shadow">
                  I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
              </p>
            `)}
            ${AnimatedDiv('flex justify-center items-center gap-8', 400, `
                <a href="${PERSONAL_INFO.github}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110">${GithubIcon()}</a>
                <a href="${PERSONAL_INFO.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110">${LinkedinIcon()}</a>
                <a href="mailto:${PERSONAL_INFO.email}" class="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110">${MailIcon()}</a>
            `)}
        </div>
    </div>
`);

const Footer = () => `<footer class="text-center text-[var(--muted)]/80 text-sm py-8 relative z-10">&copy; ${new Date().getFullYear()} ${PERSONAL_INFO.name}. All Rights Reserved.</footer>`;


// --- DYNAMIC LOGIC & RENDERING ---

const App = () => `
    <div id="app-container" class="w-full relative">
      <div id="static-bg" class="fixed top-0 left-0 w-full h-full z-0" style="opacity: 0.3;"></div>
      ${Header()}
      <main class="relative z-10">
          ${Hero()}
          ${About()}
          ${WorkExperience()}
          ${Education()}
          ${Projects()}
          ${Skills()}
          ${Languages()}
          ${AiAssistant()}
          ${Contact()}
      </main>
      ${Footer()}
    </div>
`;

// Render the main app structure
document.getElementById('root').innerHTML = App();

// --- POST-RENDER SCRIPTS ---

function handleHeaderScroll() {
    const header = document.getElementById('app-header');
    if (header) {
        header.classList.toggle('header-scrolled', window.scrollY > 50);
    }
}

function handleNavClicks() {
    document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function handleScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

function handleTimelineAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.timeline-line')?.style.setProperty('transform', 'scaleY(1)');
                entry.target.querySelectorAll('.timeline-item').forEach(item => {
                    item.style.setProperty('--before-scale', 1);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-container').forEach(el => observer.observe(el));
}


// --- CANVAS ANIMATION ---

function initDynamicNetworkCanvas(canvas, onReady) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let onReadyCalled = false;
    
    const setCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();

    const computedStyles = getComputedStyle(document.documentElement);
    const primaryColor = computedStyles.getPropertyValue('--primary').trim();
    const accentColor = computedStyles.getPropertyValue('--accent').trim();

    let particles = [];
    let pulses = [];
    let stardusts = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };
    const connectionRadius = 120;
    
    const init = () => {
        particles = [];
        pulses = [];
        stardusts = [];
        onReadyCalled = false;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const particleCount = Math.floor((width * height) / 9000);
        const stardustCount = 200;

        for (let i = 0; i < stardustCount; i++) {
            stardusts.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.1,
                vy: (Math.random() - 0.5) * 0.1,
                radius: Math.random() * 0.8,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                radius: 1.8 + Math.random() * 1.5
            });
        }
    };

    let animationFrameId;
    let time = 0;
    const animate = () => {
        time += 0.02;
        if (!ctx) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        ctx.clearRect(0, 0, width, height);
        
        stardusts.forEach(s => {
            s.x += s.vx; s.y += s.vy;
            if (s.x < 0) s.x = width; if (s.x > width) s.x = 0;
            if (s.y < 0) s.y = height; if (s.y > height) s.y = 0;
            ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 234, 242, ${s.opacity})`; ctx.fill();
        });

        const driftX = 0.1; const driftY = 0.05;

        particles.forEach(p => {
            const dxMouse = p.x - mouse.x; const dyMouse = p.y - mouse.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            if (distMouse < mouse.radius) {
                const force = (mouse.radius - distMouse) / mouse.radius;
                p.vx += (dxMouse / distMouse) * force * 0.1; p.vy += (dyMouse / distMouse) * force * 0.1;
            }
            p.x += p.vx + driftX; p.y += p.vy + driftY;
            if (p.x < -p.radius) p.x = width + p.radius; if (p.x > width + p.radius) p.x = -p.radius;
            if (p.y < -p.radius) p.y = height + p.radius; if (p.y > height + p.radius) p.y = -p.radius;
            p.vx *= 0.99; p.vy *= 0.99;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = primaryColor; ctx.fill();
        });
        
        const pulsedConnections = new Map();
        pulses.forEach(pulse => {
            if (!pulsedConnections.has(pulse.start)) { pulsedConnections.set(pulse.start, new Set()); }
            pulsedConnections.get(pulse.start).add(pulse.end);
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i]; const p2 = particles[j];
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (dist < connectionRadius) {
                    const isPulsed = (pulsedConnections.has(p1) && pulsedConnections.get(p1).has(p2)) ||
                                     (pulsedConnections.has(p2) && pulsedConnections.get(p2).has(p1));
                    const opacity = 1.0 - dist / connectionRadius;
                    ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                    if (isPulsed) {
                        ctx.strokeStyle = `rgba(${parseInt(accentColor.slice(1,3),16)}, ${parseInt(accentColor.slice(3,5),16)}, ${parseInt(accentColor.slice(5,7),16)}, ${opacity})`;
                        ctx.lineWidth = 1.8; ctx.shadowColor = accentColor; ctx.shadowBlur = 5;
                    } else {
                        const shimmer = Math.sin(time * 3 + i * 0.1) * 0.5 + 0.5;
                        const animatedOpacity = opacity * (0.3 + shimmer * 0.5);
                        ctx.strokeStyle = `rgba(${parseInt(primaryColor.slice(1,3),16)}, ${parseInt(primaryColor.slice(3,5),16)}, ${parseInt(primaryColor.slice(5,7),16)}, ${animatedOpacity})`;
                        ctx.lineWidth = 1.5;
                    }
                    ctx.stroke(); ctx.shadowBlur = 0;
                    if (Math.random() < 0.0008 && pulses.length < 50) {
                        pulses.push({ start: p1, end: p2, progress: 0, speed: 0.025 + Math.random() * 0.025 });
                    }
                }
            }
        }
        
        pulses.forEach((pulse, index) => {
            pulse.progress += pulse.speed;
            if (pulse.progress >= 1) { pulses.splice(index, 1); } 
            else {
                const x = pulse.start.x + (pulse.end.x - pulse.start.x) * pulse.progress;
                const y = pulse.start.y + (pulse.end.y - pulse.start.y) * pulse.progress;
                ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = accentColor; ctx.shadowColor = accentColor; ctx.shadowBlur = 8;
                ctx.fill(); ctx.shadowBlur = 0;
            }
        });

        if (canvas && !onReadyCalled) {
            onReady(canvas.toDataURL('image/png'));
            onReadyCalled = true;
        }
        animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    let resizeTimer;
    const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { setCanvasSize(); init(); }, 100);
    };

    init();
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
}

// --- AI ASSISTANT LOGIC ---
const PROMPT = `Act as the AI assistant for a visionary Machine Learning Engineer's portfolio. Based on the latest trends in AI for late 2024, generate a short, exciting, and slightly futuristic paragraph about three cutting-edge topics this engineer is currently exploring. The tone should be inspiring and cool.

Focus on a mix of the following concepts:
- Multimodal Models (vision, audio, text integration)
- Generative AI Advancements (e.g., video generation, hyper-realistic avatars)
- Autonomous AI Agents & Complex Reasoning
- AI in Scientific Discovery (e.g., drug discovery, climate modeling)
- Neuromorphic Computing or Quantum Machine Learning

Weave these into a narrative about what this engineer is passionate about building next. Make it sound like they are on the verge of a breakthrough. Do not use markdown.`;

async function fetchAiAssistantResponse() {
    if (!process.env.API_KEY) {
        throw new Error("Configuration error: API Key is not available.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
        const stream = await ai.models.generateContentStream({ model: "gemini-2.5-flash", contents: PROMPT });
        return stream;
    } catch (error) {
        console.error("Error fetching AI assistant response:", error);
        throw new Error("Failed to get a response from the AI assistant. The model may be temporarily unavailable.");
    }
}

function handleAiAssistant() {
    const button = document.getElementById('ai-assistant-button');
    const container = document.getElementById('ai-response-container');
    let typingInterval;

    button.addEventListener('click', async () => {
        button.disabled = true;
        button.textContent = 'Thinking...';
        container.innerHTML = '';
        clearInterval(typingInterval);

        try {
            const stream = await fetchAiAssistantResponse();
            let text = '';
            for await (const chunk of stream) {
                text += chunk.text;
            }
            
            container.innerHTML = AnimatedDiv('mt-8 p-6 content-card rounded-xl text-left', 100, `
                <p id="ai-typed-response" class="text-[var(--text)] whitespace-pre-wrap leading-relaxed"></p>
            `);
            // Force reflow to apply animation
            container.querySelector('.scroll-reveal').classList.add('is-visible');

            const p = document.getElementById('ai-typed-response');
            let i = 0;
            typingInterval = setInterval(() => {
                p.innerHTML = text.substring(0, i + 1) + '<span class="animate-ping text-[var(--accent)]">|</span>';
                i++;
                if (i >= text.length) {
                    clearInterval(typingInterval);
                    p.innerHTML = text; // Remove cursor at the end
                }
            }, 20);

        } catch (err) {
            container.innerHTML = `<p class="mt-6 text-red-500">${err.message || 'An unknown error occurred.'}</p>`;
        } finally {
            button.disabled = false;
            button.textContent = 'Ask My AI Assistant';
        }
    });
}


// --- INITIALIZE EVERYTHING ---

document.addEventListener('DOMContentLoaded', () => {
    // Basic event listeners
    window.addEventListener('scroll', handleHeaderScroll);
    handleNavClicks();
    handleScrollReveal();
    handleTimelineAnimation();

    // Initialize AI Assistant
    handleAiAssistant();

    // Initialize Canvas
    const canvas = document.getElementById('dynamic-network-canvas');
    const staticBg = document.getElementById('static-bg');
    initDynamicNetworkCanvas(canvas, (dataUrl) => {
        if (staticBg) {
            staticBg.style.backgroundImage = `url(${dataUrl})`;
        }
    });
});
