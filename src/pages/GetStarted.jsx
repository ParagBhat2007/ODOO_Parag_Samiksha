import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard.jsx';
import CreateProjectModal from '@/components/CreateProjectModal.jsx';

const initialProjects = [
  {
    id: 1,
    name: 'SynergySphere MVP Launch',
    owner: 'Alex Johnson',
    members: ['Alex J', 'Maria G', 'Steve K', 'Li W'],
    image: 'https://placehold.co/600x400/1e293b/ffffff?text=SynergySphere',
  },
  {
    id: 2,
    name: 'Q4 Marketing Campaign',
    owner: 'Maria Garcia',
    members: ['Maria G', 'David P', 'Emily S'],
    image: 'https://placehold.co/600x400/4a044e/ffffff?text=Marketing',
  },
  {
    id: 3,
    name: 'Website Redesign',
    owner: 'Steve Kim',
    members: ['Steve K', 'Alex J', 'Rachel B', 'Tom H', 'Li W'],
    image: 'https://placehold.co/600x400/0c4a6e/ffffff?text=Redesign',
  },
];

const GetStarted = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (newProjectData) => {
    const newProject = {
      id: Date.now(),
      members: [newProjectData.owner], // The owner is the first member
      image: newProjectData.image || `https://placehold.co/600x400/3b0764/ffffff?text=${newProjectData.name.charAt(0)}`,
      ...newProjectData,
    };
    setProjects([newProject, ...projects]);
  };

  return (
    <div className="pt-20 soft-gradient">
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Your Projects Dashboard
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a new project to get started, or join an existing one.
          </p>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="hero-gradient text-white shadow-hover group"
            onClick={() => setIsModalOpen(true)}
          >
            <PlusCircle className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
            Create New Project
          </Button>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;

