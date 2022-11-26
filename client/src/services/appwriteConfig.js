import {Client, Account, Databases, Storage } from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("638103fd71136b451201")

export const account = new Account(client)

const db_id = "{process.env.APPWRITE_DB}"

export const databases = new Databases(client, db_id)

const storage_id = "{process.env.APPWRITE_STORAGE}"

export const storage = new Storage(client, storage_id)

// const Appwrite = require("appwrite");

// let sdk  = new Appwrite();
// sdk
//   .setEndpoint("http://localhost/v1") 
//   .setProject("638103fd71136b451201")

// let response = sdk.locale.get();

// export {response};
