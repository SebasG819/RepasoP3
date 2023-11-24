import { memory } from "../types/memorys";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const SaveMemory = async (memory: memory): Promise<Actions> => {
 await firebase.SaveMemoryInData(memory)

    return{
        action: SomeActions.SAVE_MEMORY,
        payload: memory,
    };
};