import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state:AppState) => {

    const { action, payload } = actions;
    switch (action) {

        case SomeActions.SAVE_MEMORY:
            state.memory = [...state.memory, payload];
            return state;

        break;

        default:
            return state;
    }

};