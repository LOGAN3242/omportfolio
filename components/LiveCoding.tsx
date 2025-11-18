import React, { useState, useEffect } from 'react';

const codeSnippet = `
import tensorflow as tf

# Define a simple sequential model
model = tf.keras.models.Sequential([
  tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Display the model's architecture
model.summary()
`;

const LiveCoding: React.FC = () => {
    const [typedCode, setTypedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (isTyping) {
            if (typedCode.length < codeSnippet.length) {
                const timeoutId = setTimeout(() => {
                    setTypedCode(codeSnippet.slice(0, typedCode.length + 1));
                }, 25);
                return () => clearTimeout(timeoutId);
            } else {
                setIsTyping(false);
            }
        }
    }, [typedCode, isTyping]);

    return (
        <section id="live-coding" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Live Coding Demo</h2>
                <div className="glassmorphism rounded-xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
                    <div className="bg-gray-800 p-3 flex items-center">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-grow text-center text-sm text-gray-400">
                            <span>python_example.py</span>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-900/50 font-mono text-sm text-gray-300 min-h-[300px]">
                        <pre><code>{typedCode}</code><span className={`inline-block w-2 h-4 bg-cyan-400 animate-pulse ${isTyping ? '' : 'hidden'}`}></span></pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveCoding;
