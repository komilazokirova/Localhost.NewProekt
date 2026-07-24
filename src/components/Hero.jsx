import heroImage from '../assets/heroImage.png';
import HeroInput from './HeroInput';


function Hero() {
    return (
        <div
            className="relative bg-cover bg-center rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="px-12 py-16">
                <h1 className="text-4xl font-bold text-gray-900">
                    Find a <span className="text-green-500">host</span> for every journey
                </h1>
                <p className="mt-2 text-gray-700">
                    Discover the best local rental properties that fits your every travel needs
                </p>

                <div className="mt-8">
                      <HeroInput/>

                </div>
            </div>
        </div>
    );
}

export default Hero;