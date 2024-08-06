import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin has been created successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error("Something went wrong!"),
  });

  return { isCreating, createCabin };
}
