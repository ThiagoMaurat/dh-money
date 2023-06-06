"use client";
import { DefaultButton } from "@/components/Button";
import { Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useFormContext } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ptBR } from "date-fns/locale";
import { useStep } from "@/contexts/steps";

export const Step5 = () => {
  const { watch } = useFormContext();

  const valueWatch = watch("value");

  const { data: session } = useSession();

  const { setStep } = useStep();

  const { push } = useRouter();

  return (
    <VStack spacing={"28px"}>
      <VStack
        borderRadius={"8px"}
        background={"#C1FD35"}
        w="100%"
        py="20px"
        spacing={"11px"}
      >
        <AiOutlineCheckCircle size={"60px"} color="#000000" />

        <Heading
          fontWeight="700"
          fontSize={{ base: "16px", sm: "24px" }}
          color="#000000"
          lineHeight="33px"
          textAlign={"center"}
          px="10px"
        >
          Já depositamos o dinheiro na sua conta
        </Heading>
      </VStack>

      <Flex
        w="100%"
        p={{ base: "25px", sm: "40px" }}
        background={"#201F22"}
        borderRadius={"8px"}
        flexDir={"column"}
      >
        <VStack spacing={"25px"} align={"flex-start"}>
          <Heading
            fontWeight="400"
            fontSize={{ base: "12px", sm: "16px" }}
            lineHeight="16px"
            color="#FFFFFF"
          >
            {format(new Date(), "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", {
              locale: ptBR,
            })}
          </Heading>

          <Text
            color={"#C1FD35"}
            fontWeight="700"
            fontSize={{ base: "16", sm: "20px" }}
            lineHeight="22px"
          >
            {`R$ ${valueWatch}`}
          </Text>

          <VStack spacing={"8px"} align={"flex-start"}>
            <Text
              color={"#FFFFFF"}
              fontWeight="400"
              fontSize="12px"
              lineHeight="16px"
            >
              Para
            </Text>

            <Text
              color={"#C1FD35"}
              fontWeight="700"
              fontSize="20px"
              lineHeight="24px"
            >
              Conta própria
            </Text>
          </VStack>

          <VStack spacing={"8px"} align={"flex-start"}>
            <Text
              color={"#FFFFFF"}
              fontWeight="400"
              fontSize=" 16px"
              lineHeight="22px"
            >
              {session?.user?.user_info?.alias}
            </Text>

            <Text
              color={"#FFFFFF"}
              fontWeight="400"
              fontSize=" 12px"
              lineHeight="16px"
            >
              {`CVU ${session?.user?.user_info?.cvu}`}
            </Text>
          </VStack>
        </VStack>
      </Flex>

      <Stack
        w="full"
        direction={{ base: "column", sm: "row" }}
        align={{ base: "center", sm: "flex-end" }}
        justify={"flex-end"}
        gap={"20px"}
      >
        <DefaultButton
          label={"Voltar ao início"}
          border={"0px"}
          maxW={{ base: "unset", sm: "233px" }}
          w="100%"
          onClick={() => {
            push("/dashboard/home");
            setStep(1);
          }}
        />

        <DefaultButton
          maxW={{ base: "unset", sm: "233px" }}
          w="100%"
          variant="secondary"
          label={"Baixar Comprovante"}
          border={"0px"}
        />
      </Stack>
    </VStack>
  );
};
