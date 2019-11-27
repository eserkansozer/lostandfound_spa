const locationsReducer = function locations(state, action){
    state = {
        locations: ['London', 'Manchester', 'Birmingham'],
        selectedLocation: ''
    };
    return state;
}

export default locationsReducer;