import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About The Daily Plate</title>
        <meta name="description" content="Our mission: make college food simple. Discover how The Daily Plate helps students find mess menus fast." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-6">About The Daily Plate</h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-5 animate-fade-in">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">We help college students discover daily mess menus, today’s specials, and directions—instantly. No more guesswork, just good food fast.</p>
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-muted-foreground">A connected campus food community where messes thrive, students eat better, and information flows smoothly.</p>
            <h2 className="text-xl font-semibold">How It Helps</h2>
            <ul className="list-disc ml-5 text-muted-foreground space-y-2">
              <li>Compare menus across messes effortlessly</li>
              <li>Filter by location, meal type, veg/non-veg, and rating</li>
              <li>Fast, mobile-first experience with swipeable menus</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border animate-scale-in">
            <img src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1600&auto=format&fit=crop" alt="Students enjoying food together" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
