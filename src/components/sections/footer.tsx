import { Icons } from "@/components/icons";
import { BorderText } from "@/components/ui/border-number";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-screen-2xl flex-col gap-y-6 rounded-lg px-6 py-8 md:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Icons.logo className="h-6 w-6" />
          <h2 className="text-xl font-bold text-foreground">
            {siteConfig.name}
          </h2>
        </div>

        <div className="flex gap-x-3">
          {siteConfig.footer.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex h-6 w-6 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-col gap-y-2 text-muted-foreground md:flex-row md:items-center md:gap-x-6">
          {siteConfig.footer.links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium transition-all duration-100 ease-linear hover:text-foreground hover:underline hover:underline-offset-4"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>

        <p className="text-sm font-medium tracking-tight text-muted-foreground">
          {siteConfig.footer.bottomText}
        </p>
      </div>

      <BorderText
        text={siteConfig.footer.brandText}
        className="font-mono font-medium tracking-tighter text-[clamp(3rem,15vw,10rem)] overflow-hidden"
      />
    </footer>
  );
}
