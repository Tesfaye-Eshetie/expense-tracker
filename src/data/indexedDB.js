import { openDB } from "idb";

export const database = openDB("capstoneDB", 1, {
  upgrade(db) {
    db.createObjectStore("incomeStore");
    db.createObjectStore("expenseStore");
  },
});

export const addIncome = async (key, data) =>
  (await database).put("incomeStore", data, key);

export const addExpense = async (key, data) =>
  (await database).put("expenseStore", data, key);
