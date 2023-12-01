export const Footer = () => {
  return (
    <>
      <footer className='bg-blue pt-[50px] pb-8'>
        <div className='w-maxW1280 flex items-center justify-center'>
          <div className=''>
            <div className=''>
              <div className='flex flex-col w-full lg:flex-row'>
                <div className='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
                  content
                </div>
                <div className='divider lg:divider-horizontal'>OR</div>
                <div className='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
                  content
                </div>
                <div className='divider lg:divider-horizontal'>OR</div>
                <div className='grid flex-grow h-32 card bg-base-300 rounded-box place-items-center'>
                  content
                </div>
              </div>
            </div>
            <div className='w-full h-1 bg-white'></div>
            <div className=''>
              <p className='font-semibold text-white'>
                © 2020-2023 Web Traffic Magnet Digital Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
