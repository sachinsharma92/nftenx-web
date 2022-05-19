import styles from './RichText.module.scss';

import { Article } from "components/atoms";

type Proptype = {
  data: string;
  section?: boolean
};

export const RichText = (props: Proptype) => {
  return (
    <Article className={props.section ? '' : 'p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0 3xl:p-0'}>
      <div
        className={styles.richTextContainer_root}
        dangerouslySetInnerHTML={{ __html: props.data }}
      >
        {/* Nothing goes in here.. the data is being set by - dangerouslySetInnerHTML */}
      </div>
    </Article>
  );
};
