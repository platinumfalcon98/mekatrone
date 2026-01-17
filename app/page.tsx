export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Placeholder */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-accent">
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Welcome to Mekatrone</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Your premier destination for RC aircraft and professional services
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explore Shop
          </button>
        </div>
      </section>

      {/* Features Section - Placeholder */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Shop</h3>
            <p className="text-gray-600">Browse our extensive collection of RC aircraft and parts</p>
          </div>

          <div className="text-center space-y-4 p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Repair Services</h3>
            <p className="text-gray-600">Professional repair and maintenance for your aircraft</p>
          </div>

          <div className="text-center space-y-4 p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Training</h3>
            <p className="text-gray-600">Learn to fly with our expert instructors</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Placeholder */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Join the Mekatrone Community</h2>
          <p className="text-lg text-gray-600">
            Connect with fellow RC enthusiasts, participate in events, and stay updated with the latest news
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Join the Club
          </button>
        </div>
      </section>
    </div>
  );
}
