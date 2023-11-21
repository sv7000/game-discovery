import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id:  number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

// interface FetchGames {
//   count: number;
//   results: Game[];
// }


// const useGames = () => {

//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] =  useState(false);

//   useEffect(() => {

//     const controller  = new AbortController();
//     setIsLoading(true);
//     apiClient
//       .get<FetchGames>("/games", {signal: controller.signal })
//       .then((res) => {
//         console.log(res);
//         setGames(res.data.results);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         if(err instanceof CanceledError)return;
//         setError(err.message);
//         setIsLoading(false) 
//       });

//       return () => controller.abort();
//   }, []);

//    return {error, games, isLoading};
// }


//After adding gameQuery object
// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
// useData<Game>('/games', 
// {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, 
// [selectedGenre?.id, selectedPlatform?.id]
// )

const useGames = (gameQuery: GameQuery) => 
useData<Game>('/games', 
{params: {genres: gameQuery.genre?.id,
  platforms: gameQuery.platform?.id, 
  ordering: gameQuery.sortOrder,
  search: gameQuery.searchText
}}, 
[gameQuery]
)

export default useGames;