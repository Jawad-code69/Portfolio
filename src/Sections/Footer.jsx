import { socialImgs } from "../Constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Terms */}
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>

                {/* Social Icons */}
                <div className="socials flex gap-4">
                    {socialImgs.map((socialImg) => (
                        <div key={socialImg.name} className="icon">
                            <img
                                src={socialImg.imgPath}
                                alt={`${socialImg.name} icon`}
                                className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-125 hover:opacity-80"
                            />
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Jawad Noor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
