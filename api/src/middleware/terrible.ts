import { Request, Response, NextFunction } from 'express';

export function terrible(
  failureRate = 0.25,
  minimumDelayMs = 100,
  maximumDelayMs = 600
) {
  return function terribleMiddleware(
    _: Request,
    __: Response,
    next: NextFunction
  ) {
    const delayMs = Math.floor(
      Math.random() * (maximumDelayMs - minimumDelayMs) + minimumDelayMs
    );

    setTimeout(() => {
      if (Math.random() < failureRate) {
        next({
          status: 400,
          message: 'A wild error appeared.',
        });
      } else {
        next();
      }
    }, delayMs);
  };
}
