export default function Footer() {
  return (
    <footer className="py-8 bg-indigo-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          &copy; {new Date().getFullYear()} Soniya Gupta-Rawal. All rights reserved.
        </p>
        <p className="text-white/20 text-xs">
          Built with care
        </p>
      </div>
    </footer>
  );
}
