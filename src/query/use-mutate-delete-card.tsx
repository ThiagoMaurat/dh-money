"use client";
import { api } from "@/libs/axios";
import { useMutation } from "react-query";

export type UserDataOutput = {
  account_id: number;
  card_id: number;
};

export async function DeleteCard(userData: UserDataOutput) {
  await api.delete(
    `/api/accounts/${userData.account_id}/cards/${userData.card_id}`
  );
}

export function useDeleteCard() {
  return useMutation(DeleteCard);
}
