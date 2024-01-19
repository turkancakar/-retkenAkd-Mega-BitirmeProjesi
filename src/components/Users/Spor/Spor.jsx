import img from "../../../assets/img/65.jpeg";

const Spor = () => {
  return (
    <div>
      {" "}
      <section id="about" className="about">
        <br></br>
        <br></br>
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
              <h3 className="fst-italic">YAZ DÖNEMİ SPOR OKULU</h3>
              <hr></hr>
              <h3 className="fst-italic">
                Meram’da Şampiyon Sporcuları Yetişiyor
              </h3>
              <p className="fst-italic">
                Günümüz koşullarında çocukların ve gençlerin iyi bir birey
                olarak yetişmesinde; İnternet, televizyon ve bilgisayar oyunları
                gibi eğlencelerin kişileri hareketsiz hale getirdiği dönemde
                obezite riskini azaltacak sağlıklı bir hayata devam edecekleri
                Yaz Spor Okullarımız ilçemiz çocukları için kurulmuştur{" "}
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Bunun için
                  öğrencilerde spor ve spor sorunlarına karşı farkındalık
                  oluşturmak, doğanın işleyişi ile ilgili temel bilgi ve
                  anlayışı geliştirmek
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Spor ilgili sorunları
                  tanımlama, araştırma ve çözme becerileri edinilmesini sağlamak
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Spor ile iç içe
                  öğrenmeler sağlamak amacıyla KOP Doğa Okulu’nda doğayla uyumlu
                  ortamlar oluşturulmuştur.
                </li>
              </ul>
              <p>
                Yaz Spor Eğitim Okulu kapsamında, eğitim müfredatında yer alan
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

export default Spor;
