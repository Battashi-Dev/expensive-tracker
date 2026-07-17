import { useColorModeValue } from "@chakra-ui/react";

export const categories = [
  "Grocery",
  "Utilities",
  "Entertainment",
  "Transportation",
  "Healthcare",
  "Education",
  "Personal Care",
] as const;

export type category = (typeof categories)[number];

export const useThemeColors = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("gray.800", "white");
  const bgTotal = useColorModeValue("green.100", "green.700")
  return {bg, cardBg, text, bgTotal}
};
