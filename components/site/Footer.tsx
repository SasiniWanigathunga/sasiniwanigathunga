import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="shell">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline py-7">
        <p className="font-mono text-[0.6rem] text-muted">© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="link-underline font-mono text-[0.6rem] text-muted hover:text-accent">Back to top ↑</a>
      </div>
    </footer>
  );
}
