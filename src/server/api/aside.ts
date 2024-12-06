import axios from "axios";
import baseUrl from "~/constants/baseUrl";
import { IBlog, IGeneric } from "~/core/types";

export default defineEventHandler(async (event) => {

    try {
        const [posts, tags, categories] = await Promise.all([
            axios.get<IBlog>(`${baseUrl}/posts?limit=5`),
            axios.get<IGeneric>(`${baseUrl}/tags`),
            axios.get<IGeneric>(`${baseUrl}/categories`)
        ])

        return {
            posts: posts.data,
            tags: tags.data,
            categories: categories.data
        };
    } catch (error: any) {
        throw createError({
            statusCode: error.response?.status || 500,
            message: error.message || "Failed to fetch posts",
        });
    }

})