import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const endpoint = "http://localhost:3090";

const api = {
  fetchAccounts: async () => {
    const response = await fetch(`${endpoint}/accounts`);
    if (!response.ok) throw new Error("Network Error");
    return response.json();
  },

  fetchWallets: async () => {
    const response = await fetch(`${endpoint}/wallets`);
    if (!response.ok) throw new Error("Network Error");
    return response.json();
  },

  createWallet: async (type: string) => {
    const response = await fetch(`${endpoint}/accounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currency: type }),
    });
    if (!response.ok) throw new Error("Failed to create wallet");
    return response.json();
  },
};

export const useFetchAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: api.fetchAccounts,
  });
};
export const useFetchWallets = () => {
  return useQuery({
    queryKey: ["wallets"],
    queryFn: api.fetchWallets,
  });
};

export const useCreateWallet = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: api.createWallet,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });
};
