import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  // const {genres} = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
          
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
