import {useEffect} from "react";
import EventsService from "@/services/EventsService.tsx";
import {AxiosError} from "axios";



function AllEvents() {
    const {getAllEvents} = EventsService();

    useEffect(() => {
        getAllEvents().then((response)=>{
            console.log(response.data)
        }).catch((error: AxiosError) => {
            console.log(error)
        })
    },[])

    return (
        <div className={"bg-red-500 w-full h-full"}>

        </div>
    );
}

export default AllEvents;