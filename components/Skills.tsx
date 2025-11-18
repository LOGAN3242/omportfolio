
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { type SkillCategory } from '../types';

const glowColors: { [key: string]: string } = {
  purple: 'hover:shadow-purple-500/50',
  blue: 'hover:shadow-blue-500/50',
  cyan: 'hover:shadow-cyan-500/50',
  green: 'hover:shadow-green-500/50',
  orange: 'hover:shadow-orange-500/50',
};

const borderColors: { [key: string]: string } = {
  purple: 'border-purple-500',
  blue: 'border-blue-500',
  cyan: 'border-cyan-500',
  green: 'border-green-500',
  orange: 'border-orange-500',
};

const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
    return (
        <div className={`glassmorphism p-6 rounded-lg border-2 ${borderColors[category.color]} transition-shadow duration-300 shadow-lg ${glowColors[category.color]}`}>
            <h3 className={`text-2xl font-bold mb-4 ${'text-' + category.color + '-400'}`}>{category.name}</h3>
            <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                    <span key={skill.name} className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SKILL_CATEGORIES.map(category => (
                        <SkillCategoryCard key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
