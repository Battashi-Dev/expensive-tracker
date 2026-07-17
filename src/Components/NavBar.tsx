import { Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import ColorModeSwitch from "./ColorModeSwitch";
import { useThemeColors } from "./constant";


const NavBar = () => {
  const {text} = useThemeColors();
  return (
    <HStack  justifyContent="space-between">
      
      <HStack spacing={3}>
        <Icon as={FaHome} boxSize={8} />
        <Heading fontSize="xl" fontWeight="bold" color={text}>
          Expense Tracker
        </Heading>
      </HStack>
      <HStack spacing={4}>
        <ColorModeSwitch />
        <Text fontWeight="bold" fontSize="sm">
          Mode
        </Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
