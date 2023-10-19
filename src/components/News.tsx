import { useEffect, useState } from "react";
import NewsService from "@/services/NewsService.tsx";
import { AxiosError } from "axios";
import { TNews } from "@/types/NewsTypes.ts";

function News() {
  const [news, setNews] = useState<Record<string, never> | TNews>({});
  const { getAllNews } = NewsService();

  useEffect(() => {
    getAllNews()
      .then((response: any) => {
        console.log(response);
        setNews(response);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"w-full h-full"}>
      {/*HEADER*/}
      <h1
        className={
          "border-b border-solid border-[#222222] px-2 text-xl font-semibold py-2"
        }
      >
        Featured News
      </h1>

      {/*NEWS*/}
      <div className={"w-full h-full p-2 flex flex-col gap-4"}>
        {news &&
          Object.keys(news).length > 0 &&
          news.featuredArticles.length > 0 &&
          news.featuredArticles.map((article) => {
            return (
              <div
                key={article.id}
                className={`rounded-md text-white flex justify-center flex-col w-full cursor-pointer pointer relative hover:scale-105 transition duration-300`}
              >
                <img
                  src={article.mainMedia[0].gallery.url}
                  alt={article.mainMedia[0].gallery.alt}
                  className={"rounded-md"}
                />
                <div
                  className={
                    "absolute w-full h-full hover:bg-[black]/50 transition duration-300 z-20"
                  }
                ></div>
                <div
                  className={"w-full h-16 absolute bottom-0 p-2 bg-black/50"}
                >
                  {article.title}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default News;
