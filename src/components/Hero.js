import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import portfolioHero from '../assets/portfolioHero.png';
import portfolioDoodle from '../assets/portfolioDoodle.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linkedIn.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

import float from '../assets/float.png';
import float2 from '../assets/float2.png';
import float3 from '../assets/float3.png';
import float4 from '../assets/float3.png';

import { keyframes } from '@chakra-ui/system';
const Hero = () => {
  const floatAnime = keyframes`
  0%{
    transform: translate3d(0px,0px,0px)
  }
  50%{
    transform: translate3d(400px,-400px,500px)
  }
  100%{
    transform: translate3d(800px,0px,500px)
  }
  `;
  const floatAnime2 = keyframes`
  0%{
    transform: translateY(0px)
  }
  100%{
    transform: translateY(10px)
  }
  `;

  const anim = `${floatAnime} 4s infinite alternate`;
  const anim2 = `${floatAnime} 8s infinite alternate`;
  const anim3 = `${floatAnime} 10s infinite alternate`;
  const anim4 = `${floatAnime} 12s infinite alternate`;
  const socialAnime = `${floatAnime2} 1.8s infinite alternate ease-in-out`;
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      flexWrap={{ sm: 'wrap', md: 'nowrap' }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        w="40%"
        mt="-8rem"
      >
        <Box fontSize="4rem">Aryan Shinde</Box>
        <Box fontSize="1.6rem" lineHeight="2rem" textAlign="center">
          Third Year,
          <br /> Computer Engineering
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid black"
          mt="1rem"
          borderRadius="2rem"
          boxShadow="2px 2px 10px 4px #CDEDEE"
          animation={socialAnime}
        >
          <Image m="0.8rem" mr="0.5rem" src={linkedIn} />
          <Image m="0.5rem" src={github} />
          <Image m="0.5rem" src={twitter} />
          <Image m="0.8rem" ml="0.5rem" src={medium} />
        </Box>

        <Box left="15%" bottom="-40%" position="absolute" zIndex="-1">
          <Image src={portfolioDoodle} />
        </Box>
        <Box left="44%" bottom="-35%" position="absolute" zIndex="-1">
          <Image src={portfolioDoodle} />
        </Box>
        <Box animation={anim} top="100%" position="absolute" zIndex="-1">
          <Image src={float} />
        </Box>
        <Box animation={anim2} top="100%" position="absolute" zIndex="-1">
          <Image src={float4} />
        </Box>
        <Box
          animation={anim3}
          left="20%"
          top="100%"
          position="absolute"
          zIndex="-1"
        >
          <Image src={float2} />
        </Box>
        <Box
          animation={anim4}
          left="20%"
          top="100%"
          position="absolute"
          zIndex="-1"
        >
          <Image src={float3} />
        </Box>
      </Box>
      <Box>
        <Image src={portfolioHero} />
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="column"
        w="36%"
        mt="-14rem"
      >
        <Box fontSize="3.5rem">Web Developer</Box>
        <Box w="70%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
