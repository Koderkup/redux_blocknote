import { NOTE_CREATE, NOTE_DELETE, NOTE_UPDATE } from "./types";

export function noteCreate(text, id) {
  return {
    type: NOTE_CREATE,
    payload: {
      text,
      id,
    },
  };
}
export function noteDelete(id) {
  return {
    type: NOTE_DELETE,
    id,
  };
}
export function noteUpdate(text, id) {
  return {
    type: NOTE_UPDATE,
    payload: {
      text,
      id,
    },
  };
}