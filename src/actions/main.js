export const SHOW_OPEN_DROPDOWN = "SHOW_OPEN_DROPDOWN";
export const SHOW_COMBINATION = "SHOW_COMBINATION";
export const SHOW_JOIN = "SHOW_JOIN";
export const SHOW_SEGMENT = "SHOW_SEGMENT";
export const CHNAGE_COMBINATION_TEXT = "CHANGE_COMBINATION_TEXT";
export const CHNAGE_JOIN_TEXT = "CHANGE_JOIN_TEXT";

export function showDropdown(val) {
  return {
    type: SHOW_OPEN_DROPDOWN,
    val,
  };
}

export function setCombination(val) {
  return {
    type: SHOW_COMBINATION,
    val,
  };
}

export function setJoin(val) {
  return {
    type: SHOW_JOIN,
    val,
  };
}

export function setSegment(val) {
  return {
    type: SHOW_SEGMENT,
    val,
  };
}

export function combinationText(text) {
  return {
    type: CHNAGE_COMBINATION_TEXT,
    text,
  };
}

export function joinText(text) {
  return {
    type: CHNAGE_JOIN_TEXT,
    text,
  };
}
