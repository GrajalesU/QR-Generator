import { v4 as uuidv4 } from "uuid";
export class Wallet {
  QRList = [];
  constructor(list) {
    this.QRList = list;
  }

  appendQR(qr) {
    this.QRList.push({ qr, index: uuidv4() });
  }

  removeQR(index) {
    this.QRList = this.QRList.filter((item) => item.index !== index);
  }

  getQR(index) {
    return this.QRList.find((item) => item.index === index);
  }

  putQR(index, qr) {
    this.QRList = this.QRList.map((item) => {
      if (item.index === index) {
        item.qr = qr;
      }
      return item;
    });
  }

  get QRList() {
    return this.QRList;
  }
}
