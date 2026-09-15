import type { Metadata } from "next";
import { links } from "@/lib/content";
import { PageAsideLink, PageShell } from "@/components/site/PageShell";
import { PublicationList } from "@/components/lists/PublicationList";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <PageShell
      title="Publications"
      aside={<PageAsideLink href={links.scholar}>Google Scholar</PageAsideLink>}
    >
      <PublicationList />
    </PageShell>
  );
}
