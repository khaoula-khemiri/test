import React from 'react';
import { Dropdown } from 'flowbite-react';

const Navbar = () => {
    const list = [
        { title: "Company ", item: ["item 1", "item 2", "item 3"] },
        { title: "Account ", item: ["item 1", "item 2", "item 3"] },
        { title: "Products", item: ["item 1", "item 2", "item 3"] }
    ]
    return (

        <div className='container w-screen md:h-16 h-14 px-8 md:px-9 bg-regal-blue  md:flex items-center justify-between'>
            <div className='text-white text-xl  bg-light-blue md:h-full w-32 px-6 rounded-b-[40px] flex items-center '>
                <span class="font-Pac ">Sass</span>Tribe
            </div>

            <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-regal-blue text-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 '>
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
