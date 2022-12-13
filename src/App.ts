// 1. Wybierz liste ul (klasa todos)
// 2. Stwórz listę z kategoriami todosów.
// Otypuj odpowiednio listę categories (użyj typu Category)
// 3. Otypuj odpowiednio listę todos (stwórz interfejs Todo dla obiektów w środku listy)

import { Category, Todo } from "./helpers/Category";

const todoList: HTMLUListElement = document.querySelector(".todos");

const categories: Category[] = [
  "life",
  "education",
  "sport",
  "work",
  "free time",
];

const todos: Todo[] = [
  {
    title: "Umyć samochód",
    done: false,
    category: "life",
  },

  {
    title: "Nauczyć się TypeScript",
    done: true,
    category: "education",
  },

  {
    title: "Przeczytać książkę 'React'",
    done: false,
    category: "free time",
  },
];

const render = (todos: Todo[]) => {
    todos.forEach((todo: Todo) => {
        const liElement: HTMLLIElement = document.createElement('li');
        liElement.className = todo.category;
        liElement.textContent = `${todo.title} - (${todo.category})`;

        const inputELement: HTMLInputElement = document.createElement('input');
        inputELement.type = "checked";
        inputELement.setAttribute("checked", `${todo.done}`);
        liElement.appendChild(inputELement);

        inputELement.addEventListener('click', () => {
            todo.done ? (!todo.done) : (todo.done = true);
        });
    });

    const renderCategories = () => {
        const ulELement: HTMLUListElement = document.querySelector('.categories');
        categories.forEach((category: Category) => {
            const li: HTMLLIElement = document.createElement('li');
            const input: HTMLInputElement = document.createElement('input');
            input
        })
    }


}
