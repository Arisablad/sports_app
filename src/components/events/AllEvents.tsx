import { useEffect, useState } from "react";
import EventsService from "@/services/EventsService.tsx";
import { AxiosError } from "axios";
import { TEventObject } from "@/types/EventsTypes.tsx";

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
          <div key={match.Cnm} className={"bg-[#EEEEEE] rounded-sm"}>
            {match.Cnm}
          </div>
          {match.Events.map((event) => (
            //   TEAM1
            <div className={"flex"}>
              <div className={"flex text-white justify-center items-center"}>
                {match.Ccdiso}
              </div>
              <div
                className={
                  "bg-[#FFFFFF] flex justify-center flex-col w-full px-2  border-purple-500 border border-solid hover:bg-[#FFFFFF]/90 cursor-pointer pointer"
                }
              >
                {event.T1.map((team) => (
                  <div className={"flex justify-between max-w-md w-full "}>
                    <div>{team.Nm}</div>
                    <div className={"text-red-400"}>{team.tbd}</div>
                  </div>
                ))}

                {/*/!*VS*!/*/}
                {/*<div>VS</div>*/}

                {/*  Team2*/}
                {event.T2.map((team) => (
                  <div className={"flex justify-between max-w-md"}>
                    <div>{team.Nm}</div>
                    <div className={"text-red-400"}>{team.tbd}</div>
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
