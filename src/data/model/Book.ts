import Realm from 'realm';

class Book extends Realm.Object<Book> {
  id!: Realm.BSON.UUID;
  title!: string;
  comment!: string;
  grade!: number;

  static schemaName = 'Book';

  static schema = {
    name: Book.schemaName,
    properties: {
      id: 'uuid',
      title: 'string',
      comment: 'string',
      grade: 'float',
    },
    primaryKey: 'id',
  };
}

export default Book;
