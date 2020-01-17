export const BUY_TOOL = 'BUY_TOOL';

export function setBuy(tool) {
    return {
        type: BUY_TOOL,
        payload: tool,
    }
}