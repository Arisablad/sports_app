import LeaguesService from "@/services/LeaguesService.tsx";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { ArrowDown, ArrowUp } from "lucide-react";

function Leagues() {
  const { getAllLeagues } = LeaguesService();
  const [leagues, setLeagues] = useState([]);
  const fallbackSrc =
    "https://static.vecteezy.com/system/resources/previews/002/486/569/non_2x/404-error-icon-vector.jpg";

  const [expandedLeagues, setExpandedLeagues] = useState([]);

  const ExpandLeagues = (id) => {
    setExpandedLeagues((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    getAllLeagues()
      .then((response: any) => {
        console.log(response);
        setTimeout(() => {
          setLeagues(response);
        }, 1000);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  });

  return (
    <div
      className={"hidden w-full h-full min-h-[700px] md:flex flex-col gap-2"}
    >
      {leagues && leagues.length > 0
        ? leagues.map((league) => (
            <div
              className={" flex flex-col gap-2 rounded-lg cursor-pointer"}
              key={league.Cid}
            >
              <div
                key={league.Cnm}
                className={
                  "bg-[#111827] text-white rounded-sm py-1.5 px-4 font-sans font-medium flex items-center gap-4 hover:bg-[#333333]/60 transition duration-300"
                }
                onClick={() => ExpandLeagues(league.Cid)}
              >
                <img
                  src={`https://static.livescore.com/i2/fh/${league.Ccd}.jpg`}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = fallbackSrc;
                  }}
                  loading="lazy"
                  className={"h-4 w-6"}
                  alt={league.Cnm}
                />
                <div className={"flex items-center w-full justify-between"}>
                  <span>{league.Cnm}</span>
                  {expandedLeagues.includes(league.Cid) ? (
                    <span>
                      <ArrowUp />
                    </span>
                  ) : (
                    <span>
                      <ArrowDown />
                    </span>
                  )}
                </div>
              </div>
              {/*Dropdown*/}
              {expandedLeagues.includes(league.Cid)
                ? league.Stages?.map((stage) => (
                    <div
                      className={
                        "border-gray-600 flex flex-col gap-2 rounded-lg cursor-pointer"
                      }
                    >
                      {/*Dropdown content*/}

                      <div
                        key={league.Cnm}
                        className={
                          "bg-[#333333] text-white rounded-sm py-1.5 px-4 font-sans font-medium flex items-center gap-4 hover:bg-[#333333]/60 transition duration-300"
                        }
                      >
                        <img
                          src={`https://static.livescore.com/i2/fh/${league.Ccd}.jpg`}
                          onError={(e) => {
                            e.target.onError = null;
                            e.target.src = fallbackSrc;
                          }}
                          loading="lazy"
                          className={"h-4 w-6"}
                          alt={league.Cnm}
                        />
                        <div className={"flex items-center w-14"}>
                          {stage.Sdn}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          ))
        : Array.from({ length: 20 }).map((_, i) => (
            <Skeleton key={i} className={"w-full h-8"} />
          ))}
    </div>
  );
}

export default Leagues;
