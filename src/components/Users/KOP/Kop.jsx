import img from "../../../assets/img/88.jpeg";
import "./Kop.css";

const Kop = () => {
  return (
    <div>
      {" "}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2 "
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src={img} className="img-fluid image" alt="" />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 paragraf order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="fst-italic">KOP DOĞA OKULU</h3>
              <hr></hr>
              <h3 className="fst-italic">Doğanın dilini öğren…</h3>
              <p className="fst-italic">
                Doğa üzerine bilgi edinmek, onu tanımakla mümkündür. Doğayı
                keşfetmek ve doğaya karşı olumlu davranışlar sergilemek adına
                doğa eğitimleri gerçekleştirmek için oluşturulan KOP Doğa Okulu
                ile öğrencilere doğanın dilini öğretmek hedeflenmiştir.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Bunun için
                  öğrencilerde doğa ve doğa sorunlarına karşı farkındalık
                  oluşturmak, doğanın işleyişi ile ilgili temel bilgi ve
                  anlayışı geliştirmek
                </li>
                <li>
                  <i className="ri-check-double-line"></i> doğayla ilgili
                  sorunları tanımlama, araştırma ve çözme becerileri
                  edinilmesini sağlamak
                </li>
                <li>
                  <i className="ri-check-double-line"></i> doğayla iç içe
                  öğrenmeler sağlamak amacıyla KOP Doğa Okulu’nda doğayla uyumlu
                  ortamlar oluşturulmuştur.
                </li>
              </ul>
              <p>
                Kop Doğa Okulu kapsamında, eğitim müfredatında yer alan
                kazanımlar, okul dışı öğrenme ortamlarında yapılan etkinliklerle
                eşleştirilerek öğrenme süreci devam ettirilmekte ve öğrenciler
                uygulamalar esnasında öğrenme sürecine aktif olarak dâhil
                edilmektedir.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </div>
  );
};

export default Kop;
