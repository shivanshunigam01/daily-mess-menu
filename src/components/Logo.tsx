import logo from "@/assets/logo-daily-plate.png";

const Logo = () => (
  <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="The Daily Plate home">
    <img src={logo} alt="The Daily Plate logo" className="h-8 w-8" />
    <span className="text-lg font-semibold tracking-tight">The Daily Plate</span>
  </a>
);

export default Logo;
