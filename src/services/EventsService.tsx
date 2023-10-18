import apiClient from "@/lib/apiClient.ts";
import allEvents from "@/mocks/allEvents.ts";

function EventsService() {

    const getAllEvents = async () => {
        try {
            // const response = await apiClient.get('matches/v2/list-live');
            // return response.data;
            // const response = await apiClient.get();
            return allEvents
        } catch (error) {
            return error
        }
    }

    return {getAllEvents};
}

export default EventsService;