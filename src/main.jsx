import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route/Route";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
axios.defaults.baseURL = "https://web-traffic-six.vercel.app/api/v1";
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <FloatingWhatsApp
        phoneNumber='+1-917-327-2801'
        accountName='Web Traffic'
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
