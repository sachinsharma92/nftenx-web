import { CSSProperties, forwardRef, Ref } from "react";

interface IconProps {
  className?: string;
  style?: CSSProperties;
}

// eslint-disable-next-line react/display-name
export const LogoRefForwarded = forwardRef(
  (props: IconProps, ref: Ref<SVGSVGElement>) => {
    return (
      <svg
        ref={ref}
        className={props.className}
        style={props.style}
        width="68"
        height="70"
        viewBox="0 0 68 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68 29.7326L62.4808 33.3934C61.8272 33.7713 61.1976 34.0769 60.5461 34.2411L60.4571 34.2626L60.4571 35.7374C61.1107 35.8886 61.7403 36.1602 62.3918 36.5523L62.4808 36.6066L68 40.2411L68 43.4015L61.5346 39.0822C60.6411 38.5028 59.984 38.2395 59.3007 38.2395C58.6589 38.2395 57.9921 38.4656 57.1287 39.0406L53.6484 41.3883L55.0713 45.2628L55.0984 45.3341L55.1523 45.4729C55.1613 45.4955 55.1703 45.518 55.1793 45.5403L55.233 45.6713C55.5554 46.4421 55.878 46.9425 56.3165 47.2757L56.3534 47.3031C56.8256 47.6469 57.4175 47.7929 58.2424 47.864L58.3862 47.8755L58.5346 47.8856L58.6859 47.8945L66.4345 48.2297L64.5962 50.7652L57.9838 50.476C57.2333 50.3967 56.5448 50.2731 55.9214 50.0221L55.8368 49.9871L54.9717 51.1803C55.4118 51.6876 55.7618 52.2782 56.0589 52.9792L56.0991 53.0755L58.4324 59.2668L56.5786 61.8236L53.8815 54.521L53.8542 54.4506L53.7995 54.3138C53.4437 53.4412 53.0819 52.8971 52.5686 52.5234C52.0494 52.1453 51.3772 51.9355 50.3415 51.8922L46.1488 51.7415L45.0273 55.7142L44.9882 55.8604C44.9819 55.8844 44.9757 55.9082 44.9697 55.9318L44.9349 56.0716C44.7237 56.9433 44.6884 57.5666 44.8678 58.12C45.0623 58.7198 45.5043 59.2155 46.2184 59.8156L46.3434 59.9195L46.408 59.9723L52.4802 64.8076L49.5057 65.7761L44.3258 61.6472C43.7652 61.1411 43.2806 60.6355 42.9235 60.0653L42.8756 59.9871L41.4758 60.4429C41.5343 61.1125 41.4711 61.7965 41.3003 62.5386L41.2763 62.6402L39.5325 69.0234L36.533 70L38.6344 62.5034L38.654 62.4286L38.6908 62.2823C38.9136 61.3695 38.9396 60.7175 38.7439 60.1139C38.5456 59.5023 38.1249 58.9366 37.3124 58.2915L34.0087 55.7L30.7713 58.2534C30.7304 58.2863 30.6903 58.3187 30.6511 58.3509L30.5361 58.4465L30.4261 58.5403C29.7991 59.0826 29.4262 59.5428 29.2461 60.0612L29.2311 60.1058C29.0611 60.6303 29.0908 61.2019 29.2518 61.9429L29.2826 62.0795L29.3161 62.22C29.3219 62.2438 29.3278 62.2677 29.3338 62.2918L29.3714 62.4385L29.3906 62.5116L31.467 70L28.4925 69.0315L26.7237 62.6402C26.567 61.9004 26.4715 61.206 26.5171 60.5343L26.5242 60.4429L25.1244 59.9871C24.779 60.5633 24.3267 61.0794 23.7532 61.5792L23.6742 61.6472L18.5193 65.7842L15.5198 64.8076L21.617 59.9805C22.443 59.3079 22.896 58.7631 23.1072 58.1118C23.3055 57.5002 23.297 56.7948 23.0181 55.7943L21.8654 51.7517L17.7485 51.9106L17.601 51.9183C17.5527 51.9211 17.5051 51.9241 17.4584 51.9274L17.3204 51.9378L17.1869 51.9497C16.3996 52.0257 15.8509 52.1854 15.416 52.502C14.9596 52.8343 14.6441 53.3303 14.3324 54.053L14.2757 54.187C14.2662 54.2097 14.2568 54.2327 14.2473 54.2558L14.1904 54.3974L14.1339 54.5423L11.4214 61.8236L9.58305 59.2881L11.9009 53.0755C12.208 52.3848 12.5381 51.7667 12.9689 51.2501L13.0283 51.1803L12.1632 49.9871C11.5458 50.2498 10.8771 50.4009 10.12 50.4674L10.0162 50.476L3.41925 50.7865L1.56547 48.2297L9.32954 47.9158L9.47883 47.9068C9.57668 47.9002 9.67122 47.8926 9.76266 47.8837L9.89753 47.8695C10.6488 47.7837 11.1837 47.6076 11.6312 47.2818C12.1504 46.9038 12.5572 46.3281 12.9184 45.3544L14.3571 41.4049L10.9333 39.1086L10.868 39.0658L10.7401 38.9836C9.94058 38.4763 9.34086 38.2261 8.74625 38.2136L8.69932 38.2131C8.1032 38.2131 7.52709 38.4536 6.79649 38.8997L6.66592 38.9805L6.53193 39.0656L6.46535 39.1086L-1.89714e-06 43.4015L-1.76014e-06 40.2674L5.5192 36.6066C6.17282 36.2287 6.8024 35.9231 7.45393 35.7589L7.54291 35.7374L7.54291 34.2626C6.88929 34.1114 6.25972 33.8398 5.60819 33.4477L5.5192 33.3934L-1.3008e-06 29.7589L-1.16266e-06 26.5985L6.46535 30.9178C7.35894 31.4972 8.01599 31.7605 8.69932 31.7605C9.34108 31.7605 10.0079 31.5344 10.8713 30.9594L14.3517 28.6115L12.9287 24.7372C12.8925 24.6412 12.8566 24.5487 12.8207 24.4597L12.767 24.3287C12.4356 23.5364 12.104 23.0299 11.6466 22.6969C11.1744 22.3531 10.5825 22.2071 9.75756 22.136L9.61384 22.1245L9.46543 22.1143L9.31409 22.1055L1.56547 21.7703L3.4038 19.2348L10.0162 19.524C10.7667 19.6033 11.4552 19.7269 12.0786 19.9778L12.1632 20.0129L13.0283 18.8197C12.5882 18.3124 12.2382 17.7218 11.9411 17.0208L11.9009 16.9245L9.5676 10.7332L11.4214 8.17638L14.1185 15.479C14.5015 16.4741 14.8786 17.0741 15.4314 17.4766C15.9506 17.8547 16.6228 18.0645 17.6585 18.1078L21.8514 18.2584L22.9727 14.2858L23.0118 14.1396C23.2631 13.1796 23.3229 12.5104 23.1459 11.9239L23.1322 11.88C22.9488 11.3145 22.5454 10.8414 21.9014 10.2863L21.7816 10.1844C21.7408 10.1501 21.6991 10.1155 21.6566 10.0805L21.592 10.0277L15.5198 5.19243L18.4943 4.22393L23.6742 8.35276C24.2348 8.85892 24.7194 9.3645 25.0765 9.93472L25.1244 10.0129L26.5242 9.55712C26.4657 8.88748 26.5289 8.20352 26.6997 7.46141L26.7237 7.35985L28.4676 0.976629L31.467 -1.59691e-06L29.3656 7.49655C29.3456 7.57196 29.3268 7.64565 29.3092 7.71771L29.2757 7.85969C29.0843 8.69897 29.0707 9.31424 29.2561 9.88607C29.4544 10.4977 29.8751 11.0634 30.6876 11.7085L33.9915 14.2999L37.2287 11.7466C37.2696 11.7137 37.3097 11.6813 37.3489 11.6491L37.4639 11.5535L37.5739 11.4597C38.2188 10.9019 38.5948 10.4309 38.7689 9.8942C38.9389 9.36972 38.9092 8.79813 38.7482 8.05711L38.7174 7.92048L38.6839 7.77996C38.6781 7.75621 38.6722 7.73228 38.6662 7.70819L38.6286 7.56151L38.6094 7.48841L36.533 -1.37547e-06L39.5075 0.968491L41.2763 7.35985C41.433 8.09955 41.5285 8.794 41.4829 9.46567L41.4758 9.55712L42.8756 10.0129C43.221 9.43666 43.6734 8.92058 44.2468 8.42081L44.3258 8.35276L49.4807 4.21579L52.4802 5.19243L46.383 10.0195L46.2619 10.1195C45.5123 10.7468 45.0934 11.2695 44.8928 11.8882C44.6945 12.4998 44.703 13.2052 44.9819 14.2057L46.1348 18.2482L50.2515 18.0893L50.399 18.0817L50.5416 18.0726C50.565 18.071 50.5882 18.0693 50.6112 18.0676L50.7469 18.0565C50.7692 18.0545 50.7912 18.0524 50.8131 18.0503L50.9421 18.0369C51.661 17.9561 52.1733 17.797 52.584 17.4979C53.0404 17.1657 53.3559 16.6697 53.6677 15.947L53.7243 15.813C53.7338 15.7903 53.7432 15.7673 53.7527 15.7442L53.8096 15.6026L53.8661 15.4577L56.5786 8.17638L58.417 10.7119L56.0991 16.9245C55.792 17.6152 55.4619 18.2333 55.0311 18.7499L54.9717 18.8197L55.8368 20.0129C56.4542 19.7502 57.1229 19.5991 57.88 19.5326L57.9838 19.524L64.5808 19.2135L66.4345 21.7703L58.6705 22.0842L58.5212 22.0932C57.5426 22.1588 56.8953 22.3349 56.3688 22.7182C55.8496 23.0962 55.4428 23.6719 55.0816 24.6456L53.6431 28.5951L57.0667 30.8914L57.132 30.9341L57.2599 31.0164C58.0594 31.5237 58.6591 31.7739 59.2538 31.7864L59.3007 31.7869C59.8968 31.7869 60.4729 31.5464 61.2035 31.1003L61.3341 31.0194L61.4681 30.9344L61.5346 30.8914L68 26.5985L68 29.7326ZM58.0129 35.7374L58.0129 34.2626C57.358 34.1111 56.7032 33.8387 56.0483 33.4222L55.9629 33.3671L52.6978 31.1909L50.4121 29.692L50.4194 29.6724L50.3911 29.6536L51.3731 27.0727L52.7261 23.3845C53.0042 22.6516 53.3675 22.0362 53.8023 21.5194L53.8594 21.4526L52.9943 20.2594C52.3757 20.5226 51.6861 20.6879 50.912 20.7367L50.8106 20.7424L46.8925 20.905L44.1642 21.0387L44.1585 21.0185L44.1247 21.02L43.4053 18.3536L42.3366 14.5728C42.1318 13.8161 42.0647 13.1042 42.1133 12.4301L42.1203 12.3423L40.7205 11.8866C40.3744 12.4639 39.9136 13.0038 39.3159 13.4993L39.2372 13.5636L36.1629 16.003L34.034 17.7181L34.0176 17.7051L33.991 17.7263L31.8451 15.9928L28.7628 13.5636C28.1532 13.0721 27.6814 12.5357 27.3253 11.9617L27.2795 11.8866L25.8797 12.3423C25.9384 13.0133 25.8822 13.7215 25.6893 14.4744L25.6634 14.5728L24.6071 18.3572L23.8907 20.9987L23.87 20.9978L23.8608 21.0305L21.1079 20.8922L17.1894 20.7424C16.408 20.7038 15.7116 20.5478 15.0868 20.2931L15.0057 20.2594L14.1406 21.4526C14.5816 21.9608 14.9516 22.5669 15.2371 23.2896L15.2739 23.3845L16.639 27.0683L17.6089 29.6272L17.5917 29.6388L17.6033 29.6707L15.2952 31.1802L12.0371 33.3671C11.3823 33.7962 10.7274 34.0801 10.0725 34.2421L9.98713 34.2626L9.98713 35.7374C10.642 35.8889 11.2968 36.1612 11.9517 36.5777L12.0371 36.6329L15.3024 38.8091L17.5879 40.308L17.5808 40.3277L17.6089 40.3464L16.627 42.9272L15.2739 46.6155C14.9958 47.3484 14.6325 47.9638 14.1977 48.4806L14.1406 48.5474L15.0057 49.7406C15.6243 49.4774 16.3139 49.3121 17.088 49.2633L17.1894 49.2576L21.1077 49.0949L23.8358 48.9613L23.8415 48.9814L23.8753 48.98L24.5947 51.6462L25.6634 55.4272C25.8682 56.1839 25.9353 56.8957 25.8867 57.5699L25.8797 57.6576L27.2795 58.1134C27.6256 57.5361 28.0864 56.9961 28.6841 56.5007L28.7628 56.4364L31.8373 53.9968L33.966 52.2819L33.9824 52.2947L34.009 52.2737L36.1551 54.0071L39.2372 56.4364C39.8468 56.9279 40.3186 57.4643 40.6747 58.0383L40.7205 58.1134L42.1203 57.6576C42.0616 56.9867 42.1178 56.2785 42.3107 55.5256L42.3366 55.4272L43.3931 51.6426L44.1093 49.0013L44.1301 49.0021L44.1392 48.9695L46.8922 49.1078L50.8106 49.2576C51.592 49.2962 52.2884 49.4522 52.9132 49.7069L52.9943 49.7406L53.8594 48.5474C53.4184 48.0392 53.0484 47.4331 52.7629 46.7104L52.7261 46.6155L51.361 42.9315L50.3911 40.3728L50.4085 40.3611L50.3967 40.3293L52.705 38.8196L55.9629 36.6329C56.6177 36.2038 57.2726 35.9199 57.9275 35.7579L58.0129 35.7374Z"
          fill="#CEB2A5"
        />
      </svg>
    );
  }
);

