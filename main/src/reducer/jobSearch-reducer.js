export default ( state=[], {type, payload}) => {

    switch(type) {
        case 'JOB_SEARCH':
            return [...state, payload];
        case 'TOKEN_REMOVE':
            return null;
        default:
            return [];

    }

}