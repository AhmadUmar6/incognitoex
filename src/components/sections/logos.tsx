"use client";
import { Section } from "@/components/section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import only the available crypto icons from react-icons
import { 
  SiBinance, 
  SiCoinbase, 
  SiEthereum,
  SiBitcoin,
  SiCardano,
  SiPolygon,
  SiChainlink,
  SiSolana,
  SiTether,
  SiLitecoin,
  SiDogecoin,
  SiRipple
} from 'react-icons/si';

const companies = [
  { name: "Binance", Icon: SiBinance },
  { name: "Coinbase", Icon: SiCoinbase },
  { name: "Ethereum", Icon: SiEthereum },
  { name: "Bitcoin", Icon: SiBitcoin },
  { name: "Chainlink", Icon: SiChainlink },
  { name: "Solana", Icon: SiSolana }
];

const companies2 = [
  { name: "Cardano", Icon: SiCardano },
  { name: "Polygon", Icon: SiPolygon },
  { name: "Tether", Icon: SiTether },
  { name: "Litecoin", Icon: SiLitecoin },
  { name: "Dogecoin", Icon: SiDogecoin },
  { name: "Ripple", Icon: SiRipple }
];

export function Logos() {
  const [currentSet, setCurrentSet] = useState(companies);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === companies ? companies2 : companies));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="logos">
      <div className="border-x border-t">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((_, idx) => (
            <div
              key={idx}
              className="flex group items-center justify-center p-4 border-r border-t last:border-r-0 sm:last:border-r md:[&:nth-child(3n)]:border-r md:[&:nth-child(6n)]:border-r-0 md:[&:nth-child(3)]:border-r [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(-n+6)]:border-t-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet[idx].name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: Math.random() * 0.5,
                  }}
                >
                  {(() => {
                    const Icon = currentSet[idx].Icon;
                    return (
                      <Icon
                        size={40}
                        className="h-10 w-28 dark:brightness-0 dark:invert grayscale hover:grayscale-0 hover:brightness-100 dark:hover:brightness-0 dark:hover:invert transition-all duration-200 ease-out opacity-90 hover:opacity-100"
                      />
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}