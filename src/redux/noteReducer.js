import{NOTE_CREATE,NOTE_DELETE,NOTE_UPDATE} from './types'

const initialState = {
  notes: [],
};
export const noteReducer = (state = initialState, action) => {
  const {notes}=state;

  switch (action.type) {
 case    NOTE_CREATE :
    return{
      ...state, notes:[...state.notes, action.payload]
    }

    case NOTE_DELETE:
      return (() => {
      const { id } = action;
     const { notes } = state;
const itemIndex = notes.findIndex((res) => res.id === id);
const nextNotes =[
          ...notes.slice(0, itemIndex),
          ...notes.slice(itemIndex + 1),
        ];
      return {
        ...state,
        notes: nextNotes,
      };
 })();
      case NOTE_UPDATE:
      const { payload } = action;

      const itemIndex = notes.findIndex((res) => res.id === payload.id);

      const nextNotes = [
        ...notes.slice(0, itemIndex),
        payload,
        ...notes.slice(itemIndex + 1),
      ];
     
      return {
        ...state,
        notes: nextNotes,
      };  
    default:
      return state;
  }

};
