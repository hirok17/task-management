import { Link } from "react-router-dom";
import img1 from "../../../assets/h1.svg"
import img2 from "../../../assets/h2.svg"
import img3 from "../../../assets/h3.svg"
import img4 from "../../../assets/h4.svg"


const Hero = () => {
    return (
        <section className="bg-[#FFFAE9]">
            <div className="container mx-auto hero min-h-screen relative">
                <div className="hero-content text-center">
                    <div className="">
                        <p className="text-lg font-medium mb-6">Task Management Platform</p>
                        <h1 className="text-5xl font-bold text-[#140A44]">Your workflow is unique,<br /> simplify it in one place</h1>
                        <p className="py-6">Organize your tech startups work, improve collaboration,<br /> and increase transparency with one tool</p>
                        <Link to="/login"><button className="btn btn-primary">“Let’s Explore</button></Link>
                        
                    </div>
                   
                </div>
                <img className="absolute top-[50px] left-[50px] hidden lg:block" src={img1} alt="" />
                <img className="absolute top-[50px] right-[50px] hidden lg:block" src={img2} alt="" />
                <img className="absolute bottom-5 right-[25%] hidden lg:block" src={img3} alt="" />
                <img className="absolute bottom-5 left-[20%] hidden lg:block" src={img4} alt="" />
            </div>
        </section>
    );
};

export default Hero;