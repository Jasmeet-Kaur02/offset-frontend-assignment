import { useState, useEffect } from "react";
import { Sidebar } from "../../organisms/Sidebar";
import { Header } from "../../organisms/Header";
import { CarbonCreditCard } from "../../organisms/CarbonCreditCard";
import creditsJson from "../../assets/data/credits.json";

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    setCredits(creditsJson);
  }, []);

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
          <h2 className="text-xl font-robotoSemibold text-black mb-6">
            {active}
          </h2>

          {/* Responsive grid for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {credits.map((credit) => (
              <CarbonCreditCard key={credit.unic_id} {...credit} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
