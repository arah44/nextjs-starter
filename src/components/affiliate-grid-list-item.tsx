import { AffiliateProgram } from "@/types";
import {
  ExternalLinkIcon,
} from "@radix-ui/react-icons";



export default function AffiliateGridListItem({
  program,
}: {
  program: AffiliateProgram;
}) {
  return (
    <>
      <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="flex flex-1 flex-col p-8">
          <div className="flex">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={program.logo}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {program.name}
            </h3>
          </div>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Comission</dt>
            <dd className="text-sm text-gray-500">{program.commission}</dd>
            <dt className="sr-only">Cookie duration</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {program.cookie_duration}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={program.url}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <ExternalLinkIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Visit website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
