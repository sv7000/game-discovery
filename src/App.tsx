import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {

  const [selectedGenre, setSelectedGenre] =  useState<Genre | null>(null);

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem pl="2" area={"nav"}>
          <Navbar/>
        </GridItem>
        <GridItem pl="2"  area={"main"}>
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
        <Show above="lg"> 
        <GridItem pl="2" area={"aside"}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
