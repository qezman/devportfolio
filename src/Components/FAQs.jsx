import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const queries = [
    {
      question: "What is your design process?",
      answer:
        "I start by understanding user needs and project goals, then map user flows in FigJam and design wireframes in Figma. I use Framer or Webflow to prototype interactions, test with users, and refine based on feedback until everything feels clear and intuitive.",
    },
    {
      question: "Which tools do you use for UI/UX design and prototyping?",
      answer:
        "I mainly use Figma for design and prototyping, FigJam for user flows, and Framer or Webflow for interactive prototypes. I also use Notion for documentation and Hotjar to gather user insights after launch",
    },
    {
      question: "Why do you use Framer and Webflow?",
      answer:
        "They help me bring designs to life quickly. Framer is great for testing motion and interaction, while Webflow lets me build responsive layouts close to real development. Both make handoff faster and smoother.",
    },
    {
      question: "How do you measure the success of your designs?",
      answer:
        "I look at how easily users complete tasks, review analytics and Hotjar heatmaps, and collect feedback from tests or stakeholders. If users are engaging more and meeting goals, that’s success for me.",
    },
  ];
  return (
    <section
      className="relative h-auto bg-cover w-full bg-center p-4 xl:px-80 text-white"
      style={{
        backgroundImage: "url('/testimonial-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      <div className="relative z-10 my-20 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">FAQs</h1>
          <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto" />
          <p className="text-gray-300 mt-3">
            Find answers to common UX/UI questions below.
          </p>
        </div>
        {/* FAQ List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {queries.map((query, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-5 rounded-lg shadow-md bg-gray-800/80 backdrop-blur-md border border-white/10"
            >
              <div
                className="flex justify-between items-center cursor-pointer p-3 rounded-lg transition duration-300 hover:bg-gray-700"
                onClick={() => handleToggle(index)}
              >
                <p className="text-lg font-medium">{query.question}</p>
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-300"
                  >
                    {query.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQs;
