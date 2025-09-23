const menuItems = [
  { name: "Dashboard" },
  { name: "Emissions" },
  { name: "Analytics" },
  { name: "Portfolio" },
  { name: "Retire" },
];

export function Sidebar({ isOpen, setIsOpen, active, setActive }) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-20 lg:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-30 w-64 bg-white border-r border-black/15 
          border-opacity-30 h-full flex flex-col transform transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center pt-5">
          <h1 className="text-3xl font-robotoSemibold text-black">Offset</h1>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 mt-5">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false); // close on mobile
              }}
              className={`w-full font-robotoMedium text-left px-4 py-2 rounded-lg 
              transition-colors
                ${
                  active === item.name
                    ? "bg-blue text-white"
                    : "text-black hover:bg-blueLight"
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
