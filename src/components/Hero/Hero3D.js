import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero3D = () => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = (e.clientX - centerX) / (rect.width / 2);
        const mouseY = (e.clientY - centerY) / (rect.height / 2);

        x.set(mouseX * 0.5);
        y.set(mouseY * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const techStack = [
        'React',
        'Next.js',
        'Vue.js',
        'React Native',
        'Express.js',
        'PostgreSQL'
    ];

    return (
        <div className="hero-3d-container">
            <motion.div
                ref={ref}
                className="hero-3d-box"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                animate={{
                    rotateY: isHovered ? rotateY.get() : 360,
                }}
                transition={{
                    rotateY: {
                        duration: isHovered ? 0 : 20,
                        repeat: isHovered ? 0 : Infinity,
                        ease: 'linear',
                    },
                }}
            >
                {/* Front Face */}
                <motion.div
                    className="box-face box-front"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="tech-label">Frontend</div>
                        <div className="tech-list">
                            {techStack.slice(0, 3).map((tech, index) => (
                                <span key={tech} className="tech-item">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Back Face */}
                <motion.div
                    className="box-face box-back"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <div className="tech-label">Backend</div>
                        <div className="tech-list">
                            {techStack.slice(3, 6).map((tech, index) => (
                                <span key={tech} className="tech-item">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Face */}
                <div className="box-face box-right">
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="tech-label">Mobile</div>
                        <div className="tech-list">
                            <span className="tech-item">React Native</span>
                        </div>
                    </div>
                </div>

                {/* Left Face */}
                <div className="box-face box-left">
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="tech-label">Database</div>
                        <div className="tech-list">
                            <span className="tech-item">PostgreSQL</span>
                        </div>
                    </div>
                </div>

                {/* Top Face */}
                <div className="box-face box-top">
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <div className="tech-label">Full Stack</div>
                    </div>
                </div>

                {/* Bottom Face */}
                <div className="box-face box-bottom">
                    <div className="face-content">
                        <div className="tech-icon">
                            <i className="fas fa-cube"></i>
                        </div>
                        <div className="tech-label">3D Interactive</div>
                    </div>
                </div>
            </motion.div>

            {/* Tooltip */}


            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="particle"
                    initial={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: 0
                    }}
                    animate={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
};

export default Hero3D;
