"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientFont({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const cls = inter.className;
        if (cls) document.body.classList.add(cls);
        return () => {
            if (cls) document.body.classList.remove(cls);
        };
    }, []);

    return <>{children}</>;
}
