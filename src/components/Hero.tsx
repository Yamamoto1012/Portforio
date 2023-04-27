export default function Hero() {
    return (
        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img src="./hero.jpeg" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"></div>
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                <p className="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">こんにちは世界</p>
                <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-7xl">Helloworld</h1>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                </div>
            </div>
        </section>
    )
}