import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { type Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="[perspective:1000px] group">
        <div className={`relative rounded-xl p-8 transition-all duration-500 transform group-hover:[transform:rotateY(10deg)_rotateX(5deg)] hover:shadow-2xl bg-gradient-to-br ${project.gradient} h-full`}>
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-200 font-medium mb-4">{project.subtitle}</p>
                <div className="flex-grow space-y-2 text-gray-100">
                    {project.description.map((desc, i) => (
                        <p key={i}>- {desc}</p>
                    ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Backend' | 'Automation'>('All');
    
    const filters: ('All' | 'AI/ML' | 'Backend' | 'Automation')[] = ['All', 'AI/ML', 'Backend', 'Automation'];

    const filteredProjects = filter === 'All' 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category.includes(filter));

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Projects</h2>
                <p className="text-center text-gray-400 mb-8">A selection of my recent work.</p>
                
                <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
                    {filters.map(f => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                                filter === f ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;