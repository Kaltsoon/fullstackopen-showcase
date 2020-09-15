import EsError from 'es6-error';

export class ApplicationError extends EsError {
  constructor(message, properties, status) {
    super(message || 'Something went wrong');

    this.code = 'APPLICATION_ERROR';
    this.properties = properties || null;
    this.status = status || 500;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      properties: this.properties,
    };
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message, properties) {
    super(message || 'Not found', properties, 404);

    this.code = 'NOT_FOUND_ERROR';
  }
}