export const Logo = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="68"
      height="70"
      viewBox="0 0 68 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M68 29.7326L62.4808 33.3934C61.8272 33.7713 61.1976 34.0769 60.5461 34.2411L60.4571 34.2626L60.4571 35.7374C61.1107 35.8886 61.7403 36.1602 62.3918 36.5523L62.4808 36.6066L68 40.2411L68 43.4015L61.5346 39.0822C60.6411 38.5028 59.984 38.2395 59.3007 38.2395C58.6589 38.2395 57.9921 38.4656 57.1287 39.0406L53.6484 41.3883L55.0713 45.2628L55.0984 45.3341L55.1523 45.4729C55.1613 45.4955 55.1703 45.518 55.1793 45.5403L55.233 45.6713C55.5554 46.4421 55.878 46.9425 56.3165 47.2757L56.3534 47.3031C56.8256 47.6469 57.4175 47.7929 58.2424 47.864L58.3862 47.8755L58.5346 47.8856L58.6859 47.8945L66.4345 48.2297L64.5962 50.7652L57.9838 50.476C57.2333 50.3967 56.5448 50.2731 55.9214 50.0221L55.8368 49.9871L54.9717 51.1803C55.4118 51.6876 55.7618 52.2782 56.0589 52.9792L56.0991 53.0755L58.4324 59.2668L56.5786 61.8236L53.8815 54.521L53.8542 54.4506L53.7995 54.3138C53.4437 53.4412 53.0819 52.8971 52.5686 52.5234C52.0494 52.1453 51.3772 51.9355 50.3415 51.8922L46.1488 51.7415L45.0273 55.7142L44.9882 55.8604C44.9819 55.8844 44.9757 55.9082 44.9697 55.9318L44.9349 56.0716C44.7237 56.9433 44.6884 57.5666 44.8678 58.12C45.0623 58.7198 45.5043 59.2155 46.2184 59.8156L46.3434 59.9195L46.408 59.9723L52.4802 64.8076L49.5057 65.7761L44.3258 61.6472C43.7652 61.1411 43.2806 60.6355 42.9235 60.0653L42.8756 59.9871L41.4758 60.4429C41.5343 61.1125 41.4711 61.7965 41.3003 62.5386L41.2763 62.6402L39.5325 69.0234L36.533 70L38.6344 62.5034L38.654 62.4286L38.6908 62.2823C38.9136 61.3695 38.9396 60.7175 38.7439 60.1139C38.5456 59.5023 38.1249 58.9366 37.3124 58.2915L34.0087 55.7L30.7713 58.2534C30.7304 58.2863 30.6903 58.3187 30.6511 58.3509L30.5361 58.4465L30.4261 58.5403C29.7991 59.0826 29.4262 59.5428 29.2461 60.0612L29.2311 60.1058C29.0611 60.6303 29.0908 61.2019 29.2518 61.9429L29.2826 62.0795L29.3161 62.22C29.3219 62.2438 29.3278 62.2677 29.3338 62.2918L29.3714 62.4385L29.3906 62.5116L31.467 70L28.4925 69.0315L26.7237 62.6402C26.567 61.9004 26.4715 61.206 26.5171 60.5343L26.5242 60.4429L25.1244 59.9871C24.779 60.5633 24.3267 61.0794 23.7532 61.5792L23.6742 61.6472L18.5193 65.7842L15.5198 64.8076L21.617 59.9805C22.443 59.3079 22.896 58.7631 23.1072 58.1118C23.3055 57.5002 23.297 56.7948 23.0181 55.7943L21.8654 51.7517L17.7485 51.9106L17.601 51.9183C17.5527 51.9211 17.5051 51.9241 17.4584 51.9274L17.3204 51.9378L17.1869 51.9497C16.3996 52.0257 15.8509 52.1854 15.416 52.502C14.9596 52.8343 14.6441 53.3303 14.3324 54.053L14.2757 54.187C14.2662 54.2097 14.2568 54.2327 14.2473 54.2558L14.1904 54.3974L14.1339 54.5423L11.4214 61.8236L9.58305 59.2881L11.9009 53.0755C12.208 52.3848 12.5381 51.7667 12.9689 51.2501L13.0283 51.1803L12.1632 49.9871C11.5458 50.2498 10.8771 50.4009 10.12 50.4674L10.0162 50.476L3.41925 50.7865L1.56547 48.2297L9.32954 47.9158L9.47883 47.9068C9.57668 47.9002 9.67122 47.8926 9.76266 47.8837L9.89753 47.8695C10.6488 47.7837 11.1837 47.6076 11.6312 47.2818C12.1504 46.9038 12.5572 46.3281 12.9184 45.3544L14.3571 41.4049L10.9333 39.1086L10.868 39.0658L10.7401 38.9836C9.94058 38.4763 9.34086 38.2261 8.74625 38.2136L8.69932 38.2131C8.1032 38.2131 7.52709 38.4536 6.79649 38.8997L6.66592 38.9805L6.53193 39.0656L6.46535 39.1086L-1.89714e-06 43.4015L-1.76014e-06 40.2674L5.5192 36.6066C6.17282 36.2287 6.8024 35.9231 7.45393 35.7589L7.54291 35.7374L7.54291 34.2626C6.88929 34.1114 6.25972 33.8398 5.60819 33.4477L5.5192 33.3934L-1.3008e-06 29.7589L-1.16266e-06 26.5985L6.46535 30.9178C7.35894 31.4972 8.01599 31.7605 8.69932 31.7605C9.34108 31.7605 10.0079 31.5344 10.8713 30.9594L14.3517 28.6115L12.9287 24.7372C12.8925 24.6412 12.8566 24.5487 12.8207 24.4597L12.767 24.3287C12.4356 23.5364 12.104 23.0299 11.6466 22.6969C11.1744 22.3531 10.5825 22.2071 9.75756 22.136L9.61384 22.1245L9.46543 22.1143L9.31409 22.1055L1.56547 21.7703L3.4038 19.2348L10.0162 19.524C10.7667 19.6033 11.4552 19.7269 12.0786 19.9778L12.1632 20.0129L13.0283 18.8197C12.5882 18.3124 12.2382 17.7218 11.9411 17.0208L11.9009 16.9245L9.5676 10.7332L11.4214 8.17638L14.1185 15.479C14.5015 16.4741 14.8786 17.0741 15.4314 17.4766C15.9506 17.8547 16.6228 18.0645 17.6585 18.1078L21.8514 18.2584L22.9727 14.2858L23.0118 14.1396C23.2631 13.1796 23.3229 12.5104 23.1459 11.9239L23.1322 11.88C22.9488 11.3145 22.5454 10.8414 21.9014 10.2863L21.7816 10.1844C21.7408 10.1501 21.6991 10.1155 21.6566 10.0805L21.592 10.0277L15.5198 5.19243L18.4943 4.22393L23.6742 8.35276C24.2348 8.85892 24.7194 9.3645 25.0765 9.93472L25.1244 10.0129L26.5242 9.55712C26.4657 8.88748 26.5289 8.20352 26.6997 7.46141L26.7237 7.35985L28.4676 0.976629L31.467 -1.59691e-06L29.3656 7.49655C29.3456 7.57196 29.3268 7.64565 29.3092 7.71771L29.2757 7.85969C29.0843 8.69897 29.0707 9.31424 29.2561 9.88607C29.4544 10.4977 29.8751 11.0634 30.6876 11.7085L33.9915 14.2999L37.2287 11.7466C37.2696 11.7137 37.3097 11.6813 37.3489 11.6491L37.4639 11.5535L37.5739 11.4597C38.2188 10.9019 38.5948 10.4309 38.7689 9.8942C38.9389 9.36972 38.9092 8.79813 38.7482 8.05711L38.7174 7.92048L38.6839 7.77996C38.6781 7.75621 38.6722 7.73228 38.6662 7.70819L38.6286 7.56151L38.6094 7.48841L36.533 -1.37547e-06L39.5075 0.968491L41.2763 7.35985C41.433 8.09955 41.5285 8.794 41.4829 9.46567L41.4758 9.55712L42.8756 10.0129C43.221 9.43666 43.6734 8.92058 44.2468 8.42081L44.3258 8.35276L49.4807 4.21579L52.4802 5.19243L46.383 10.0195L46.2619 10.1195C45.5123 10.7468 45.0934 11.2695 44.8928 11.8882C44.6945 12.4998 44.703 13.2052 44.9819 14.2057L46.1348 18.2482L50.2515 18.0893L50.399 18.0817L50.5416 18.0726C50.565 18.071 50.5882 18.0693 50.6112 18.0676L50.7469 18.0565C50.7692 18.0545 50.7912 18.0524 50.8131 18.0503L50.9421 18.0369C51.661 17.9561 52.1733 17.797 52.584 17.4979C53.0404 17.1657 53.3559 16.6697 53.6677 15.947L53.7243 15.813C53.7338 15.7903 53.7432 15.7673 53.7527 15.7442L53.8096 15.6026L53.8661 15.4577L56.5786 8.17638L58.417 10.7119L56.0991 16.9245C55.792 17.6152 55.4619 18.2333 55.0311 18.7499L54.9717 18.8197L55.8368 20.0129C56.4542 19.7502 57.1229 19.5991 57.88 19.5326L57.9838 19.524L64.5808 19.2135L66.4345 21.7703L58.6705 22.0842L58.5212 22.0932C57.5426 22.1588 56.8953 22.3349 56.3688 22.7182C55.8496 23.0962 55.4428 23.6719 55.0816 24.6456L53.6431 28.5951L57.0667 30.8914L57.132 30.9341L57.2599 31.0164C58.0594 31.5237 58.6591 31.7739 59.2538 31.7864L59.3007 31.7869C59.8968 31.7869 60.4729 31.5464 61.2035 31.1003L61.3341 31.0194L61.4681 30.9344L61.5346 30.8914L68 26.5985L68 29.7326ZM58.0129 35.7374L58.0129 34.2626C57.358 34.1111 56.7032 33.8387 56.0483 33.4222L55.9629 33.3671L52.6978 31.1909L50.4121 29.692L50.4194 29.6724L50.3911 29.6536L51.3731 27.0727L52.7261 23.3845C53.0042 22.6516 53.3675 22.0362 53.8023 21.5194L53.8594 21.4526L52.9943 20.2594C52.3757 20.5226 51.6861 20.6879 50.912 20.7367L50.8106 20.7424L46.8925 20.905L44.1642 21.0387L44.1585 21.0185L44.1247 21.02L43.4053 18.3536L42.3366 14.5728C42.1318 13.8161 42.0647 13.1042 42.1133 12.4301L42.1203 12.3423L40.7205 11.8866C40.3744 12.4639 39.9136 13.0038 39.3159 13.4993L39.2372 13.5636L36.1629 16.003L34.034 17.7181L34.0176 17.7051L33.991 17.7263L31.8451 15.9928L28.7628 13.5636C28.1532 13.0721 27.6814 12.5357 27.3253 11.9617L27.2795 11.8866L25.8797 12.3423C25.9384 13.0133 25.8822 13.7215 25.6893 14.4744L25.6634 14.5728L24.6071 18.3572L23.8907 20.9987L23.87 20.9978L23.8608 21.0305L21.1079 20.8922L17.1894 20.7424C16.408 20.7038 15.7116 20.5478 15.0868 20.2931L15.0057 20.2594L14.1406 21.4526C14.5816 21.9608 14.9516 22.5669 15.2371 23.2896L15.2739 23.3845L16.639 27.0683L17.6089 29.6272L17.5917 29.6388L17.6033 29.6707L15.2952 31.1802L12.0371 33.3671C11.3823 33.7962 10.7274 34.0801 10.0725 34.2421L9.98713 34.2626L9.98713 35.7374C10.642 35.8889 11.2968 36.1612 11.9517 36.5777L12.0371 36.6329L15.3024 38.8091L17.5879 40.308L17.5808 40.3277L17.6089 40.3464L16.627 42.9272L15.2739 46.6155C14.9958 47.3484 14.6325 47.9638 14.1977 48.4806L14.1406 48.5474L15.0057 49.7406C15.6243 49.4774 16.3139 49.3121 17.088 49.2633L17.1894 49.2576L21.1077 49.0949L23.8358 48.9613L23.8415 48.9814L23.8753 48.98L24.5947 51.6462L25.6634 55.4272C25.8682 56.1839 25.9353 56.8957 25.8867 57.5699L25.8797 57.6576L27.2795 58.1134C27.6256 57.5361 28.0864 56.9961 28.6841 56.5007L28.7628 56.4364L31.8373 53.9968L33.966 52.2819L33.9824 52.2947L34.009 52.2737L36.1551 54.0071L39.2372 56.4364C39.8468 56.9279 40.3186 57.4643 40.6747 58.0383L40.7205 58.1134L42.1203 57.6576C42.0616 56.9867 42.1178 56.2785 42.3107 55.5256L42.3366 55.4272L43.3931 51.6426L44.1093 49.0013L44.1301 49.0021L44.1392 48.9695L46.8922 49.1078L50.8106 49.2576C51.592 49.2962 52.2884 49.4522 52.9132 49.7069L52.9943 49.7406L53.8594 48.5474C53.4184 48.0392 53.0484 47.4331 52.7629 46.7104L52.7261 46.6155L51.361 42.9315L50.3911 40.3728L50.4085 40.3611L50.3967 40.3293L52.705 38.8196L55.9629 36.6329C56.6177 36.2038 57.2726 35.9199 57.9275 35.7579L58.0129 35.7374Z"
        fill="#CEB2A5"
      />
    </svg>
  );
};

