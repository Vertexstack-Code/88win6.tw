import { getPage } from "@/lib/content";
import { infoPageMetadata } from "@/lib/page-metadata";
import { InfoPageView } from "@/components/shared/InfoPageView";
import { OfficialDomains } from "@/components/shared/OfficialDomains";

export const metadata = infoPageMetadata("/fake-sites");

export default function Page() {
  return <InfoPageView page={getPage("/fake-sites")} lead={<OfficialDomains showNonOfficial />} />;
}
