import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import image1 from "../../assets/image-1.png"


function Home() {
    return (
        <div>
            <Banner image={image1} title="Chez vous, partout et ailleurs" className="banner__home" />
            <Gallery />
        </div>
    )
}

export default Home