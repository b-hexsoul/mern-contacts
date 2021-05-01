import {
  ADD_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CLEAR_FILTER,
  FILTER_CONTACTS,
} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
          // contact.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          // contact.email.toLowerCase().includes(action.payload.toLowerCase())
        }),
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default reducer;
