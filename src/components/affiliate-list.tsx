import allAffiliates from "@/db/affiliate-programs.json";
import AffiliateListItem from "./affiliate-list-item";




export default function AffiliateList() {

  const affiliates = allAffiliates.filter((affiliate) => affiliate.status === "live");

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {affiliates.map((affiliate) => (
          <li
            key={affiliate.name}
          >
            <AffiliateListItem program={affiliate} />
          </li>
        ))}
      </ul>
    </>
  );
}
