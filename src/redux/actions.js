export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FILTER_IMAGES = 'FILTER_IMAGES';

export const fetchImages = (images) => ({
    type: FETCH_IMAGES,
    payload: images,
});

export const filterImages = (category) => ({
    type: FILTER_IMAGES,
    payload: category,
});