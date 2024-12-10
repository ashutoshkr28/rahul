// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// const PatientGallery = () => {
//   // List of patient images
//   const [gallery] = useState([
//     { id: 1, src: '/images/patient1.jpeg', alt: 'Patient 1' },
//     { id: 2, src: '/images/patient2.jpeg', alt: 'Patient 2' },
//     { id: 3, src: '/images/patient3.jpeg', alt: 'Patient 3' },
//     { id: 4, src: '/images/patient4.jpeg', alt: 'Patient 4' },
//     { id: 5, src: '/images/patient5.jpeg', alt: 'Patient 5' },
//     { id: 6, src: '/images/patient6.jpeg', alt: 'Patient 6' },
//     { id: 7, src: '/images/patient7.jpeg', alt: 'Patient 7' },
//     { id: 8, src: '/images/patient8.jpeg', alt: 'Patient 8' },
//     { id: 9, src: '/images/patient9.jpeg', alt: 'Patient 9' },
//   ]);

//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => setSelectedImage(image);
//   const closeModal = () => setSelectedImage(null);

//   return (
//     <section className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Patient Gallery</h2>

//       {/* Image Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {gallery.map((image) => (
//           <div 
//             key={image.id} 
//             className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
//             onClick={() => openModal(image)}
//           >
//             <div className="w-full aspect-square relative">
//               <Image 
//                 src={image.src} 
//                 alt={image.alt} 
//                 layout="fill" 
//                 objectFit="cover" 
//                 className="rounded-lg" 
//                 priority 
//               />
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <p className="text-white text-lg font-bold">View</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for large image view */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative">
//             <button 
//               className="absolute top-2 right-2 text-white text-3xl font-bold" 
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <Image 
//               src={selectedImage.src} 
//               alt={selectedImage.alt} 
//               width={800} 
//               height={600} 
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PatientGallery;






// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// const PatientGallery = () => {
//   const [gallery] = useState([
//     { id: 1, src: '/images/patient1.jpeg', alt: 'Patient 1' },
//     { id: 2, src: '/images/patient2.jpeg', alt: 'Patient 2' },
//     { id: 3, src: '/images/patient3.jpeg', alt: 'Patient 3' },
//     { id: 4, src: '/images/patient4.jpeg', alt: 'Patient 4' },
//     { id: 5, src: '/images/patient5.jpeg', alt: 'Patient 5' },
//     { id: 6, src: '/images/patient6.jpeg', alt: 'Patient 6' },
//   ]);

//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   const [zoom, setZoom] = useState(1); // Initial zoom level

//   const openModal = (index) => setSelectedImageIndex(index);
//   const closeModal = () => setSelectedImageIndex(null);

//   const nextImage = () => setSelectedImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
//   const prevImage = () => setSelectedImageIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);

//   const zoomIn = () => setZoom((prevZoom) => prevZoom + 0.2);
//   const zoomOut = () => setZoom((prevZoom) => (prevZoom > 0.4 ? prevZoom - 0.2 : 0.2));

//   return (
//     <section className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Patient Gallery</h2>

//       {/* Responsive Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {gallery.map((image, index) => (
//           <div 
//             key={image.id} 
//             className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
//             onClick={() => openModal(index)}
//           >
//             <div className="w-full aspect-square relative">
//               <Image 
//                 src={image.src} 
//                 alt={image.alt} 
//                 layout="fill" 
//                 objectFit="cover" 
//                 className="rounded-lg" 
//               />
//             </div>
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <p className="text-white text-lg font-bold">View</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal with Image Navigation */}
//       {selectedImageIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-xl p-4">
//             {/* Close Button */}
//             <button 
//               className="absolute top-2 right-2 text-white text-3xl font-bold" 
//               onClick={closeModal}
//             >
//               &times;
//             </button>

//             {/* Image */}
//             <div 
//               className="relative max-w-full"
//               style={{ transform: `scale(${zoom})` }}
//             >
//               <Image 
//                 src={gallery[selectedImageIndex].src} 
//                 alt={gallery[selectedImageIndex].alt} 
//                 width={800} 
//                 height={600} 
//                 className="rounded-lg w-full h-auto"
//               />
//             </div>

