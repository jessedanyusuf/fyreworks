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
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Join the Movement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const CardContent = () => (
              <div className="frosted-card h-80 w-full flex flex-col">
                {/* Title Section - Takes most of the space */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <h3 
                    className="text-3xl md:text-4xl font-black text-center leading-tight"
                    style={{ letterSpacing: '-0.05em' }}
                  >
                    {card.title}
                  </h3>
                </div>
                
                {/* Description Section - Fixed at bottom */}
                <div className="p-8 pt-0">
                  <div className="text-center border-t border-white/10 pt-6">
                    <p className="text-sm opacity-90 leading-relaxed">
                      {card.description}
                    </p>
                    {card.comingSoon && (
                      <p className="text-xs opacity-70 font-medium mt-2">
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