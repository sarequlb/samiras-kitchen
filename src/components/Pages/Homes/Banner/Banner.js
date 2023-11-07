import React from 'react';
import img1 from '../../../../assets/banner1.jpg'
import img2 from '../../../../assets/banner2.jpg'
import img3 from '../../../../assets/banner3.jpg'
import img4 from '../../../../assets/banner4.jpg'
import img5 from '../../../../assets/banner5.jpg'
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        id:1,
        next:2,
        prev:5
    },
    {
        image: img1,
        id:2,
        next:3,
        prev:1
    },
    {
        image: img1,
        id:3,
        next:4,
        prev:2
    },
    {
        image: img1,
        id:4,
        next:5,
        prev:3
    },
    {
        image: img1,
        id:5,
        next:2,
        prev:1
    },
]

const Banner = () => {

    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
            }
        </div>
    );
};

export default Banner;