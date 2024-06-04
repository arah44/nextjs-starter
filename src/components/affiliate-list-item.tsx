import { AffiliateProgram } from "@/types";
import {
  EnvelopeOpenIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent } from "./ui/card";

export default function AffiliateListItem({
  program,
}: {
  program: AffiliateProgram;
}) {
  const logoUrl = new URL(program.url);
  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div className="flex align-middle items-center gap-4">
            <div className="flex align-middle items-center">
              <img
                className="mx-auto h-16 w-16 flex-shrink-0 rounded-full"
                src={`https://logo.clearbit.com/${logoUrl.hostname}`}
                alt=""
              />
            </div>
            <div className="flex flex-col align-middle">
              <h3 className="text-sm font-medium text-gray-900">
                {program.name}
              </h3>
              <dd className="text-sm text-gray-500">{program.commission}</dd>
              <dd className="text-sm text-gray-500">{program.cookie_duration} cookie</dd>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
