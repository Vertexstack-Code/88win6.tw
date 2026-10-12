import { getPage } from "@/lib/content";
import { infoPageMetadata } from "@/lib/page-metadata";
import { InfoPageView } from "@/components/shared/InfoPageView";

export const metadata = infoPageMetadata("/privacy-policy");

export default function Page() {
  return <InfoPageView page={getPage("/privacy-policy")} />;
}
