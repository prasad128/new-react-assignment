import Head from "next/head";
import Agri_Input_Purchase_Requests from "../components/Agri_Input_Purchase_Requests";
import SideBar from "../components/SideBar";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Assignment</title>
      </Head>
      <div className="flex min-h-screen text-gray-900">
        <SideBar />
        <Agri_Input_Purchase_Requests />
      </div>
    </>
  );
}
