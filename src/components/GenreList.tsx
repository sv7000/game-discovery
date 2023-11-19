import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if(error)return;
  // const {genres} = useGenre();
  const skeletonsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <List>
      {isLoading && skeletonsList.map((skeleton)=> <GenreSkeleton key={skeleton}/>)}
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
