'use client';

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

export function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        defaultChecked={completed}
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
      ></input>
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
