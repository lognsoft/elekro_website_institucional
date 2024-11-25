import {useLazyAsyncData} from "#app";

export default function useFetchAPI (endpoint: string, queryP?: string, param?: string, page?: number ) {
    const baseURL = "http://localhost/wordpress/wp-json/api/v1"

    let url = `${baseURL}/${endpoint}?`;

    if (page) {
        url += `page=${page}`;
    }

    if (param && queryP) {
        url += `&${queryP}=${param}`;
    }

    console.log(url)
    const { data, status, error, refresh, clear } = useLazyAsyncData(
        `${endpoint}-${queryP || ""} `,
        () => $fetch(url)
    )
    return { data, status, error, refresh, clear }
}