import Slider from '../components/Slider';

export default function Home() {
  const slides = [
    {
      title: 'STRENGTH',
      image: '/strength_image.jpg', 
    },
    {
      title: 'MOBILITY',
      image: '/mobility_image.webp',
    },
    {
      title: 'DRILLS',
      image: '/drills_image.jpeg', 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Header Section */}
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          AYURVEDA HOUSE PRIVATE LTD ASSIGNMENT
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Built with <span className="font-semibold text-blue-500">Next.js</span>, this platform highlights holistic wellness while taking advantage of server-side rendering for improved performance and SEO.
        </p>
      </header>

      {/* Slider Section */}
      <main className="flex justify-center items-center">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
          <Slider slides={slides} />
        </div>
      </main>
    </div>
  );
}
