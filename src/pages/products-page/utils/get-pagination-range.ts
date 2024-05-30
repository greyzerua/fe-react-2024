import { DOTS } from '../constants';

import { getRange } from './get-range';

export const getPaginationRange = (currentPage: number, pageCount: number) => {
    const rangeItems: Array<number | typeof DOTS> = [];

    const leftSibling = currentPage > 1 ? currentPage - 1 : 1;
    const rightSibling = currentPage < pageCount ? currentPage + 1 : pageCount;

    const rangeStart = getRange(1, leftSibling - 1);
    const rangeEnd = getRange(rightSibling + 1, pageCount);
    const siblingRange = getRange(leftSibling, rightSibling);

    if (rangeStart.length > 0) {
        rangeItems.push(rangeStart[0]);
        if (rangeStart.length > 1) {
            rangeItems.push(DOTS);
        }
    }

    rangeItems.push(...siblingRange);

    if (rangeEnd.length > 0) {
        if (rangeEnd.length > 1) {
            rangeItems.push(DOTS);
        }
        rangeItems.push(rangeEnd.at(-1));
    }

    return rangeItems;
};
