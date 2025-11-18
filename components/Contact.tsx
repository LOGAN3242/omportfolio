import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };
  
  const contactInfo = [
    {
      type: 'email',
      value: 'omsarvaiya3242@gmail.com',
      href: 'mailto:omsarvaiya3242@gmail.com',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    },
    {
      type: 'phone',
      value: '+91 7600312342',
      href: 'tel:+917600312342',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    },
    {
      type: 'linkedin',
      value: 'linkedin.com/in/sarvaiya-om',
      href: 'https://www.linkedin.com/in/sarvaiya-om',
      icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2V21h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    }
  ];
  
  const socialLinks = contactInfo.filter(item => item.type === 'linkedin');
  const primaryContact = contactInfo.filter(item => item.type === 'email' || item.type === 'phone');

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
        <div className="glassmorphism rounded-xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Reach out, and let's connect!
          </p>
          
          <div className="space-y-6">
            {primaryContact.map(item => (
              <div key={item.type} className="flex flex-col items-center">
                <a href={item.href} className="text-xl text-cyan-400 hover:underline transition-colors duration-300">
                  {item.value}
                </a>
                <button 
                  onClick={() => copyToClipboard(item.value, item.type)} 
                  className="mt-2 text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {copied === item.type ? 'Copied!' : `Copy ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700/50">
            <p className="text-gray-400 mb-4">You can also find me on:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(item => (
                 <a 
                    key={item.type} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                    aria-label={item.type}
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                        {item.icon}
                    </svg>
                 </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;