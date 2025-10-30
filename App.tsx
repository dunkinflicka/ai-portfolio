
import React, { useState, useEffect, useRef } from 'react';
import type { Project, EducationItem, WorkExperienceItem, LanguageItem } from './types';
import { fetchAiAssistantResponse } from './services/geminiService';

// --- CONSTANTS & DATA ---

const PROJECTS: Project[] = [
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
        skills: ["Python", "Java", "R", "C++", "JavaScript (ES6+)", "Bash"]
    },
    {
        category: "AI/ML Frameworks",
        skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "HuggingFace Transformers", "Pandas", "NumPy"]
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

const EDUCATION: EducationItem[] = [
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

const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
        role: "Machine Learning Engineer Intern",
        company: "Innovate AI Corp",
        duration: "June 2023 - September 2023",
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

const LANGUAGES: LanguageItem[] = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "German", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" },
];

const SECTIONS = ['Hero', 'About', 'Work Experience', 'Education', 'Projects', 'Skills', 'Languages', 'AI Assistant', 'Contact'];


// --- SVG ICONS ---
const ICON_CLASS = "w-6 h-6";

const GithubIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);


// --- CUSTOM HOOKS ---
const useOnScreen = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

// --- COMPONENTS ---

const Section: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} id={id} className={`min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
             <div className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </section>
    );
};


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.toLowerCase().replace(/\s+/g, '-'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 z-30 w-full transition-all duration-300 ${isScrolled ? 'header-scrolled' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 mr-4">
                        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                           {PERSONAL_INFO.name}
                        </a>
                    </div>
                    <nav className="hidden md:flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center space-x-6">
                            {SECTIONS.slice(1).map(item => (
                                <li key={item}>
                                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={(e) => handleNavClick(e, item)} className="text-[var(--muted)] hover:text-[var(--text)] px-3 py-2 transition duration-150 ease-in-out font-medium">
                                    {item}
                                  </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

const DynamicNetworkCanvas: React.FC<{ onReady: (dataUrl: string) => void }> = ({ onReady }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const onReadyCalled = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

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

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }
        
        interface Pulse {
            start: Particle;
            end: Particle;
            progress: number;
            speed: number;
        }

        interface Stardust {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            opacity: number;
        }

        let particles: Particle[] = [];
        let pulses: Pulse[] = [];
        let stardusts: Stardust[] = [];
        const mouse = { x: -1000, y: -1000, radius: 150 };
        const connectionRadius = 120;
        
        const init = () => {
            particles = [];
            pulses = [];
            stardusts = [];
            onReadyCalled.current = false;

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

        let animationFrameId: number;
        let time = 0;
        const animate = () => {
            time += 0.02;
            if (!ctx) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            ctx.clearRect(0, 0, width, height);
            
            // Update and draw stardust (background layer)
            stardusts.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;

                if (s.x < 0) s.x = width;
                if (s.x > width) s.x = 0;
                if (s.y < 0) s.y = height;
                if (s.y > height) s.y = 0;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(230, 234, 242, ${s.opacity})`;
                ctx.fill();
            });

            const driftX = 0.1;
            const driftY = 0.05;

            // Update and draw main particles
            particles.forEach(p => {
                const dxMouse = p.x - mouse.x;
                const dyMouse = p.y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < mouse.radius) {
                    const force = (mouse.radius - distMouse) / mouse.radius;
                    p.vx += (dxMouse / distMouse) * force * 0.1;
                    p.vy += (dyMouse / distMouse) * force * 0.1;
                }

                p.x += p.vx + driftX;
                p.y += p.vy + driftY;

                // Wrap particles around the screen for a continuous drift effect
                if (p.x < -p.radius) p.x = width + p.radius;
                if (p.x > width + p.radius) p.x = -p.radius;
                if (p.y < -p.radius) p.y = height + p.radius;
                if (p.y > height + p.radius) p.y = -p.radius;
                
                p.vx *= 0.99;
                p.vy *= 0.99;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = primaryColor;
                ctx.fill();
            });
            
            // Create a map to track connections that have an active pulse
            const pulsedConnections = new Map<Particle, Set<Particle>>();
            pulses.forEach(pulse => {
                if (!pulsedConnections.has(pulse.start)) {
                    pulsedConnections.set(pulse.start, new Set());
                }
                pulsedConnections.get(pulse.start)!.add(pulse.end);
            });


            // Draw connections and create pulses
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (dist < connectionRadius) {
                        const isPulsed = (pulsedConnections.has(p1) && pulsedConnections.get(p1)!.has(p2)) ||
                                         (pulsedConnections.has(p2) && pulsedConnections.get(p2)!.has(p1));
                        
                        const opacity = 1.0 - dist / connectionRadius;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        if (isPulsed) {
                            // This connection is "activated" by a pulse
                            ctx.strokeStyle = `rgba(${parseInt(accentColor.slice(1,3),16)}, ${parseInt(accentColor.slice(3,5),16)}, ${parseInt(accentColor.slice(5,7),16)}, ${opacity})`;
                            ctx.lineWidth = 1.8;
                            ctx.shadowColor = accentColor;
                            ctx.shadowBlur = 5;
                        } else {
                            // Default connection style with "breathing" animation
                            const shimmer = Math.sin(time * 3 + i * 0.1) * 0.5 + 0.5; // Asynchronous shimmer (0 to 1)
                            const animatedOpacity = opacity * (0.3 + shimmer * 0.5); // Modulate base opacity
                            ctx.strokeStyle = `rgba(${parseInt(primaryColor.slice(1,3),16)}, ${parseInt(primaryColor.slice(3,5),16)}, ${parseInt(primaryColor.slice(5,7),16)}, ${animatedOpacity})`;
                            ctx.lineWidth = 1.5;
                        }

                        ctx.stroke();
                        ctx.shadowBlur = 0; // Reset shadow blur

                        if (Math.random() < 0.0008 && pulses.length < 50) {
                            pulses.push({
                                start: p1,
                                end: p2,
                                progress: 0,
                                speed: 0.025 + Math.random() * 0.025
                            });
                        }
                    }
                }
            }
            
            // Update and draw pulse dots
            pulses.forEach((pulse, index) => {
                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) {
                    pulses.splice(index, 1);
                } else {
                    const x = pulse.start.x + (pulse.end.x - pulse.start.x) * pulse.progress;
                    const y = pulse.start.y + (pulse.end.y - pulse.start.y) * pulse.progress;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = accentColor;
                    ctx.shadowColor = accentColor;
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });


            if (canvasRef.current && !onReadyCalled.current) {
                onReady(canvasRef.current.toDataURL('image/png'));
                onReadyCalled.current = true;
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        let resizeTimer: number;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                setCanvasSize();
                init();
            }, 100);
        };

        init();
        animate();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [onReady]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


