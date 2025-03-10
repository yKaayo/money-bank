import Client from "./Client";
import Account from "./Account";

export const client = new Client("Caio", "000.000.000-00");
export const account = new Account(["0000", "0000", "0000", "0000"], client, 0);
