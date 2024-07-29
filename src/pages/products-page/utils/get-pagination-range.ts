import { DOTS } from '../constants';

import { getRange } from './get-range';

export const getPaginationRange = (currentPage: number, pageCount: number) => {
    const rangeItems: Array<number | typeof DOTS> = [];

    const leftSibling = currentPage > 1 ? currentPage - 1 : 1;
    const rightSibling = currentPage < pageCount ? currentPage + 1 : pageCount;

    const rangeStart = getRange(1, leftSibling - 1);
    const rangeEnd = getRange(rightSibling + 1, pageCount);
    const siblingRange = getRange(leftSibling, rightSibling);

    const firstStartRangeElement = rangeStart.at(0);
    if (firstStartRangeElement) {
        rangeItems.push(firstStartRangeElement);
        if (rangeStart.length > 1) {
            rangeItems.push(DOTS);
        }
    }

    rangeItems.push(...siblingRange);

    const lastEndRangeElement = rangeEnd.at(-1);
    if (lastEndRangeElement) {
        if (rangeEnd.length > 1) {
            rangeItems.push(DOTS);
        }
        rangeItems.push(lastEndRangeElement);
    }

    return rangeItems;
};
