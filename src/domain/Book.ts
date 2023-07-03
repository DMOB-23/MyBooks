export interface RegisterBookDto {
  title: string;
  comment: string;
  grade: number;
}

export interface BookDto extends RegisterBookDto {
  id: string;
}
