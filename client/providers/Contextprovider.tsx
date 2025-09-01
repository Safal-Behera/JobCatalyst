"use client";
import { GlobalContextProvider } from "@/context/globalContext"
import { JobsContextProvider } from "@/context/jobsContext";
interface Props{
    children: React.ReactNode;
}
import React from "react";

function ContextProvider({ children }: Props){
    return (<GlobalContextProvider>
      <JobsContextProvider>  {children} </JobsContextProvider>
        </GlobalContextProvider>
        );
}

export default ContextProvider;