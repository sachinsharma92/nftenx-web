// import 'src/components/common/header/style.module.scss';
import Link from "next/link";
import { navData, socialLinks } from "./constants";
import { Logo, LogoRefForwarded } from "assets/icons";
import { MouseEventHandler, useEffect, useRef } from "react";

export const Header = () => {
  const headerBg = useRef<HTMLDivElement>(null);
  const headerLogo = useRef<SVGSVGElement>(null);
  const headerLinkBar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // the animation css stuff;
    const toggleHeaderBg = () => {
      if (window.scrollY > 40)
        headerBg.current?.classList.remove("-translate-y-full");
      else headerBg.current?.classList.add("-translate-y-full");

      requestAnimationFrame(() => {
        const rotation = window.scrollY / 10;
        headerLogo.current &&
          (headerLogo.current.style.transform = `rotate(${rotation}deg)`);
      });
    };
    if (window) window.addEventListener("scroll", toggleHeaderBg);
  }, []);

  const handleLinkMouseEnter = (data: any) => {
    requestAnimationFrame(() => {
      const barHeight = 2;
      const linkRect = data.target.getBoundingClientRect();
      if (headerLinkBar.current) {
        headerLinkBar.current.style.height = `${barHeight}px`;
        // headerLinkBar.current.style.top = `${linkRect.bottom + 8}px`;
        headerLinkBar.current.style.bottom = `${barHeight}px`;
        headerLinkBar.current.style.left = `${linkRect.x}px`;
        headerLinkBar.current.style.width = `${linkRect.width}px`;
      }
    });
  };

  const handleNavMouseLeave = () => {
    if (headerLinkBar.current) {
      headerLinkBar.current.style.height = `${0}px`;
    }
  };

  return (
    <header className="sticky top-0 h-16 px-section text-secondary">
      <div
        ref={headerBg}
        className="background transition-all absolute top-0 left-0 w-full h-full -translate-y-full bg-gray-50 bg-opacity-10 backdrop-blur-md"
      ></div>

      <div className="w-full h-full grid grid-flow-col justify-between items-center z-10">
        <Link href="/" passHref>
          <a>
            <LogoRefForwarded ref={headerLogo} className="max-h-12 w-auto" />
          </a>
        </Link>
        <nav
          className="justify-center items-center hidden lg:flex z-10"
          onMouseLeave={handleNavMouseLeave}
        >
          <ul className="list-none flex flex-row justify-between gap-4">
            {navData.navButtons.map((element, index) => {
              return (
                <li key={index}>
                  <Link passHref href={element.href ?? "javascript.void(0)"}>
                    <a
                      className="p-2 header-link border-secondary"
                      onMouseEnter={handleLinkMouseEnter}
                    >
                      {element.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <span
            ref={headerLinkBar}
            className="transition-all h-0 bg-secondary inline-block absolute min-w-[12px] rounded-full"
          ></span>
        </nav>
        <div className="flex flex-row gap-3 items-center social-button z-10">
          {socialLinks.map((element, index) => {
            return (
              <Link
                key={index}
                passHref
                href={element.href ?? "javascript.void(0)"}
              >
                <a className="p-2">{element.img}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
