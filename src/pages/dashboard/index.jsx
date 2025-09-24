import { useState, useEffect } from "react";
import { Sidebar } from "../../organisms/Sidebar";
import { Header } from "../../organisms/Header";
import { CarbonCreditCard } from "../../organisms/CarbonCreditCard";
import creditsJson from "../../assets/data/credits.json";
import { SearchInput } from "../../atoms/SearchInput";

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [credits, setCredits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filterCredits = creditsJson.filter((credit) => {
      console.log(searchQuery, "search");
      const search = searchQuery.toLowerCase();
      return (
        credit.project_name.toLowerCase().includes(search) ||
        credit.vintage.toString().includes(search)
      );
    });
    setCredits(filterCredits);
  }, [searchQuery]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        active={active}
        setActive={setActive}
      />

      {/* Right side */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header setIsOpen={setIsOpen} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-bgLight p-4 sm:p-6">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:mb-6 
         justify-between gap-y-4 mb-4"
          >
            <h2 className="text-xl font-robotoSemibold text-black">{active}</h2>
            <SearchInput
              placeholder="Search by Name and Vintage"
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          {/* Responsive grid for cards */}
          {credits.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {credits.map((credit) => (
                <CarbonCreditCard key={credit.unic_id} credit={credit} />
              ))}
            </div>
          ) : (
            <p
              className="text-black text-xl text-opacity-30 font-robotoMedium mt-10 
            text-center"
            >
              No Credits Found
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
