export type Category = "life" | "education" | "sport" | "work" | "free time";

export interface Todo {
    title: string;
    done: boolean;
    category: Category;
}