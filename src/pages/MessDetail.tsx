import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { messes } from "@/data/messes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";

const MessDetail = () => {
  const { id } = useParams();
  const mess = messes.find((m) => m.id === id);

  if (!mess) return <main className="container py-10"><p>Mess not found.</p></main>;

  return (
    <main>
      <Helmet>
        <title>{mess.name} Menu | The Daily Plate</title>
        <meta name="description" content={`Today's menu and specials at ${mess.name}. Call or get directions instantly.`} />
        <link rel="canonical" href={`/messes/${mess.id}`} />
      </Helmet>

      <section className="relative">
        <img src={mess.image} alt={`${mess.name} cover`} className="h-60 md:h-80 w-full object-cover" />
        <div className="container -mt-10 relative">
          <div className="bg-card border rounded-xl p-5 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">{mess.name}</h1>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{mess.location}</div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-500"><Star className="h-4 w-4" /><span className="text-sm font-medium">{mess.rating.toFixed(1)}</span></div>
                  <Badge variant={mess.isVeg ? "secondary" : "default"}>{mess.isVeg ? "Vegetarian" : "Veg & Non-veg"}</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button asChild className="gap-2"><a href={`tel:${mess.phone}`}><Phone className="h-4 w-4" />Call</a></Button>
                <Button asChild variant="outline" className="gap-2"><a href={mess.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" />Directions</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="container py-10">
        {mess.specials && mess.specials.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Today's Specials</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mess.specials.map((s, i) => (
                <div key={i} className="rounded-lg border p-4 shadow-glow">
                  <div className="font-medium">{s}</div>
                  <div className="text-sm text-muted-foreground">Limited time • Freshly prepared</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
          </TabsList>
          <TabsContent value="breakfast">
            <MenuGrid items={mess.menu.breakfast} />
          </TabsContent>
          <TabsContent value="lunch">
            <MenuGrid items={mess.menu.lunch} />
          </TabsContent>
          <TabsContent value="snacks">
            <MenuGrid items={mess.menu.snacks} />
          </TabsContent>
          <TabsContent value="dinner">
            <MenuGrid items={mess.menu.dinner} />
          </TabsContent>
        </Tabs>
      </section>

      <div className="fixed bottom-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-t p-3 sm:hidden">
        <div className="container flex gap-2">
          <Button asChild className="flex-1"><a href={`tel:${mess.phone}`}>Call Mess</a></Button>
          <Button asChild variant="secondary" className="flex-1"><a href="#menu">View Menu</a></Button>
        </div>
      </div>
    </main>
  );
};

function MenuGrid({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="rounded-lg border p-4 bg-card animate-enter">
          <div className="font-medium">{it}</div>
          <div className="text-sm text-muted-foreground">Fresh • Hygienic</div>
        </div>
      ))}
    </div>
  );
}

export default MessDetail;
