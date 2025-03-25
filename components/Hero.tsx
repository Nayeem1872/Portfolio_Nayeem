import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Briefcase } from "lucide-react";

const Hero = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  // Text animation effect
  const text = "Full Stack Developer";

  useEffect(() => {
    // Apply parallax effect to profile picture
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      // Apply transform to the profile picture
      profileRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotateX(${-yPos}deg) rotateY(${xPos}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleTrail = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      document.body.appendChild(trail);

      setTimeout(() => {
        trail.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(trail);
        }, 200);
      }, 500);
    };

    window.addEventListener("mousemove", handleTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleTrail);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-60"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left content (text) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-700 font-bold leading-tight tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm <span className="text-gradient">Hasibul Islam</span>
            </motion.h1>

            <motion.div
              className="mt-4 text-xl md:text-2xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className="animate-char"
                  style={{ "--char-index": index } as React.CSSProperties}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="mt-6 text-gray-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I develop full-stack web applications with a focus on clean code,
              responsive design, and exceptional user experiences. Bringing your
              ideas to life with modern technologies and best practices.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1ppTGTfXML1Xq8EEFKY7-2m_E-D74wxUE/view?usp=sharing"
                className="portfolio-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                className="relative px-6 py-3 rounded-full overflow-hidden border border-black text-black font-medium hover:text-white transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-black w-0 h-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content (profile picture) */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="perspective">
              <motion.div
                ref={profileRef}
                className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d"
                initial={{ rotateY: -10, rotateX: 5 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                {/* Profile picture frame with 3D effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-teal-400 transform translate-z-0 backface-hidden"></div>

                <div className="absolute inset-[3px] bg-white rounded-2xl overflow-hidden transform translate-z-1 backface-hidden">
                  {/* Replace with Hasibul's picture */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      <img
                        src="/images/pic2.JPG"
                        alt="Hasibul Islam"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                </div>

                {/* 3D lighting effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/50 to-transparent opacity-50 transform translate-z-2 backface-hidden"></div>

                {/* Floating elements around the profile */}
                <motion.div
                  className="absolute -top-10 -right-10 w-16 h-16 bg-blue-400/80 backdrop-blur-md rounded-2xl shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <Code className="w-full h-full p-4 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -left-8 w-14 h-14 bg-teal-400/80 backdrop-blur-md rounded-2xl shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 1,
                  }}
                >
                  <Briefcase className="w-full h-full p-3.5 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
