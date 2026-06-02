import {  HStack, Icon, Text } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
   <HStack justifyContent="space-between">
     <HStack>
         <Icon as={FaHome} boxSize={7} />
         <Text fontSize="xl" fontWeight="bold">
           Expense Tracker
         </Text>
     </HStack>
     <HStack>
        <ColorModeSwitch />
        <Text>Dark Mode</Text>
     </HStack>
   </HStack>
  )
}

export default NavBar