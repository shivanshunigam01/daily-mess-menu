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
    { title: "Masala Dosa", meal: "Breakfast", price: "40", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop" },
    { title: "Veg Thali", meal: "Lunch", price: "80", image: "https://images.unsplash.com/photo-1592839716646-cf3f9c972003?q=80&w=1200&auto=format&fit=crop" },
    { title: "Cutlet", meal: "Snacks", price: "25", image: "https://images.unsplash.com/photo-1604909052743-91e6773d1b8a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Butter Chicken", meal: "Dinner", price: "120", image: "https://images.unsplash.com/photo-1604908554056-c6c53f56081a?q=80&w=1200&auto=format&fit=crop" },
    { title: "Paratha", meal: "Breakfast", price: "35", image: "https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1200&auto=format&fit=crop" },
    { title: "Chicken Biryani", meal: "Lunch", price: "100", image: "https://images.unsplash.com/photo-1563379091339-03246963d90f?q=80&w=1200&auto=format&fit=crop" },
    { title: "Samosa", meal: "Snacks", price: "15", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop" },
    { title: "Dal Tadka", meal: "Dinner", price: "60", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <main>
      <Helmet>
        <title>The Daily Plate | Find Your Mess Menu in Seconds</title>
        <meta name="description" content="Discover college mess menus, today’s specials, and directions near you. Search, filter, and swipe through highlights." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero} alt="Assorted campus meals on a table" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 animate-enter">
              Find Your Mess Menu in 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Seconds</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-fade-in">
              The ultimate food discovery platform for college students. Compare daily menus, discover specials, and get directions—all in one place.
            </p>
            <form onSubmit={onSearch} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <Input 
                placeholder="Search for mess name, location, or favorite dish..." 
                value={q} 
                onChange={(e) => setQ(e.target.value)}
                className="h-12 text-lg shadow-soft"
              />
              <Button type="submit" size="lg" className="h-12 px-8 text-lg shadow-elegant hover:shadow-glow">
                Search Now
              </Button>
            </form>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" onClick={() => navigate('/messes')} className="shadow-soft hover-lift">
                Browse All Messes
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/add-mess')} className="shadow-soft hover-lift">
                Add Your Mess
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Messes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the top-rated messes loved by students in your area
          </p>
        </div>
        <FeaturedMessesCarousel messes={messes} />
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Today's Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Popular dishes across campus - from hearty breakfasts to satisfying dinners
            </p>
          </div>
          <HighlightsCarousel items={highlights} />
        </div>
      </section>

      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Built for College Foodies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Daily Plate is your go-to platform for discovering amazing food options around campus. 
              We connect hungry students with local messes, making it easier than ever to find your next meal.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Real-time menu updates from mess owners</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Advanced search and filter options</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Direct calling and GPS directions</p>
              </div>
            </div>
            <div className="pt-4">
              <Button onClick={() => navigate('/about')} size="lg" className="shadow-elegant hover:shadow-glow">
                Learn More About Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" 
                alt="Friends sharing food together" 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-elegant border">
              <p className="text-sm font-semibold text-primary">1000+ Students</p>
              <p className="text-xs text-muted-foreground">Already using Daily Plate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to discover amazing food?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who trust The Daily Plate for their daily meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate('/messes')} className="text-lg px-8">
              Explore Messes
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/add-mess')} 
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
