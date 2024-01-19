import "./Traffic.css";
import img from "../../../assets/img/09.jpeg";

const Traffic = () => {
  return (
    <div className="traffic">
      <br></br>
      <br></br>{" "}
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
              <h3 className="fst-italic">TRAFİK EĞİTİM PARKI</h3>
              <hr></hr>
              <h3 className="fst-italic">Trafiği Uygulamalı Öğreniyorum</h3>
              <p className="fst-italic">
                Trafik, günümüz yaşamında şehirlerin en büyük ortak sorunu
                haline geldi. Saygı, eğitim ve bilinçli olmak trafikte huzuru
                sağlamak adına sayabileceğimiz en önemli unsurlardandır. Bu
                unsurların erken çocukluk döneminde öğrenilmesi, onların kendini
                kazalardan korumasına, trafiği düzgün kurallı kullanan ve düzene
                sokan yetişkin olmaları yolunda hazırlamaktır.{" "}
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Bunun için
                  öğrencilerde trafik ve trafik sorunlarına karşı farkındalık
                  oluşturmak, doğanın işleyişi ile ilgili temel bilgi ve
                  anlayışı geliştirmek
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Trafik ilgili
                  sorunları tanımlama, araştırma ve çözme becerileri
                  edinilmesini sağlamak
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Trafik ile iç içe
                  öğrenmeler sağlamak amacıyla KOP Doğa Okulu’nda doğayla uyumlu
                  ortamlar oluşturulmuştur.
                </li>
              </ul>
              <p>
                Trafik Eğitim Okulu kapsamında, eğitim müfredatında yer alan
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

export default Traffic;
