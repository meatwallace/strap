import Raven from 'raven-js';

export default function(ex, extra) {
  Raven.captureException(ex, { extra });

  if (window.console && console.error) {
    console.error(ex);
  }
}