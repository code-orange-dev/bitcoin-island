import React from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaBolt, FaCreditCard } from "react-icons/fa";
import { MdLocalAtm } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex">
      <div className="flex-1 w-full max-w-2xl h-screen">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path: Lightning Network to GoPay to ATM */}
          <path
            id="bitcoin-path"
            d="M50 50 Q200 150 100 250 T350 350"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="5 5"
          />

          {/* Lightning Network */}
          <g transform="translate(50, 50)">
            <FaBolt className="text-blue-500" size={20} />
            <text x="-45" y="25" fontSize="12" fill="#333">
              Lightning Network
            </text>
          </g>

          {/* GoPay */}
          <g transform="translate(100, 250)">
            <FaCreditCard className="text-green-500" size={20} />
            <text x="-45" y="15" fontSize="12" fill="#333">
              GoPay
            </text>
          </g>

          {/* ATM */}
          <g transform="translate(350, 350)">
            <MdLocalAtm className="text-red-500" size={20} />
            <text x="-25" y="15" fontSize="12" fill="#333">
              ATM
            </text>
          </g>

          {/* Moving Bitcoin */}
          <motion.g
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M50 50 Q200 150 100 250 T350 350"
            />
            <FaBitcoin
              style={{ transform: "translate(-50%, -50%)" }}
              className="text-yellow-500"
              size={24}
            />
          </motion.g>
        </svg>
      </div>
      <div className="flex-1">
        <iframe
          src="https://btcln.app/vm/gopay" // Replace with the URL of the website you want to embed
          width="100%"
          height="100%"
          style={{
            border: "none", // Removes the border around the iframe
            borderRadius: "8px", // Optional: adds rounded corners
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
