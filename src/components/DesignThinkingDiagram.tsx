import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Design thinking stages
const DESIGN_STAGES = [
  {
    key: 'empathize',
    label: 'Empathize',
    description: 'Understanding user needs and pain points through research and observation',
    icon: '👥',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    key: 'define',
    label: 'Define',
    description: 'Synthesizing insights to define the core problem and opportunity',
    icon: '🎯',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    key: 'ideate',
    label: 'Ideate',
    description: 'Generating creative solutions through brainstorming and divergent thinking',
    icon: '💡',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    key: 'prototype',
    label: 'Prototype',
    description: 'Building tangible representations to test and validate ideas',
    icon: '🔧',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    key: 'test',
    label: 'Test',
    description: 'Gathering feedback and iterating based on real user interactions',
    icon: '🧪',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  }
];

export default function DesignThinkingDiagram() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Process Flow */}
      <div className="relative">
        {/* Main flow container */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Stages */}
          {DESIGN_STAGES.map((stage, index) => (
            <motion.div
              key={stage.key}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Stage Card */}
              <motion.button
                onClick={() => setActiveStage(stage.key)}
                className={`w-48 h-32 rounded-2xl ${stage.bgColor} ${stage.borderColor} border-2 p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  activeStage === stage.key ? 'ring-4 ring-pink-500/50 scale-105' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">{stage.icon}</div>
                <div className="text-lg font-bold text-zinc-900">
                  {stage.label}
                </div>
                {activeStage === stage.key && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-2"
                  >
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  </motion.div>
                )}
              </motion.button>
              
              {/* Arrow (except for last item) */}
              {index < DESIGN_STAGES.length - 1 && (
                <div className="hidden lg:block mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Iteration Arrow */}
        <motion.div
          className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-center space-x-2 text-zinc-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-sm font-medium">Iterate</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Animated Orbital Description */}
      <AnimatePresence>
        {activeStage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div 
              className="relative cursor-pointer"
              onClick={() => setActiveStage(null)}
            >
              {/* Dotted Circle */}
              <div className="w-80 h-80 rounded-full border-2 border-dashed border-zinc-300 flex items-center justify-center relative">
                {/* Center Content */}
                <div className="text-center max-w-64 px-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-4xl mb-4"
                  >
                    {DESIGN_STAGES.find(s => s.key === activeStage)?.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-2xl font-bold text-zinc-900 mb-4"
                  >
                    {DESIGN_STAGES.find(s => s.key === activeStage)?.label}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-sm text-zinc-700 leading-relaxed"
                  >
                    {DESIGN_STAGES.find(s => s.key === activeStage)?.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-sm text-zinc-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Click any stage to explore • Click the circle to close
        </div>
      </motion.div>

      {/* Process Note */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-sm font-medium text-zinc-700">
          <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></span>
          Iterative process that adapts to each project's unique challenges and constraints
        </div>
      </motion.div>
    </div>
  );
}
