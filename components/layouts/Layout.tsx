import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from '../ui';

interface BaseLayoutProps {
    children?: ReactNode;
    title?: string;
  }

export const Layout: FC<BaseLayoutProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> {title || 'Pokemon App'}</title>
            <meta name="author" content="Thomas McCulloch"/>
            <meta name="description" content="Informacion sobre el pokemon XXXX" />
            <meta name="keywords" content="XXXX, pokemon, pokedex" />
        </Head>

        <Navbar/>

        <main>
            {children}
        </main>
    </>
  )
}
