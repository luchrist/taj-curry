import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import config from "@/config/restaurant";

export function Footer() {
  const socials = [
    { href: config.socialMedia.instagram, icon: InstagramLogo, hidden: config.socialMedia.hidden.instagram },
    { href: config.socialMedia.facebook, icon: FacebookLogo, hidden: config.socialMedia.hidden.facebook },
    { href: config.socialMedia.tiktok, icon: TiktokLogo, hidden: config.socialMedia.hidden.tiktok },
  ];

  return (
    <footer className="relative bg-sumi-900 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center">
          {/* Brand mark */}
          <span className="flex items-center justify-center rounded-full bg-bone/95 p-3">
            <img
              src="/assets/logo-mark.png"
              alt={`${config.name} Logo`}
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </span>

          {/* Name */}
          <h2 className="mt-6 font-display text-2xl tracking-[0.2em] text-bone/90 md:text-3xl">
            {config.name}
          </h2>

          {/* Tagline */}
          <p className="mt-2 text-sm text-sakura-400/80">Indische Küche · Eppelheim</p>

          {/* Divider */}
          <div className="mt-8 h-px w-24 bg-bone/10" />

          {/* Address */}
          <div className="mt-8 text-sm text-bone/50">
            <p>{config.address.street}</p>
            <p>{config.address.city}</p>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex gap-5">
            {socials
              .filter((s) => !s.hidden)
              .map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone/40 transition-colors hover:text-bone/80"
                >
                  <s.icon size={22} />
                </a>
              ))}
          </div>

          {/* Legal links */}
          <div className="mt-10 flex gap-6 text-xs text-bone/30">
            <a href="/impressum" className="hover:text-bone/60 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-bone/60 transition-colors">
              Datenschutz
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-xs text-bone/30">
            &copy; {new Date().getFullYear()} {config.name}. Alle Rechte vorbehalten.
          </p>

          {/* Credit */}
          <p className="mt-6 text-sm text-bone/70">
            Erstellt von{" "}
            <a
              href="mailto:hey@apointa.org"
              className="font-medium text-bone underline decoration-bone/40 underline-offset-4 transition-colors hover:text-sakura-300 hover:decoration-sakura-300"
            >
              Luca Christ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
