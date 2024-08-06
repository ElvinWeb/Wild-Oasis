import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin has been deleted successfully!");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, removeCabin };
}