export const DiscordPrimary = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4461 13.6898L15.9259 4.79635C15.8775 4.61648 15.7908 4.45075 15.6726 4.31185C15.5544 4.17295 15.4078 4.06456 15.244 3.99501H15.1995L15.244 3.97929C14.417 3.62811 13.5609 3.35982 12.6867 3.17794C12.6103 3.16194 12.5317 3.16204 12.4553 3.17825C12.3789 3.19447 12.3063 3.22647 12.2416 3.27243C12.1769 3.31839 12.1214 3.37742 12.0782 3.44613C12.035 3.51484 12.005 3.5919 11.99 3.6729C11.9738 3.75342 11.9728 3.83655 11.9872 3.91746C12.0016 3.99837 12.0311 4.07543 12.0738 4.14416C12.1166 4.21289 12.1718 4.27191 12.2363 4.31779C12.3008 4.36367 12.3733 4.39549 12.4495 4.41139C12.7831 4.4821 13.1092 4.56852 13.428 4.6628C13.5454 4.72738 13.639 4.83172 13.694 4.95921C13.749 5.0867 13.7623 5.23002 13.7316 5.36639C13.7009 5.50276 13.6281 5.62435 13.5247 5.71182C13.4214 5.79928 13.2934 5.84761 13.1611 5.84911H13.1018C11.9596 5.53337 10.7837 5.37493 9.60321 5.37773C8.45049 5.37408 7.30209 5.52722 6.18614 5.83339C6.04414 5.87311 5.89328 5.85555 5.76279 5.78413C5.6323 5.71272 5.53145 5.59251 5.47978 5.4468C5.42811 5.30109 5.4293 5.14024 5.48311 4.9954C5.53692 4.85057 5.63952 4.73205 5.77105 4.6628H5.77846C6.09719 4.56852 6.42333 4.4821 6.75689 4.41139C6.83331 4.39542 6.90601 4.36364 6.97083 4.31788C7.03566 4.27211 7.09135 4.21326 7.13472 4.14468C7.17808 4.0761 7.20827 3.99914 7.22357 3.91819C7.23887 3.83724 7.23897 3.75389 7.22386 3.6729C7.19165 3.51033 7.10074 3.36756 6.97055 3.27508C6.84036 3.1826 6.68122 3.14774 6.52711 3.17794C5.64981 3.36389 4.79109 3.63746 3.96245 3.99501C3.79863 4.06456 3.65199 4.17295 3.53379 4.31185C3.41559 4.45075 3.32895 4.61648 3.28052 4.79635L0.760339 13.6898C0.69496 13.9223 0.694464 14.1699 0.758912 14.4027C0.82336 14.6355 0.949997 14.8436 1.12354 15.0018C1.19173 15.0714 1.26349 15.137 1.3385 15.1982H1.34591C2.5467 16.2352 4.12552 17.0287 5.90447 17.4844C5.95 17.4998 5.9975 17.5078 6.04531 17.5079C6.19192 17.5104 6.33419 17.4552 6.44465 17.353C6.55512 17.2508 6.62594 17.1089 6.64345 16.9546C6.66095 16.8003 6.6239 16.6446 6.53944 16.5175C6.45499 16.3905 6.32912 16.3011 6.18614 16.2666C5.38639 16.0619 4.60887 15.7696 3.86609 15.3946C3.76443 15.2936 3.69955 15.1579 3.68284 15.0113C3.66613 14.8647 3.69865 14.7166 3.77471 14.5929C3.85076 14.4691 3.96548 14.3777 4.09875 14.3347C4.23202 14.2917 4.37534 14.2998 4.50355 14.3575C5.91189 15.0175 7.68342 15.4339 9.60321 15.4339C11.523 15.4339 13.2945 15.0175 14.7029 14.3575C14.8311 14.2998 14.9744 14.2917 15.1077 14.3347C15.2409 14.3777 15.3557 14.4691 15.4317 14.5929C15.5078 14.7166 15.5403 14.8647 15.5236 15.0113C15.5069 15.1579 15.442 15.2936 15.3403 15.3946C14.5975 15.7696 13.82 16.0619 13.0203 16.2666C12.8773 16.3011 12.7514 16.3905 12.667 16.5175C12.5825 16.6446 12.5455 16.8003 12.563 16.9546C12.5805 17.1089 12.6513 17.2508 12.7618 17.353C12.8722 17.4552 13.0145 17.5104 13.1611 17.5079C13.2089 17.5078 13.2564 17.4998 13.3019 17.4844C15.0809 17.0287 16.6597 16.2352 17.8605 15.1982H17.8679C17.9429 15.137 18.0147 15.0714 18.0829 15.0018C18.2564 14.8436 18.3831 14.6355 18.4475 14.4027C18.512 14.1699 18.5115 13.9223 18.4461 13.6898ZM7.23127 12.6056C7.05535 12.6056 6.88338 12.5503 6.73711 12.4467C6.59083 12.3431 6.47683 12.1959 6.40951 12.0236C6.34218 11.8513 6.32457 11.6618 6.35889 11.4789C6.39321 11.296 6.47792 11.128 6.60232 10.9962C6.72671 10.8643 6.8852 10.7745 7.05775 10.7382C7.23029 10.7018 7.40913 10.7205 7.57166 10.7918C7.73419 10.8632 7.87311 10.984 7.97085 11.139C8.06858 11.2941 8.12075 11.4764 8.12075 11.6628C8.12075 11.9129 8.02704 12.1526 7.86023 12.3294C7.69342 12.5063 7.46718 12.6056 7.23127 12.6056ZM11.9751 12.6056C11.7992 12.6056 11.6273 12.5503 11.481 12.4467C11.3347 12.3431 11.2207 12.1959 11.1534 12.0236C11.0861 11.8513 11.0684 11.6618 11.1028 11.4789C11.1371 11.296 11.2218 11.128 11.3462 10.9962C11.4706 10.8643 11.6291 10.7745 11.8016 10.7382C11.9742 10.7018 12.153 10.7205 12.3155 10.7918C12.4781 10.8632 12.617 10.984 12.7147 11.139C12.8125 11.2941 12.8646 11.4764 12.8646 11.6628C12.8646 11.9129 12.7709 12.1526 12.6041 12.3294C12.4373 12.5063 12.211 12.6056 11.9751 12.6056Z"
        fill="#CEB2A5"
      />
    </svg>
  );
};

