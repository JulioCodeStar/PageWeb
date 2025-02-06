"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronsUpDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { menuData } from "@/api/menuItems";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

function MobileMenu() {
  const [openSection, setOpenSection] = useState(null);
  const main = menuData.MainMenuItems;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </SheetTrigger>
      <SheetContent className="p-4 bg-white shadow-lg w-72 h-full overflow-y-auto">
        <nav className="space-y-2">
          {main.map((item) => (
            <div key={item.id}>
              {item.sections ? (
                <Collapsible
                  open={openSection === item.id}
                  onOpenChange={() =>
                    setOpenSection(openSection === item.id ? null : item.id)
                  }
                >
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                      <span className="text-lg font-semibold text-gray-700">
                        {item.title}
                      </span>
                      <ChevronsUpDown className="h-4 w-4" />
                    </div>
                  </CollapsibleTrigger>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openSection === item.id ? 1 : 0,
                      height: openSection === item.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CollapsibleContent className="space-y-2 px-6 py-2 bg-gray-50 rounded-lg shadow-inner">
                      {item.sections.map((section) => (
                        <div key={section.id} className="pt-2">
                          <a
                            href={section.slug}
                            className="block py-1 text-gray-600 hover:text-gray-900"
                          >
                            <span className="text-xl">{section.icon}</span>
                            {section.heading}
                          </a>
                          <div className="pl-4 pt-4 space-y-3">
                            {section.links.map((link) => (
                              <a
                                key={link.id}
                                href={link.url}
                                className="block text-sm text-gray-700 hover:text-gray-900"
                              >
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </motion.div>
                </Collapsible>
              ) : (
                <a
                  href={item.url}
                  className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
