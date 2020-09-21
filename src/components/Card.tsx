import { Box, Heading, Skeleton, Text } from '@chakra-ui/core';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const isLoaded = !!!(description === undefined);

  return (
    <Box p={6}>
      <Heading size="sm" letterSpacing={2} fontWeight={700} color="gray.200">
        {title.toUpperCase()}
      </Heading>
      <Skeleton isLoaded={isLoaded} mt={2}>
        <Text fontSize="lg" fontWeight={700} color="gray.700">
          {description ? description : 'No description'}
        </Text>
      </Skeleton>
    </Box>
  );
};

export default Card;
