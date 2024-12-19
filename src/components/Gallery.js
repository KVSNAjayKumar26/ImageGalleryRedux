import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages } from '../redux/actions';
import image1 from './assets/ai-generated-nature-landscapes-background-free-photo.jpg';
import image2 from './assets/architecture-6792168_640.jpg';
import image3 from './assets/istockphoto-1063723682-612x612.jpg';
import image4 from './assets/istockphoto-1403500817-612x612.jpg';
import image5 from './assets/istockphoto-1419410282-612x612.webp';
import image6 from './assets/istockphoto-517188688-612x612.jpg';
import image7 from './assets/istockphoto-635732164-612x612.jpg';
import image8 from './assets/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg';
import image9 from './assets/pexels-pixabay-262367.jpg';
import image10 from './assets/style-architecture.webp';
import './Gallery.css';

const Gallery = () => {
    const dispatch = useDispatch();
    const filteredImages = useSelector(state => state.filteredImages);

    useEffect(() => {
        // Simulating fetching images from an API
        const images = [
            { id: 1, src:image1, category: 'nature' },
            { id: 2, src:image2, category: 'architecture' },
            { id: 3, src:image3, category: 'architecture' },
            { id: 4, src:image4, category: 'nature'},
            { id: 5, src:image5, category: 'nature'},
            { id: 6, src:image6, category:'nature'},
            { id: 7, src:image7, category: 'architecture'},
            { id: 8, src:image8, category:'nature'},
            { id: 9, src:image9, category:'architecture'},
            { id: 10, src:image10, category:'architecture'},
        ];
        dispatch(fetchImages(images));
    }, [dispatch]);
  return (
    <div className='gallery'>
        {filteredImages.map(image => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img key={image.id} src={image.src} alt={`Image ${image.id}`} />
        ))}
    </div>
  );
};

export default Gallery;