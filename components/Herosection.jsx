// // src/app/page.js (or wherever you want to place it)
// import Image from 'next/image';

// const DoctorBioData = () => {
//   return (
//     <section className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-8xl font-bold text-center mb-8 text-indigo-700">Narayan Dental Clinic</h2>

//       <div className="flex flex-col md:flex-row items-center md:items-start">

//         {/* Left Side - Biodata Section */}
//         <div className="w-full md:w-1/2 px-6">
//           <h3 className="text-2xl font-bold mb-4">Dr. Rahul Kumar</h3>

//           <ul className="space-y-4">
//             <li>
//               <span className="font-semibold text-gray-700">👤 Full Name:</span> 
//               <span className="text-gray-800 ml-2">Dr. Rahul Kumar</span>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">📚 Qualification:</span> 
//               <span className="text-gray-800 ml-2">BDS, MDS (Oral and Maxillofacial Surgery)</span>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">📍 Clinic Address:</span> 
//               <span className="text-gray-800 ml-2">Narayan Dental Clinic Near Babubarahi Petrol Pump</span>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">📧 Email:</span> 
//               <span className="text-gray-800 ml-2">happyrahul@gmail.com</span>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">📱 Contact:</span> 
//               <span className="text-gray-800 ml-2">+91 8434672022</span>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">🌐 Website:</span> 
//               <a href="https://drrahulkr.in" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
//                 www.drrahulkr.in
//               </a>
//             </li>
//             <li>
//               <span className="font-semibold text-gray-700">💉 Specialization:</span> 
//               <span className="text-gray-800 ml-2">Dental Implants, Root Canal Treatment, Cosmetic Dentistry</span>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side - Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <Image 
//             src="/images/patient1.jpeg" 
//             alt="Doctor Profile Picture" 
//             width={400} 
//             height={200} 
//             className="rounded-full shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorBioData;



// src/app/page.js (or wherever you want to place it)
import Image from 'next/image';

const DoctorBioData = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-indigo-700">Narayan Dental Clinic</h2> */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Narayan Dental Clinic
</h2>


      <div className="flex flex-col-reverse md:flex-row items-center md:items-start">

        {/* Left Side - Biodata Section */}
        <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4"> <b style={{color:"red"}}> Dr. Rahul Kumar </b></h3>

          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-700">👤 Full Name:</span>
              <span className="text-gray-800 ml-2">Dr. Rahul Kumar</span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">📚 Qualification:</span>
              <span className="text-gray-800 ml-2">BDS (Consultant Dental Surgeon)</span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">📍 Clinic Address:</span>
              <span className="text-gray-800 ml-2">Narayan Dental Clinic Near Babubarahi Petrol Pump</span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">📧 Email:</span>
              <span className="text-gray-800 ml-2">happyrahul@gmail.com</span>
            </li>
            <li>
              <span className="font-semibold text-gray-700">📱 Contact:</span>
              {/* <span className="text-gray-800 ml-2">+91 8434672022</span> */}
              <a href="tel:+918434672022" className="text-gray-800 ml-2">
                +91 8434672022
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-700">🌐 Website:</span>
              <a href="https://drrahulkr.in" className="text-blue-600 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                www.drrahulkr.in
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-700">💉 Specialization:</span>
              <span className="text-gray-800 ml-2">Dental Implants, Root Canal Treatment, Cosmetic Dentistry</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/patient1.jpeg"
            alt="Doctor Profile Picture"
            width={400}
            height={400} // Keeping the image square for better alignment
            className="rounded-full shadow-lg"
          />
              
        </div>
      </div>
      <div className='ml-6 text-center'>     
         <h1 className='text-2xl'><b >OPD Timing  </b></h1>
      <p className='text-xl'> <b style={{color:"red"}}> Morning 9:00 AM to Evening 5:00 PM </b></p>
      </div>

 
    </section>
  );
};

export default DoctorBioData;

