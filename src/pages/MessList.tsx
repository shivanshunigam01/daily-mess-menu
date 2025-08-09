import { useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { messes as allMesses } from "@/data/messes";
import MessCard, { Mess } from "@/components/MessCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const MessList = () => {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("query") ?? "");
  const [location, setLocation] = useState("");
  const [meal, setMeal] = useState<string>("all");
  const [veg, setVeg] = useState<string>("all");
  const [rating, setRating] = useState<number>(3.5);

  useEffect(() => {
    const q = params.get("query") ?? "";
    setQuery(q);
  }, [params]);

  const filtered = useMemo(() => {
    return allMesses.filter((m) => {
      const matchesQuery = query ? m.name.toLowerCase().includes(query.toLowerCase()) : true;
      const matchesLocation = location ? m.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesVeg = veg === "all" ? true : veg === "veg" ? m.isVeg : !m.isVeg;
      const matchesRating = m.rating >= rating;
      const matchesMeal =
        meal === "all" ? true :
        meal === "breakfast" ? m.menu.breakfast.length > 0 :
        meal === "lunch" ? m.menu.lunch.length > 0 :
        meal === "snacks" ? m.menu.snacks.length > 0 :
        m.menu.dinner.length > 0;
      return matchesQuery && matchesLocation && matchesVeg && matchesRating && matchesMeal;
    });
  }, [query, location, veg, rating, meal]);

  return (
    <main className="container py-8">
      <Helmet>
        <title>All Messes Near You | The Daily Plate</title>
        <meta name="description" content="Browse and filter mess menus by location, meal type, veg/non-veg, and rating. Find the best mess near your college." />
        <link rel="canonical" href="/messes" />
      </Helmet>

      <h1 className="text-3xl font-heading font-semibold mb-6">Messes</h1>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Input placeholder="Search by mess name" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Input placeholder="Filter by location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <Select value={meal} onValueChange={setMeal}>
          <SelectTrigger><SelectValue placeholder="Meal" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Meals</SelectItem>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="snacks">Evening Snacks</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
          </SelectContent>
        </Select>
        <Select value={veg} onValueChange={setVeg}>
          <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Veg & Non-veg</SelectItem>
            <SelectItem value="veg">Vegetarian</SelectItem>
            <SelectItem value="nonveg">Non-veg</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Minimum rating: {rating.toFixed(1)}</span>
        </div>
        <Slider defaultValue={[rating]} min={0} max={5} step={0.1} onValueChange={(v) => setRating(v[0])} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m: Mess) => (
          <MessCard key={m.id} mess={m} />
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground">No messes match your filters.</p>
        )}
      </div>
    </main>
  );
};

export default MessList;
