import { motion } from 'framer-motion';
import { Users, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative card-gradient rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 overflow-hidden flex flex-col"
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={`${project.name} banner`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Crown className="w-4 h-4 text-primary" />
          <span>Owner:</span>
          <span className="font-medium text-foreground">{project.owner}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Users className="w-4 h-4 text-primary" />
          <span>Members:</span>
          <span className="font-medium text-foreground">{project.members.length}</span>
        </div>
        <div className="mt-auto">
          <Button className="w-full hero-gradient text-white group/btn">
            Join Project
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

