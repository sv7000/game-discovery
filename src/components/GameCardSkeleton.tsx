import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';


const GameCardSkeleton = () => {
  //mimiking same structure As our gameCard looks like
  return (
    <Card width='250px' borderRadius={10} overflow='hidden'>
       <Skeleton height='200px'/>
       <CardBody>
        <SkeletonText/>
       </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;