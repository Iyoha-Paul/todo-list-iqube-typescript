export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  startDate?: string;
  finishDate?: string;
  handleAdd?: (e: React.FormEvent) => void;
}
