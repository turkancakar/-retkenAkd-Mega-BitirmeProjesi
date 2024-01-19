import img from "../../../assets/img/865302.jpeg";

const Science = () => {
  return (
    <div className="traffic">
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
              <h3 className="fst-italic">BİLİM KURDU</h3>
              <hr></hr>
              <h3 className="fst-italic">Bilimin Dilinden </h3>
              <p className="fst-italic">
                Milli teknoloji hamlesi kapsamında üç yıldır belediyemizin
                okullarda yürüttüğü Bilim Kurdu projesi çalışmalarının daha
                kapsamlı ve sistemli olması için üniversite ve milli eğitim
                müdürlüğü ortaklığı ile planlanmış spesifik bir projedir. Proje
                kapsamında 2021 yılı itibari ile gerçekleştirilmesi hedeflenen
                milli teknoloji istasyonu hem teorik hem de pratik eğitimlerin
                profesyonel olarak uygulanacağı ve yarışma takımlarının
                yetiştirileceği bir program olarak tasarlanmaktadır{" "}
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Bunun için
                  öğrencilerde bilim ve teknoloji sorunlarına karşı farkındalık
                  oluşturmak, doğanın işleyişi ile ilgili temel bilgi ve
                  anlayışı geliştirmek
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Bilim ile ilgili
                  sorunları tanımlama, araştırma ve çözme becerileri
                  edinilmesini sağlamak
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Ülkemizin dışa
                  bağımlılığını azaltmak için geliştirdiği milli teknoloji
                  strateji eylem planına uygun olarak gerçekleştirdiğimiz Bilim
                  Kurdu Projemizin KOP aracılığı ve işbirliği ile daha üst
                  düzeye taşınmasını amaçlamaktayız.
                </li>
              </ul>
              <p>
                2020 yılı Teknofest ve Tübitak proje yarışmalarında Türkiye
                birinciliği ve ikinciliği alan proje öğrencilerimizin sayısının
                daha da artması için projemizi ciddi bir ihtiyaç olarak
                görmekteyiz. Tüm öğrencilere bilhassa üstün yetenekli
                çocuklarımıza; tıp, astronomi, ziraat, mühendislik, robotik,
                matematik gibi bilimleri ve islam bilim adamları tarihini yayın,
                üniversite uygulamaları, bilgi yarışmaları, bilim münazaraları,
                akıl zeka oyunları desteği ile öğreterek milli ve özgüvenli bir
                nesil yetiştirmek.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </div>
  );
};

export default Science;