export const OpenSeaPrimary = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0411 28C21.7727 28 28.0411 21.7316 28.0411 14C28.0411 6.26844 21.7743 0 14.0411 0C6.30958 0 0.0411377 6.26844 0.0411377 14C0.0411377 21.7316 6.30958 28 14.0411 28ZM23.1873 15.5302V16.432C23.1873 16.4838 23.1557 16.5298 23.1096 16.5499C22.8277 16.6708 21.8626 17.1138 21.4613 17.6719C21.238 17.9826 21.0263 18.3224 20.8135 18.6639L20.8135 18.664C20.0501 19.8891 19.2734 21.1355 17.9056 21.1355H10.6088C8.0226 21.1355 5.92688 19.0326 5.92688 16.4377V16.3543C5.92688 16.2853 5.98296 16.2292 6.05201 16.2292H10.1197C10.2003 16.2292 10.2592 16.304 10.2521 16.3831C10.2233 16.6477 10.2722 16.9182 10.3973 17.1641C10.639 17.6546 11.1395 17.961 11.6803 17.961H13.6941V16.3889H11.7034C11.6012 16.3889 11.5409 16.2709 11.5998 16.1875C11.6118 16.1691 11.6246 16.1503 11.6381 16.1306C11.649 16.1148 11.6602 16.0984 11.6717 16.0811C11.8602 15.8135 12.1291 15.3978 12.3967 14.9246C12.5793 14.6053 12.7562 14.2644 12.8987 13.9221C12.9251 13.8653 12.9466 13.8073 12.9678 13.7503L12.9734 13.735C12.9836 13.7065 12.9938 13.6784 13.004 13.6507C13.0326 13.5723 13.0601 13.4969 13.0813 13.4215C13.1048 13.3511 13.1244 13.2778 13.1433 13.2072L13.1434 13.2071L13.1561 13.1597C13.2237 12.8691 13.2525 12.5613 13.2525 12.242C13.2525 12.1169 13.2467 11.986 13.2352 11.8609C13.2295 11.7242 13.2122 11.5876 13.195 11.4509C13.1834 11.3301 13.1619 11.2107 13.1389 11.0856C13.1101 10.9029 13.0698 10.7217 13.0238 10.539L13.008 10.47C12.9977 10.4327 12.9879 10.396 12.9782 10.3594C12.9553 10.2732 12.9327 10.1882 12.9044 10.1003C12.7908 9.70761 12.6599 9.32502 12.5218 8.96687C12.4715 8.82446 12.4139 8.68782 12.3564 8.55118C12.2897 8.38952 12.2221 8.23942 12.1578 8.09667L12.1061 7.98158C12.0659 7.90102 12.0313 7.82766 11.9968 7.75287C11.958 7.66801 11.9177 7.58314 11.8774 7.50261C11.8661 7.47831 11.8542 7.45469 11.8424 7.43146L11.8424 7.43144L11.8424 7.4314C11.8242 7.39552 11.8065 7.3606 11.7925 7.32568L11.5466 6.87115C11.5121 6.8093 11.5696 6.73594 11.6372 6.75465L13.1763 7.17176H13.1806C13.1823 7.17176 13.1835 7.17226 13.1844 7.17268C13.1851 7.17297 13.1857 7.17322 13.1863 7.17322L13.3891 7.2293L13.6121 7.29261L13.6941 7.3156V6.40081C13.6941 5.95922 14.0479 5.60107 14.4852 5.60107C14.7038 5.60107 14.9023 5.69025 15.0447 5.83552C15.1871 5.98081 15.2763 6.1793 15.2763 6.40081V7.75864L15.4403 7.80465C15.4532 7.80899 15.4661 7.81473 15.4777 7.82335C15.4933 7.83507 15.5115 7.84895 15.5322 7.86475C15.5649 7.88967 15.6039 7.91935 15.6488 7.95282C15.6721 7.97143 15.6961 7.99169 15.7213 8.01303L15.7214 8.01309C15.7586 8.04449 15.7985 8.07823 15.843 8.11248C15.9911 8.23184 16.1681 8.38576 16.3623 8.56269C16.414 8.60727 16.4644 8.6533 16.5104 8.69933C16.7607 8.93235 17.0412 9.20563 17.3087 9.50769C17.3835 9.59256 17.4569 9.67885 17.5316 9.76946C17.5581 9.80206 17.5851 9.83447 17.6121 9.86677C17.6612 9.92569 17.71 9.98422 17.7546 10.0428L17.8053 10.11L17.8054 10.1101C17.8809 10.21 17.9587 10.3129 18.0279 10.4196C18.0454 10.4465 18.064 10.4737 18.0826 10.5009L18.0827 10.5009L18.0827 10.501C18.1069 10.5363 18.1311 10.5717 18.153 10.6066C18.2623 10.772 18.3587 10.9432 18.4508 11.1144C18.4896 11.1935 18.5299 11.2798 18.5644 11.3646C18.6665 11.5933 18.7471 11.8263 18.7988 12.0594C18.8147 12.1097 18.8262 12.1644 18.8319 12.2133V12.2248C18.8492 12.2938 18.855 12.3672 18.8607 12.4419C18.8837 12.6807 18.8722 12.9195 18.8204 13.1597C18.7988 13.2618 18.7701 13.3582 18.7356 13.4603L18.724 13.4932C18.6932 13.5808 18.6615 13.671 18.6219 13.7566C18.5356 13.9566 18.4335 14.1565 18.3127 14.3435C18.2738 14.4125 18.2278 14.4859 18.1818 14.5549C18.1573 14.5906 18.1324 14.6253 18.1081 14.6593L18.1079 14.6596C18.0823 14.6953 18.0572 14.7303 18.0336 14.7649C17.9704 14.8512 17.9028 14.9418 17.8337 15.0224C17.7719 15.1073 17.7086 15.1921 17.6395 15.2669C17.5432 15.3805 17.4511 15.4884 17.3547 15.592C17.2972 15.6596 17.2353 15.7286 17.172 15.7905C17.119 15.8497 17.0649 15.9036 17.0143 15.9541L16.9894 15.9789C16.893 16.0753 16.8125 16.1501 16.7448 16.2119L16.5866 16.3572C16.5636 16.3773 16.5334 16.3889 16.5018 16.3889H15.2763V17.961H16.8182C17.1634 17.961 17.4914 17.8387 17.756 17.6143L17.7631 17.6081L17.7632 17.6081C17.8659 17.5185 18.2536 17.1804 18.7097 16.6765C18.7255 16.6593 18.7456 16.6463 18.7687 16.6406L23.0277 15.4093C23.1068 15.3863 23.1873 15.4467 23.1873 15.5302ZM6.96056 14.4721L7.02095 14.3771L10.6629 8.67974C10.7161 8.59633 10.8413 8.60495 10.8815 8.69556C11.49 10.0591 12.015 11.755 11.769 12.8107C11.664 13.2451 11.3764 13.8334 11.0527 14.3771C11.011 14.4563 10.965 14.5339 10.9161 14.6087C10.893 14.6432 10.8542 14.6634 10.8125 14.6634H7.06698C6.9663 14.6634 6.90733 14.5541 6.96056 14.4721Z"
        fill="#CEB2A5"
      />
    </svg>
  );
};

