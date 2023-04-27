import React, { useState } from "react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="mx-auto max-w-screen-3xl px-4 md:px-8  bg-white">
            <div className="flex justify-between py-4 md:py-8">
                <h1 className="text-4xl">
                    <a href="/">portforio</a>
                </h1>
                <div className="">
                    <div className="flex lg:hidden m-4">
                        <button onClick={handleMenuOpen} type="button">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:flex lg:items-center ${openMenu ? "block" : "hidden"}`}>
                        <a href="/" className="mx-4 mt-2 block text-xl">home</a>
                        <a href="/about" className="mx-4 mt-2 block text-xl">about</a>
                        <a href="/contact" className="mx-4 mt-2 block text-xl">contact</a>
                    </div>
                </div>
            </div>
        </div>
    );  
}
