import { toast } from "react-toastify";
export const showToastMessage = (
  message: string,
  type: string = "error"
): void => {
  if (type === "error") {
    toast.error(message, {
      toastId: "valere-error-id",
    });
  } else if (type === "success") {
    toast.success(message, {
      toastId: "valere-success-id",
    });
  }
};
