import { ToDoState } from 'src/app/shared/interfaces/state';
import { ToDoActions, ToDoActionsTypes } from '../actions/actions';
import { removeTag, addNewTag, changeTitle, changeTag } from './reducer.helper';

const initialState: ToDoState = {
  toDoData: [],
};

export const toDoReducer = (
  state: ToDoState = initialState,
  action: ToDoActions
): ToDoState => {
  switch (action.type) {
    case ToDoActionsTypes.Load:
      return {
        ...state,
        toDoData: [...action.payload.state],
      };

    case ToDoActionsTypes.deleteNote:
      return {
        ...state,
        toDoData: state.toDoData.filter(
          (elem) => elem.id !== action.payload.id
        ),
      };

    case ToDoActionsTypes.deleteTag:
      return {
        ...state,
        toDoData: removeTag(
          [...state.toDoData],
          action.payload.id,
          action.payload.tagIndex
        ),
      };
    case ToDoActionsTypes.addTag:
      return {
        ...state,
        toDoData: addNewTag([...state.toDoData], action.payload.id),
      };

    case ToDoActionsTypes.changeTitle:
      return {
        ...state,
        toDoData: changeTitle(
          [...state.toDoData],
          action.payload.id,
          action.payload.title
        ),
      };

    case ToDoActionsTypes.changeTag:
      return {
        ...state,
        toDoData: changeTag(
          [...state.toDoData],
          action.payload.id,
          action.payload.tag,
          action.payload.tagIndex
        ),
      };
    default:
      return state;
  }
};