const AnimatedDiv: React.FC<{children: React.ReactNode, className?: string, delay?: number, style?: React.CSSProperties}> = ({ children, className, delay = 0, style }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    return (
        <div ref={ref} className={`scroll-reveal ${className} ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms`, ...style}}>
            {children}
        </div>
    );
};

const Hero: React.FC<{ onCanvasReady: (dataUrl: string) => void }> = ({ onCanvasReady }) => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden text-center md:text-left bg-[var(--bg)]">
        <DynamicNetworkCanvas onReady={onCanvasReady} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv delay={100}>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-heading text-[var(--text)] hero-text-shadow">
                    {PERSONAL_INFO.name}
                </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={300}>
                <p className="text-xl md:text-3xl text-[var(--accent)] font-medium mb-6 hero-text-shadow">
                    Architecting Intelligence. Engineering the Future.
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay={500}>
                <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto md:mx-0 mb-10">
                    AI and Machine Learning Specialist passionate about bridging the gap between cutting-edge research and impactful real-world applications.
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay={700} className="flex justify-center md:justify-start items-center gap-6">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><GithubIcon /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><LinkedinIcon /></a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><MailIcon /></a>
            </AnimatedDiv>
        </div>
    </section>
);


const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <AnimatedDiv>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-16 font-heading">
            {children}
        </h2>
    </AnimatedDiv>
);

