import { Helmet } from "react-helmet-async";
import hero from "@/assets/hero-daily-plate.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FeaturedMessesCarousel from "@/components/FeaturedMessesCarousel";
import HighlightsCarousel, { Highlight } from "@/components/HighlightsCarousel";
import { messes } from "@/data/messes";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/messes?query=${encodeURIComponent(q)}`);
  };

  const highlights: Highlight[] = [
    { title: "Masala Dosa", meal: "Breakfast", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop" },
    { title: "Veg Thali", meal: "Lunch", image: "https://images.unsplash.com/photo-1592839716646-cf3f9c972003?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cutlet", meal: "Snacks", image: "https://images.unsplash.com/photo-1604909052743-91e6773d1b8a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Butter Chicken", meal: "Dinner", image: "https://images.unsplash.com/photo-1604908554056-c6c53f56081a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Paratha", meal: "Breakfast", image: "https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <main>
      <Helmet>
        <title>The Daily Plate | Find Your Mess Menu in Seconds</title>
        <meta name="description" content="Discover college mess menus, today’s specials, and directions near you. Search, filter, and swipe through highlights." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="Assorted campus meals on a table" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 to-background/80" />
        </div>
        <div className="container relative py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight max-w-3xl animate-enter">
            Find Your Mess Menu in Seconds
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl animate-fade-in">
            Compare daily menus, see specials, and get directions—fast, simple, student-friendly.
          </p>
          <form onSubmit={onSearch} className="mt-6 flex gap-2 max-w-xl">
            <Input placeholder="Search mess or college" value={q} onChange={(e) => setQ(e.target.value)} />
            <Button type="submit">Search</Button>
          </form>
          <div className="mt-4">
            <Button variant="secondary" onClick={() => navigate('/messes')}>Browse Messes</Button>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Messes</h2>
        <FeaturedMessesCarousel messes={messes} />
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-semibold mb-4">Daily Highlights</h2>
        <HighlightsCarousel items={highlights} />
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-3">Built for College Foodies</h2>
            <p className="text-muted-foreground">The Daily Plate connects students with messes around campus. Transparent menus, instant filters, and a fast mobile-first experience.</p>
            <div className="mt-4">
              <Button variant="outline" onClick={() => navigate('/about')}>Learn about us</Button>
            </div>
          </div>
          <div className="rounded-xl border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="Friends sharing food" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
