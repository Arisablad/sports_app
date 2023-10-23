import React, { Fragment, useEffect, useState } from "react";
import {
  Table as TableUI,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TablesService from "@/services/TablesService.tsx";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button.tsx";
import LoadingSpinner from "@/components/Spinner.tsx";
import { cn } from "@/lib/utils.ts";

const Buttons = [
  { name: "All", value: 0 },
  { name: "Home", value: 1 },
  { name: "Away", value: 2 },
];

function Table() {
  const [tableFrom, setTableFrom] = useState<number>(0);
  const { leagueId } = useParams();
  const { getTableInfo } = TablesService();
  const [tableData, setTableData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getTable = () => {
    setLoading(true);
    getTableInfo(leagueId as string)
      .then((response: any) => {
        setTimeout(() => {
          setTableData(response.Stages);
          setLoading(false);
        }, 1500);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <TableUI className={"min-h-[500px]"}>
      <TableHeader>
        <TableRow className={"p-1.5 hover:bg-transparent"}>
          <TableHead className={"flex gap-4"}>
            {Buttons.map((button) => (
              <Button
                onClick={() => setTableFrom(button.value)}
                className={cn(
                  button.value === tableFrom
                    ? "bg-[#322222] text-white"
                    : "bg-[#111111] text-white",
                )}
              >
                {button.name}
              </Button>
            ))}
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Played'] after:text-white cursor-pointer after:absolute after:bottom-4 after:left-4 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2"
            }
          >
            P
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Wins'] after:text-white cursor-pointer after:absolute after:bottom-4 after:left-4 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2"
            }
          >
            W
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Draws'] after:text-white cursor-pointer after:absolute after:bottom-4 after:left-4 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2"
            }
          >
            D
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Loses'] after:text-white cursor-pointer after:absolute after:bottom-4 after:left-4 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2"
            }
          >
            L
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Goal_Balance'] after:text-white cursor-pointer after:absolute after:bottom-0 after:left-4 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2"
            }
          >
            GB
          </TableHead>
          <TableHead
            className={
              "relative text-center hover:after:content-['Points'] after:text-white cursor-pointer after:absolute after:bottom-4 after:left-0 after:font-semibold after:text-xs after:rounded-full after:bg-[#222222] hover:after:p-2 "
            }
          >
            PTS
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={"text-slate-300"}>
        {tableData && tableData.length > 0 ? (
          tableData.map((match: any) => (
            <>
              {match["LeagueTable"].L.map((stage: any) => {
                return (
                  <Fragment key={stage.LTT}>
                    {tableData.length > 1 && (
                      <TableHead
                        className={
                          " p-4 w-full text-white font-bold text-center my-2 text-xl"
                        }
                      >
                        {match.Snm}
                      </TableHead>
                    )}
                    {stage.Tables[tableFrom].team.map((team: any) => {
                      return (
                        <TableRow className={"w-full bg-[#333333]"}>
                          <TableCell className="font-medium flex gap-2">
                            <p
                              className={
                                "border-b border-purple-500 text-white"
                              }
                            >
                              {team.rnk}
                            </p>
                            <img
                              src={`https://lsm-static-prod.livescore.com/medium/${team.Img}`}
                              alt={`${team.Tcd} - league-flag`}
                              className={"w-5 h-5"}
                            />
                            <p>{team.Tnm}</p>
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {team.pld}
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {" "}
                            {team.win}
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {team.drw}
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {team.lst}
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {team.gf}:{team.ga}
                          </TableCell>
                          <TableCell className={"text-center"}>
                            {team.pts}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </Fragment>
                );
              })}
            </>
          ))
        ) : loading ? (
          <div className={"w-full"}>
            <LoadingSpinner className={"p-4 mt-auto w-14 h-14"} />
          </div>
        ) : (
          <div>No data available</div>
        )}
      </TableBody>
    </TableUI>
  );
}

export default Table;
