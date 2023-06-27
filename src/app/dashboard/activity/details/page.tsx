"use client"
import { Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFormContext } from "react-hook-form";
import { useSession } from "next-auth/react";
import { DefaultButton } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useStep } from "@/contexts/steps";

export const MyActivityDetails = () => {
    const { watch } = useFormContext();

    const valueWatch = watch("value");

    const { data: session } = useSession();

    const { setStep } = useStep();

    const { push } = useRouter();

return (
    <Flex
        w="100%"
        p={{ base: "25px", sm: "40px" }}
        background={"#201F22"}
        borderRadius={"8px"}
        flexDir={"column"}
      >
        <VStack 
        spacing={"25px"} align={"flex-start"}>
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
              Conta própria ???
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
      </Flex>
)
}
