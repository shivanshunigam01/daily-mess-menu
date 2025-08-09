import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "text-primary font-semibold" : "text-foreground/80"} hover:text-foreground transition-colors`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkCls} end>Home</NavLink>
            <NavLink to="/messes" className={linkCls}>Messes</NavLink>
            <NavLink to="/about" className={linkCls}>About</NavLink>
            <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <NavLink to="/add-mess">Add Mess</NavLink>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
