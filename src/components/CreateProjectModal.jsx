import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreateProjectModal = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !owner) return;
    onCreate({ name, owner, image });
    // Reset form and close
    setName('');
    setOwner('');
    setImage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg bg-card card-gradient rounded-2xl shadow-hover border border-border/50 p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 rounded-full"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>

            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Create a New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Project Name</label>
                <input
                  type="text"
                  placeholder="e.g., Q1 Marketing Campaign"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-background border border-input focus:ring-2 focus:ring-ring focus:outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Project Owner</label>
                <input
                  type="text"
                  placeholder="e.g., Jane Doe"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-background border border-input focus:ring-2 focus:ring-ring focus:outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Cover Image URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://example.com/image.png"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-background border border-input focus:ring-2 focus:ring-ring focus:outline-none transition-shadow"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="hero-gradient text-white shadow-soft">
                  Create Project
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateProjectModal;

