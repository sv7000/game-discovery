import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem pl="2" area={"nav"}>
          <Navbar/>
        </GridItem>
        <GridItem pl="2"  area={"main"}>
          <GameGrid/>
        </GridItem>
        <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <GenreList />
        </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
