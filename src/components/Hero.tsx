import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-dashboard.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 soft-gradient" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Collaborate{' '}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Smarter
              </span>
              , Work Better{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              SynergySphere helps teams stay aligned with task management, project tracking, and seamless communication.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                variant="hero" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-hover group"
              >
                Try Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-white/70">Active Teams</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white/70">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50M+</div>
                <div className="text-white/70">Tasks Completed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-hover group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroImage}
                alt="SynergySphere Dashboard"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <div className="text-sm font-semibold text-primary">+12 Tasks</div>
                <div className="text-xs text-muted-foreground">Today</div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-sm font-semibold text-secondary">Team Online</div>
                <div className="text-xs text-muted-foreground">8 members active</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;