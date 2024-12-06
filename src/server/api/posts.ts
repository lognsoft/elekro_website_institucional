import axios from "axios";
import baseUrl from "~/constants/baseUrl";
import { IBlog } from "~/core/types";

export default defineEventHandler(async (event) => {

    const query = getQuery(event);

    try {
        const { data } = await axios.get<IBlog>(`${baseUrl}/posts`, {
            params: { ...query },
        });
        return data;
    } catch (error: any) {
        throw createError({
            statusCode: error.response?.status || 500,
            message: error.message || "Failed to fetch posts",
        });
    }

})