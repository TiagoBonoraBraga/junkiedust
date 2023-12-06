import { letters } from '@/mocks/letters';
import localFont from 'next/font/local'
const superNought = localFont({ src: '../../styles/superNought.ttf' })

export default function LetterCard() {
    return (
        <>
            <div className='mt-20  px-3 flex flex-wrap justify-center items-center ss:flex ss:flex-col ss:px-0 gap-5'>
                {letters.map((letter, index) => (
                    <section key={index} className="w-1/3 ring-2 ring-purple-500 rounded-md ss:w-80 mb-10">
                        <div className={superNought.className}>
                        <div className="bg-purple-500 text-white flex flex-row justify-center items-center">
                            {letter.title}
                        </div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-5 bg-white rounded-b-lg">
                           {letter.letter}
                        </div>
                    </section>
                ))}
            </div>

        </>)
}