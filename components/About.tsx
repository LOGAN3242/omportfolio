
import React from 'react';
import { CORE_COMPETENCIES } from '../constants';

const About: React.FC = () => {
    return (
        <div className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-center mb-6 gradient-text">About Me</h2>
                
                <div className="flex justify-center mb-8">
                    <img 
                        src="/3323.png" 
                        alt="Om Sarvaiya" 
                        className="rounded-full w-64 h-64 object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30 animate-float"
                    />
                </div>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                    Results-driven Software Developer with over 2 years of experience in backend development, specializing in Python, Django, Flask, and Agentic AI workflows. Expert in designing and implementing AI-driven automation solutions using n8n, Microsoft Copilot Studio, and OpenAI APIs. Proficient in AWS for scalable application deployment, SQL for efficient data management, and data analysis with Numpy, Pandas, and Matplotlib. Familiar with React and Node.js for full-stack development.
                </p>
                <p className="text-md text-cyan-400 italic mb-16 max-w-3xl mx-auto">
                   "A strong commitment to advancing expertise in Agentic AI to deliver innovative, high-impact automation solutions."
                </p>

                <h3 className="text-3xl font-bold mb-12 text-white">Core Competencies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {CORE_COMPETENCIES.map(comp => (
                        <div key={comp.title} className="glassmorphism p-6 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/30 shadow-lg">
                            <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-gray-800 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d={comp.icon} />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{comp.title}</h4>
                            <p className="text-sm text-gray-400">{comp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;