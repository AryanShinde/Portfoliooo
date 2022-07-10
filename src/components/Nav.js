import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import portfolioLogo from '../assets/portfolioLogo.png';
import { Button } from '@chakra-ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
const Nav = () => {
  const vals = [
    'About',
    'Skills',
    'Experience',
    'Achievements',
    'Achievements',
    'Projects',
    'Blogs',
    'Contact',
  ];
  return (
    <Box
      bg="primary"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image w="4rem" m="0.4rem 1rem" src={portfolioLogo} alt="" />
      </Box>

      <Box
        pr="0.5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {vals.map((val) => (
          <Box padding="0.4rem 1rem" cursor="pointer">
            {val}
          </Box>
        ))}
        <Popover isLazy>
          <PopoverTrigger>
            <Box
              w="2.4rem"
              h="2.4rem"
              bg="primary"
              border="2px solid black"
              borderRadius="50%"
              mr="2rem"
              ml="2rem"
              cursor="pointer"
            ></Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              Popover placement
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
};
export default Nav;
