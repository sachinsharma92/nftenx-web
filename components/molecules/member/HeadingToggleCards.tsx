/* eslint-disable @next/next/no-img-element */
import { Article, H1, H3, H4, ToggleButtons } from "components/atoms";
import Link from "next/link";
import { Api } from "services/api";
import {useState, useEffect} from 'react';

type PropType = {
  items?: ReadonlyArray<Record<string, any>>;
  title?: string;
  categories?: ReadonlyArray<Record<string, any>>;
  onCategoryChange?: Function;
};

export const ContentCard = ({
  title,
  image,
  description,
  href,
  type,
}: {
  title?: string;
  image?: string;
  description?: string;
  href?: string;
  type?: 1 | 2;
}) => {
  return (
    <Link href={href ?? "javascript:void(0)"} passHref>
      <a className="flex flex-col gap-2 py-8 px-7 bg-white bg-opacity-[0.05] w-[320px] rounded-3xl border-white border-2 border-opacity-10">
        <img
          alt={title}
          src={image}
          className={`w-[320px] h-[320px] max-w-full object-cover ${
            type == 2 ? "order-2" : ""
          }`}
        />
        <H4>{title}</H4>
        <p className="font-mono text-primary-light">{description}</p>
      </a>
    </Link>
  );
};

export const HeadingToggleCards = (props: PropType) => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  const getArticles = async (categoryId='') => {
    const articles = await Api.getArticles(categoryId);
    if (articles.success) {
      setArticles(articles.data.results)
    }
  }

  const getCategories = async () => {
    const categories = await Api.getCategories();
    if (categories.success) {
      setCategories(categories.data.results);
    }
  }

  useEffect(() => {
    if(props.categories){
      getArticles(props.categories[0].id);
    }else{
      getArticles();
    }
  }, [categories]);

  useEffect(()=>{
    getCategories();
  },[])

  const onCategoryChange=(categoryId: string)=>{
    getArticles(categoryId);
  }

  const getStructuredCategories=()=>{
    return categories.map((category: any)=>{
      return {
        title: category.name,
        value: category.id
      }
    })
  }

  const getStructuredArticles = ()=>{
    return articles.map((article: any)=>{
      return {
        title: article.title,
        description: article.description,
        image: article.postImage.mediaUrl,
        href: `/category/${article.id}`
      }
    })
  }

  return (
    <Article>
      {props.title && <H1>{props.title}</H1>}
      <ToggleButtons
        items={getStructuredCategories()}
        onChange={onCategoryChange}
      />
      <div className="flex flex-row flex-nowrap gap-5 overflow-x-auto no-scrollbar -px-section lg:px-28">
        {getStructuredArticles()?.map((element, index) => {
          return (
            <div className="shrink-0" key={index}>
              <ContentCard
                title={element.title}
                description={element.description}
                image={element.image}
                href={element.href}
                type={index%2?2:1}
              />
            </div>
          );
        })}
      </div>
    </Article>
  );
};