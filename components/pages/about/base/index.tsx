import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImage from "public/images/common/FG_logo.png";
import { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bgGradient="linear(to-l, #050505, #73f292)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Image
            src={AvatarImage}
            alt="CO2.Storage"
            height={100}
            width={100}
            quality={100}
            priority
            placeholder="blur"
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="lg" color="white">
              CO2.Storage
            </Heading>
            <Text fontWeight="bold">
              decentralized storage for Environmental Assets
            </Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <Text>
          The Filecoin Green team is developing CO2.Storage in recognition that
          industry practitioners would benefit from a upload utility for
          environmental assets based on standardized data schemas.
        </Text>

        <Text>
          This recognition stemmed from conversations with various stakeholders
          in the traditional and web3 carbon markets space. This project is the
          continuation of the idea posted in the Filecoin Green Tools repo:{" "}
          <a href="https://github.com/protocol/FilecoinGreen-tools/blob/main/0006-FGTP-CO2_Storage.md">
            <b>
              <u>0006-FGTP-CO2_Storage</u>
            </b>
          </a>
          .
        </Text>

        <Text>
          This data upload utility maps inputs to base data schemas (
          <a href="https://ipld.io/">
            <u>IPLD</u>
          </a>{" "}
          DAGs) for off-chain data (like metadata, images, attestation
          documents, and other assets) to promote the development of standard
          data schemas for environmental assets.
        </Text>

        <Text>
          With IPLD DAGs, data is{" "}
          <a href="https://nftschool.dev/concepts/content-addressing">
            <u>content addressed</u>
          </a>{" "}
          using IPFS, meaning the URI pointing to a piece of data (“ipfs://…”)
          is completely unique to that data (using a{" "}
          <a href="https://docs.ipfs.io/concepts/content-addressing/">
            <u>content identifier, or CID</u>
          </a>
          ). CIDs can be used for environmental assets and metadata to ensure
          the asset forever actually refers to the intended data (eliminating
          things like double counting, and making it trustlessly verifiable what
          content an asset is associated with). These standard, content
          addressed, data schemas will also enable more seamless
          cross-referencing for missing data & meta-analysis of different
          assets/credits, as well as help expedite the development of new forms
          of methodologies, supply, and marketplaces.
        </Text>

        <Text>
          This project should be considered{" "}
          <a href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Pre-alpha">
            <u>pre-alpha</u>
          </a>
          , and we are actively seeking input from industry participants and
          interested parties. We encourage everyone to reach out to our team if
          this topic is of interest to you:{" "}
          <a href="mailto: green@filecoin.org">
            <b>
              <u>green@filecoin.org</u>
            </b>
          </a>{" "}
        </Text>

        <Text fontWeight="bold">
          Made with <i className="icon ion-heart"></i> by{" "}
          <a href="https://green.filecoin.io/">
            <u>Filecoin Green</u>
          </a>
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Box d="flex" alignItems="center">
        <HStack spacing={4}>
          <Link
            py={2}
            px={4}
            href="https://github.com/mjohnson518/co2_storage.git"
            rounded="sm"
            bg="#333"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="gray.600"
            _hover={{}}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoGithub} /> <Text>Github</Text>
            </HStack>
          </Link>
          <Link
            py={2}
            px={4}
            href="https://www.linkedin.com/company/protocollabs/mycompany/"
            rounded="sm"
            bg="#0e76a8"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="blue.400"
            _hover={{}}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
            </HStack>
          </Link>
        </HStack>
      </Box>
    );
  };

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <VStack spacing={4} align="left">
        {headingNode()}
        {bioDescriptionNode()}
        {socialLinksNode()}
      </VStack>
    </Box>
  );
};

export default Page;
