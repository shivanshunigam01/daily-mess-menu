import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-3">The Daily Plate</h3>
          <p className="text-sm text-muted-foreground">Find mess menus in seconds. Built for college communities.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/messes" className="hover:underline">Browse Messes</NavLink></li>
            <li><NavLink to="/add-mess" className="hover:underline">Add Your Mess</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@dailyplate.app</li>
          </ul>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} The Daily Plate</div>
    </footer>
  );
};

export default Footer;
