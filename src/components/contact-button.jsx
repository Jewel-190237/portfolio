
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookMessenger, FaWhatsapp, FaPhone } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

  const contactOptions = [
    {
      name: "Messenger",
      icon: <FaFacebookMessenger className="w-5 h-5" />,
      link: isMobile
        ? "fb-messenger://user-thread/9589237667802861"
        : "https://www.facebook.com/messages/e2ee/t/9589237667802861",
      color: "bg-[#00C6FF]",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-5 h-5" />,
      link: "https://wa.me/+8801980445424",
      color: "bg-[#25D366]",
    },
    {
      name: "Call",
      icon: <FaPhone className="w-5 h-5" />,
      link: "tel:+8801980445424",
      color: "bg-[#0B5CFF]",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-end space-y-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            {contactOptions.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white ${item.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Center wave animation */}
        <span className="absolute inset-0 rounded-full bg-[#FF5E13]/50 animate-center-wave"></span>
        <span className="absolute inset-0 rounded-full bg-[#FF5E13]/30 animate-center-wave delay-[1.2s]"></span>

        {/* Static button core */}
        <span className="absolute inset-[3px] rounded-full bg-gradient-to-r from-[#FF5E13] to-[#FF9642]"></span>

        {/* Icons */}
        {open ? (
          <IoClose className="w-8 h-8 z-10" />
        ) : (
          <IoChatbubbleEllipsesOutline className="w-8 h-8 z-10" />
        )}
      </motion.button>
    </div>
  );
}
