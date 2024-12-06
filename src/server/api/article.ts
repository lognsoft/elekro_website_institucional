import axios from "axios";
import baseUrl from "~/constants/baseUrl";
import { IArticle } from "~/core/types";

export default defineEventHandler(async (event) => {

    const query = getQuery(event) || {};

    try {
        const { data } = await axios.get<IArticle>(`${baseUrl}/post-single`, {
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