// eslint-disable-next-line @typescript-eslint/no-unused-vars
import apiClient from "@/lib/apiClient.ts";
import { allNews } from "@/mocks/allNews.ts";

function NewsService() {
  const getAllNews = async () => {
    try {
      // const response = await apiClient.get(
      //   `${import.meta.env.VITE_BASE_URL}/news/v2/list`,
      // );
      // return response.data;
      return allNews.data;
    } catch (error) {
      return error;
    }
  };

  return { getAllNews };
}

export default NewsService;
