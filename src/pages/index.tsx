import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import getIp from 'get-ip';

import background from '~/assets/pattern-bg.png';

import geolocation, { InfoProps } from '~/services/geolocation';
import InformationsTable from '~/components/InformationsTable';

import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/core';

const Home: NextPage = () => {
  const [info, setInfo] = useState<InfoProps>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadTracker() {
      const data = await geolocation.searchIP(getIp());
      setInfo(data);
    }

    loadTracker();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setInfo(undefined);

    const inputValue = inputRef.current.value;

    const data = await geolocation.searchIP(inputValue);
    setInfo(data);
  };

  return (
    <Box background="#DDD" height="100vh">
      <Flex
        pt={8}
        backgroundImage={`url(${background})`}
        height="250px"
        alignItems="center"
        flexDir="column"
      >
        <Heading size="lg" mb={5} color="white">
          IP Address Tracker
        </Heading>

        <Flex as="form" onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            borderRadius={8}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            p={5}
            placeholder="Search for any IP address or domain"
            width="380px"
            height="45px"
          />

          <IconButton
            onClick={handleSubmit}
            ml={-1}
            color="white"
            icon="arrow-right"
            aria-label="Search for any IP address or domain"
            bg="black"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            height="45px"
            width="50px"
            _hover={null}
          />
        </Flex>
      </Flex>

      <InformationsTable info={info} />
    </Box>
  );
};

export default Home;
