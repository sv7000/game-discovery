import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre,onSelectedGenre }: Props ) => {
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
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link'onClick={() => onSelectedGenre(genre)} >{genre.name}</Button>
          </HStack>
          
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
