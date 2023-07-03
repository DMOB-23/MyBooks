export interface UseRegisterBookResult {
  onSave: () => void;
  setTitle: (title: string) => void;
  setAuthor: (author: string) => void;
  setGrade: (grade: number) => void;
  setComment: (comment: string) => void;
}
