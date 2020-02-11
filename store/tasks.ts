import uuid from 'uuid';

const STORAGE_KEY: string = 'tiny.tasks';

export const state = () => ({
  list: getTasks()
});

export const mutations = {
  add(state: any, name: string) {
    state.list.push({
      id: uuid(),
      name
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
  },
  remove(state: any, task: object) {
    state.list.splice(state.list.indexOf(task), 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.list));
  }
};

function getTasks(): [] {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
}
