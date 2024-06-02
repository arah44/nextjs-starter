import affiliates from "@/db/affiliate-programs.json"

export default function AffiliateList() {
  return (
    <ul>
      {affiliates.map((affiliate) => (
        <li key={affiliate.id}>
          {affiliate.program}
        </li>
      ))}
    </ul>
  )
}