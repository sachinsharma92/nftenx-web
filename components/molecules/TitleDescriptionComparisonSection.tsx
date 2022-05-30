/* eslint-disable @next/next/no-img-element */
import { ElegantSeperator } from "assets/icons";
import { H1 } from "components/atoms";
import React, { } from "react";
import square3dTranslucent from "/assets/images/sqiares-3d-translucent.png";
import sphereSqTranslucent from "/assets/images/shperes-square-translucent.png";
import Image from "next/image";

type PropType = {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  image?: string;
  imageSide?: "left" | "right";
  items: ReadonlyArray<Record<string, string | JSX.Element>>;
};

export const TitleDescriptionComparisonSection = (props: PropType) => {

  return (
    <div className="who-nf10x">
      {props.title && <H1 className="z-[1] text-center">{props.title}</H1>}
      {props.description && (
        <p className="z-[1] text-center text-primary-light-2 mt-3">{props.description}</p>
      )}
      <div className="flex-section">
        <div className="col-1">
          <div className="img-card">
            <Image src={square3dTranslucent} className="img-hover" alt="" />
          </div>
          <h4 className="title4">Disruptors</h4>
          <p className="description">
            Entrepreneurs and leaders actively building in Web3 that want to learn with and from a productive, insight-filled community
          </p>
        </div>

        <div className="img-divider">
          <ElegantSeperator className="hidden lg:block" />
        </div>

        <div className="col-1 right">
          <div className="img-card">
            <Image src={sphereSqTranslucent} className="img-hover" alt="" />
          </div>
          <h4 className="title4">Catalysts</h4>
          <p className="description">
            Founders and executives of legacy companies seeking resources to spark conversation and steer their businesses ahead of the Web3 curve.
          </p>
        </div>
      </div>
    </div>
  );
};