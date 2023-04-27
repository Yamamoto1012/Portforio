import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contents from "../components/Contents";

export default function Home() {
    return (
        <div>
            <Header />
                <Hero />
                <Contents />
            <Footer />
        </div>
    )
}