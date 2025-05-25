// eslint-disable-next-line no-unused-vars
import "boxicons/css/boxicons.min.css";

const Header = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    };

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-3xl md:text-4xl font-light m-0"
            >
                Red<sup>3</sup> Agency
            </h1>

            <nav className="hidden md:flex items-center gap-12">
                <a
                    href="#"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                >
                    About
                </a>
                <a
                    href="#"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                >
                    Pricing
                </a>
                <a
                    href="#"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                >
                    Projects
                </a>
                <a
                    href="#"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500"
                    className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
                >
                    Testimonials
                </a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                Contact Us
            </button>

            {/* Mobile menu button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i className="bx bx-menu"></i>
            </button>

            {/* Mobile menu */}
            <div
                id="mobileMenu"
                className="hidden fixed top-16 bottom-0 right-0 left-0 md:hidden z-40 bg-opacity-70 backdrop-blur-md"
            >
                <nav className="flex flex-col gap-6 items-center">
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Documentation
                    </a>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Invoice
                    </a>
                    <a href="#" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
                        Agreement
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
