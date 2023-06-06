"use client";
import { api } from "@/libs/axios";
import { useMutation } from "react-query";

interface CreatedTransferenceResponse {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
}

export type UserCreateTransferenceParams = {
  amount: number;
  dated: string;
  destination: string;
  origin: string;
  account_id: string;
};

export async function CreateTransference(
  userData: UserCreateTransferenceParams
) {
  await api.post<CreatedTransferenceResponse>(
    `/api/accounts/${userData.account_id}/transferences`,
    userData
  );
}

export function useCreateTransference() {
  return useMutation(CreateTransference);
}
