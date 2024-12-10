// 'use client'

// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-xl font-bold">
//               Narayan Dental Clinic
//             </Link>
//           </div>

//           {/* Menu Items */}
//           <div className="hidden md:flex space-x-4">
//             <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
//               Home
//             </Link>
//             <Link href="/gallery" className="hover:bg-blue-700 px-3 py-2 rounded-md">
//               Gallery
//             </Link>
//             <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
//               About
//             </Link>
//             <Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md">
//               Services
//             </Link>
//             <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">
//               Contact
//             </Link>
//           </div>

//           {/* Hamburger Menu */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:bg-blue-700 p-2 rounded-md"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link href="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
//               Home
//             </Link>
//             <Link href="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
//               About
//             </Link>
//             <Link href="/gallery" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
//               Gallery
//             </Link>
//             <Link href="/services" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
//               Services
//             </Link>
//             <Link href="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md">
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a menu item is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Narayan Dental Clinic
            </Link>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/gallery" className="hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Gallery
            </Link>
            <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              About
            </Link>
            <Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="block hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              About
            </Link>
            <Link href="/gallery" className="block hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Gallery
            </Link>
            <Link href="/services" className="block hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/contact" className="block hover:bg-blue-700 px-3 py-2 rounded-md" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
