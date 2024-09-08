import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isPending: isPendingUser, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isPendingUser,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
