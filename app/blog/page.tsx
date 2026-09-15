import type { Metadata } from "next";
import { links } from "@/lib/content";
import { PageAsideLink, PageShell } from "@/components/site/PageShell";
import { PostList } from "@/components/lists/PostList";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PageShell title="Blog" aside={<PageAsideLink href={links.medium}>Medium</PageAsideLink>}>
      <PostList />
    </PageShell>
  );
}
