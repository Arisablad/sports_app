import GlobalLayout from "@/containers/GlobalLayout.tsx";


function Home() {
    return (
        <GlobalLayout>
       <div className={"bg-red-500 grid md:grid-cols-[200px_minmax(500px,_1fr)]"}>
           <div className={"hidden bg-yellow-200 p-2 md:flex"}>
               Leagues Will Be Here asssssssssssssssssss
           </div>
           <div className={"bg-green-600 p-2"}>
               Matches Will go here
           </div>
           {/*<div className={"bg-green-800"}>Xd2</div>*/}
       </div>
        </GlobalLayout>
    );
}

export default Home;