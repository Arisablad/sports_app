import GlobalLayout from "@/containers/GlobalLayout.tsx";
import AllEvents from "@/components/events/AllEvents.tsx";

function Home() {
  return (
    <GlobalLayout>
      <div className={"grid md:grid-cols-[200px_minmax(400px,_1fr)] gap-2"}>
        <div
          className={
            "hidden bg-[#111111] p-2 md:flex border border-solid border-[#222222] text-white rounded-lg"
          }
        >
          Leagues Will Be Here asssssssssssssssssss
        </div>
        <div className={"p-2 border border-solid border-[#222222] rounded-lg"}>
          {/*Matches*/}
          <AllEvents />
        </div>
        {/*<div className={"bg-green-800"}>Xd2</div>*/}
      </div>
    </GlobalLayout>
  );
}

export default Home;
