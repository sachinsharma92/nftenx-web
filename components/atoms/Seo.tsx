import Head from "next/head";

type seoProps = {
  title?: string,
  description?: string,
};

export const Seo = (props: seoProps) => {
  return <Head>
    <title>{!props.title? 'NF10X' : `${props.title} | NF10X`}</title>
  </Head>
}