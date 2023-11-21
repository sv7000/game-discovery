import { Box, Button, ButtonGroup, Flex, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //with this I am changing the gamegrid games on the basis of selection
  // const [selectedPlatform, setSelectedPlatform]  = useState<Platform|null>(null)

  //using query object pattern for using all variables As an object

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem pl="2" area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Flex paddingLeft={2} marginBottom={5} >
            <Box marginRight={5}>
            <PlatformSelector
              selectedPlatfrom={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"aside"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
