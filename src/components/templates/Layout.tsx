import Header from "../organisms/Header"
export default function Layout({children}: {
    children: React.ReactNode
  }) {
    return(
        <>
        <Header />
        {children}        
        </>
        )
}