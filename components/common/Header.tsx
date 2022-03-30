import { Logo, MenuSecondary } from "assets/icons";
import { extraLinks, navLinks } from "constants/header";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const activeRoute = router.pathname.split("/")[1];

  // const headerBg = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const toggleHeaderBg = () => {
  //     if (window.scrollY > 40)
  //       headerBg.current?.classList.remove("-translate-y-full");
  //     else headerBg.current?.classList.add("-translate-y-full");
  //   };
  //   if (window) window.addEventListener("scroll", toggleHeaderBg);
  // }, []);

  const linkPaddings = 'px-4 py-2 xl:px-6 xl:py-3';

  return (
    <header className="w-full z-10 text-secondary px-ws-section py-5 flex flex-row justify-between items-center fixed top-0 text-lg">
      {/* <div
        ref={headerBg}
        className="w-full absolute bg-black bg-opacity-10 backdrop-blur-md h-full top-0 left-0 transition-all -translate-y-full"
      ></div> */}
      <Logo className="block lg:hidden w-12 h-auto" />
      <button className="block lg:hidden"><MenuSecondary /></button>
      <nav className="hidden lg:block rounded-full bg-secondary-3 bg-opacity-10 backdrop-blur-md overflow-hidden z-[1]">
        <ul className="list-none flex flex-row gap-2">
          {navLinks.map((element, index) => {
            return (
              <li key={index} className="inline-block">
                <Link passHref href={element.href ?? "javascript.void(0)"}>
                  <a
                    className={`${linkPaddings} text-secondary-1 transition-all ${
                      element.href.replace("/", "") != activeRoute
                        ? "opacity-50"
                        : ""
                    } hover:bg-primary-1 bg-opacity-40 hover:opacity-100 inline-block`}
                  >
                    {element.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="hidden lg:flex list-none flex-row gap-2 z=[1]">
        {extraLinks.map((element, index) => {
          return (
            <li key={index} className="inline-block">
              <Link passHref href={element.href ?? "javascript.void(0)"}>
                <a
                  className={`${linkPaddings} text-secondary-1 bg-secondary-3 bg-opacity-10 rounded-full inline-block backdrop-blur-md font-mono`}
                >
                  {element.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
