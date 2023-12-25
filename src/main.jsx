import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route/Route";
import { FloatingWhatsApp } from "react-floating-whatsapp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <FloatingWhatsApp
            phoneNumber="+1-917-327-2801"
            accountName="Web Traffic"
            allowEsc
            allowClickAway
            notification
            notificationSound
          />
  </React.StrictMode>
);
