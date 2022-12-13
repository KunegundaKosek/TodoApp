// 1. Wybierz liste ul (klasa todos)
// 2. Stwórz listę z kategoriami todosów.
// Otypuj odpowiednio listę categories (użyj typu Category)
// 3. Otypuj odpowiednio listę todos (stwórz interfejs Todo dla obiektów w środku listy)
const todoList = document.querySelector(".todos");
const categories = [
    "life",
    "education",
    "sport",
    "work",
    "free time",
];
const todos = [
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
const render = (todos) => {
    todos.forEach((todo) => {
        const liElement = document.createElement('li');
        liElement.className = todo.category;
        liElement.textContent = `${todo.title} - (${todo.category})`;
        const inputELement = document.createElement('input');
        inputELement.type = "checked";
        inputELement.setAttribute("checked", `${todo.done}`);
        liElement.appendChild(inputELement);
        inputELement.addEventListener('click', () => {
            todo.done ? (!todo.done) : (todo.done = true);
        });
    });
    const renderCategories = () => {
        const ulELement = document.querySelector('.categories');
        categories.forEach((category) => {
            const li = document.createElement('li');
            const input = document.createElement('input');
            input;
        });
    };
};
export {};
