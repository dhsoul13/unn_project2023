import Alertreducer, { AlertName } from './alertreducer';
import Modalreducer, { ModalName } from './modalreducer';
import Authreducer, { AuthName } from './authreducer';

export const reducers = {
  [ModalName]: Modalreducer,
  [AlertName]: Alertreducer,
  [AuthName]: Authreducer,
};
