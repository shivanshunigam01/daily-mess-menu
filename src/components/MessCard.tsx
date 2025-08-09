import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";

export type MenuSection = {
  title: string;
  items: string[];
};

export type Mess = {
  id: string;
  name: string;
  location: string;
  rating: number;
  isVeg: boolean;
  phone: string;
  image: string;
  mapsLink: string;
  menu: {
    breakfast: string[];
    lunch: string[];
    snacks: string[];
    dinner: string[];
  };
  specials?: string[];
};

export default function MessCard({ mess }: { mess: Mess }) {
  return (
    <Card className="overflow-hidden hover:shadow-elevated transition-shadow">
      <img src={mess.image} alt={`${mess.name} mess photo`} className="h-40 w-full object-cover" loading="lazy" />
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-tight">
            <Link to={`/messes/${mess.id}`}>{mess.name}</Link>
          </h3>
          <div className="flex items-center gap-1 text-amber-500"><Star className="h-4 w-4" /><span className="text-sm font-medium">{mess.rating.toFixed(1)}</span></div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1"><MapPin className="h-4 w-4" />{mess.location}</div>
        <div className="mt-2">
          <Badge variant={mess.isVeg ? "secondary" : "default"}>{mess.isVeg ? "Vegetarian" : "Veg & Non-veg"}</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <div className="mt-3 line-clamp-2">Today: {mess.specials?.[0] ?? mess.menu.breakfast[0]}</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <Button variant="secondary" asChild className="gap-2"><a href={`tel:${mess.phone}`} aria-label={`Call ${mess.name}`}><Phone className="h-4 w-4" />Call Mess</a></Button>
        <Button variant="outline" asChild className="gap-2"><a href={mess.mapsLink} target="_blank" rel="noreferrer"><MapPin className="h-4 w-4" />Get Directions</a></Button>
      </CardFooter>
    </Card>
  );
}
