type QuestionControlType = 'text' | 'number' | 'select';

export abstract class Question<T> {
  public key: string;
  public value: T;
  public label?: string;
  public order?: number;
  public required?: boolean;
  public options?: string[];

  public abstract controlType: QuestionControlType;

  constructor(options: {
    key: string;
    value: T;
    label?: string;
    order?: number;
    required?: boolean;
    options?: string[];
  }) {
    this.key = options.key;
    this.value = options.value;
    this.label = options.label;
    this.order = options.order;
    this.required = options.required;
    this.options = options.options;
  }
}

export class TextQuestion extends Question<string> {
  public controlType: QuestionControlType = 'text';
}

export class NumberQuestion extends Question<number> {
  public controlType: QuestionControlType = 'number';
}

export class SelectQuestion extends Question<string> {
  public controlType: QuestionControlType = 'select';
}
