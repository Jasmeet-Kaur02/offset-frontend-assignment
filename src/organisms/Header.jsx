import { ProfileMenu } from "../atoms/ProfileMenu";

export function Header({ setIsOpen }) {
  return (
    <header
      className="h-16 bg-white border-b border-black/15 border-opacity-30 
    flex items-center justify-between lg:justify-end px-4 lg:px-6 z-0"
    >
      {/* Company Name for mobile */}
      <div className="h-16 lg:hidden flex items-center justify-center">
        <h1 className="text-3xl font-robotoSemibold text-black">Offset</h1>
      </div>

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

      {/* Right: Profile Image for desktop  */}
      <div className="hidden lg:block">
        <ProfileMenu />
      </div>
    </header>
  );
}
