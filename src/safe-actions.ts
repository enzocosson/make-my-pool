import { createSafeActionClient } from "next-safe-action";

class ActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ActionError";
  }
}

const handleReturnedServerError = (error: any) => {
  if (error instanceof ActionError) {
    return error.message;
  }
  return "Une erreur s'est produite. Veuillez réessayer plus tard.";
};

export const action = createSafeActionClient({
  handleReturnedServerError: handleReturnedServerError,
});
