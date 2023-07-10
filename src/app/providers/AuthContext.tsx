
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
 
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            border: "1px solid green",
            padding: "16px",
          },
        }}
      />
  
  );
}
