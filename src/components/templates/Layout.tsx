import Header from "@/components/organisms/Header"
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