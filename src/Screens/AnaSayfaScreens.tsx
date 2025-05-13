import AnaSayfaCarousel from "../components/AnaSayfaCarousel";
import AnaSayfaMenuComponent from "../components/AnaSayfaMenuComponent";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import IstirakComponent from "../components/IstirakComponent";
import LocationViewer from "../components/LocationViewer";
import MusteriYorumlari from "../components/MusteriYorumlari";


export default function AnaSayfaScreen(){

    return(
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Header />
          <div style={{height: 100}}></div>
          <div className="responsive-container-column-to-row">
          <AnaSayfaCarousel />
          <div>
            <h3
              style={{
                textAlign: "left",
                color: "#ffc300",
                marginTop: 32,
                marginBottom: 0,
                fontFamily: "serif"
              }}
            >Hakkımızda</h3>
            <h2
               style={{
                padding: 0,
                 margin: 0,
            
                 fontWeight: "bold",
                 textAlign: "left",
                 
              }}
            >Çorum'un Gece Lezzeti, Sizin İçin!</h2>
            <h4
               style={{
                marginTop: 8,
               fontWeight: "400",
               textAlign: "left"
              }}
            >
              Murat Et Gece Dönercisi, Çorum'un kalbinde, gece geç saatlere kadar açık olan nadir dönercilerden biridir. Her gün taze hazırlanan, %100 dana etinden yapılan dönerimizle, lezzet tutkunlarına unutulmaz bir tat sunuyoruz.

              <br/><br/>📍 İnönü Caddesi üzerindeki merkezi konumumuz sayesinde kolay ulaşım imkânı sunuyoruz.
<br/><br/>🍴 Yerinde sıcak servis, hızlı paket servis ve bol malzemeli dürümlerle hizmetinizdeyiz.
<br/><br/>🌙 Gece acıkanların vazgeçilmez adresi: “Gece döneri başka olur” diyenlerin favorisi!</h4>
           <div style={{display: "flex", minHeight: 200, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}} >
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src="murat-et-gece-donercisi/a-feature_1_1-1.svg" style={{height: 64, width: 64, alignSelf: "center"}} />
              <h3>LEZZET</h3>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src="murat-et-gece-donercisi/a-feature_1_2-1.svg" style={{height: 64, width: 64, alignSelf: "center"}} />
              <h3>TAZELİK</h3>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src="murat-et-gece-donercisi/a-feature_1_1-1.svg" style={{height: 64, width: 64, alignSelf: "center"}} />
              <h3>MEMNUNİYET</h3>
            </div>
          </div>
          </div>
          </div>
          <AnaSayfaMenuComponent />
          <div className="responsive-container-column-to-row">
            <InfoCard
              title="LEZZET GARANTİSİ"
              description="Taze ve özenle hazırlanan dönerlerimizle lezzet garantisi sunuyoruz."
              bgClass="bg-red"
            />
            <InfoCard
              title="HIZLI SERVİS"
              description="Gece boyunca hızlı ve kaliteli hizmet. Aç kalmadan döner keyfini çıkarın!"
              bgClass="bg-yellow"
            />
            <InfoCard
              title="GELENEKSEL TAT"
              description="Geleneksel döner lezzetini en iyi malzemelerle sunuyoruz. Tadını çıkarın!"
              bgClass="bg-green"
            />
           </div>
          
           <IstirakComponent />
          <MusteriYorumlari />
          <LocationViewer />
          <ContactInfo />
          
          <Footer />
        </div>
      
    )

}