import { State as _State } from "store";

declare global {
  export type Loading = "error" | boolean;
  export type State = _State;

  export type PaginatedData<T> = {
    data: T[];
    total: number;
  };
}

export {};
