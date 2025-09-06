import React from 'react';

const CreateProjectModal = ({ isOpen, onClose, onCreate }) => {
  if (!isOpen) {
    return null;
  }

  // A simple placeholder so the app doesn't crash
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-card p-8 rounded-lg">
        <h2 className="text-xl font-bold">Create Project Modal</h2>
        <button onClick={onClose} className="mt-4 p-2 border rounded">Close</button>
      </div>
    </div>
  );
};

export default CreateProjectModal;