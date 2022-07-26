import Dexie from "dexie";

export const db = new Dexie("QRGenerator");

db.version(1).stores({
  qr: "++id,link,title,titleColor,primaryColor,secondaryColor",
  user: "++id,name,email,password",
});

// Initial info for the database
db.user.clear();
db.user.add({
  name: "admin",
  email: "mail@mail.com",
  password: "123456",
});
