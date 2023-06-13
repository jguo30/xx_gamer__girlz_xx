
export default function Features() {
    return (
        <>
            <section>
                <div className="flex justify-between items-center mx-auto max-w-[1200px] py-14 md:py-28 flex-col md:flex-row px-7 lg:px-2 flex-wrap " >
                    <img src="/invite.svg" alt="" className=" md:w-[57%] " />
                    <div className=" flex flex-col justify-between items-center md:w-[32.5%] w-[95%] " >
                        <h2 className="font-extrabold text-[20px] sm:text-[28px] md:text-[48px] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0 " >Create an invite-only place where you belong</h2>
                        <p className="text-[16px] sm:text-[20px] font-[400] mt-[24px] " >Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>
                </div>
            </section>
            <section className="bg-[#f6f6f6]" >
                <div className="flex justify-between items-center mx-auto max-w-[1200px] py-14 md:py-28 flex-col md:flex-row px-7 lg:px-2 flex-wrap" >
                    <div className=" flex flex-col justify-between items-center md:w-[32.5%] w-[95%]" >
                        <h2 className=" font-extrabold text-[20px] sm:text-[28px] md:text-[48px] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0 " >Where hanging out is easy</h2>
                        <p className="text-[16px] sm:text-[20px] font-[400] mt-[24px] " >Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                    </div>
                    <img src="/chat.svg" alt="" className=" md:w-[57%] " />
                </div>
            </section>

            <section className=" " >
                <div className=" flex justify-between items-center mx-auto max-w-[1200px] py-14 md:py-28 flex-col md:flex-row px-7 lg:px-2 flex-wrap" >
                    <img src="/3.svg" alt="" className=" md:w-[57%] " />
                    <div className="flex flex-col justify-between items-center md:w-[32.5%] w-[95%] " >
                        <h2 className="font-extrabold text-[20px] sm:text-[28px] md:text-[48px] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0 " >From few to a fandom</h2>
                        <p className="text-[16px] sm:text-[20px] font-[400] mt-[24px] " >Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
