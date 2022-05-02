import { A, H1 } from "components/atoms";

type PropTypes = {
  image?: string;
  title?: string | JSX.Element;
  description?: JSX.Element | string;
  linkTitle?: JSX.Element | string;
  linkHref?: string;
}

export const ImageTitleDescriptionLinkHero = (props: PropTypes) => {
  return <article className="relative p-section lg:py-32 w-full flex flex-col items-center text-secondary-1 bg-primary-4">
    <div className="lg:w-2/3 flex flex-col items-center gap-8">
    {props.title && <H1>{props.title}</H1>}
    {props.description && <p className=" text-center font-mono text-secondary-2">{props.description}</p>}
    {props.linkTitle && <A href={props.linkHref ?? 'javascript:void(0)'}>{props.linkTitle}</A>}
    </div>
  </article>
}