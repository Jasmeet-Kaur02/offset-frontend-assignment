import Profile from "../assets/profile-dummy.jpg";

export function ProfileMenu() {
  return (
    <div className="flex items-center cursor-pointer">
      <img
        src={Profile}
        alt="Profile"
        className="w-14 h-14 rounded-full object-cover"
      />
      <h6 className="font-robotoNormal mx-[6px]">Jasmeet Kaur</h6>
      <span className="-rotate-90 lg:rotate-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
}
