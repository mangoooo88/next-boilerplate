import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { darkTheme, lightTheme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "@/styles/globalStyle";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>boilerplate</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  )
}
