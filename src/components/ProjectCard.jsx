import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col rounded-2xl bg-card shadow-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-6 flex-grow">
        {/* Project Name and Owner */}
        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Owned by {project.owner}
        </p>

        {/* Member Avatars */}
        <div className="mt-auto">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Users className="w-4 h-4 mr-2" />
            <span>Members</span>
          </div>
          <div className="flex items-center -space-x-2">
            {project.members.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-bold text-foreground"
                title={member}
              >
                {member.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
            {project.members.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-primary">
                +{project.members.length - 4}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;