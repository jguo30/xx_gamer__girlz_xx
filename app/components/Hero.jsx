import styles from '../styles/Hero.module.css'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Hero() {
    return (
        <div className="relative bg-[#404eed] isolate px-6 lg:px-6 overflow-hidden">
            <div className="mx-auto max-w-2xl py-10 sm:py-36 lg:py-46">
                <div className="text-center">
                    <h1 className={classNames("text-4xl font-bold tracking-tight text-white headline sm:text-6xl", styles.headline)}>
                        IMAGINE A PLACE...
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-100 z-50">
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black z-50 hover:text-indigo-500 duration-200"
                        >
                            Get started
                        </a>
                        <a href="#" 
                        className="rounded-md px-3.5 py-2.5 text-sm bg-gray-900 font-semibold leading-6 text-white z-50 hover:shadow-md dark:hover:shadow-black/30 hover:bg-slate-800 duration-200">
                            Open Harmony in Your Browser <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <img src={'/hero-bg.svg'} className="absolute inset-x-0 bottom-0 w-full h-auto -z-50" alt="" />
            <img src={'/bg-left.svg'} className={styles.heroLeft} style={{ position: 'absolute', bottom: '0' }} alt="" />
            <img src={'/bg-right.svg'} className="-z-25" style={{ position: 'absolute', bottom: '0', right: '-220px' }} alt="" />
        </div>
    )
}
