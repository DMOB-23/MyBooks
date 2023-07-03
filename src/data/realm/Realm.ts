import Realm from 'realm';
import { Book } from '../model';

const realm = new Realm({
  schema: [Book],
  schemaVersion: 1,
});

export default realm;
