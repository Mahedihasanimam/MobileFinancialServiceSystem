import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-black text-white text-center p-2">
            <h1> develop by <Link target="_blank" className="text-blue-500 underline" to={'https://mehedi60.netlify.app/'}>mehedi</Link>  </h1>
        </div>
    );
};

export default Footer;