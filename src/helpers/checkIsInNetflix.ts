import { ResultResponse, StreamInfoKey } from '../models/results';

export function checkIsInNetflix(results: ResultResponse | null): string | boolean {
  if (!results) {
    return false;
  }

  if (!results?.result[0].streamingInfo.ar) {
    return 'No results...';
  }

  if (!Object.keys(results?.result[0].streamingInfo.ar as StreamInfoKey[]).some(item => item === 'netflix')) {
    return `It is NOT in Netflix, but it is in: ${Object.keys(results?.result[0].streamingInfo.ar as StreamInfoKey[])
      .map(item => item)
      .join(' | ')}`;
  }

  return 'Yes, it is in Netflix!';
}
