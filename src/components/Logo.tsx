import { NavLink } from "react-router-dom";

const Logo = () => (
  <NavLink to="/" end className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="The Daily Plate home">
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary text-secondary-foreground">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Spoon */}
        <path d="M15 4c1.66 0 3 1.57 3 3.5S16.66 11 15 11c-1.66 0-3-1.57-3-3.5S13.34 4 15 4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M15 11v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Fork */}
        <path d="M8 4v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 4v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 4v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 11v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
    <span className="text-lg font-semibold tracking-tight">The Daily Plate</span>
  </NavLink>
);

export default Logo;
