import {BiTimeFive} from 'react-icons/bi'

const Data = [
    {
        id:1,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:2,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:3,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:4,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:5,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:6,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:7,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },
    {
        id:8,
        image:"https://img.freepik.com/premium-vector/abstract-modern-colorful-loop-rings-logo-design-template-universal-gradient-color-vector-logotype_708255-356.jpg",
        title:'Web Developer',
        time:'Now',
        location:'Bengaluru',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut expedita blanditiis rerum quod tempora consectetur nobis perferendis deleniti repudiandae officia sapiente quae in amet ipsam, provident modi quas placeat!',
        company:'Novac Linus Co.'
    },

]

    const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center items-center flex-wrap py-10">

                {
                    Data.map(({id,image,title,time,location,desc,company})=>{
                        return(
                            <div key={id} className="group group/item singleJob w-[290px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg border-none ">
                                <span className="flex justify-between items-center gap-4">
                                    <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        <BiTimeFive /> {time}
                                    </span>
                                </span>

                                <h6 className='text-[#ccc]'>{location}</h6>
                                <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                    {desc}
                                </p>

                                <div className='company flex items-center gap-2'>
                                    <img src={image} alt="image" className='w-[10%]' />
                                    <span className='text-[14px] py-[1rem]'>{company}</span>
                                </div>

                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                                    Apply
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    }

    export default Jobs
