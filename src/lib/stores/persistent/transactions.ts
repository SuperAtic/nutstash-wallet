import type {  StoredTransaction } from "$lib/db/models/types";
import {  writable } from "svelte/store";
import { createDefaultStoreFunctions } from "./helper/storeHelper";
import { createEncryptionHelper } from "./helper/encryptionHelper";


const encryptionHelper = await createEncryptionHelper<StoredTransaction>("encrypted-transactions");

const createTransactionsStore = () => {
    const initialTransactions: Array<StoredTransaction> = [];
    const store = writable<Array<StoredTransaction>>(initialTransactions);
    const {set, subscribe, update} = store;
    const {addOrUpdate, remove, clear ,init ,reEncrypt ,reset, getBy, getAllBy} = createDefaultStoreFunctions(encryptionHelper, store);

    return {set, subscribe, update, addOrUpdate, remove, init, reset , clear , reEncrypt, getBy, getAllBy};
}
export const transactionsStore = createTransactionsStore();
