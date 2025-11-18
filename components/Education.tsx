import React from 'react';
import { EDUCATION } from '../constants';

const EducationIcon = () => (
    <div className="absolute -left-5 top-1 z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 ring-8 ring-[#0a0a0a]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002-.018.005-.003.001-.001.001L4.26 10.147l.004-.001.002-.001.018-.005.07-.002zM12 9a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
        </div>
    </div>
);

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
                <div className="relative max-w-2xl mx-auto border-l-2 border-gray-700 pl-10">
                    {EDUCATION.map((edu, index) => (
                        <div key={edu.degree} className="mb-12 relative">
                            <EducationIcon />
                            <div className="glassmorphism p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                                <p className="text-gray-300 mt-1 font-semibold">{edu.university}</p>
                                <p className="text-sm text-gray-500 mb-3">{edu.cgpa}</p>
                                <p className="text-gray-400">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
