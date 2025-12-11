import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    src: "https://static.vecteezy.com/system/resources/thumbnails/024/569/685/small/empty-space-background-with-cat-illustration-ai-generative-free-photo.jpg",
    title: "Analytics",
    text: "Get real-time insights into your data.",
  },
  {
    id: 2,
    src: "https://imgs.search.brave.com/zx-rN3-7n8DBASijJkgqMZfW-fDSf2bajB1X_eQZF_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/Mzk5LzM1NS9zbWFs/bC90aHJlZS1jb29s/LWNhdHMtaW4tc3Vu/Z2xhc3Nlcy1pbGx1/c3RyYXRpb24tYWkt/Z2VuZXJhdGl2ZS1m/cmVlLXBob3RvLmpw/Zw",
    title: "Automation",
    text: "Automate workflows and save time.",
  },
  {
    id: 3,
    src: "https://thumbs.dreamstime.com/b/stylish-tabby-cat-dressed-miniature-police-uniform-complete-hat-sunglasses-sits-city-street-s-serious-377913058.jpg",
    title: "Security",
    text: "Enterprise-grade security for your apps.",
  },
  {
    id: 4,
    src: "https://thumbs.dreamstime.com/b/photo-paws-several-cats-center-symbolizing-teamwork-315044363.jpg",
    title: "Integrations",
    text: "Connect with tools you already use.",
  },
  {
    id: 5,
    src: "https://felineengineering.com/wp-content/uploads/2019/12/Cat-Smacking-Another-Cat-1024x710.jpg",
    title: "Support",
    text: "24/7 support for your team.",
  },
];

const Scroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="w-full mt-24">
      <div className="relative w-full overflow-hidden h-screen">

        {/* Slides Wrapper */}
        <motion.div
          className="flex h-full w-full "
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{ backgroundImage: `url(${card.src})` }}
            >
              {/* DROP-DOWN ANIMATED CARD */}
              <motion.div
                initial={{ opacity: 0, y: -120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
                  w-[480px]
                  min-h-[280px]
                  bg-white/20
                  backdrop-blur-lg
                  border border-white/30
                  rounded-2xl
                  shadow-2xl
                  p-10
                  flex flex-col
                  items-center
                  justify-center
                  text-center
                  
                "
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white drop-shadow-lg">
                  {card.title}
                </h3>

                <p className="text-lg md:text-xl text-white/90 drop-shadow-sm mb-6">
                  {card.text}
                </p>

                <a
                  href="#"
                  className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-xl hover:bg-gray-200 transition"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 pb-6 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg text-5xl font-bold"
        >
          &#8249;
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 pb-6 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg text-5xl font-bold"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scroll;
