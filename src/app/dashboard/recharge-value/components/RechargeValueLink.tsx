import { useStep } from "@/contexts/steps";
import { Link } from "@chakra-ui/next-js";
import { HStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";

const RechargeValueLink = () => {
  const { setStep } = useStep();

  return (
    <HStack onClick={() => setStep(1)}>
      <IoIosArrowRoundForward color="#777575" />
      <Text cursor={"pointer"} textDecoration={"underline"} color="#201F22">
        Carregar valor
      </Text>
    </HStack>
  );
};

export default RechargeValueLink;
