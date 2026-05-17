import { logger } from './logger';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    logger.error('Operational error:', error.message);
    return error;
  }

  logger.error('Unexpected error:', error);
  return new AppError('An unexpected error occurred', 500, false);
};
