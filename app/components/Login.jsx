import '../styles/Hero.module.css'
export default function Hero() {
    return (
        <div className="relative h-screen bg-[#404eed] isolate px-6 lg:px-6">

            <img src={'/login-bg.svg'} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }} alt="" />
        </div>
    )
}
