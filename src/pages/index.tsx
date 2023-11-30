import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { Sidebar } from "@/components/sidebar";
import { MainView } from "@/components/main-view";
import  MediaPlayer from "@/components/media-player";
// import { Print } from "@/components/print";
import  { getAllFilesAndPaths }  from '@/lib/files';
import {useState, useRef, MutableRefObject} from "react";
import Layout from "@/components/templates/Layout";
import Head from "@/components/Head";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // Other props...
}

type File = {
  filename:string,
  src:string , 
  dirPath: string
}
type Path = {
  name:string
}


function Home({ files, paths }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [songPosition, setSongPosition] = useState(0);
    const handleSelectSong = (position:number) => {
    // console.log(position);
    setSongPosition(position)
  };
  // const childRef = useRef() as any;

  // const handleSelectSong = (position:number) => {
  //   console.log(position);
  //   childRef.current.childFunction(position);
  // };

  // const [songPosition, setSongPosition] = useState(0);
  



  return (
    <>    
    <Head />
    <Layout>
    <div className="w-full grid grid-rows-[1fr_90px]">
      {/* <Print>{paths}</Print>
      <Print>{files}</Print> */}
      {/* h-[calc(100vh_-_90px)] grid grid-cols-[260px_1fr]  dentro da div debaixo pra dividir dae abre o SideBar*/}
      <div className="w-full  justify-center">
      {/* <>|{songPosition}|</> */}
      {/* <button onClick={event => handleSelectSong(5)} >Call child functions</button> */}
        {/* <Sidebar /> */}
        {/* <MainView files={files} paths={paths}  selectSong={(position: number) => handleSelectSong(position)}/> */}
        <MainView files={files} paths={paths}  selectSong={(position: number) => handleSelectSong(position)}/>
      </div>
      
      <MediaPlayer songPosition={songPosition} playlist={files} />
      
      {/* <MediaPlayer ref={childRef} playlist={files} /> */}
    </div>
    </Layout>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {

  const res = getAllFilesAndPaths('./public/songs', [],[])
  const files: File[] = res.arrayOfFiles.reverse();
  const paths: Path[] = res.arrayOfPaths.reverse();
  // const list = await getAllFiles('/public/songs',[])
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  if (!files) {
    return {
      notFound: true,
    }
  }  
  return {
    props: {
      files: files,
      paths: paths
    },
  }
}
 


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
