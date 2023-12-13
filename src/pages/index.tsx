import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { Sidebar } from "@/components/sidebar";
import Layout from "@/components/templates/Layout";
import Head from "@/components/molecules/Head";
import { MainView } from "@/components/templates/MainView";
import  MediaPlayer from "@/components/organisms/Player";
import { Print } from '@/components/atoms/Print'
// import { Print } from "@/components/print";
// import  { getAllFilesAndPaths }  from '@/lib/files';
import {useState, useRef, MutableRefObject} from "react";


type File = {
  filename: string,
  src: string,
  dirPath: string
}
type Path = {
  name: string
}

function Home({ files, paths  }) {

  const [songPosition, setSongPosition] = useState(0);

  const handleSelectSong = (position:number) => {
    // console.log(position);
    setSongPosition(position)
  };

  return (
    <>    
    <Head />
    {/* <Print>{files}</Print> */}
      <Layout files={files} paths={paths} songPosition={songPosition}>
        <h1 className="">After out spaceship crash on earth </h1>
          {/* <MainView files={files} paths={paths}  selectSong={(position: number) => handleSelectSong(position)}/> */}
      </Layout>
    </>
  );
}


// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = getAllFilesAndPaths('./public/songs', [],[])
//   const files: File[] = res.arrayOfFiles.reverse();
//   const paths: Path[] = res.arrayOfPaths.reverse();
//   if (!files) {
//     return {
//       notFound: true,
//     }
//   }  
//   return {
//     props: {
//       files: files,
//       paths: paths
//     },
//   }
// }
 


export default Home;

// import Layout from "@/components/templates/Layout"




// export default function Home() {
//   return (
//     <main
//       className='flex min-h-screen flex-col items-center justify-between p-5 '
//     >
//      <Layout>
      
//      </Layout>
//     </main>
//   )
// }
