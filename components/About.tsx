import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, Briefcase, Zap } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const skills = [
    "HTML5/CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "API Integration",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <User className="inline-block mr-1 h-4 w-4" />
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get to Know Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate web developer with a keen eye for design and a
            commitment to creating beautiful, functional digital experiences. I
            specialize in building modern, responsive web applications with
            clean, efficient code.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side: Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mr-4">
                    <Code className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">Technical Skills</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="py-1.5 px-4 rounded-full bg-gray-100 text-gray-800 text-sm font-medium transition-all hover:bg-gray-200"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#e0f2fe",
                        color: "#0369a1",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative mt-8 rounded-2xl overflow-hidden bg-white shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-400"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-100 text-purple-600 mr-4">
                    <Zap className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">My Approach</h3>
                </div>

                <ul className="space-y-3">
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                    <span>Clean, maintainable code</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                    <span>Responsive, mobile-first design</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                    <span>Intuitive user experiences</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                    <span>Attention to detail</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <span className="h-6 w-6 text-green-500 mr-2">✓</span>
                    <span>Performance optimization</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: About text and experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-white shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400"></div>
              <div className="p-8">
                <div className="mb-6 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-600 mr-4">
                    <Briefcase className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">Experience & Education</h3>
                </div>

                <div className="space-y-8">
                  <motion.div
                    className="relative pl-8 border-l-2 border-gray-200"
                    variants={itemVariants}
                  >
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Mid-Level Software Engineer
                    </h4>
                    <p className="text-gray-500 text-sm mb-1">
                      Alo IT Consultants • December 2023 – Present
                    </p>
                    <p className="text-gray-600">
                      Led development of web applications using React,nextjs and
                      TypeScript.
                    </p>
                  </motion.div>

                  <motion.div
                    className="relative pl-8 border-l-2 border-gray-200"
                    variants={itemVariants}
                  >
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-teal-500"></div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Junior Software Engineer
                    </h4>
                    <p className="text-gray-500 text-sm mb-1">
                      Valkyrie IT Limited: • January 2023 – November-2023
                    </p>
                    <p className="text-gray-600">
                      Developed and maintained client websites and web
                      applications.
                    </p>
                  </motion.div>

                  <motion.div
                    className="relative pl-8 border-l-2 border-gray-200"
                    variants={itemVariants}
                  >
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-purple-500"></div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      B.Sc in Computer Science and Engineering
                    </h4>
                    <p className="text-gray-500 text-sm mb-1">
                      East West University • 2018 - 2022
                    </p>
                    <p className="text-gray-600">
                      Graduated with honors, specializing in web technologies.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4">
                Ready to work together?
              </h3>
              <p className="mb-6 text-blue-100">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full transition-all hover:bg-blue-50 hover:shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
