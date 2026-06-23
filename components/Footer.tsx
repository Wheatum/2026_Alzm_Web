import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <p className="max-w-4xl text-sm leading-6 text-slate-700">
            <strong>Disclaimer:</strong> NestMemory is an educational and wellness resource only.
            Information provided on this website is not created by a licensed physician, does not
            constitute medical advice, and is not intended to replace consultation, diagnosis, or
            treatment from a qualified healthcare professional. If you are experiencing symptoms or
            have concerns about memory, cognition, or health, please consult a licensed medical
            professional.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm font-semibold text-ocean">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
