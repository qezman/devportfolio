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
        "My design process involves research, design, prototype, and test phases. I gather user insights, create wireframes and visual designs, build interactive prototypes, and refine the design based on user feedback.",
    },
    {
      question: "What tools and software do you use for UI design?",
      answer: "I primarily use Figma, but occasionally, I also use Adobe XD.",
    },
    {
      question: "How do you measure the success of your UI designs?",
      answer:
        "I gauge UI design success through a combination of user feedback, task completion rates, engagement metrics, and conversion rates. Utilizing tools like Google Analytics, I analyze user behavior, while usability testing ensures the design effectively meets user needs. My goal is to create intuitive interfaces that align with business objectives and deliver measurable impact.",
    },
  ];
  return (
    <section
      className="relative h-auto bg-cover w-full bg-center p-4 text-white xl:px-80"
      style={{
        backgroundImage: "url('/testimonial-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 my-20 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-400 mt-3">
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
              className="p-5 bg-gray-800 rounded-lg shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-700 p-3 rounded-lg transition duration-300"
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
