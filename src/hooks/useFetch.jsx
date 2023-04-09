// import { useQuery } from "@tanstack/react-query";
// import { request } from "../utils/axios-util";




// export const useFetch = ( ...args )=> {
//     const { queryKey,
//         endpoint,
        
//         enabled = true,
//         onSuccess,
//         onError,
//         axiosOptions,
//         refetchInterval,
//         staleTime,
//         cacheTime,
//         refetchOnWindowFocus
//     } = args

//     // useQuery infers queryFn return type
//     const query = useQuery(queryKey,
//         {
//             queryFn: () => request({ url: endpoint, ...axiosOptions }),
//             enabled,
//             onSuccess,
//             onError,
            
//             refetchInterval,
//             staleTime,
//             cacheTime,
//             refetchOnWindowFocus
//         })

//     return query
// }