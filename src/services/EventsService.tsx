import apiClient from "@/lib/apiClient.ts";


function EventsService() {

    const getAllEvents = async () => {
        try {
            const response = await apiClient.get('/v4/matches');
            return response.data;
        } catch (error) {
            return error
        }
    }

    return {getAllEvents};
}

export default EventsService;