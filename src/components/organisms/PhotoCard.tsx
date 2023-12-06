import localFont from 'next/font/local'
const superNought = localFont({ src: '../../styles/superNought.ttf' })

export default function () {
    return (
        <>
            <section className='mt-20 px-3 flex flex-wrap justify-center items-center ss:flex ss:flex-col ss:px-0 gap-5'>
                {photos.map((photo, index) => (
                    <div key={index} className="w-1/3 ring-2 ring-purple-500 rounded-md ss:w-80 mb-10">
                        <div className={superNought.className}>
                            <div className="bg-purple-500 text-white flex flex-row justify-center items-center">
                                {photo.title}
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center p-5 bg-white rounded-b-lg">
                            {photo.Photo}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}