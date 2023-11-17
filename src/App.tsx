import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <Show above="lg">
        <GridItem pl="2" bg="blue.300" area={"aside"}>
          Aside
        </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
