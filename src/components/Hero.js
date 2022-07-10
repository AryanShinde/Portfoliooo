import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import portfolioHero from '../assets/portfolioHero.png';
import portfolioDoodle from '../assets/portfolioDoodle.png';
const Hero = () => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="90vh"
      overflow="hidden"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        m="4rem"
        h="80vh"
        mt="10rem"
      >
        <Box fontSize="4rem">Aryan Shinde</Box>
        <Box fontSize="1.6rem" lineHeight="2rem" textAlign="center">
          Third Year,
          <br /> Computer Engineering
        </Box>
        <Box left="35%" top="0%" position="absolute">
          <Image src={portfolioHero} />
        </Box>
        <Box left="15%" top="60%" position="absolute" zIndex="-1">
          <Image src={portfolioDoodle} />
        </Box>
        <Box left="44%" top="50%" position="absolute" zIndex="-1">
          <Image src={portfolioDoodle} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        h="80vh"
        w="36%"
        mt="6rem"
      >
        <Box fontSize="3.5rem">Web Developer</Box>
        <Box w="60%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
