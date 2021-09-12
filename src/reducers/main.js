import {
  CHNAGE_COMBINATION_TEXT,
  CHNAGE_JOIN_TEXT,
  SHOW_COMBINATION,
  SHOW_JOIN,
  SHOW_OPEN_DROPDOWN,
  SHOW_SEGMENT,
} from "../actions/main";

const initialMainState = {
  showOpen: false,
  showCombination: false,
  showJoin: false,
  showSegment: false,
  combinationText: "passes",
  joinText: "all",
};

export default function main(state = initialMainState, action) {
  switch (action.type) {
    case SHOW_OPEN_DROPDOWN:
      return {
        ...state,
        showOpen: action.val,
      };
    case SHOW_COMBINATION:
      return {
        ...state,
        showCombination: action.val,
      };
    case SHOW_JOIN:
      return {
        ...state,
        showJoin: action.val,
      };
    case SHOW_SEGMENT:
      return {
        ...state,
        showSegment: action.val,
      };
    case CHNAGE_COMBINATION_TEXT:
      return {
        ...state,
        combinationText: action.text,
      };
    case CHNAGE_JOIN_TEXT:
      return {
        ...state,
        joinText: action.text,
      };
    default:
      return state;
  }
}
