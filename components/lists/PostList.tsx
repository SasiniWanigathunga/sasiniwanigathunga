import { links, posts } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

/** Every post lives on Medium, so each title is an outbound link. */
export function PostList() {
  return (
    <>
      <ol className="space-y-8">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.href} delay={0.03 * i}>
            {/* Full width: the title leads, the date sits under it. */}
            <article>
              <h2 className="serif text-[1.25rem] leading-snug">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline text-ink transition-colors hover:text-accent"
                >
                  {post.title}
                  <ArrowUpRight className="ml-1 inline size-3 align-baseline text-muted" />
                </a>
              </h2>

              <p className="label mt-2 !text-[0.625rem]">{post.date}</p>

              <p className="mt-3 text-[0.925rem] leading-relaxed text-ink-2 pretty">
                {post.summary}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.08}>
        <a
          href={links.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-[0.8rem] text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
        >
          All posts on Medium
          <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </>
  );
}