export const InstaPrimary = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49102 11.5552C9.62946 11.5552 10.5523 10.577 10.5523 9.37037C10.5523 8.16372 9.62946 7.18555 8.49102 7.18555C7.35258 7.18555 6.42969 8.16372 6.42969 9.37037C6.42969 10.577 7.35258 11.5552 8.49102 11.5552Z"
        fill="#CEB2A5"
      />
      <path
        d="M11.3228 2.54199H5.65419C4.69747 2.54199 3.77994 2.94482 3.10343 3.66185C2.42693 4.37888 2.04688 5.35138 2.04688 6.36541V12.3736C2.04688 13.3877 2.42693 14.3602 3.10343 15.0772C3.77994 15.7942 4.69747 16.1971 5.65419 16.1971H11.3228C12.2796 16.1971 13.1971 15.7942 13.8736 15.0772C14.5501 14.3602 14.9302 13.3877 14.9302 12.3736V6.36541C14.9302 5.35138 14.5501 4.37888 13.8736 3.66185C13.1971 2.94482 12.2796 2.54199 11.3228 2.54199ZM8.48852 12.6467C7.87698 12.6467 7.27917 12.4545 6.7707 12.0944C6.26223 11.7343 5.86592 11.2225 5.63189 10.6237C5.39787 10.0248 5.33664 9.36589 5.45594 8.73017C5.57525 8.09446 5.86973 7.51051 6.30215 7.05219C6.73457 6.59386 7.28551 6.28173 7.8853 6.15528C8.48509 6.02883 9.10678 6.09373 9.67177 6.34177C10.2368 6.58982 10.7197 7.00987 11.0594 7.5488C11.3992 8.08774 11.5805 8.72136 11.5805 9.36953C11.5805 10.2387 11.2547 11.0723 10.6749 11.6869C10.095 12.3015 9.30856 12.6467 8.48852 12.6467ZM11.8382 6.63851C11.6853 6.63851 11.5358 6.59046 11.4087 6.50044C11.2816 6.41041 11.1825 6.28245 11.124 6.13274C11.0655 5.98304 11.0502 5.8183 11.08 5.65937C11.1099 5.50044 11.1835 5.35446 11.2916 5.23987C11.3997 5.12529 11.5374 5.04726 11.6874 5.01565C11.8373 4.98403 11.9927 5.00026 12.134 5.06227C12.2752 5.12428 12.396 5.22929 12.4809 5.36403C12.5658 5.49876 12.6112 5.65717 12.6112 5.81921C12.6112 6.0365 12.5297 6.2449 12.3848 6.39855C12.2398 6.55219 12.0432 6.63851 11.8382 6.63851Z"
        fill="#CEB2A5"
      />
    </svg>
  );
};

