import Profile from "../assets/profile-dummy.jpg";

export function Header({ setIsOpen }) {
  return (
    <header
      className="h-16 bg-white border-b border-black/15 border-opacity-30 
    flex items-center justify-between lg:justify-end px-4 lg:px-6 z-0"
    >
      {/* Left: Hamburger for mobile */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      {/* Right: Profile Image  */}
      <img
        src={Profile}
        alt="Profile"
        className="w-14 h-14 rounded-full object-cover"
      />
    </header>
  );
}
