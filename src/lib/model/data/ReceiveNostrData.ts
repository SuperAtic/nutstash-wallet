import type { Token } from '../token';
import type { HistoryData } from './HistoryData';

interface ReceiveNostrData extends HistoryData {
	receivedTokens: Array<Token>;
	encodedToken: string;
	sender: string;
	eventId: string;
}

export type { ReceiveNostrData };
