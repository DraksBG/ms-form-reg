import Head from "next/head";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center flex-col items-center">
        <Header />
        <h1>Hello Next.js</h1>
        <Footer />
      </div>
    </>
  );
}
