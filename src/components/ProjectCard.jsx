import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 border rounded-lg bg-card shadow-card">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="text-sm text-muted-foreground">Owner: {project.owner}</p>
    </div>
  );
};

export default ProjectCard;