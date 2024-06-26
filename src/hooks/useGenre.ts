import useData from "./useData";

export interface Genre{
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenre{
//   count:  number;
//   results: Genre[];
// }

// const useGenre = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] =  useState(false);

//   useEffect(() => {

//     const controller  = new AbortController();
//     setIsLoading(true);
//     apiClient
//       .get<FetchGenre>("/genres", {signal: controller.signal })
//       .then((res) => {
//         console.log(res);
//         setGenres(res.data.results);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         if(err instanceof CanceledError)return;
//         setError(err.message);
//         setIsLoading(false) 
//       });

//       return () => controller.abort();
//   }, []);

//    return {error, genres, isLoading};
// }

const useGenre = () => useData<Genre>('/genres');

export default useGenre;