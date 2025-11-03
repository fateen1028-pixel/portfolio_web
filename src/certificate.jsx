import React from "react";
import { Award, GraduationCap, Star, Trophy, Cpu, Database, Code, Sparkles, Brain, BarChart } from "lucide-react";

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

export default CertificationsPage;
