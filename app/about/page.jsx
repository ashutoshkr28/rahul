'use client';

const AboutDoctor = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 my-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">About The Doctor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Doctor Image */}
        <div className="relative w-full h-80 md:h-[500px]">
          <img 
            src="/images/patient1.jpeg" 
            alt="Doctor" 
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Doctor Bio */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Dr. Rahul Kumar is a skilled and compassionate dental specialist with over 2 years of experience in providing top-quality dental care. He believes in creating a comfortable and welcoming environment for all his patients.
          </p>
          <p className="text-lg text-gray-700">
            Dr. Rahul earned his dental degree from XYZ University and completed his residency at ABC Hospital. He specializes in restorative and cosmetic dentistry, helping patients achieve both functional and aesthetic improvements to their smiles.
          </p>
          <p className="text-lg text-gray-700">
            When not treating patients, Dr. Kumar enjoys reading the latest dental research, volunteering in his community, and spending time with his family.
          </p>

          <div className="flex items-center space-x-4">
            <div>
              <strong className="text-xl text-indigo-700">Specialty:</strong>
              <p className="text-lg text-gray-700">Dental Specialist</p>
            </div>
            <div>
              <strong className="text-xl text-indigo-700">Years of Experience:</strong>
              <p className="text-lg text-gray-700">2 Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