//             {/* Left and Right Arrows */}
//             <button 
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
//               onClick={prevImage}
//             >
//               ◀
//             </button>
//             <button 
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
//               onClick={nextImage}
//             >
//               ▶
//             </button>

//             {/* Zoom Controls */}
//             <div className="absolute top-4 right-20 flex space-x-4">
//               <button 
//                 className="bg-white p-2 rounded-lg shadow-md" 
//                 onClick={zoomIn}
//               >
//                 🔍 +
//               </button>
//               <button 
//                 className="bg-white p-2 rounded-lg shadow-md" 
//                 onClick={zoomOut}
//               >
//                 🔍 -
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default PatientGallery;

'use client';

import { useState } from 'react';
import Image from 'next/image';

const PatientGallery = () => {
  const [gallery] = useState([
    { id: 1, src: '/images/patient1.jpeg', alt: 'Patient 1' },
    { id: 2, src: '/images/patient2.jpeg', alt: 'Patient 2' },
    { id: 3, src: '/images/patient3.jpeg', alt: 'Patient 3' },
    { id: 4, src: '/images/patient4.jpeg', alt: 'Patient 4' },
    { id: 5, src: '/images/patient5.jpeg', alt: 'Patient 5' },
    { id: 6, src: '/images/patient6.jpeg', alt: 'Patient 6' },
    { id: 7, src: '/images/patient7.jpeg', alt: 'Patient 7' },
    { id: 8, src: '/images/patient8.jpeg', alt: 'Patient 8' },
    { id: 9, src: '/images/patient9.jpeg', alt: 'Patient 9' },
    { id: 10, src: '/images/patient10.jpeg', alt: 'Patient 10' },
    { id: 11, src: '/images/patient11.jpeg', alt: 'Patient 11' },
    { id: 12, src: '/images/patient12.jpeg', alt: 'Patient 12' },
    { id: 13, src: '/images/patient13.jpeg', alt: 'Patient 13' },
  ]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [zoom, setZoom] = useState(1); // Initial zoom level

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = () => setSelectedImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  const prevImage = () => setSelectedImageIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);

  const zoomIn = () => setZoom((prevZoom) => prevZoom + 0.2);
  const zoomOut = () => setZoom((prevZoom) => (prevZoom > 0.4 ? prevZoom - 0.2 : 0.2));

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Patient Gallery</h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map((image, index) => (
          <div 
            key={image.id} 
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
            onClick={() => openModal(index)}
          >
            <div className="w-full aspect-square relative">
              <Image 
                src={image.src} 
                alt={image.alt} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg" 
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-bold">View</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Image Navigation */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-4">
            {/* Overlay for Buttons */}
            <div className="absolute inset-0 flex items-center justify-between ml-60">
              {/* Left and Right Arrows */}
              <button 
                className="text-white text-3xl font-bold bg-black mx-44 p-3 rounded-full shadow-lg z-20 "
                onClick={prevImage}
              >
                ◀
              </button>
              <button 
                className="text-white text-3xl font-bold bg-black p-3 rounded-full shadow-lg z-20"
                onClick={nextImage}
              >
                ▶
              </button>

              {/* Zoom Controls */}
              <div className="flex z-20">
                <button 
                  className="bg-white p-2 rounded-lg shadow-md" 
                  onClick={zoomIn}
                >
                  🔍 +
                </button>
                <button 
                  className="bg-white p-2 rounded-lg shadow-md" 
                  onClick={zoomOut}
                >
                  🔍 -
                </button>
              </div>

              {/* Close Button */}
              <button 
                className="absolute top-2 right-2 text-white text-3xl font-bold" 
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            {/* Image Container with prevent cropping */}
            <div
              className="relative max-w-full overflow-hidden"
              style={{
                transform: `scale(${zoom})`,
                maxWidth: '40%',
                maxHeight: '80vh', // Limit image size to the viewport
                objectFit: 'contain', // Ensures the image fits inside the container without cropping
                margin: 'auto',
              }}
            >
              <Image 
                src={gallery[selectedImageIndex].src} 
                alt={gallery[selectedImageIndex].alt} 
                width={800} 
                height={700} 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PatientGallery;
