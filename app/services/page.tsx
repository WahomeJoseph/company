export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 py-20 bg-gray-50 text-gray-900">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-600 mb-12">Our Services</h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: 'Web Development',
    description:
      'Building fast, modern, and scalable web apps using React, Next.js, and Node.js.',
    image:
      'https://images.unsplash.com/photo-1581093588401-6c8a6d5d8c57?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user-focused interfaces and experiences that drive engagement and clarity.',
    image:
      'https://images.unsplash.com/photo-1559028012-d6011fbc5b0d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cloud Integration',
    description:
      'Cloud-native deployments and DevOps strategies using AWS, Vercel, and Docker.',
    image:
      'https://images.unsplash.com/photo-1581091012184-7b8c4f8c79d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mobile App Development',
    description:
      'Creating seamless, high-performance mobile experiences for iOS and Android using React Native.',
    image:
      'https://images.unsplash.com/photo-1549921296-3a6b0f0975b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'API Development',
    description:
      'Robust, scalable APIs built with REST and GraphQL to power your products and services.',
    image:
      'https://images.unsplash.com/photo-1633356122236-9986b1b1192e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Technical Consulting',
    description:
      'Helping startups and enterprises make smart technical decisions with architectural guidance and strategy.',
    image:
      'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80',
  },
];
