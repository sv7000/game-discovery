import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Card marginY={5}>
     
      <Skeleton height={10} width={10} >
      <SkeletonText />
      </Skeleton>
      
    </Card>
  );
};

export default GenreSkeleton;
