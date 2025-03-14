import Banner from "../../components/Banner/Banner";
import image2 from "../../assets/image-2.png";
import aboutData from "../../datas/about"
import Dropdown from "../../components/Dropdown/Dropdown";
import './A-propos.scss';



function About() {
    return (
        <div className="about">
            <Banner image={image2} noFilter className="banner__about" />
            {aboutData.map((item, index) => (
                <Dropdown key={index} title={item.title} content={item.content} />
            ))}
        </div>
    )
}

export default About