import React from 'react';
import { FUTURE_GOALS } from '../constants';

const FutureGoals: React.FC = () => {
    return (
        <section id="future-goals" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Future Goals</h2>
                <p className="text-center text-gray-400 mb-12">Shaping the future of software with AI and intelligent automation.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {FUTURE_GOALS.map(goal => (
                        <div key={goal.title} className="glassmorphism p-8 rounded-xl text-center transition-transform transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-800 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={goal.icon} />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                            <p className="text-gray-400">{goal.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureGoals;
