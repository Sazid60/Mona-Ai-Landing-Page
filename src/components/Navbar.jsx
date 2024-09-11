import { useState } from 'react';
import { BsListNested } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoLanguage } from 'react-icons/io5';

// Reusable navigation links
const navLinks = [
    { name: 'Home', href: '#', subMenu: null },
    {
        name: 'AI Services',
        href: '#',
        subMenu: [
            { name: 'Youtube Transition', href: '#' },
            { name: 'Youtube Watch', href: '#' },
            { name: 'AI Research Assistant', href: '#' },
            { name: 'Image Generation', href: '#' },
        ]
    },
    { name: 'About Us', href: '#', subMenu: null },
    { name: 'Pricing', href: '#', subMenu: null },
    { name: 'FAQ', href: '#', subMenu: null },
    { name: 'Contact Us', href: '#', subMenu: null },
    {
        name: 'Language',
        href: '#',
        icon: <IoLanguage />,
        subMenu: [
            { name: 'English', href: '#' },
            { name: 'Bangla', href: '#' }
        ]
    }
];

const Navbar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const renderNavLinks = (links) => (
        links.map((link, index) => (
            <li key={index}>
                {link.subMenu ? (
                    <details>
                        <summary className="flex items-center">
                            {link.icon && <span className="mr-2">{link.icon}</span>}
                            {link.name}
                        </summary>
                        <ul className="p-2 w-[270px] bg-[#19233A] rounded-none">
                            {link.subMenu.map((subLink, subIndex) => (
                                <li key={subIndex}><a href={subLink.href}>{subLink.name}</a></li>
                            ))}
                        </ul>
                    </details>
                ) : (
                    <a href={link.href}>{link.name}</a>
                )}
            </li>
        ))
    );

    return (
        <>
            <div className="navbar fixed top-0 left-0 w-full bg-[#131B2D]/90 backdrop-blur-lg flex justify-center gap-5 items-center z-50">
                <div>
                    <a>
                        <img className="h-[32px] w-[170px]" src="/fullLogo.png" alt="Logo" />
                    </a>
                </div>
                <div className="hidden xl:flex">
                    <ul className="menu menu-horizontal px-1 justify-center items-center">
                        {renderNavLinks(navLinks)}
                        <li><a href="">Login</a></li>
                        <li><a className='border border-[#10AAAE]' href="">Sign Up</a></li>
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2" onClick={toggleSideNav}>
                            <BsListNested />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-0 h-full w-full bg-[#131B2D] z-50 transform transition-transform duration-300 ease-in-out ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4">
                    <div className='flex justify-between'>
                        <a className="">
                            <img className="h-[32px] w-[170px]" src="/fullLogo.png" alt="Logo" />
                        </a>
                        <button className="text-white" onClick={toggleSideNav}><IoMdClose /></button>
                    </div>
                    <ul className="mt-8 text-white space-y-4">
                        {renderNavLinks(navLinks)}
                    </ul>
                    <div className='flex flex-col justify-center items-center mt-8 space-y-4'>
                        <button className='btn w-full bg-transparent border-0 text-white'>Login</button>
                        <button className='border border-[#10AAAE] btn bg-transparent text-white w-full'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
