"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Data from "../../Data.json";

function Section({ children }: any) {
  return (
    <section>
      <span>{children}</span>
    </section>
  );
}

function getXValue(i: number) {
  switch (i) {
    case 0:
      return -100;
    case 1:
      return 0;
    case 2:
      return 100;
    default:
      return 0;
  }
}

function getYValue(i: number) {
  switch (i) {
    case 0:
      return 0;
    case 1:
      return -100;
    case 2:
      return 0;
    default:
      return 0; // Safety default
  }
}

export default function TrendingCollections() {
  return (
    <>
      <Section>
        <div className="flex flex-wrap justify-center gap-8">
          {Data.trendingCollection.map(
            ({ id, collections, title, avatar, avatarName }, i) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, amount: 0.2 });

              return (
                <motion.div
                  ref={ref}
                  initial={{
                    x: getXValue(i),
                    opacity: 0,
                    y: getYValue(i),
                  }}
                  animate={{
                    x: isInView ? 0 : getXValue(i),
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : getYValue(i),
                  }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={id}
                  className="max-w-sm "
                >
                  <div className="flex rounded-lg h-full flex-col">
                    <div className="flex flex-col justify-between flex-grow">
                      <img src={collections} alt={title} />
                      <p className="font-semibold mt-1">{title}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <img src={avatar} alt={avatarName} className="w-8" />
                      <p>{avatarName}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Section>
    </>
  );
}
