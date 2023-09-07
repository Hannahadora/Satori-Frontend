const BecomeBlogger =()=>{
    return (
        <>
            <div className="text-[22px] text-center custom-gray-11 app-container lg:w-[100%] md-[80%] w-full mx-auto  py-20  py-20 bg-gray-01 border-radius-20">
                <h2 className="text-[30px] lg:text-[48px] md:text-[38px]">Become one of our blog writers</h2>
                <p className="lg:px-10 pt-4 text-justify">Use your creative voice to contribute compelling and insightful content that fosters mental health awareness and empowers individuals on their healing journey.</p>
                <form className="lg:px-10 flex height-60 flex-col justify-center items-start gap-8 self-stretch border-radius-9 pt-8">
                <input className="flex self-stretch h-12 px-4 border border-gray-300 rounded-xl" type="text" placeholder="First Name" />
                <input className="flex self-stretch h-12 px-4 border border-gray-300 rounded-xl" type="text" placeholder="Email Address" />
                <button className="flex self-stretch h-10 px-4 mt-2 mb-16 flex-col rounded-xl justify-center items-center self-stretch border-radius-100 bg-accent-color-main text-white">send</button>
                 </form>

            </div>
        </>
    )
}
export default BecomeBlogger