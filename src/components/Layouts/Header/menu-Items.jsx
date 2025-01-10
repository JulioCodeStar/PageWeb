import { useState } from "react";
import { ChevronDown, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/api/menuItems";


function isMenuLink(item) {
  return item.__component === "menu.menu-link";
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

export default function MenuItems() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  const items = menuData;

  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center gap-2">
        {items.MainMenuItems.map((item) => (
          <motion.li
            key={item.id}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            className="relative group"
          >
            {isMenuLink(item) ? (
              <Link href={item.url}>
                <motion.span
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 inline-block relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.span>
              </Link>
            ) : (
              <div
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <motion.button
                  className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  <motion.div
                    animate={{ rotate: openDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-[5vw] -translate-x-1/2 pt-4 z-50"
                      style={{
                        width: '800px',
                        marginLeft: '-400px'
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-3 gap-0">
                          {item.sections.map((section) => (
                            <div
                              key={section.name}
                              className={`p-6 ${
                                hoveredSection === section.id
                                  ? "bg-gray-50"
                                  : "bg-white"
                              } transition-colors duration-200`}
                              onMouseEnter={() => setHoveredSection(section.id)}
                            >
                              <Link href={section.slug}>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  className="flex items-center gap-2 mb-4 text-blue-600 font-medium"
                                >
                                  <span className="text-xl">{section.icon}</span>
                                  {section.heading}
                                  <MoveRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                              </Link>
                              <ul className="space-y-3">
                                {section.links.map((link) => (
                                  <motion.li
                                    key={link.id}
                                    whileHover={{ x: 5 }}
                                    className="transition-colors duration-200"
                                  >
                                    <Link
                                      href={link.url}
                                      className="block p-2 rounded-lg hover:bg-gray-50"
                                    >
                                      <div className="font-medium text-gray-900">
                                        {link.name}
                                      </div>
                                      {link.description && (
                                        <div className="text-sm text-gray-500">
                                          {link.description}
                                        </div>
                                      )}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}