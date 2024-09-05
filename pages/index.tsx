import About from "@/components/About";
import Banner from "@/components/Banner";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Scroll from '@/components/Scroll';
import '../src/i18n';

export default function Home() {
  
  const background = "bg-[url('/assets/img/background_lines.png')]";

  return (
    <>
      <Head>
        <title>Jesús Ruiz Portfolio</title>
        <meta name="description" content="Im Jesús, and this is my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[100vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>

          <div className=" h-[88vh] w-[95%] mx-auto p-5 xl:pl-10">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}>
              <div className="relative overflow-x-visible">
                <Banner />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}>
              <Projects />
            </motion.div>

            <div className="relative overflow-x-visible">
              <div className={`absolute w-[120%] h-80 bottom-28 sm:bottom-32 md:bottom-0 opacity-20 bg-center bg-no-repeat left-1/2 -translate-x-1/2 ${background}`}/>
              <About />
            </div>

            <Archive />

            <Contact />

            <Footer />

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </motion.div>
        </div >
      </main >
    </>
  );
}
