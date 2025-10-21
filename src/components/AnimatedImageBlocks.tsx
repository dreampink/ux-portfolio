import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedImageBlocksProps {
  imageSrc: string;
  blocks: Array<{
    id: string;
    title: string;
    description: string;
    position: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    animation?: 'slideInLeft' | 'slideInRight' | 'fadeInUp' | 'scaleIn' | 'rotateIn';
  }>;
}

export default function AnimatedImageBlocks({ imageSrc, blocks }: AnimatedImageBlocksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleBlocks, setVisibleBlocks] = useState<Set<string>>(new Set());

  // Animation variants
  const animationVariants = {
    slideInLeft: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    slideInRight: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    fadeInUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    scaleIn: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    rotateIn: {
      initial: { rotate: -10, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-auto">
        <img 
          src={imageSrc} 
          alt="Polish Pad Project" 
          className="w-full h-auto object-cover"
        />
        
        {/* Animated Blocks Overlay */}
        {blocks.map((block, index) => {
          const BlockComponent = () => {
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { 
              threshold: 0.3,
              rootMargin: "-50px 0px"
            });

            const animation = block.animation || 'fadeInUp';
            const variants = animationVariants[animation];

            return (
              <motion.div
                ref={ref}
                className="absolute bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20"
                style={{
                  left: `${block.position.x}%`,
                  top: `${block.position.y}%`,
                  width: `${block.position.width}%`,
                  height: `${block.position.height}%`,
                }}
                initial={variants.initial}
                animate={isInView ? variants.animate : variants.initial}
                transition={variants.transition}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {block.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {block.description}
                </motion.p>
                
                {/* Animated indicator */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-pink-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                />
              </motion.div>
            );
          };

          return <BlockComponent key={block.id} />;
        })}
      </div>
    </div>
  );
}

// Hook for scroll-triggered animations
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