const About: React.FC = () => (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
            <SectionTitle>About Me</SectionTitle>
            <AnimatedDiv className="flex flex-col md:flex-row items-center gap-12 content-card p-6 sm:p-8 md:p-12 rounded-3xl" delay={200}>
                <div className="md:w-1/3">
                    <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--primary)]/50 glowing-border">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop" alt={PERSONAL_INFO.name} className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="md:w-2/3 text-lg text-[var(--muted)] space-y-4">
                    <p>I am a Machine Learning Engineer driven by a passion for building intelligent systems that solve real-world problems. With a strong foundation in computer science and a Master's in Data Science, my work focuses on the intersection of Generative AI, Bayesian modeling, and deep learning frameworks like PyTorch and TensorFlow.</p>
                    <p>From forecasting financial markets with LSTMs to generating novel visuals with GANs, I thrive on the entire development lifecycle—from conceptualization and research to deployment and optimization. I am dedicated to pushing the boundaries of what's possible with AI and am always eager to connect with fellow innovators.</p>
                </div>
            </AnimatedDiv>
      </div>
    </Section>
);

const WorkExperience: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <Section id="work-experience">
            <div className="max-w-4xl mx-auto w-full">
                <SectionTitle>Work Experience</SectionTitle>
                <div ref={ref} className="relative ml-4">
                    <div
                        className="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out"
                        style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
                    />
                    {WORK_EXPERIENCE.map((item, index) => (
                        <AnimatedDiv
                            key={index}
                            className="mb-12 pl-10 relative before:content-[''] before:absolute before:-left-[9px] before:top-1.5 before:w-4 before:h-4 before:bg-[var(--surface)] before:rounded-full before:border-2 before:border-[var(--accent)] transition-all duration-500 before:scale-0 floating-text-shadow"
                            delay={200 * (index + 1)}
                            style={isVisible ? { '--before-scale': 1 } as React.CSSProperties : {}}
                        >
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading">{item.role}</h3>
                            <p className="block mb-2 text-md font-normal leading-none text-[var(--accent)]">{item.company} | {item.duration}</p>
                            <ul className="list-disc list-inside text-base font-normal text-[var(--muted)] space-y-2">
                                {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </AnimatedDiv>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const Education: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <Section id="education">
          <div className="max-w-4xl mx-auto w-full">
                <SectionTitle>Education</SectionTitle>
                <div ref={ref} className="relative ml-4">
                    <div 
                        className="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out"
                        style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
                    />
                    {EDUCATION.map((item, index) => (
                        <AnimatedDiv 
                          key={index} 
                          className="mb-12 pl-10 relative before:content-[''] before:absolute before:-left-[9px] before:top-1.5 before:w-4 before:h-4 before:bg-[var(--surface)] before:rounded-full before:border-2 before:border-[var(--primary)] transition-all duration-500 before:scale-0 floating-text-shadow" 
                          delay={200 * (index + 1)}
                          style={isVisible ? { '--before-scale': 1 } as React.CSSProperties : {}}
                        >
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading">{item.degree}</h3>
                            <p className="block mb-2 text-md font-normal leading-none text-[var(--primary)]">{item.university}</p>
                            <p className="text-base font-normal text-[var(--muted)]">{item.details}</p>
                        </AnimatedDiv>
                    ))}
                </div>
           </div>
        </Section>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative overflow-hidden content-card project-card rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10 glowing-border">
        <div className="image-container h-48">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6 relative z-10">
            <h3 className="text-lg font-bold text-[var(--text)] mb-2 font-heading">{project.title}</h3>
            <p className="text-[var(--muted)] mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-[var(--primary)]/20 text-[var(--primary)] font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
             <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm"><GithubIcon /></a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm"><ExternalLinkIcon /></a>}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => (
    <Section id="projects">
      <div className="max-w-7xl mx-auto">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((p, i) => <AnimatedDiv key={p.title} delay={i * 150}><ProjectCard project={p} /></AnimatedDiv>)}
            </div>
        </div>
    </Section>
);

const Skills: React.FC = () => (
    <Section id="skills">
        <div className="max-w-6xl mx-auto">
            <SectionTitle>Core Competencies</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS_DATA.map((categoryItem, catIndex) => (
                    <AnimatedDiv key={categoryItem.category} delay={catIndex * 100} className="flex">
                        <div className="content-card p-6 rounded-2xl w-full glowing-border flex flex-col">
                            <h3 className="text-lg font-bold text-center text-[var(--primary)] mb-4 font-heading">{categoryItem.category}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {categoryItem.skills.map((skill) => (
                                    <span key={skill} className="bg-[var(--bg)]/60 text-[var(--muted)] font-medium px-3 py-1 text-sm rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </div>
    </Section>
);

const Languages: React.FC = () => (
    <Section id="languages">
        <div className="max-w-4xl mx-auto">
            <SectionTitle>Languages</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                {LANGUAGES.map((lang, index) => (
                    <AnimatedDiv key={lang.name} delay={index * 100}>
                        <div className="content-card p-6 rounded-2xl glowing-border h-full flex flex-col justify-center items-center">
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading">{lang.name}</h3>
                            <p className="text-[var(--primary)]">{lang.level}</p>
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </div>
    </Section>
);

const AiAssistant: React.FC = () => {
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [typedResponse, setTypedResponse] = useState('');

    useEffect(() => {
        if (!response) {
            setTypedResponse('');
            return;
        }
        setTypedResponse('');
        let i = 0;
        const intervalId = setInterval(() => {
            setTypedResponse(prev => prev + response.charAt(i));
            i++;
            if (i >= response.length) {
                clearInterval(intervalId);
            }
        }, 20);
        return () => clearInterval(intervalId);
    }, [response]);

    const handleAsk = async () => {
        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const stream = await fetchAiAssistantResponse();
            let text = '';
            for await (const chunk of stream) {
                text += chunk.text;
            }
            setResponse(text);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Section id="ai-assistant" className="text-center">
          <div className="max-w-3xl mx-auto">
                 <SectionTitle>AI Assistant</SectionTitle>
                 <div className="content-card p-6 sm:p-8 md:p-12 rounded-3xl">
                    <AnimatedDiv delay={200}>
                        <p className="text-[var(--muted)] mb-8 floating-text-shadow">
                            The field of AI is always evolving. Ask my AI assistant what cutting-edge topics I'm currently diving into.
                        </p>
                        <button 
                            onClick={handleAsk}
                            disabled={isLoading}
                            className="relative px-8 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-[var(--primary-contrast)] font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed glowing-border hero-text-shadow"
                            style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
                        >
                            {isLoading ? 'Thinking...' : 'Ask My AI Assistant'}
                        </button>
                    </AnimatedDiv>
                 </div>
                
                {error && <p className="mt-6 text-red-500">{error}</p>}
                
                {typedResponse && (
                     <AnimatedDiv className="mt-8 p-6 content-card rounded-xl text-left" delay={100}>
                        <p className="text-[var(--text)] whitespace-pre-wrap leading-relaxed">{typedResponse}<span className="animate-ping text-[var(--accent)]">|</span></p>
                    </AnimatedDiv>
                )}
            </div>
        </section>
    );
};


const Contact: React.FC = () => (
    <Section id="contact" className="text-center">
      <div className="max-w-3xl mx-auto">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="content-card p-6 sm:p-8 md:p-12 rounded-3xl">
                <AnimatedDiv delay={200}>
                  <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto floating-text-shadow">
                      I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
                  </p>
                </AnimatedDiv>
                <AnimatedDiv delay={400} className="flex justify-center items-center gap-8">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><GithubIcon /></a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><LinkedinIcon /></a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><MailIcon /></a>
                </AnimatedDiv>
            </div>
        </div>
    </Section>
);

const Footer: React.FC = () => (
     <footer className="text-center text-[var(--muted)]/80 text-sm py-8 relative z-10">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
     </footer>
);

export default function App() {
  const [staticBg, setStaticBg] = useState('');

  return (
    <div className="w-full relative">
      {staticBg && (
        <div 
          className="fixed top-0 left-0 w-full h-full z-0"
          style={{ 
            backgroundImage: `url(${staticBg})`,
            opacity: 0.3,
          }} 
        />
      )}
      <Header />
      <main className="relative z-10">
          <Hero onCanvasReady={setStaticBg} />
          <About />
          <WorkExperience />
          <Education />
          <Projects />
          <Skills />
          <Languages />
          <AiAssistant />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}
