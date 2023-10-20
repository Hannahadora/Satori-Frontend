import AvatarGroup from '../../assets/images/Avatar group.png'

const AvatarGroupSec = () =>{

    return(
        <>
             <div className='app-container w-full lg:w-auto flex flex-col items-center  border border-gray-200 rounded-lg bg-gray-50 p-6 mt-16 mb-8'>
            <img src={AvatarGroup} alt="avatargroup" />
            <h4 className='xl:text-2xl sm:text-base '>Still have questions?</h4>
            <p className='pb-4 xl:text-xl sm:text-base text-center'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button
              type="button"
              className="pry-btn py-[15px] px-[30px] rounded-full xl:text-base sm:text-sm"
            >
              Get in Touch
            </button>
      </div>
        </>
    )
}

export default AvatarGroupSec