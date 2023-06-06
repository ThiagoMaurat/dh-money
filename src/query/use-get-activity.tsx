import { api } from "@/libs/axios";
import { useQuery } from "react-query";

export interface Activity {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: "transfer" | "deposit";
}

interface Params {
  account_id: number;
}

async function getActivity(params: Params): Promise<Activity[]> {
  if (!params.account_id) return [];

  const { data } = await api.get<Activity[]>(
    `/api/accounts/${params.account_id}/activity`
  );

  return data;
}

export function useGetActivity(params: Params) {
  return useQuery(["getActivity", params], () => getActivity(params), {
    refetchOnWindowFocus: false,
  });
}
