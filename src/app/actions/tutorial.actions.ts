import { Tutorial } from '../models/tutorial.model';

export class AddTutorial {
  static readonly type = '[tutorial] Add';
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial {
  static readonly type = '[tutorial] Remove';
  constructor(public payload: string) {}
}
