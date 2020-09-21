import React from 'react';

import { InfoProps } from '~/services/geolocation';
import Card from './Card';

import { Stack, StackProps } from '@chakra-ui/core';
import Divider from './Divider';

interface Props extends StackProps {
  info: InfoProps;
}

const InformationsTable: React.FC<Props> = ({ info, ...rest }) => {
  return (
    <Stack
      p={3}
      display="flex"
      spacing={6}
      isInline
      bg="white"
      borderRadius={8}
      mt={-45}
      width="880px"
      mx="auto"
      justifyContent="space-evenly"
      {...rest}
    >
      <Card title="IP Address" description={info && info.ip} />
      <Divider />
      <Card
        title="Location"
        description={
          info &&
          `${info.location.city}, ${info.location.country} ${info.location.postalCode}`
        }
      />
      <Divider />
      <Card title="Timezone" description={info && info.location.timezone} />
      <Divider />
      <Card title="ISP" description={info && info.isp} />
    </Stack>
  );
};

export default InformationsTable;
