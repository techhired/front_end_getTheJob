
export default ( state = [], {type, payload}) => {

    switch(type) {
        case 'JOB_SEARCH':
            return [...state, payload];
        default:
            return state;
    }
}