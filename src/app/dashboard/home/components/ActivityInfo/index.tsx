"use client";
import { Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { BsCircleFill } from "react-icons/bs";
import { Activity } from "@/query/use-get-activity";
import { format, isThisWeek, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ActivityInfoProps {
  activity: Activity;
}

export const ActivityInfo = (props: ActivityInfoProps) => {
  const { activity } = props;

  return (
    <>
      <HStack
        spacing={"16px"}
        w="100%"
        align={"center"}
        justifyContent={"space-between"}
        fontSize={{ base: "14px", sm: "16px" }}
      >
        <Flex gap={4} align="center" justifyContent="center" py={"1.5rem"}>
          <BsCircleFill fontSize={"2em"} color="#C1FD35" />
          <Text>{activity.description}</Text>
        </Flex>

        <VStack>
          <Text>R${activity.amount}</Text>
          <Text color={"#A6A5A7"} fontSize={"12px"}>
            {isThisWeek(parseISO(activity.dated))
              ? format(parseISO(activity.dated), "EEEE", { locale: ptBR })
              : format(parseISO(activity.dated), "dd/MM/yyyy", {
                  locale: ptBR,
                })}
          </Text>
        </VStack>
      </HStack>
      <Divider borderBottomColor={"blackAlpha.600"} />
    </>
  );
};
