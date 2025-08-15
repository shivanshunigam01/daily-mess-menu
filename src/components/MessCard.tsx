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
  priceRange?: string;
  serviceTypes?: string[];
};

export default function MessCard({ mess }: { mess: Mess }) {
  return (
    <Link to={`/messes/${mess.id}`}>
      <Card className="group overflow-hidden hover:shadow-elegant smooth-transition hover-scale h-full">
        <div className="relative">
          <img 
            src={mess.image} 
            alt={`${mess.name} mess photo`} 
            className="h-48 w-full object-cover group-hover:scale-105 smooth-transition" 
            loading="lazy" 
          />
          <Badge 
            className="absolute top-3 right-3 shadow-soft" 
            variant={mess.isVeg ? "secondary" : "destructive"}
          >
            {mess.isVeg ? "🌱 Veg" : "🍖 Non-Veg"}
          </Badge>
          {mess.priceRange && (
            <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              ₹{mess.priceRange}
            </div>
          )}
        </div>
        <CardContent className="p-5 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary smooth-transition">
              {mess.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 text-primary/70" />
              <span className="truncate">{mess.location}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{mess.rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">/5</span>
              </div>
              {mess.serviceTypes && (
                <div className="flex gap-1">
                  {mess.serviceTypes.slice(0, 2).map((type) => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <p className="text-sm font-medium text-primary mb-1">Today's Special</p>
              <p className="text-sm text-foreground">
                {mess.specials?.[0] ?? mess.menu.breakfast[0]}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-auto" onClick={(e) => e.preventDefault()}>
            <Button variant="outline" size="sm" className="flex-1 hover-lift" asChild>
              <a href={`tel:${mess.phone}`} onClick={(e) => e.stopPropagation()}>
                <Phone className="w-4 h-4 mr-1" />
                Call
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 hover-lift" asChild>
              <a href={mess.mapsLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <MapPin className="w-4 h-4 mr-1" />
                Directions
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
