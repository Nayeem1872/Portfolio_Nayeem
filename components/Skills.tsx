import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Server, PaintBucket, LineChart } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
  bgColor: string;
  textColor: string;
  delay?: number;
}

const SkillCategory = ({
  title,
  icon,
  skills,
  bgColor,
  textColor,
  delay = 0,
}: SkillCategoryProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      className={`${bgColor} rounded-2xl p-6 shadow-lg`}
    >
      <div
        className={`inline-flex items-center justify-center p-3 rounded-xl ${textColor} mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: delay + 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
    { name: "GraphQL", level: 65 },
  ];

  const designSkills = [
    { name: "Figma", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 92 },
    { name: "Animation", level: 78 },
    { name: "Design Systems", level: 82 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 85 },
    { name: "Performance Optimization", level: 78 },
    { name: "Testing", level: 70 },
    { name: "CI/CD", level: 65 },
    { name: "Agile/Scrum", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>

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
            <Code className="inline-block mr-1 h-4 w-4" />
            My Skills
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Proficiency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools
            throughout my career. Here's a breakdown of my technical skills and
            proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Frontend Development"
            icon={<Code size={24} />}
            skills={frontendSkills}
            bgColor="bg-white"
            textColor="text-blue-500 bg-blue-50"
            delay={0.1}
          />

          <SkillCategory
            title="Backend Development"
            icon={<Server size={24} />}
            skills={backendSkills}
            bgColor="bg-white"
            textColor="text-green-500 bg-green-50"
            delay={0.2}
          />

          <SkillCategory
            title="Design"
            icon={<PaintBucket size={24} />}
            skills={designSkills}
            bgColor="bg-white"
            textColor="text-purple-500 bg-purple-50"
            delay={0.3}
          />

          <SkillCategory
            title="Other Skills"
            icon={<LineChart size={24} />}
            skills={otherSkills}
            bgColor="bg-white"
            textColor="text-amber-500 bg-amber-50"
            delay={0.4}
          />
        </div>

        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Looking for specific expertise?
          </h3>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skillset. If you have a
            specific technology or tool in mind, let's discuss how I can apply
            my experience to your project.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
