import { motion } from "framer-motion";

const JoinTheMovementSection = () => {
  const cards = [
    {
      title: "Fyreworks",
      description: "Creative studio that builds brands",
      link: null,
      comingSoon: false
    },
    {
      title: "Campfyre",
      description: "Community for creators by creators",
      link: "https://www.campfyre.co",
      comingSoon: false
    },
    {
      title: "Lantern",
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
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative h-80"
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
                  <div className="frosted-card h-80 flex flex-col justify-between p-8">
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-3xl md:text-4xl font-black uppercase text-center" style={{ letterSpacing: '-0.05em' }}>
                        {card.title}
                      </h3>
                    </div>
                    <div className="text-center">
                      <p className="text-sm opacity-90 mb-2">
                        {card.description}
                      </p>
                      {card.comingSoon && (
                        <span className="text-xs opacity-70 font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="frosted-card h-80 flex flex-col justify-between p-8">
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-center" style={{ letterSpacing: '-0.05em' }}>
                      {card.title}
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2">
                      {card.description}
                    </p>
                    {card.comingSoon && (
                      <span className="text-xs opacity-70 font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovementSection;