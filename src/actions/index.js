export const SET_STACK = 'SET-STACK';
export function setStack(stack) {
    return {
        type: SET_STACK,
        stack: stack
    };
}