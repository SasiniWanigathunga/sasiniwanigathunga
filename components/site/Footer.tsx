import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label !text-[0.625rem]">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <p className="text-[0.75rem] text-muted">
          Built with Next.js, Tailwind CSS and Framer Motion. Set in Newsreader &amp; Inter.
        </p>

        <a
          href="#top"
          className="label link-underline self-start !text-[0.625rem] hover:!text-ink sm:self-auto"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
