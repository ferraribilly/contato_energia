import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/banner1.png", // Caminho correto para imagem local dentro da pasta /public
];

function Banner() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96">
            <Image
                src={images[currentImageIndex]}
                alt="Banner"
                fill
                className="object-cover rounded-lg"
            />
        </div>
    );
}

export default Banner;
