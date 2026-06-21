export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="font-playfair text-white text-lg font-semibold">
          Dr. Ella Servadio
        </p>
        <p>© 2026 Dr. Ella Servadio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="tel:035050066" className="hover:text-white transition-colors">
            03-5050066
          </a>
          <a
            href="mailto:mishpaha.giv@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
