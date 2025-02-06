/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export default function ReviewCard({ data }) {
  
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={data.img.url} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {data.name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{data.services}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{data.description}</blockquote>
    </figure>
  );
}