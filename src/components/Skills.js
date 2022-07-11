import { Box } from '@chakra-ui/layout';
const Skills = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      h="100vh"
    >
      <Box fontSize="4rem">Skills</Box>
      <Box fontSize="1.4rem" textAlign="center" mb="1rem">
        “Talent you have naturally. Skill is only developed by hours and hours
        and hours of beating on your craft." <br />
        -Will Smith
      </Box>
      <Box bg="primary" h="100%" w="100%"></Box>
    </Box>
  );
};
export default Skills;
