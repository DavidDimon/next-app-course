import createHook from 'zustand'

export const useTodoStore = createHook((set) => ({
  items: [],
  addItem: (item) => set(({ items }) => ({ items: [...items, item] })),
  removeItem: (id) =>
    set(({ items }) => ({
      items: [...items?.filter((data) => data?.id !== id)],
    })),
}))
