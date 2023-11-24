import { memory } from "./memorys";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  memory: memory[];
};

export enum SomeActions {
  "SAVE_MEMORY" = "SAVE_MEMORY",
}

export interface SaveMemoryAction {
  action: SomeActions.SAVE_MEMORY;
  payload: memory;
}

export type Actions = SaveMemoryAction;
