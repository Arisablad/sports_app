// import React from "react";
// import apiClient from "@/lib/apiClient.ts";
// import { AxiosError } from "axios";
import PolandTable from "@/mocks/PolandTable.ts";
import UefaTable from "@/mocks/UefaTable.ts";
function TablesService() {
  const getTableInfo = async (id: string) => {
    try {
      //   const response = await apiClient.get("competitions/get-table", {
      //     params: { CompId: id },
      //   });
      //   if (!response) {
      //     return [];
      //   }
      //   return response.data;
      return id === "368" ? PolandTable : UefaTable;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return {
    getTableInfo,
  };
}

export default TablesService;
