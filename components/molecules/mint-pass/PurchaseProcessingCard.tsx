/* eslint-disable @next/next/no-img-element */
import {
  CrossCircleRed,
  Logo,
  RightArrowSecondary,
  Spinner,
  TickCircleGreen,
} from "assets/icons";
import { A, H1 } from "components/atoms";
import { METAMASK_CONSTANTS, TOKEN_TYPE } from "constants/globalConstants";
import DiscordIcon from "../../../assets/icons/discord.svg";
import Image from "next/image";
import { DISCORD_LINK } from "constants/sidebar";

export enum PurchaseProcessingCard_states {
  "processing",
  "success",
  "fail",
  "view",
}

type PropType = {
  title?: string;
  image?: string;
  state?: PurchaseProcessingCard_states;
  message?: string;
  statusMessage?: string;
  tokenType?: TOKEN_TYPE;
  tokenId?: string | number;
};

export const PurchaseProcessingCard = (props: PropType) => {

  const getOpenSeaUrl = () => {
    return `${process.env.NEXT_PUBLIC_OPENSEA_URL}/${METAMASK_CONSTANTS.CONTRACT_ADDRESS}/${props.tokenId}`
  }

  const statusMessages: Record<
    string,
    Record<string, JSX.Element | string | null>
  > = {
    [PurchaseProcessingCard_states.processing]: {
      title: "PROCESSING YOUR PURCHASE",
      subtitle: (
        <>
          <span className="opacity-50">
            You just purchased a {props.tokenType?.toLocaleLowerCase()} pass.
          </span>
        </>
      ),
      description: "It should be confirmed on the blockchain shortly.",
      animateIcon: <Spinner className="w-full" />,
    },
    [PurchaseProcessingCard_states.success]: {
      title: "PURCHASE SUCCESSFUL",
      subtitle: (
        <>
          <TickCircleGreen className="w-5 -mt-1 mr-2 inline" />
          <span className="opacity-50">
            You just purchased a {props.tokenType?.toLocaleLowerCase()} pass.
          </span>
          <p>
            <A href={getOpenSeaUrl()} transparent>{'See your token on OpenSea'}</A>
          </p>
        </>
      ),
      description: "It should be confirmed on the blockchain shortly.",
      // animateIcon: <TickCircleGreen className="w-full" />,
      linkTitle: (
        <>
        <div className="flex items-center gap-2">
          <span>Go to discord</span>
          <Image src={DiscordIcon} alt="discord-icon"/>
        </div>
        </>
      ),
      linkHref: DISCORD_LINK,
    },
    [PurchaseProcessingCard_states.fail]: {
      title: "PURCHASE UNSUCCESSFUL",
      subtitle: (
        <>
          {" "}
          <CrossCircleRed className="w-5 -mt-1 mr-2 inline" />
          <span className="opacity-50">
            You purchase for {props.tokenType?.toLocaleLowerCase()} pass was
            unsuccessful.
          </span>
        </>
      ),
      description: "It will not be confirmed on the blockchain shortly.",
      // animateIcon: <CrossCircleRed className="w-full" />,
      linkTitle: (
        <>
          Join the Waitlist <RightArrowSecondary className="inline" />
        </>
      ),
      linkHref: "/join",
    },
  };

  return (
    <section className="p-section min-h-screen flex justify-center items-center bg-gradient-to-b from-primary-2 to-primary-1">
      <div className="rounded-2xl border-white border-2 border-opacity-20 bg-white bg-opacity-[0.03] flex flex-col pb-7 lg:pb-12">
        {props.title && (
          <div className="flex flex-row gap-5 items-center p-3 lg:px-8 border-white border-opacity-10 border-b-2">
            <Logo className="w-8" />
            {props.title && (
              <h2 className="font-mono text-2xl lg:text-4xl text-secondary-1 font-medium">
                {props.title}
              </h2>
            )}
          </div>
        )}
        <div className="flex flex-col font-mono gap-5 items-center py-8 text-secondary-1 p-3 lg:px-40">
          <img src={props.image} alt={props.title} className="w-52 h-auto" />
          <p className="font-mono text-base">
            {
              statusMessages[
                props.state ?? PurchaseProcessingCard_states.processing
              ].title
            }
          </p>
          <div className="text-center">
            <p className="text-[#7C6EF6] text-base font-mono">
              {props.message}
            </p>
            <p className="text-white">
              {
                statusMessages[
                  props.state ?? PurchaseProcessingCard_states.processing
                ].subtitle
              }
            </p>
            <p className="text-white opacity-50">
              {props.statusMessage ??
                statusMessages[
                  props.state ?? PurchaseProcessingCard_states.processing
                ].description}
            </p>
          </div>
          {props.state == PurchaseProcessingCard_states.processing && (
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 grid place-items-center">
              {
                statusMessages[
                  props.state ?? PurchaseProcessingCard_states.processing
                ].animateIcon
              }
            </div>
          )}
        </div>
        {!(
          [
            PurchaseProcessingCard_states.view,
            PurchaseProcessingCard_states.processing,
          ] as Array<null | PurchaseProcessingCard_states>
        ).includes(props.state ?? null) && (
          <div className="text-center">
            <A
              className="text-secondary-1 bg-primary-3 border-white border-2 border-opacity-10"
              href={
                statusMessages[
                  props.state ?? PurchaseProcessingCard_states.processing
                ].linkHref as string
              }
            >
              {
                statusMessages[
                  props.state ?? PurchaseProcessingCard_states.processing
                ].linkTitle as string | JSX.Element
              }
            </A>
          </div>
        )}
      </div>
    </section>
  );
};
