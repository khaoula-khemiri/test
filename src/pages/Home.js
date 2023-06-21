import React from 'react';
import Navbar from '../components/Navbar';
import { ArchiveBoxIcon, ChatBubbleOvalLeftEllipsisIcon, CpuChipIcon, EnvelopeIcon, LockClosedIcon, UserGroupIcon } from '@heroicons/react/24/outline';


const Home = () => {
    const data = [
        {
            icon: <UserGroupIcon />,
            title: "Account",
            desc: "Manage an ultimated numbers of accounts from one place"
        },
        {
            icon: <LockClosedIcon />,
            title: "Roles & permissions ",
            desc: "Manage an ultimated numbers of accounts from one place"
        },
        {
            icon: <CpuChipIcon />,
            title: "Integration",
            desc: "Manage an ultimated numbers of accounts from one place"
        },
        {
            icon: <ChatBubbleOvalLeftEllipsisIcon />,
            title: "Chat Bots",
            desc: "Manage an ultimated numbers of accounts from one place"
        },
        {
            icon: <EnvelopeIcon />,
            title: "In-App messaging",
            desc: "Manage an ultimated numbers of accounts from one place"
        },
        {
            icon: <ArchiveBoxIcon />,
            title: "knowledge Base",
            desc: "Manage an ultimated numbers of accounts from one place"
        },

    ]
    return (
        <div className='h-full   md:overflow-y-hidden bg-dark-blue md:relative  md:z-[-2]'>
            <Navbar />
            <div className='h-full 	p-8 font-Mont md:relative  md:z-[-2]' >
                <div className='  md:flex items-center justify-center	md:p-10 '>
                    <div className="flex-1  flex items-center justify-center">
                        <div className='text-white flex   flex-col gap-y-4 md:max-w-sm '>

                            <div className='text-light-blue'>
                                welcome
                            </div>


                            <div className='text-[27px] font-bold '>
                                Ready to help you in your project !

                            </div>
                            <div>
                                our seals teams will get in touch to better understand
                                your needs , and will help you with the sign-up process
                            </div>
                            <div className='flex gap-4'>
                                <button className='bg-light-blue px-6 py-2 rounded-lg hover:bg-[#588ae8] '>Start Now</button>
                                <button className='border-2 border-light-blue px-4 py-2 rounded-lg'>Contact Sales</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 grid grid-cols-1 md:grid-cols-3  gap-4	'>

                        {data.map((item) => (<div className='bg-gradient-to-r from-[#2B2E32] to-[#23262A] p-4 rounded-xl max-w-[90%]' >

                            <div className='w-12 h-12 bg-[#292E36] p-2 rounded-full text-light-blue '>
                                {/* <UsersIcon /> */}
                                {item.icon}
                            </div>
                            <div className='text-white'>
                                <div className='font-medium py-2 text-[12px]'>
                                    {item.title}
                                </div>

                                <p className='text-[10px]'>
                                    {item.desc}
                                </p>
                            </div>


                        </div>))}


                    </div>

                </div>

                <div className='hidden sm:block absolute z-[-1] bottom-[56%] left-[5%] right-[5%] bg-light-blue p-10  h-[100px] rounded-bl-full rounded-tr-full' >
                </div>

                <div className='hidden sm:block absolute z-[-1] bottom-[28%] left-[45%] right-[5%] bg-light-blue p-10  h-[100px] rounded-bl-full rounded-br-full' >
                </div>
            </div>
        </div>
    );
}

export default Home;

