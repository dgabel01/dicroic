import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ProductsCTA() {
    const products = [
        {
            id: 1,
            title: "Qphonic a/v technology",
            image: "/images/publicsys_home.jpg",
            description:
                "Public address and emergency sound system koristi se u uredima vlada, zračnim lukama, željezničkim postajama, konferencijskim prostorima, bolnicama, kazilištima, stadionima, kockarnicama i hotelima diljem svijeta.",
            link: "/proizvodi",
        },
        {
            id: 2,
            title: "AuviTran - audio toolbox",
            image: "/images/auvitran_home.jpg",
            description:
                "Auvitran vrhunski proizvođač audio i video sučelja i aplikacija, predstavlja AVBx3 audio komponentu sa EtherSound, ASIO, DANTE, MADI interface-om te AES/EBU ulazima i izlazima",
            link: "/proizvodi",
        },
        {
            id: 3,
            title: "Vaddio - Robotic camera technology",
            image: "/images/roboticcam_home.jpg",
            description:
                "PTZ kamere PowerVIEW HD-22 i PowerVIEW HD-30 koriste najnoviji 1/2.8 progresiv MOS senzor od 2.2 Megapixela, optika 22x i 30x, komponentni HD i HDMI izlazi(1080p, 1080i or 720p).",
            link: "/proizvodi",
        },
        {
            id: 4,
            title: "L'acoustics novi K2",
            image: "/images/lacoustics_home.jpg",
            description:
                "L-ACOUSTICS novi K2, system design rescaled into a 12\" compact and flexible format, V-DOSC SPL and bandwidth, with 10° inter-element flexibility, 100% acoustic and rigging compatibility with K1 and K1-SB...",
            link: "/proizvodi",
        },
    ]

    return (
        <section className="mt-36 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header with Button */}
                <div className="flex flex-col items-center justify-center gap-4 mb-12 text-center" data-aos="flip-up">
                    <h2 className="text-2xl md:text-3xl  font-extrabold ">
                        Provjerite dio naše ponude
                    </h2>
                    <Link
                        href="/proizvodi"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Svi proizvodi
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-aos="flip-up" data-aos-delay="200">
                    {products.map((product) => (
                        <Card key={product.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-xl" data-aos="flip-left" data-aos-delay={product.id * 150}>
                            {/* Image Container */}
                            <div className="relative w-full h-24 overflow-hidden ">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Content */}
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">{product.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="grow pb-4">
                                <p className="text-md leading-relaxed">
                                    {product.description}
                                </p>
                            </CardContent>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}