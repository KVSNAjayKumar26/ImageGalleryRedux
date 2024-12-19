import { FETCH_IMAGES, FILTER_IMAGES } from "./actions";

const initialState = {
    images: [],
    filteredImages: [],
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return {
                ...state,
                images: action.payload,
                filteredImages: action.payload,
            };
            case FILTER_IMAGES:
                const filtered = state.images.filter(image =>
                    image.category === action.payload
                );
                return {
                    ...state,
                    filteredImages: filtered,
                };
                default:
                    return state;
    }
};

export default imageReducer;