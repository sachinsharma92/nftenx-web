type PropTypes = {
  items:
    | ReadonlyArray<Record<string, undefined | string | JSX.Element>>
    | ReadonlyArray<JSX.Element>;
};

export const InfiniteScroller = (props: PropTypes) => {
  return (
    <article className="relative w-full text-secondary-1 py-4 border-secondary-1 border-opacity-10 border-t-[1px] border-b-[1px] overflow-x-hidden">
      {/* ihfoe o oodi ohd oh oh dovh sdovhoisdh vosdjhvipds oihd dh oih oihd hoid oidh oidhp dpp hpd phdp ciod hcoi doch dhcip hoich dsoihcoi sdcoihdic oidh coisdh coidhidh p oigwodi ldajgcid cjhw so kdvnoksc lksn ksn ksxl lks nklsn clksxlcn sljvblscjv lcks nvljcsb vljcnslk vnlcnvpcn vocnv lh  */}
      <div className="w-full flex flex-row gap-5 items-center px-2 flex-nowrap animate-infinite-scroll-left">
        {props.items.map((element, index) => {
          return (
            <span key={index} className="shrink-0">
              {element}
            </span>
          );
        })}
      </div>
    </article>
  );
};