export const TwitterPrimary = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5396 3.14454L14.3011 5.50931C13.8564 11.0009 9.4831 15.2669 4.25744 15.2669C3.18266 15.2669 2.29318 15.0862 1.61866 14.7327C1.07757 14.442 0.855198 14.1356 0.7959 14.0413C0.746837 13.9623 0.715223 13.8726 0.703412 13.7789C0.6916 13.6852 0.699896 13.5898 0.727682 13.5C0.755468 13.4101 0.802027 13.328 0.863891 13.2599C0.925754 13.1918 1.00133 13.1393 1.08498 13.1064C1.0998 13.0986 2.8491 12.3915 3.98318 11.0323C3.27986 10.5015 2.66169 9.85429 2.15235 9.11538C1.13686 7.65409 0.0620828 5.11649 0.706952 1.32972C0.727224 1.21714 0.775804 1.11246 0.847561 1.02672C0.919319 0.940986 1.01159 0.877382 1.11463 0.842626C1.218 0.806751 1.32868 0.801701 1.43457 0.828029C1.54047 0.854356 1.63749 0.911046 1.71502 0.991896C1.73726 1.02332 4.20555 3.60021 7.22235 4.43298V3.95375C7.22527 3.45543 7.32075 2.96259 7.50337 2.50339C7.68598 2.04418 7.95214 1.6276 8.28666 1.27742C8.62117 0.927246 9.01748 0.650335 9.45297 0.4625C9.88845 0.274665 10.3546 0.179586 10.8247 0.182691C11.4418 0.192019 12.0461 0.370601 12.5786 0.701038C13.1112 1.03148 13.554 1.5025 13.8638 2.06822H16.1171C16.2342 2.06783 16.3487 2.10418 16.4463 2.17269C16.544 2.24119 16.6202 2.33879 16.6656 2.45318C16.7083 2.56927 16.7192 2.69581 16.6969 2.81816C16.6746 2.94051 16.62 3.05367 16.5396 3.14454Z"
        fill="#CEB2A5"
      />
    </svg>
  );
};

export const Menu = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      style={props.style}
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="13.8462" height="2.42857" fill="#CEB2A5" />
      <rect y="7.42871" width="20" height="2.42857" fill="#CEB2A5" />
      <rect y="14.8569" width="13.8462" height="2.42857" fill="#CEB2A5" />
    </svg>
  );
};
