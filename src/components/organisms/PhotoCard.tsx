import Image from 'next/image'
import { photos } from '@/mocks/photos'


export default function PhotoCard  () {
    return (
        <>
            <section className='mt-20 px-3 flex flex-wrap justify-center items-center ss:flex ss:flex-col ss:px-0 gap-5'>
                {photos.map((photo, index) => (
                    <div key={index} className="w-1/4 ring-2 ring-purple-500 rounded-md ss:w-80 mb-10">

                        <div className="bg-purple-500 text-white flex flex-row justify-center items-center">
                            {photo.title}
                        </div>

                        <div className="flex flex-row justify-center items-center ">
                            <Image
                                src={photo.photo}
                                className='p-0.5 bg-white rounded-b-lg'
                                width={400}
                                height={400}
                                alt='fotos'
                            />
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}