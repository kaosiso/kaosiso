import React from "react";
import { motion } from "framer-motion";

const WhiteShine = () => {
  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .white-shine-glow {
            box-shadow:
              0 0 15px 5px rgba(250, 250, 250, 0.4),
              20px 20px 30px 7px rgba(250, 250, 250, 0.2),
              -20px 20px 40px 10px rgba(250, 250, 250, 0.15),
              20px -20px 45px 12px rgba(250, 250, 250, 0.1) !important;
          }
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-visible -z-20">
        <motion.div
          initial={{
            x: -120,
            y: -120,
            scale: 0.2,
            opacity: 0,
            boxShadow: "0 0 30px 10px rgba(250, 250, 250, 0.8)",
          }}
          animate={{
            x: 40,
            y: 40,
            scale: 1.2,
            opacity: 1,
            boxShadow: [
              "0 0 30px 10px rgba(250, 250, 250, 0.8), 40px 40px 60px 15px rgba(250, 250, 250, 0.4), -40px 40px 80px 20px rgba(250, 250, 250, 0.3), 40px -40px 90px 25px rgba(250, 250, 250, 0.2)",
              "0 0 50px 20px rgba(250, 250, 250, 0.9), 70px 70px 100px 30px rgba(250, 250, 250, 0.5), -70px 70px 110px 40px rgba(250, 250, 250, 0.4), 70px -70px 120px 50px rgba(250, 250, 250, 0.3)",
            ],
          }}
          transition={{
            delay: 4,
            duration: 3,
            ease: "easeOut",
            boxShadow: { duration: 3, ease: "easeOut" },
          }}
          className="white-shine-glow rounded-full bg-[#FAFAFA] w-20 h-20 sm:w-32 sm:h-32"
        />
      </div>
    </>
  );
};

export default WhiteShine;
