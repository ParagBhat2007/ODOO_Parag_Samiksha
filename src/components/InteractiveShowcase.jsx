import { motion } from 'framer-motion';
import { useState } from 'react';
import { Kanban, BarChart3, Users, Calendar, CheckCircle, MessageSquare, Zap } from 'lucide-react';

const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      id: 'projects',
      icon: Kanban,
      title: 'Project Boards',
      description: 'Organize tasks with intuitive Kanban boards',
      preview: {
        title: 'Marketing Campaign Launch',
        status: 'In Progress',
        tasks: [
          { title: 'Brand Guidelines Review', status: 'completed', assignee: 'Sarah' },
          { title: 'Content Creation', status: 'in-progress', assignee: 'Mike' },
          { title: 'Social Media Strategy', status: 'pending', assignee: 'Emma' },
        ]
      }
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Visualize team performance and project metrics',
      preview: {
        title: 'Team Performance Dashboard',
        metrics: [
          { label: 'Completed Tasks', value: '127', trend: '+12%' },
          { label: 'Active Projects', value: '8', trend: '+2' },
          { label: 'Team Velocity', value: '94%', trend: '+5%' },
        ]
      }
    },
    {
      id: 'team',
      icon: Users,
      title: 'Team Collaboration',
      description: 'Connect and collaborate with your team members',
      preview: {
        title: 'Team Activity Feed',
        activities: [
          { user: 'Alex', action: 'completed task', item: 'User Research', time: '2m ago' },
          { user: 'Lisa', action: 'commented on', item: 'Design Review', time: '5m ago' },
          { user: 'Tom', action: 'created project', item: 'Q2 Planning', time: '1h ago' },
        ]
      }
    },
    {
      id: 'calendar',
      icon: Calendar,
      title: 'Timeline Planning',
      description: 'Plan and schedule projects with smart timelines',
      preview: {
        title: 'Project Timeline',
        events: [
          { title: 'Sprint Planning', date: 'Today, 2:00 PM', type: 'meeting' },
          { title: 'Design Review', date: 'Tomorrow, 10:00 AM', type: 'review' },
          { title: 'Product Launch', date: 'Friday, 9:00 AM', type: 'milestone' },
        ]
      }
    }
  ];

  const renderPreview = (item) => {
    switch (item.id) {
      case 'projects':
        return (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">{item.preview.title}</h3>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {item.preview.status}
              </span>
            </div>
            <div className="space-y-3">
              {item.preview.tasks.map((task, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle 
                    className={`w-5 h-5 ${
                      task.status === 'completed' 
                        ? 'text-accent fill-accent/20' 
                        : task.status === 'in-progress'
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`} 
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{task.title}</div>
                    <div className="text-xs text-muted-foreground">Assigned to {task.assignee}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-6">{item.preview.title}</h3>
            <div className="grid grid-cols-1 gap-4">
              {item.preview.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-muted/50 border border-border/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                    <div className="text-sm text-accent font-medium">{metric.trend}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-6">{item.preview.title}</h3>
            <div className="space-y-3">
              {item.preview.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-medium text-sm">
                    {activity.user[0]}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground"> {activity.action} </span>
                      <span className="font-medium">{activity.item}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-6">{item.preview.title}</h3>
            <div className="space-y-3">
              {item.preview.events.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'meeting' ? 'bg-primary' :
                    event.type === 'review' ? 'bg-secondary' : 'bg-accent'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs text-muted-foreground">{event.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            See{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SynergySphere
            </span>
            {' '}in action
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore our powerful features through interactive previews
          </motion.p>
        </motion.div>

        {/* Interactive Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {showcaseItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  activeTab === index
                    ? 'bg-primary/5 border-primary/20 shadow-soft'
                    : 'bg-card border-border/50 hover:border-primary/20 hover:bg-primary/5'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'bg-muted group-hover:bg-primary group-hover:text-primary-foreground'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-2 transition-colors ${
                      activeTab === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              key={activeTab}
              className="card-gradient rounded-2xl border border-border/50 shadow-hover overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Preview Header */}
              <div className="flex items-center gap-3 p-4 border-b border-border/50 bg-muted/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-sm text-muted-foreground">SynergySphere Dashboard</div>
                </div>
              </div>

              {/* Preview Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {renderPreview(showcaseItems[activeTab])}
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;