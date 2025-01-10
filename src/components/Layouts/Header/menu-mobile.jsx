import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const productLinks = [
    { name: "Create APIs", href: "#", icon: <CodeIcon /> },
    { name: "Content Management", href: "#", icon: <ContentIcon /> },
    // ... más enlaces
  ];
  
  const solutionLinks = [
    { name: "Ecommerce", href: "#", icon: <ShopIcon /> },
    { name: "Mobile applications", href: "#", icon: <MobileIcon /> },
    // ... más enlaces
  ];

function MobileMenu() {
 const [isOpen, setIsOpen] = useState(false);

 const menuVariants = {
   closed: {
     opacity: 0,
     scale: 0.95,
     transition: {
       duration: 0.2
     }
   },
   open: {
     opacity: 1,
     scale: 1,
     transition: {
       duration: 0.2
     }
   }
 };

 return (
   <>
     {/* Botón del menú móvil */}
     <motion.button
       whileTap={{ scale: 0.95 }}
       onClick={() => setIsOpen(true)}
       className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
     >
       <Menu className="w-6 h-6" />
     </motion.button>

     {/* Modal del menú */}
     <AnimatePresence>
       {isOpen && (
         <motion.div 
           initial="closed"
           animate="open"
           exit="closed"
           variants={menuVariants}
           className="fixed inset-0 z-50 lg:hidden"
         >
           {/* Overlay */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)}
             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
           />

           {/* Panel del menú */}
           <div className="absolute right-0 top-0 h-full w-[300px] bg-white p-6">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-bold text-purple-600">Product</h2>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="p-2 hover:bg-gray-100 rounded-full"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             {/* Menú de productos */}
             <div className="space-y-6">
               <div className="space-y-4">
                 {productLinks.map((item, index) => (
                     key={index}
                     href={item.href}
                     className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                   >
                     {item.icon}
                     <span>{item.name}</span>
                   </a>
                 ))}
               </div>

               {/* Soluciones */}
               <div className="pt-6 border-t">
                 <h2 className="text-xl font-bold text-purple-600 mb-4">Solutions</h2>
                 <div className="space-y-4">
                   {solutionLinks.map((item) => (
                     
                       key={item.name}
                       href={item.href}
                       className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                     >
                       {item.icon}
                       <span>{item.name}</span>
                     </a>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </>
 );
}