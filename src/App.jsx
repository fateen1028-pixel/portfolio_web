import React, { useState, useEffect, useRef } from 'react';
import { 
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight, 
    Database, Cpu, TrendingUp, BookOpen, X, Rocket, Menu, Terminal, 
    FlaskConical, Award, Target, Camera, BarChart,
    Send, LoaderCircle, User, // <-- Chat icons
    GraduationCap, Star, Trophy // <-- Icons for CertificationsPage
} from 'lucide-react';
// import CertificationsPage from "./certificate.jsx"; // <-- REMOVED THIS LINE

// Simple Router Implementation
const Router = ({ children }) => {
    const [path, setPath] = useState(window.location.hash.slice(1) || '/');

    useEffect(() => {
        const handleHashChange = () => setPath(window.location.hash.slice(1) || '/');
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return children(path, setPath);
};

const Link = ({ to, children, className = '' }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.hash = to;
    };

    return (
        <a href={`#${to}`} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};

// Navigation Component
const Navigation = ({ currentPath }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    // --- UPDATED navItems ---
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/skills', label: 'Skills' },
        { path: '/projects', label: 'Projects' },
        { path: '/learning', label: 'Learning' },
        { path: '/certifications', label: 'Certifications' },
        { path: '/get-with-ai', label: 'Get With AI' }, // <-- NEW PAGE
        { path: '/contact', label: 'Contact' },
    ];
    // --- END UPDATE ---

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm fade-down transition-all duration-500">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                 className="w-5 h-5 animate-pulse">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                            </svg>
                        </div>
                        <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Skillset
            </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-6 items-center"> {/* Reduced gap for new item */}
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative font-medium transition-all duration-300 nav-hover ${currentPath === item.path
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-gray-900'
                                } ${item.path === '/get-with-ai' ? 'px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200' : ''}`} // <-- Style for new link
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`font-medium ${currentPath === item.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'} ${item.path === '/get-with-ai' ? 'px-3 py-1.5 bg-blue-100 rounded-lg' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
};

// --- NEWLY ADDED CERTIFICATIONS PAGE ---
const CertificationsPage = () => {
    const certifications = [
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera (Andrew Ng - Stanford University)",
            date: "2024",
            color: "purple",
            icon: <Brain className="text-purple-600" size={28} />,
            link: "https://coursera.org"
        },
        {
            title: "Deep Learning with PyTorch",
            issuer: "Udemy / Kaggle Learn",
            date: "2024",
            color: "indigo",
            icon: <Cpu className="text-indigo-600" size={28} />,
            link: "https://udemy.com"
        },
        {
            title: "Data Science & Visualization",
            issuer: "Google / Coursera",
            date: "2024",
            color: "teal",
            icon: <BarChart className="text-teal-600" size={28} />,
            link: "https://coursera.org"
        },
        {
            title: "Apache Spark & Big Data Analytics",
            issuer: "DataCamp",
            date: "2024",
            color: "cyan",
            icon: <Database className="text-cyan-600" size={28} />,
            link: "https://datacamp.com"
        },
        {
            title: "Frontend Development with React",
            issuer: "Meta / Coursera",
            date: "2025",
            color: "blue",
            icon: <Code className="text-blue-600" size={28} />,
            link: "https://coursera.org"
        },
        {
            title: "Generative AI & LangChain",
            issuer: "Hugging Face / OpenAI Tutorials",
            date: "2025",
            color: "orange",
            icon: <Sparkles className="text-orange-600" size={28} />,
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-50 pt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
                        Achievements & Certifications
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Certifications</h1>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Courses and credentials that strengthened my foundation in AI, Data, and Web technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <a
                            key={idx}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 bg-${cert.color}-100 text-${cert.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {cert.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{cert.title}</h3>
                            <p className="text-gray-600 font-medium mb-1">{cert.issuer}</p>
                            <p className="text-gray-400 text-sm">{cert.date}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
// --- END CERTIFICATIONS PAGE ---


// Home Page (Unchanged)
const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    Computer Science & Machine Learning
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Hi, <span className="text-2xl sm:text-3xl">I am Mohamed Fateen . F</span><br />
                    Building Intelligent<br />
                    <span className="text-blue-600">
            Solutions with <span className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-100">Skills</span>
          </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                    I am passionate about leveraging machine learning and modern web technologies to create impactful applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link to="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                        View Projects <ChevronRight size={20} />
                    </Link>
                    <Link to="/contact" className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg border border-gray-200">
                        Get in Touch
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full">
                    {[
                        { icon: <Brain className="text-blue-600" size={28} />, title: 'Machine Learning', desc: 'Regression, decision trees, and classification algorithms.' },
                        { icon: <Cpu className="text-purple-600" size={28} />, title: 'Deep Learning', desc: 'PyTorch, transformers, and neural network architectures.' },
                        { icon: <Code className="text-green-600" size={28} />, title: 'Full Stack', desc: 'Building web apps with React, Vite, and Python.' },
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);



// Skills Page (Unchanged)
const SkillsPage = () => {
    const skills = [
        { category: 'Programming & Scripting', icon: <Terminal className="text-blue-600" size={32} />, color: 'blue', items: ['Python', 'JavaScript', 'C', 'Git', 'Linux CLI'] },
        { category: 'Machine Learning', icon: <Brain className="text-purple-600" size={32} />, color: 'purple', items: ['Scikit-learn', 'Linear & Logistic Regression', 'Decision Trees', 'Clustering & Classification', 'Model Evaluation & Metrics'] },
        { category: 'Deep Learning & AI', icon: <Cpu className="text-indigo-600" size={32} />, color: 'indigo', items: ['PyTorch', 'Transformers', 'CNNs, RNNs, LSTMs', 'Attention Mechanisms', 'Model Fine-tuning'] },
        { category: 'Computer Vision', icon: <Camera className="text-pink-600" size={32} />, color: 'pink', items: ['OpenCV', 'Image Processing', 'Object Detection', 'Feature Extraction', 'Real-time Vision Apps'] },
        { category: 'Big Data & Data Engineering', icon: <Database className="text-cyan-600" size={32} />, color: 'cyan', items: ['Apache Spark', 'PySpark', 'Pandas', 'ETL Pipelines', 'Large Dataset Handling'] },
        { category: 'Web Development', icon: <Code className="text-green-600" size={32} />, color: 'green', items: ['React + Vite', 'TailwindCSS', 'Flask', 'Streamlit', 'SaaS Frontend Design'] },
        { category: 'AI Integration & Tools', icon: <FlaskConical className="text-orange-600" size={32} />, color: 'orange', items: ['LangChain', 'Hugging Face', 'LLM Apps', 'Prompt Engineering', 'Streamlit Dashboards'] },
        { category: 'Data Visualization', icon: <BarChart className="text-teal-600" size={32} />, color: 'teal', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Interactive Dashboards', 'Data Storytelling'] }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Technical Expertise</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Skills & Technologies</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">A diverse toolkit spanning AI, web development, and data systems</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className={`w-14 h-14 bg-${skill.color}-100 rounded-xl flex items-center justify-center mb-4`}>{skill.icon}</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{skill.category}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, i) => ( <li key={i} className="text-gray-600 flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500`}></div>{item}</li> ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Projects Page (Unchanged)
const ProjectsPage = () => {
    const projects = [
        { title: 'Smart Waste Management Dashboard', description: 'Real-time monitoring dashboard for waste segregation with IoT data visualization and analytics.', tech: ['React', 'Python', 'Data Analytics', 'IoT'], color: 'green', icon: <Target size={24} /> },
        { title: 'ML Model Web Integration', description: 'Deployed ML models using Flask and Streamlit, enabling web-based interaction with predictive models.', tech: ['Streamlit', 'Flask', 'PyTorch'], color: 'purple', icon: <Brain size={24} /> },
        { title: 'Computer Vision Object Detection', description: 'Developed OpenCV-based system for detecting and classifying waste types using image data.', tech: ['OpenCV', 'Python', 'Deep Learning'], color: 'pink', icon: <Camera size={24} /> },
        { title: 'LangChain AI Assistant', description: 'Built a conversational AI using LangChain and Hugging Face models for intelligent query handling.', tech: ['LangChain', 'Transformers', 'Python'], color: 'indigo', icon: <Sparkles size={24} /> },
        { title: 'PySpark Data Pipeline', description: 'Processed large datasets efficiently with Apache Spark and PySpark for real-time analytics.', tech: ['PySpark', 'Apache Spark', 'Big Data'], color: 'cyan', icon: <Database size={24} /> },
        { title: 'Data Visualization Dashboard', description: 'Interactive dashboard visualizing machine learning metrics and datasets using Plotly and React.', tech: ['Plotly', 'React', 'TailwindCSS'], color: 'teal', icon: <BarChart size={24} /> },
        { title: 'SaaS Frontend for Symposium', description: 'Responsive and elegant frontend built with React + Vite for event management and registrations.', tech: ['React', 'Vite', 'TailwindCSS'], color: 'blue', icon: <Code size={24} /> },
        { title: 'Transformer NLP Experiments', description: 'Experimented with transformer architectures and fine-tuned models for NLP and classification tasks.', tech: ['PyTorch', 'Transformers', 'Hugging Face'], color: 'orange', icon: <Cpu size={24} /> }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Portfolio</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Featured Projects</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">A showcase of applied projects in AI, computer vision, and data-driven web applications</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                            <div className={`w-14 h-14 bg-${project.color}-100 rounded-xl flex items-center justify-center mb-6 text-${project.color}-600 group-hover:scale-110 transition-transform`}>{project.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => ( <span key={i} className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">{tech}</span> ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Learning Page (Unchanged)
const LearningPage = () => {
    const learningPath = [
        { area: 'Deep Learning Fundamentals', platform: 'Coursera & YouTube', topics: ['Neural Networks', 'Backpropagation', 'Optimization', 'Transformers'], status: 'In Progress', color: 'blue' },
        { area: 'Mathematics for ML', platform: 'Self Study', topics: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'], status: 'Ongoing', color: 'purple' },
        { area: 'PyTorch & Transformers', platform: 'Hugging Face & Docs', topics: ['Model Architecture', 'Fine-tuning', 'Training', 'Deployment'], status: 'In Progress', color: 'green' },
        { area: 'Big Data Processing', platform: 'Apache Spark Docs', topics: ['PySpark', 'DataFrames', 'RDD', 'Spark vs Pandas'], status: 'Completed', color: 'cyan' }
    ];
    const resources = [
        { name: 'Coursera', type: 'Online Learning', icon: <Award size={24} /> },
        { name: 'YouTube', type: 'Video Tutorials', icon: <BookOpen size={24} /> },
        { name: 'Hugging Face', type: 'ML Models & Docs', icon: <Brain size={24} /> },
        { name: 'Free AI/ML Courses', type: 'Structured Learning', icon: <TrendingUp size={24} /> }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">Continuous Growth</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Learning Journey</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Committed to continuous learning in AI, machine learning, and software development</p>
                </div>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><TrendingUp className="text-green-600" />Current Focus Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {learningPath.map((path, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{path.area}</h3>
                                    <span className={`px-3 py-1 bg-${path.color}-100 text-${path.color}-700 rounded-full text-sm font-medium`}>{path.status}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 font-medium">{path.platform}</p>
                                <div className="flex flex-wrap gap-2">
                                    {path.topics.map((topic, i) => ( <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">{topic}</span> ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><BookOpen className="text-blue-600" />Learning Resources</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">{resource.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{resource.name}</h4>
                                <p className="text-sm text-gray-600">{resource.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Contact Page (Unchanged)
const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-50 pt-20">
        <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Let's Connect</div>
                <h1 className="text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Interested in collaborating or discussing opportunities? Let's start a conversation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Github className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">GitHub</h3>
                    <p className="text-gray-600">View my repositories</p>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Linkedin className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">Connect professionally</p>
                </a>
                <a href="mailto:your.email@example.com" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Mail className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-600">Send a message</p>
                </a>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Open to Opportunities</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm always interested in discussing new projects, innovative ideas, and opportunities in machine learning,
                    web development, and data science. Whether you have a question, collaboration proposal, or just want to
                    connect, feel free to reach out.
                </p>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">ML Projects</span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium">Web Development</span>
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium">Data Science</span>
                    <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium">Open Source</span>
                </div>
            </div>
        </div>
    </div>
);

// Footer Component (Unchanged)
const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-50 via-gray-50 to-indigo-50 border-t border-gray-200 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mohamed Fateen . F</h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xs sm:max-w-none mx-auto lg:mx-0">Building Intelligent Solutions with AI & Web Technologies</p>
        </div>
        <div className="flex justify-center gap-5 sm:gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 hover:scale-110 transition-transform"><Github size={22} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 hover:scale-110 transition-transform"><Linkedin size={22} /></a>
          <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-indigo-700 hover:scale-110 transition-transform"><Mail size={22} /></a>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Mohamed Fateen. All rights reserved.
      </div>
    </div>
  </footer>
);


// --- NEW CHATBOT PAGE COMPONENT ---
const ChatbotPage = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hello! I'm an AI assistant. Ask me anything about this portfolio or other topics!" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // URL for the Flask API
    // FIX: Changed from 'http://127.0.0.1:5000/chat' to the Vercel relative path '/api/chat'
    const API_URL = '/api/chat';

    // Scroll to bottom of chat window
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setInput('');

        // Send message and history to the backend
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: input,
                    history: messages // Send previous messages for context
                }),
            });

            if (!response.ok) {
                // If Vercel gives a 404/500, we show a better error message
                const errorText = await response.text();
                throw new Error(`API request failed: ${response.status} - ${errorText.substring(0, 100)}...`);
            }

            const data = await response.json();
            
            if (data.reply) {
                const aiMessage = { role: 'ai', content: data.reply };
                setMessages(prev => [...prev, aiMessage]);
            } else if (data.error) {
                const errorMessage = { role: 'ai', content: `Error: ${data.error}` };
                setMessages(prev => [...prev, errorMessage]);
            }

        } catch (error) {
            console.error('Chatbot fetch error:', error);
            const errorMessage = { role: 'ai', content: `Sorry, I'm having trouble connecting to the AI server. Please check the console for details. Error: ${error.message.substring(0, 50)}...` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-24">
            <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col h-[calc(100vh-10rem)]">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        LangChain & Hugging Face
                    </div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Get With AI</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Chat with an AI assistant powered by the same models from my projects.
                    </p>
                </div>

                {/* Chat Window */}
                <div className="flex-1 overflow-y-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'ai' && (
                                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                                    <Sparkles size={20} />
                                </div>
                            )}
                            <div className={`max-w-xs md:max-w-md p-4 rounded-2xl ${
                                msg.role === 'user' 
                                ? 'bg-gray-100 text-gray-800 rounded-br-none' 
                                : 'bg-blue-600 text-white rounded-bl-none'
                            }`}>
                                <p className="text-sm leading-relaxed">{msg.content}</p>
                            </div>
                            {msg.role === 'user' && (
                                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center flex-shrink-0">
                                    <User size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3 justify-start">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                                <Sparkles size={20} />
                            </div>
                            <div className="max-w-xs md:max-w-md p-4 rounded-2xl bg-blue-600 text-white rounded-bl-none">
                                <LoaderCircle size={20} className="animate-spin" />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-100 p-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => e.target.value.length < 500 && setInput(e.target.value)}
                            placeholder={isLoading ? "AI is thinking..." : "Ask me anything..."}
                            className="flex-1 px-4 py-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all duration-300
                                       hover:bg-blue-700 disabled:bg-gray-300"
                        >
                            {isLoading ? (
                                <LoaderCircle size={22} className="animate-spin" />
                            ) : (
                                <Send size={22} />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
// --- END NEW COMPONENT ---


// Main App
export default function App() {
    return (
        <Router>
            {(path) => (
                <>
                    <Navigation currentPath={path} />
                    {path === '/' && <HomePage />}
                    {path === '/skills' && <SkillsPage />}
                    {path === '/projects' && <ProjectsPage />}
                    {path === '/learning' && <LearningPage />}
                    {path === '/contact' && <ContactPage />}
                    {path === '/certifications' && <CertificationsPage />}
                    {/* --- NEW ROUTE --- */}
                    {path === '/get-with-ai' && <ChatbotPage />} 
                    
                    <Footer />
                </>
            )}
        </Router>
    );
}