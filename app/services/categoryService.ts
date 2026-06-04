// services/categoryService.ts

import { categories } from "../data/categories";
import { Category } from "../types/category";

export const getAllCategories = (): Category[] => {
    return categories;
};

export const getCategoryById = (
    id: number
): Category | undefined => {
    return categories.find(
        (category) => category.id === id
    );
};

export const createCategory = (
    categoryData: Omit<Category, "id">
): Category => {
    const newCategory: Category = {
        id: Date.now(),
        ...categoryData,
    };

    categories.push(newCategory);

    return newCategory;
};

export const updateCategory = (
    id: number,
    updatedData: Partial<Category>
): Category | null => {
    const index = categories.findIndex(
        (category) => category.id === id
    );

    if (index === -1) {
        return null;
    }

    categories[index] = {
        ...categories[index],
        ...updatedData,
    };

    return categories[index];
};

export const deleteCategory = (
    id: number
): boolean => {
    const index = categories.findIndex(
        (category) => category.id === id
    );

    if (index === -1) {
        return false;
    }

    categories.splice(index, 1);

    return true;
};

export const getCategoryCount = (): number => {
    return categories.length;
};

export const searchCategories = (
    query: string
): Category[] => {
    const searchTerm = query.toLowerCase();

    return categories.filter((category) =>
        category.name
            .toLowerCase()
            .includes(searchTerm)
    );
};