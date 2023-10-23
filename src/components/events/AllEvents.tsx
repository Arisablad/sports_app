import React, { useEffect, useState } from "react";
import EventsService from "@/services/EventsService.tsx";
import { AxiosError } from "axios";
import { TEventObject } from "@/types/EventsTypes.tsx";
import { splitDate } from "@/lib/utils.ts";
import LoadingSpinner from "@/components/Spinner.tsx";
import { Link } from "react-router-dom";

function AllEvents() {
  const { getAllEvents } = EventsService();
  const [events, setEvents] = useState<TEventObject[] | []>([]);

  useEffect(() => {
    getAllEvents()
      .then((response: any) => {
        setTimeout(() => {
          setEvents(response.data);
        }, 1500);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"w-full h-max flex flex-col gap-4"}>
      {events && events.length > 0 ? (
        events.map((match) => (
          <div className={" flex flex-col gap-2 rounded-lg"} key={match.Cid}>
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
              <div
                className={
                  "w-full px-2 md:px-1 flex justify-between items-center"
                }
              >
                <div>
                  {match.Cnm} - {match.Sdn}
                </div>
                <Link
                  className={
                    "px-2 text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300"
                  }
                  to={"/table/" + match.CompId}
                >
                  Table
                </Link>
              </div>
            </div>
            {match.Events.map((event) => (
              //   TEAM1
              <div className={"flex"} key={event.Eid}>
                <div
                  className={"flex text-white justify-center items-center p-2"}
                >
                  {splitDate(event.Esd, true)}
                </div>
                <div
                  className={
                    "bg-[#333333] rounded-md text-white flex justify-center flex-col w-full px-2 hover:bg-[#333333]/30 transition duration-300 cursor-pointer pointer"
                  }
                >
                  {event.T1.map((team) => (
                    <div
                      className={"flex justify-between max-w-md w-full "}
                      key={team.Nm}
                    >
                      <div className={"flex items-center gap-2 p-1.5"}>
                        <img
                          src={`https://lsm-static-prod.livescore.com/medium/${team.Img}`}
                          className={"w-5 h-5"}
                          alt={team.Nm + "Flag"}
                        />
                        <p>{team.Nm}</p>
                      </div>
                      <div
                        className={
                          "text-red-400 p-1.5 flex items-center animate-pulse"
                        }
                      >
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
                      key={team.Nm}
                    >
                      <div className={"flex items-center gap-2 p-1.5"}>
                        <img
                          src={`https://lsm-static-prod.livescore.com/medium/${team.Img}`}
                          className={"w-5 h-5"}
                          alt={team.Nm + "Flag"}
                        />
                        <p>{team.Nm}</p>
                      </div>
                      <div
                        className={
                          "text-red-400 p-1.5 flex items-center animate-pulse"
                        }
                      >
                        {team.tbd}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default AllEvents;
