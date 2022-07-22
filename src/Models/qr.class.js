import QRCode from "qrcode";

export class Qr {
  link = "";
  title = "";
  img = {
    src: "",
    primaryColor: "",
    secondaryColor: "",
  };

  constructor(title, link, primaryColor, secondaryColor) {
    this.title = title;
    this.link = link;
    this.img.primaryColor = primaryColor;
    this.img.secondaryColor = secondaryColor;
  }

  generateQR() {
    QRCode.toDataURL(
      this.link,
      {
        type: "image/png",
        margin: 1,
        quality: 1,
        color: {
          dark: this.img.primaryColor || "#000000",
          light: this.img.secondaryColor || "#ffffff",
        },
      },
      (error, img) => {
        if (error) throw error;
        this.img.src = img;
      }
    );
  }

  print() {
    console.log(this);
  }
}
