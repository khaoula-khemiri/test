import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const list = [
        { title: "Company ", item: ["item 1", "item 2", "item 3"] },
        { title: "Account ", item: ["item 1", "item 2", "item 3"] },
        { title: "Products", item: ["item 1", "item 2", "item 3"] }
    ]
    let [open, setOpen] = useState(false);
    return (

        <div className='container w-screen md:h-16 h-14 px-8 md:px-9 bg-regal-blue  md:flex items-center justify-between'>
            <div className='text-white text-xl  bg-light-blue md:h-full w-32 px-6 rounded-b-[40px] flex items-center '>
                <span class="font-Pac ">Sass</span>Tribe
            </div>

            <div onClick={() => setOpen(!open)} className='absolute right-3 top-3 cursor-pointer md:hidden w-7 h-7 text-white'>
                {
                    open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-regal-blue text-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-600 ease-in ${open ? 'top-[35px]' : 'top-[-490px]'}`}>
                <li class="md:px-4 py-2 "><a href="#">Home</a></li>
                {list.map((p) =>
                    <li class="md:px-4  py-2 ">
                        <Dropdown
                            inline
                            label={p.title}
                        >
                            {p.item.map((item) =>
                                <Dropdown.Item>
                                    {item}
                                </Dropdown.Item>
                            )}

                        </Dropdown>
                    </li>)}

                <button class="px-4 py-2 bg-light-blue hover:bg-[#588ae8] text-gray-50 rounded-lg ">
                    Purchase Now
                </button>
            </ul>
        </div>

    );
}

export default Navbar;
