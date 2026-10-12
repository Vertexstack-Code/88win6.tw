import { getPage } from "@/lib/content";
import { infoPageMetadata } from "@/lib/page-metadata";
import { InfoPageView } from "@/components/shared/InfoPageView";

export const metadata = infoPageMetadata("/support");

export default function Page() {
  return <InfoPageView page={getPage("/support")} />;
}
