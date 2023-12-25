import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handelGetData = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handelGetData)}
      className='bg-[#f5f5f5] md:max-w-5xl max-w-md lg:py-12 py-6 lg:px-28 sm:px-10 px-4 mx-auto rounded-3xl mt-12'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {/* First Name */}
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text text-lg font-medium'>
              <span className='text-red'>*</span> First Name
            </span>
          </div>
          <input
            type='text'
            placeholder='First Name'
            className='input w-full formInputBox focus:outline-none focus:border-blue'
            {...register("first_name", {
              required: "Must Need First Name",
            })}
          />
          {errors.first_name && (
            <p className='text-red mt-1' role='alert'>
              {errors.first_name?.message}
            </p>
          )}
        </label>
        {/* Last Name */}
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text text-lg font-medium'>
              <span className='text-red'>*</span> Last Name
            </span>
          </div>
          <input
            type='text'
            placeholder='Last Name'
            className='input w-full formInputBox focus:outline-none focus:border-blue'
            {...register("last_name", {
              required: "Must Need Last Name",
            })}
          />
          {errors.last_name && (
            <p className='text-red mt-1' role='alert'>
              {errors.last_name?.message}
            </p>
          )}
        </label>
        {/* Email */}
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text text-lg font-medium'>
              <span className='text-red'>*</span> Email
            </span>
          </div>
          <input
            type='email'
            placeholder='example@yourmail.com'
            className='input w-full formInputBox focus:outline-none focus:border-blue'
            {...register("email", {
              required: "Must Need Email Address",
            })}
          />
          {errors.email && (
            <p className='text-red mt-1' role='alert'>
              {errors.email?.message}
            </p>
          )}
        </label>
        {/* Phone Number */}
        <label className='form-control w-full'>
          <div className='label'>
            <span className='label-text text-lg font-medium'>
              <span className='text-red'>*</span> Phone Number
            </span>
          </div>
          <input
            type='number'
            placeholder='+880 1122334455'
            className='input w-full formInputBox focus:outline-none focus:border-blue'
            {...register("phone_num", {
              required: "Must Need Phone Number",
            })}
          />
          {errors.phone_num && (
            <p className='text-red mt-1' role='alert'>
              {errors.phone_num?.message}
            </p>
          )}
        </label>
        {/* Web site  */}
        <label className='form-control w-full md:col-span-2 col-span-1'>
          <div className='label'>
            <span className='label-text text-lg font-medium'>
              Website Address / FB Page
            </span>
          </div>
          <input
            type='url'
            placeholder='www.example.com'
            className='input w-full formInputBox focus:outline-none focus:border-blue'
            {...register("url")}
          />
        </label>
      </div>

      <div className='mt-5'>
        <p className='text-lg font-medium'>
          <span className='text-red'>*</span> Interested In?
        </p>
        <div className='mt-2 flex flex-wrap gap-6'>
          {/*seo  */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("SEO")}
            />
            SEO
          </div>
          {/* Web Design */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("webDesign")}
            />
            Web Design
          </div>
          {/* eCommerce Website Development */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("eCommerce_Website_Development")}
            />
            eCommerce Website Development
          </div>

          {/* Digital Marketing */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("digital_Marketing")}
            />
            Digital Marketing
          </div>

          {/* Content Writing */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("content_Writing")}
            />
            Content Writing
          </div>

          {/* Graphics Design */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("graphics_Design")}
            />
            Graphics Design
          </div>

          {/* SMM */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("smm")}
            />
            SMM
          </div>
          {/* Other */}
          <div className='flex items-center gap-2 md:text-base text-sm'>
            <input
              type='checkbox'
              name=''
              id=''
              className='cursor-pointer h-4 w-4'
              {...register("other")}
            />
            Other
          </div>
        </div>
      </div>

      {/* Message box */}
      <label className='form-control mt-5'>
        <div className='label'>
          <span className='label-text text-lg font-medium'>
            <span className='text-red'>*</span> Message
          </span>
        </div>
        <textarea
          className='textarea  md:h-40 h-40 formInputBox focus:outline-none focus:border-blue'
          placeholder='Tell us a little bit you want to achieve and when can you talk with us about this project. '
          {...register("message", {
            required: "Must Need Message",
          })}></textarea>
        {errors.message && (
          <p className='text-red mt-1' role='alert'>
            {errors.message?.message}
          </p>
        )}
      </label>

      <div className='mt-5'>
        <button
          type='submit'
          className='text-white md:text-base text-[10px] bg-blue md:py-5 py-[10px] md:px-12 px-6 w-full rounded-full btnShadow hover:shadow-none'>
          Here We Go
        </button>
      </div>
    </form>
  );
};
