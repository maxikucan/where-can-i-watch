import { ResultResponse, StreamInfoKey } from '../models/results';

export function checkIsInNetflix(results: ResultResponse | null): string | boolean {
  if (!results) {
    return false;
  }

  if (!results?.result[0].streamingInfo.ar) {
    return 'No se hay resultados de películas con ese nombre...';
  }

  if (!Object.keys(results?.result[0].streamingInfo.ar as StreamInfoKey[]).some(item => item === 'netflix')) {
    return `NO Está en netfix, pero está en: ${Object.keys(results?.result[0].streamingInfo.ar as StreamInfoKey[])
      .map(item => item)
      .join(' | ')}`;
  }

  return 'Está en netflix';
}
