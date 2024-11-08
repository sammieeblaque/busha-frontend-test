import { useQuery } from "@tanstack/react-query";

const endpoint = "http://localhost:3090";

const api = {
  fetchAccounts: async () => {
    const response = await fetch(`${endpoint}/accounts`);
    if (!response.ok) throw new Error("Network Error");
    return response.json();
  },
};

export const useFetchWallet = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: api.fetchAccounts,
  });
};
