import { motion } from "framer-motion";

const JoinTheMovementSection = () => {
  const cards = [
    {
      title: "FYREWORKS",
      description: "Creative studio that builds brands",
      link: null,
      comingSoon: false
    },
    {
      title: "CAMPFYRE",
      description: "Community for creators by creators",
      link: "https://www.campfyre.co",
      comingSoon: false
    },
    {
      title: "LANTERN",
      description: "Funding creative people, platforms and possibilities",
      link: null,
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ letterSpacing: '-0.05em' }}>
            Join the Movement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const CardContent = () => (
              <div className="relative frosted-card p-10 overflow-hidden flex flex-col aspect-[2/3] justify-between">
                {/* Top highlight */}
                <div className="glass-highlight" />
                
                {/* Add subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                {/* Card content */}
                <div className="relative z-10 w-full flex flex-col h-full">
                  <div>
                    <h3 
                      className="text-xl md:text-2xl font-black mb-4 text-white"
                      style={{ letterSpacing: '-0.05em' }}
                    >
                      {card.title}
                    </h3>
                    <div className="h-[1px] w-12 bg-white mb-6 opacity-20"></div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-base text-white/70 mb-2" style={{ letterSpacing: '-0.05em' }}>
                      {card.description}
                    </p>
                    {card.comingSoon && (
                      <p className="text-sm text-white/50 font-medium" style={{ letterSpacing: '-0.05em' }}>
                        Coming Soon
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={card.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <CardContent />
                  </a>
                ) : (
                  <CardContent />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovementSection;