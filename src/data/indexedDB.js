import { openDB } from "idb";

export const database = openDB("capstoneDatabase", 1, {
  upgrade(db) {
    db.createObjectStore("incomeStore");
    db.createObjectStore("expenseStore");
    db.createObjectStore("photoStore");
  },
});

export const addIncome = async (key, data) =>
  (await database).put("incomeStore", data, key);

export const addExpense = async (key, data) =>
  (await database).put("expenseStore", data, key);

export const clearIncome = async () => {
  return (await database).clear("incomeStore");
};
export const clearExpense = async () => {
  return (await database).clear("expenseStore");
};

export const setPhoto = async (key, data) => {
  (await database).put("photoStore", data, key);
};
