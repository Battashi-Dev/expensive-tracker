import {  HStack, Icon, Text } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"

const NavBar = () => {
  return (
   <HStack>
     <HStack>
         <Icon as={FaHome} boxSize={7} />
         <Text fontSize="xl" fontWeight="bold">
           Expense Tracker
         </Text>
     </HStack>
   </HStack>
  )
}

export default NavBar