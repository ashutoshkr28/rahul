'use client';

const DentalServices = () => {
  const services = [
    {
      id: 1,
      title: 'Cavity Treatment',
      image: '/images/Cavity.jpg',
      description: 'Cavity treatment involves removing decayed tissue from a tooth and filling the area to restore its function and appearance.',
    },
    {
      id: 2,
      title: 'Teeth Whitening',
      image: '/images/whitening.jpg',
      description: 'Teeth whitening helps to remove stains and discoloration, brightening your smile with safe, effective procedures.',
    },
    {
      id: 3,
      title: 'Root Canal Treatment',
      image: '/images/Root-Canal-Treatment.jpg',
      description: 'Root canal treatment is a procedure to remove infection from inside a tooth and prevent the need for tooth extraction.',
    },
    {
      id: 4,
      title: 'Orthodontics (Braces)',
      image: '/images/Orthodontics(Braces).jpg',
      description: 'Orthodontics involve using braces to correct misaligned teeth, improving both function and appearance of the smile.',
    },
    {
      id: 5,
      title: 'Dental Implants',
      image: '/images/Dental-Implants.jpg',
      description: 'Dental implants are artificial tooth roots placed into the jawbone, offering a permanent solution for missing teeth.',
    },
    {
      id: 6,
      title: 'Gum Disease Treatment',
      image: '/images/Gum-Disease-Treatment.jpg',
      description: 'Gum disease treatment includes a range of therapies to treat gingivitis and periodontitis, restoring oral health.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 my-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Our Dental Services</h2>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="relative rounded-lg shadow-md overflow-hidden group">
            {/* Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
            />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold text-indigo-700">{service.title}</h3>
              <p className="text-gray-700 mt-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalServices;
