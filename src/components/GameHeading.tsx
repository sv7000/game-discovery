import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

  const gameName = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return <Heading marginY={5} fontSize='5xl'>{gameName}</Heading>;
};

export default GameHeading;
