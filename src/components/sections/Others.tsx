import Image from 'next/image'
import img2 from "@/assets/img/img2.png"
import img3 from "@/assets/img/img3.png"
import img4 from "@/assets/img/img4.png"

export function Others() {
    return (
        <>
        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <Image alt='img2' src={img2} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                </div>

                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Aumentar a produtividade
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                    Crie uma atmosfera que aumente a produtividade em sua organização e na cultura de sua empresa.
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize a produtividade e o crescimento
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Ultrapasse a concorrência
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Aprenda as principais técnicas
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Tarefas Automatizadas
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>  Lorem ipsum dolor sit amet,
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>  Sed ut perspiciatis unde omnis iste natus
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>  Quis autem vel eum iure reprehenderit
                        </li>
                    </ul>
                </div>

                <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <Image alt='img3' src={img3} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                </div>
            </div>
        </section>

        <section className="py-20 bg-gray-50">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Sed ut perspiciatis unde omnis iste natus error sit!</h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6"> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse:</p>
                <ul>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    <span className="font-medium text-gray-500">Ut enim ad minima veniam, quis nostrum</span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    <span className="font-medium text-gray-500">Excepteur sint occaecat cupidatat non proident</span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    <span className="font-medium text-gray-500">100% deserunt mollit anim id est laborum</span>
                    </li>
                </ul>
                </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <Image className="mx-auto sm:max-w-sm lg:max-w-full" src={img4} alt="image" /></div>
            </div>
        </div>
        </section>
    </>
    )
}