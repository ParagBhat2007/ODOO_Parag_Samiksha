import { motion } from 'framer-motion';
import { Kanban, MessageSquare, TrendingUp, Bell, Users, Calendar, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Kanban,
      title: 'Task Boards',
      description: 'Organize your work with intuitive Kanban boards and custom workflows that adapt to your team\'s needs.',
      color: 'from-primary to-primary-hover'
    },
    {
      icon: MessageSquare,
      title: 'Team Discussions',
      description: 'Keep conversations organized with threaded discussions, mentions, and real-time messaging.',
      color: 'from-secondary to-secondary-hover'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Visualize project progress with advanced analytics, burndown charts, and productivity insights.',
      color: 'from-accent to-primary'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay informed with intelligent notifications that adapt to your preferences and schedule.',
      color: 'from-primary to-accent'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamlessly work together with shared workspaces, role-based permissions, and activity feeds.',
      color: 'from-secondary to-accent'
    },
    {
      icon: Calendar,
      title: 'Timeline Planning',
      description: 'Plan and visualize project timelines with interactive Gantt charts and milestone tracking.',
      color: 'from-accent to-secondary'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline repetitive tasks with custom automations and workflow triggers.',
      color: 'from-primary to-secondary'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Keep your data safe with enterprise-grade security, encryption, and compliance features.',
      color: 'from-secondary to-primary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
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
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              succeed together
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Powerful features designed to streamline your workflow and enhance team collaboration
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative card-gradient rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 h-full">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the power of seamless collaboration?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            Explore all features
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;