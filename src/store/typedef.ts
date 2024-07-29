import type { EHttpStatusCode } from '@/services/http-status-code';

export interface RejectedThunkValue {
    message: string;
    statusCode: EHttpStatusCode;
}

export type RejectedThunk = RejectedThunkValue | null;
