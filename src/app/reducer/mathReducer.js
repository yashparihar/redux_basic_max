const mathReducer = (state = {
    result: 20,
    lastValue: []
}, action) => {
    switch (action.type) {
        case "ADD" | "SUBS":
            //state.result += action.payload;
            state = {
                ...state,
                result: action.payload,
                lastValue: [...state.lastValue, state.result]
            }
            break;
        // case "SUBS":
        //     //state.result -= action.payload;
        //     state = {
        //         ...state,
        //         result: action.payload,
        //         lastValue: [...state.lastValue, state.result]
        //     }
        //     break;
    }
    return state;
};

export default mathReducer;