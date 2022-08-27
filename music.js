class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName(){
    return this.title + " - " + this.singer;
  }


}


const musicList = [
    new Music("Kalbim Hep Aynı Çukurda","Cem Adrian-Gazapizm","cem_adrian_gazapizm.jpg","Cem_Adrian_Gazapizm_Kalbim_Cukurda.mp3"),
    new Music("Saçlarını Yol Getir","Kıvanç Tatlıtuğ","kıvanc.jpg","Kıvanc_Tatlitug_Saclarini_Yol_Getir.mp3"),
    new Music("Baba","Diyar Pala","diyar_pala.jpg","Diyar_Pala_Baba.mp3")
]
