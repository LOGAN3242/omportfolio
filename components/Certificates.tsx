import React from 'react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Certificates & Credentials</h2>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {CERTIFICATES.map(cert => (
                        <a
                            key={cert.name}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glassmorphism p-6 rounded-lg w-full sm:w-auto sm:min-w-[300px] text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/20"
                        >
                            <p className="text-lg font-semibold text-white">{cert.name}</p>
                            <p className="text-sm text-cyan-400 mt-1">{cert.organization}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
