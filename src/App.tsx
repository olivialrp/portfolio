import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// --- Helper: Icon Components (Self-contained SVGs) ---
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);


// --- Page Components ---

const HomePage = ({ onNavigate }) => (
    <>
        <div className="social-links-container">
            {portfolioData.socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-link-content">
                        {social.icon}
                        <span>{social.name}</span>
                    </div>
                    <ArrowUpRightIcon />
                </a>
            ))}
        </div>

        <div className="page-links-container">
            {portfolioData.pageLinks.map((link) => (
                <a key={link.id} href="#" onClick={(e) => { e.preventDefault(); onNavigate(link.id); }} className="page-link">
                    {link.name}
                    <ArrowRightIcon />
                </a>
            ))}
        </div>
    </>
);

const ProjectsPage = () => (
    <div className="page-content">
        <h2>My Projects</h2>
        <p>This is where I will list my projects.</p>
        {/* Example Project */}
        <div className="project-item">
            <h3>Project One</h3>
            <p>A brief description of my first project.</p>
        </div>
        <div className="project-item">
            <h3>Project Two</h3>
            <p>A brief description of my second project.</p>
        </div>
    </div>
);

const ArticlesPage = () => (
    <div className="page-content">
        <h2>My Articles</h2>
        <p>This is where I will display future articles</p>
    </div>
);

const AboutMePage = () => (
    <div className="page-content">
        <h2>About Me</h2>
        <p>I am a Fullstack developer from Brazil. My stack spans back-end development with Python (Django) and Java (Spring Boot), and front-end development with React and TypeScript. I also got skills in data analysis and visualization, leveraging Python libraries like Pandas, NumPy, and Streamlit. I am deeply passionate about technology on a general scope since I was a kid, and since 2022, specifically on software development. </p>
    </div>
);


// --- Main App Data ---
const portfolioData = {
    name: "Olívia Lauar",
    title: "Fullstack developer",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mariana-olivia-lauar/", icon: <LinkedInIcon /> },
        { name: "GitHub", url: "https://github.com/olivialrp", icon: <GitHubIcon /> },
    ],
    navLinks: [
        { id: 'home', name: "Home" },
        { id: 'projects', name: "Projects" },
        { id: 'articles', name: "Articles" },
        { id: 'about', name: "About Me" },
    ],
    pageLinks: [
        { id: 'projects', name: "My projects" },
        { id: 'articles', name: "My articles" },
        { id: 'about', name: "About me" },
    ],
};


export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page) => {
        setCurrentPage(page);
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'projects':
                return <ProjectsPage />;
            case 'articles':
                return <ArticlesPage />;
            case 'about':
                return <AboutMePage />;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="container">
            <div className="content-wrapper">
                <header className="header">
                    <div className="header-title">
                        <h1>{portfolioData.name}</h1>
                        <p>{portfolioData.title}</p>
                    </div>
                    <nav className="nav">
                        {portfolioData.navLinks.map((link) => (
                            <a key={link.id} href="#" onClick={(e) => { e.preventDefault(); handleNavigate(link.id); }} className={currentPage === link.id ? 'active' : ''}>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </header>

                <main>
                    {currentPage !== 'home' && (
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="back-link">
                            <ArrowLeftIcon />
                            Back to Home
                        </a>
                    )}
                    {renderContent()}
                </main>

                <footer className="footer">
                    <p>Built with ❤️ using React.</p>
                </footer>
            </div>
        </div>
    );
}