export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'reduce':
            return state - 1;
        default:
            return state;
    }
}

export const add = () => {
    return {
        type: 'add'
    }
}

export const reduce = () => {
    return {
        type: 'reduce'
    }
}

export const timeReduce = (e) => dispatch => {   //此函数用来生成Action
    setTimeout(() => {
        // eslint-disable-next-line eqeqeq
        if(e == '1'){
            dispatch(add())  
        }else{
            dispatch(reduce())  
        }
    }, 500);
}

