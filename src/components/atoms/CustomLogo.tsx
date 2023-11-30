import localFont from 'next/font/local'
const superNought = localFont({ src: '../../styles/supernought.ttf' })



export default function CustomLogo() {
    return (
    <>
        <a href="/" className={superNought.className}>
            <h2 className="text-6xl font-bold text-white-500 text-center">Junkie Dust</h2>
        </a>
    </>)
}