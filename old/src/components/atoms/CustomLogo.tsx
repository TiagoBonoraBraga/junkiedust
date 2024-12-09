import localFont from 'next/font/local';
import Link from 'next/link';
const superNought = localFont({ src: '../../styles/supernought.ttf' });

export default function CustomLogo() {
  return (
    <>
      <Link href="/" className={superNought.className}>
        <h2 className="text-6xl font-bold text-white-500 text-center">
          Junkie Dust
        </h2>
      </Link>
    </>
  );
}
