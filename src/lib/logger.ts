type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private log(level: LogLevel, message: string, data?: unknown) {
    const timestamp = new Date().toISOString();
    console[level](`[${timestamp}] [${level.toUpperCase()}]`, message, data || '');
  }

  info(message: string, data?: unknown) {
    this.log('info', message, data);
  }

  warn(message: string, data?: unknown) {
    this.log('warn', message, data);
  }

  error(message: string, data?: unknown) {
    this.log('error', message, data);
  }

  debug(message: string, data?: unknown) {
    if (process.env.NODE_ENV === 'development') {
      this.log('debug', message, data);
    }
  }
}

export const logger = new Logger();
