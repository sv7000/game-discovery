import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
  score: number; 
}

const CriticScore = ({score} : Props) => {
  let color = score >= 90 ? 'green' : score < 90 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={4} fontSize='14px'>{score}</Badge>
  )
}

export default CriticScore