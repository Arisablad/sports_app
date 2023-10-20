import apiClient from "@/lib/apiClient.ts";
import { AllLeagues } from "@/mocks/allLeagues.ts";

function LeaguesService() {
  const getAllLeagues = async () => {
    try {
      //   const response = await apiClient.get("leagues/v2/list", {
      //     params: { Category: "soccer" },
      //   });
      //   if (!response) {
      //     return [];
      //   }
      return AllLeagues;
    } catch (error) {
      return error;
    }
  };

  return { getAllLeagues };
}

export default LeaguesService;
