import Flickity from 'react-flickity-component';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated/Index';
import FeaturedMovie from '@/Components/FeaturedMovie';
import MovieCard from '@/Components/MovieCard';


export default function Dashboard () {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return ( 
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="/css/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie
                        key={i}
                        slug="the-batman"
                        name={`The Batman ${i}`}
                        category="Comedy"
                        thumbnail="/images/featured-2.png"
                        rating={i + 1}
                    />
                    ))}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard 
                            key={i}
                            slug="the-batman"
                            name={`The Batman ${i}`}
                            category="Comedy"
                            thumbnail="/images/featured-2.png"
                        />
                        ))}
                    </Flickity>
                </div>
        </Authenticated>
        
    )
}