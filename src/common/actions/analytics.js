import { TRACK_EVENT } from './types';

export function trackEvent(type, payload) {
  return {
    type: TRACK_EVENT,
    meta: {
      analytics: {
        type,
        payload,
      }
    }
  }
}