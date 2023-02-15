import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";

import { theme } from "../styles/theme";

import { makeServer } from "@/services/miragejs";

if (process.env.NODE_ENV === "development")
  makeServer()

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );

};
