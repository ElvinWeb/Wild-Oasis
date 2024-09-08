import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isPending: isPendingSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
  });

  return { signup, isPendingSignup };
}
