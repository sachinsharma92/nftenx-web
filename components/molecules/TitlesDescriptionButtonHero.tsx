/* eslint-disable @next/next/no-img-element */
import leftBlobImg from 'assets/images/illustrations/green-blue-blob-to-bottom-right.png';
import rightBlobImg from 'assets/images/illustrations/blue-blob-to-top-left.png';
import { A, H1 } from 'components/atoms';

type PropTypes = {
  title?: string;
  subtitle?: string;
  description?: string | JSX.Element;
  linkTitle?: string | JSX.Element;
  linkHref?: string;
}

const TitlesDescriptionButtonHero = (props: PropTypes) => {
  return <article className="relative p-section lg:py-32 lg:-px-section flex justify-center items-center text-secondary-1">
    <img src={leftBlobImg.src} alt="grafient blob" className="absolute top-0 h-full left-0" />
    <img src={rightBlobImg.src} alt="grafient blob" className="absolute top-0 h-full right-0" />
    <div className="lg:w-2/3 flex flex-col gap-2 text-center justify-center items-center">
      {props.title && <H1>{props.title}</H1>}
      {props.subtitle && <H1 className=''>{props.subtitle}</H1>}
      {props.description && <p className='text-primary-light font-mono'>{props.description}</p>}
      {props.linkTitle && <A passHref href={props.linkHref ?? 'javascript:void(0)'} className="mt-6 text-secondary-1"><a className='text-secondary-1'>{props.linkTitle}</a></A>}
    </div>
  </article>
}

export default TitlesDescriptionButtonHero;