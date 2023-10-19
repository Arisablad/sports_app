import { useEffect, useState } from "react";
import EventsService from "@/services/EventsService.tsx";
import { AxiosError } from "axios";
import { TEventObject } from "@/types/EventsTypes.tsx";
import { splitDate } from "@/lib/utils.ts";

function AllEvents() {
  const { getAllEvents } = EventsService();
  const [events, setEvents] = useState<TEventObject[] | []>([]);

  useEffect(() => {
    getAllEvents()
      .then((response: any) => {
        console.log(response);
        setEvents(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"w-full h-full flex flex-col gap-4"}>
      {events.map((match) => (
        <div className={" flex flex-col gap-2 rounded-lg"}>
          <div
            key={match.Cnm}
            className={
              "bg-[#111827] text-white rounded-sm py-1.5 font-sans font-medium flex items-center"
            }
          >
            <div className={"flex justify-center items-center w-14"}>
              <img
                src={`https://static.livescore.com/i2/fh/${match.Ccd}.jpg`}
                alt={`${match.Ccd} - league-flag`}
                className={"w-6 h-4"}
              />
            </div>
            <div className={"w-full px-2 md:px-1"}>
              {match.Cnm} - {match.Sdn}
            </div>
          </div>
          {match.Events.map((event) => (
            //   TEAM1
            <div className={"flex"}>
              <div
                className={"flex text-white justify-center items-center p-2"}
              >
                {splitDate(event.Esd, true)}
              </div>
              <div
                className={
                  "bg-[#333333] rounded-md text-white flex justify-center flex-col w-full px-2 hover:bg-[#333333]/30 cursor-pointer pointer"
                }
              >
                {event.T1.map((team) => (
                  <div className={"flex justify-between max-w-md w-full "}>
                    <div className={"flex items-center gap-2 p-1.5"}>
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${team.Img}`}
                        className={"w-5 h-5"}
                        alt={team.Nm + "Flag"}
                      />
                      <p>{team.Nm}</p>
                    </div>
                    <div className={"text-red-400 p-1.5 flex items-center"}>
                      {team.tbd}
                    </div>
                  </div>
                ))}

                {/*/!*VS*!/*/}
                {/*<div>VS</div>*/}

                {/*  Team2*/}
                {event.T2.map((team) => (
                  <div
                    className={
                      "flex justify-between max-w-md w-full items-center "
                    }
                  >
                    <div className={"flex items-center gap-2 p-1.5"}>
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${team.Img}`}
                        className={"w-5 h-5"}
                        alt={team.Nm + "Flag"}
                      />
                      <p>{team.Nm}</p>
                    </div>
                    <div className={"text-red-400 p-1.5 flex items-center"}>
                      {team.tbd}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
