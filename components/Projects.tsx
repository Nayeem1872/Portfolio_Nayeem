import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  reverse?: boolean;
}

const Project = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  reverse,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [reverse ? 100 : -100, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-16`}
    >
      {/* Project image */}
      <motion.div style={{ x: translateX }} className="w-full md:w-1/2">
        <div className="relative group rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-video bg-gray-200 w-full">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">Project Image</span>
              </div>
            )}
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 flex gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white text-sm font-medium bg-blue-500/90 hover:bg-blue-500 px-3 py-1.5 rounded-full transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}

              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white text-sm font-medium bg-gray-700/90 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-all"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project details */}
      <motion.div style={{ x: translateX }} className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="py-1 px-3 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Car E-commerce Platform",
      description:
        "A comprehensive car e-commerce platform with modern UI, filtering capabilities, and responsive design for seamless vehicle shopping experience.",
      image:
        "https://raw.githubusercontent.com/adrianhajdin/project_next_13_car_showcase/main/public/hero.png",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Headless UI"],
      liveUrl: "https://car-ecom-dev-x-7c4w.vercel.app/",
    },
    {
      title: "NIAM Cloud Services",
      description:
        "Corporate website for NIAM cloud services featuring elegant design, service showcases, and responsive interfaces for enterprise clients.",
      image:
        "https://res.cloudinary.com/diqtzk6hj/image/upload/v1715966353/niam_ogzw2w.jpg",
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Animation",
        "Responsive Design",
      ],
      liveUrl: "https://niam.cloud/",
    },
    {
      title: "N-AMS Platform",
      description:
        "A multilingual asset management solution with dashboard interfaces, data visualization, and comprehensive management tools.",
      image:
        "https://res.cloudinary.com/diqtzk6hj/image/upload/v1715966353/n-ams_rvkbbm.jpg",
      tags: ["React", "i18n", "Dashboard", "Material UI", "Data Visualization"],
      liveUrl: "https://n-ams-f-ront.vercel.app/en",
    },
    {
      title: "Dealz E-commerce",
      description:
        "Feature-rich e-commerce platform with product catalog, shopping cart, and secure checkout flows designed for modern shopping experiences.",
      image:
        "https://res.cloudinary.com/diqtzk6hj/image/upload/v1715966353/dealz_kk7crc.jpg",
      tags: ["React", "Redux", "Stripe", "Responsive Design", "Authentication"],
      liveUrl: "https://dealz-website.vercel.app/",
    },
    {
      title: "Coming Soon Landing Page",
      description:
        "Elegant and animated coming soon page with email subscription and social media integration for pre-launch marketing.",
      image:
        "https://res.cloudinary.com/diqtzk6hj/image/upload/v1715966353/comingsoon_qe0xtc.jpg",
      tags: [
        "React",
        "Animation",
        "Email Capture",
        "Countdown Timer",
        "Social Media",
      ],
      liveUrl: "https://comingsoon.d12nndebbpw105.amplifyapp.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Briefcase className="inline-block mr-1 h-4 w-4" />
            My Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some recent projects I've worked on that demonstrate my
            skills in web development, responsive design, and creating engaging
            user experiences.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <Project
              key={project.title}
              {...project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/hasibulislam999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            whileHover={{ x: 5 }}
            whileTap={{ x: 0 }}
          >
            <span>See More on GitHub</span>
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
