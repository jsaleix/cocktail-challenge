"use client";

import { useEffect } from "react";
import LogRocket from "logrocket";
import { LOGROCKET_APP_ID } from "@/lib/config/logs";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if (LOGROCKET_APP_ID) LogRocket.init(LOGROCKET_APP_ID);
  }, []);

  return children;
}
