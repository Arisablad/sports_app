import GlobalLayout from "@/containers/GlobalLayout.tsx";
import AllEvents from "@/components/events/AllEvents.tsx";
import News from "@/components/News.tsx";
import { useToast } from "@/components/ui/use-toast.ts";
import { useEffect } from "react";
import Leagues from "@/components/Leagues.tsx";

function Home() {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Data Fetch",
      description:
        "Currently data is fetched from mock. Cause API is paid. Suggest to press Polish league table, cause of complete mock",
      open: true,
      duration: 7000,
      variant: "destructive",
    });
  }, []);

  return (
    <GlobalLayout>
      <div
        className={
          "grid md:grid-cols-[200px_minmax(400px,_1fr)300px] gap-2 py-4 h-full min-h-screen"
        }
      >
        <div
          className={
            "hidden bg-[#111111] p-2 md:flex border border-solid border-[#222222] text-white rounded-lg flex flex-col gap-4 h-fit"
          }
        >
          <Leagues />
        </div>
        <div
          className={
            "p-2 border border-solid border-[#222222] rounded-lg h-max"
          }
        >
          {/*Matches*/}
          <AllEvents />
        </div>
        <div
          className={
            "hidden bg-[#111111] lg:flex border border-solid border-[#222222] text-white rounded-lg h-fit"
          }
        >
          <News />
        </div>
        {/*<div className={"bg-green-800"}>Xd2</div>*/}
      </div>
    </GlobalLayout>
  );
}

export default Home;
