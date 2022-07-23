import QRCode from "qrcode";

export class Qr {
  link = "";
  title = {};
  titleColor = "#000000";
  img = {
    src: "",
    primaryColor: "#fff",
    secondaryColor: "#000",
  };

  constructor(title, link, primaryColor, secondaryColor, titleColor) {
    this.title = title;
    this.link = link;
    this.img.primaryColor = primaryColor;
    this.img.secondaryColor = secondaryColor;
    this.titleColor = titleColor;
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
