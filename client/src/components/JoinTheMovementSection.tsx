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
                  <div className="glass-card h-full flex flex-col justify-center items-center text-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {card.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      {card.description}
                    </p>
                    {card.comingSoon && (
                      <span className="text-sm opacity-70 font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </a>
              ) : (
                <div className="glass-card h-full flex flex-col justify-center items-center text-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {card.title}
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    {card.description}
                  </p>
                  {card.comingSoon && (
                    <span className="text-sm opacity-70 font-medium">
                      Coming Soon
                    </span>
                  )}
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