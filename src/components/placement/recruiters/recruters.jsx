import {ShoppingBag,Wifi, Cpu, TrendingUp, ShoppingCart, BookOpen, Car,CreditCard, Home, Zap, Globe, Tv, Server, GraduationCap,Building,Heart, Rocket, Factory, Building2, Briefcase, Mail, ArrowRight } from 'lucide-react';
import styles from './recruters.module.css';
import { useState } from 'react';
import { useHashScroll } from "../../hooks/useHashScroll.js"

const CompanyCard = ({ company, index }) => {
  useHashScroll(); 

  const [imageError, setImageError] = useState(false);

  return (
    <div id='recruiter' key={index} className={styles.companyCard}>
      <div className={styles.companyLogoWrapper}>
        {!imageError ? (
          <img
            src={company.logoPath}
            alt={`${company.name} logo`}
            className={styles.companyLogo}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.companyNameFallback}>
            {company.name.split(' ')[0]}
          </div>
        )}
      </div>
      <div className={styles.companyName}>{company.name}</div>
    </div>
  );
};

const CategorySection = ({ category }) => (
  <section className={styles.categorySection}>
    <div className={styles.categoryHeader}>
      <div className={styles.categoryIcon}>{category.icon}</div>
      <h2 className={styles.categoryTitle}>{category.title}</h2>
    </div>

    <div className={styles.companiesGrid}>
      {category.companies.map((company, index) => (
        <CompanyCard key={index} company={company} index={index} />
      ))}
    </div>
  </section>
);

const recruitersData = [
  {
    title: "Tech & Product Companies",
    icon: <Cpu size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Adobe", logoPath: "images/placement/tech/adobe.webp" },
      { name: "Airveda Technologies", logoPath: "images/placement/tech/airveda.webp" },
      { name: "Amazon", logoPath: "images/placement/tech/amazon.webp" },
      { name: "Antino Labs", logoPath: "images/placement/tech/antino.webp" },
      { name: "Bit Solve Technologies", logoPath: "images/placement/tech/bit.webp" },
      { name: "Cisco Systems", logoPath: "images/placement/tech/cisco.webp" },
      { name: "Cloudshope", logoPath: "images/placement/tech/cloudshope.webp" },
      { name: "Crank Technologies", logoPath: "images/placement/tech/crank.webp" },
      { name: "Dhwani", logoPath: "images/placement/tech/dhwani.webp" },
      { name: "1Digitalstack.ai", logoPath: "images/placement/tech/1digital.webp" },
      { name: "Droom Technologies", logoPath: "images/placement/tech/droom.webp" },
      { name: "Dv2Js Innovation", logoPath: "images/placement/tech/dv2js.webp" },
      { name: "E2E Networks", logoPath: "images/placement/tech/e2e.webp" },
      { name: "Ericsson", logoPath: "images/placement/tech/ericsson.webp" },
      { name: "Flipkart", logoPath: "images/placement/tech/flipkart.webp" },
      { name: "FuelBuddy", logoPath: "images/placement/tech/fuelbuddy.webp" },
      { name: "Google", logoPath: "images/placement/tech/google.webp" },
      { name: "Innovaccer", logoPath: "images/placement/tech/innovaccer.webp" },
      { name: "Josh Technology", logoPath: "images/placement/tech/josh.webp" },
      { name: "LG", logoPath: "images/placement/tech/lg.webp" },
      { name: "MEDIATEK", logoPath: "images/placement/tech/mediatek.webp" },
      { name: "Media.net", logoPath: "images/placement/tech/medianet.webp" },
      { name: "Mobiurja Innovation", logoPath: "images/placement/tech/mobiurja.webp" },
      { name: "NEWGEN", logoPath: "images/placement/tech/newgen.webp" },
      { name: "Petmojo", logoPath: "images/placement/tech/petmojo.webp" },
      { name: "Samsung India", logoPath: "images/placement/tech/samsung.webp" },
      { name: "Siemens", logoPath: "images/placement/tech/siemens.webp" },
      { name: "Sirion Labs", logoPath: "images/placement/tech/sirion.webp" },
      { name: "SOTI", logoPath: "images/placement/tech/soti.webp" },
      { name: "STMicroelectronics", logoPath: "images/placement/tech/stmicroelectronics.webp" },
      { name: "Swiggy Instamart", logoPath: "images/placement/tech/swiggy.webp" },
      { name: "THALES", logoPath: "images/placement/tech/thales.webp" },
      { name: "TOSHIBA", logoPath: "images/placement/tech/toshiba.webp" },
      { name: "Uber", logoPath: "images/placement/tech/uber.webp" },
      { name: "Walmart", logoPath: "images/placement/tech/walmart.webp" },
      { name: "Yellow.ai", logoPath: "images/placement/tech/yellow.webp" },
      { name: "ZeroBug Solutions", logoPath: "images/placement/tech/zerobug.webp" },
      { name: "ZoloStays", logoPath: "images/placement/tech/zolostays.webp" },
      { name: "Zopsmart Technology", logoPath: "images/placement/tech/zopsmart.webp" },
    ],
  },
  {
    title: "IT Services & Consulting",
    icon: <Server size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Accenture", logoPath: "images/placement/it/accenture.webp" },
      { name: "Atos Syntel", logoPath: "images/placement/it/atos.webp" },
      { name: "Birlasoft", logoPath: "images/placement/it/birlasoft.webp" },
      { name: "Bravura solutions", logoPath: "images/placement/it/brevura.webp" },
      { name: "Bytecode Technology", logoPath: "images/placement/it/bytecode.webp" },
      { name: "Capgemini", logoPath: "images/placement/it/capgemini.webp" },
      { name: "Centelli", logoPath: "images/placement/it/centelli.webp" },
      { name: "Codec Networks", logoPath: "images/placement/it/codec.webp" },
      { name: "Coforge", logoPath: "images/placement/it/coforge.webp" },
      { name: "Cognizant", logoPath: "images/placement/it/cognizant.webp" },
      { name: "Damco Solutions", logoPath: "images/placement/it/damco.webp" },
      { name: "Digitlay Infotech", logoPath: "images/placement/it/digitlay.webp" },
      { name: "EXL", logoPath: "images/placement/it/exl.webp" },
      { name: "eWeblink Technology", logoPath: "images/placement/it/eweblink.webp" },
      { name: "Gemini Solutions", logoPath: "images/placement/it/gemini.webp" },
      { name: "HCL Tech", logoPath: "images/placement/it/hcl.webp" },
      { name: "Hackveda", logoPath: "images/placement/it/hackveda.webp" },
      { name: "Ibuzz Tech Solutions", logoPath: "images/placement/it/ibuzz.webp" },
      { name: "Infoedge", logoPath: "images/placement/it/infoedge.webp" },
      { name: "Infogain", logoPath: "images/placement/it/infogain.webp" },
      { name: "Infowiz Software", logoPath: "images/placement/it/infowiz.webp" },
      { name: "Infosys", logoPath: "images/placement/it/infosys.webp" },
      { name: "Innefu Labs", logoPath: "images/placement/it/innefu.webp" },
      { name: "Innodata India", logoPath: "images/placement/it/innodata.webp" },
      { name: "Intellipaat", logoPath: "images/placement/it/intellipaat.webp" },
      { name: "Intellohire", logoPath: "images/placement/it/intellohire.webp" },
      { name: "ION Group", logoPath: "images/placement/it/ion.webp" },
      { name: "KPMG India", logoPath: "images/placement/it/kpmg.webp" },
      { name: "L&T Technology Services", logoPath: "images/placement/it/l&t.webp" },
      { name: "MAQ Software", logoPath: "images/placement/it/maq.webp" },
      { name: "MSys Technologies", logoPath: "images/placement/it/msys.webp" },
      { name: "Nagarro", logoPath: "images/placement/it/nagarro.webp" },
      { name: "PureSoftware", logoPath: "images/placement/it/puresoftware.webp" },
      { name: "QA Infotech", logoPath: "images/placement/it/qa.webp" },
      { name: "TCS", logoPath: "images/placement/it/tcs.webp" },
      { name: "Tech Mahindra", logoPath: "images/placement/it/techmahindra.webp" },
      { name: "Techsteck Solutions", logoPath: "images/placement/it/techsteck.webp" },
      { name: "To The New", logoPath: "images/placement/it/to.webp" },
      { name: "Unthinkable Solutions", logoPath: "images/placement/it/unthinkable.webp" },
      { name: "Wipro", logoPath: "images/placement/it/wipro.webp" },
      { name: "YASH Technologies", logoPath: "images/placement/it/yash.webp" },
      { name: "Zensar Technologies", logoPath: "images/placement/it/zensar.webp" },
      { name: "ZS Associates", logoPath: "images/placement/it/zs.webp" },
    ],
  },
  {
    title: "Automotive & Transportation",
    icon: <Car size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Ashok Leyland", logoPath: "images/placement/automotive/ashok.webp" },
      { name: "Hero Motors", logoPath: "images/placement/automotive/hero.webp" },
      { name: "HMC MM Auto Ltd.", logoPath: "images/placement/automotive/hmc.webp" },
      { name: "Honda Group", logoPath: "images/placement/automotive/honda.webp" },
      { name: "JBM Group", logoPath: "images/placement/automotive/jbm.webp" },
      { name: "Maruti Suzuki", logoPath: "images/placement/automotive/maruti.webp" },
      { name: "Triumph Motorcycles", logoPath: "images/placement/automotive/triumph.webp" },
      { name: "TVS Motor", logoPath: "images/placement/automotive/tvs.webp" },
      { name: "Wheelseye", logoPath: "images/placement/automotive/wheelseye.webp" },
      { name: "Yamaha Motors", logoPath: "images/placement/automotive/yamaha.webp" },
    ],
  },
  {
    title: "BFSI & Financial Services",
    icon: <CreditCard size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Agile Capital Services", logoPath: "images/placement/bfsi/agile.webp" },
      { name: "Axis Bank", logoPath: "images/placement/bfsi/axis.webp" },
      { name: "BNY Mellon", logoPath: "images/placement/bfsi/bny.webp" },
      { name: "Equentis Wealth Advisory", logoPath: "images/placement/bfsi/equentis.webp" },
      { name: "Goldman Sachs", logoPath: "images/placement/bfsi/goldman.webp" },
      { name: "GripInvest", logoPath: "images/placement/bfsi/grip.webp" },
      { name: "HDFC Bank", logoPath: "images/placement/bfsi/hdfc.webp" },
      { name: "ICICI Bank", logoPath: "images/placement/bfsi/icici.webp" },
      { name: "JP Morgan Chase", logoPath: "images/placement/bfsi/jpmc.webp" },
      { name: "Metfin World", logoPath: "images/placement/bfsi/metfin.webp" },
      { name: "Morgan Stanley", logoPath: "images/placement/bfsi/morgan.webp" },
      { name: "Mudraksh & McShaw Advisory", logoPath: "images/placement/bfsi/mudraksh.webp" },
      { name: "Principal Financial", logoPath: "images/placement/bfsi/principal.webp" },
      { name: "Rupeek Fintech", logoPath: "images/placement/bfsi/rupeek.webp" },
    ],
  },
  {
    title: "Consulting & Professional Services",
    icon: <Briefcase size={20} strokeWidth={2.5} />,
    companies: [
      { name: "AuthBridge Research", logoPath: "images/placement/consulting/authbridge.webp" },
      { name: "Firstsource", logoPath: "images/placement/consulting/firstsource.webp" },
      { name: "InfoEdge", logoPath: "images/placement/consulting/infoedge.webp" },
      { name: "Investwell", logoPath: "images/placement/consulting/investwell.webp" },
      { name: "Knight Frank India", logoPath: "images/placement/consulting/knight.webp" },
      { name: "KPMG India", logoPath: "images/placement/consulting/kpmg.webp" },
      { name: "Matrix Business Services", logoPath: "images/placement/consulting/matrix.webp" },
      { name: "Perceptiviti", logoPath: "images/placement/consulting/perceptiviti.webp" },
      { name: "Professional Utilities", logoPath: "images/placement/consulting/professional.webp" },
      { name: "Progist Solutions", logoPath: "images/placement/consulting/progist.webp" },
      { name: "Tata Consultancy Services", logoPath: "images/placement/consulting/tatac.webp" },
      { name: "TestingXperts", logoPath: "images/placement/consulting/testingxperts.webp" },
      { name: "Verifacts Group", logoPath: "images/placement/consulting/veri.webp" },
    ],
  },
  {
    title: "EdTech & Learning",
    icon: <BookOpen size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Academor", logoPath: "images/placement/edtech/academor.webp" },
      { name: "BYJU'S", logoPath: "images/placement/edtech/byjus.webp" },
      { name: "Career Launcher", logoPath: "images/placement/edtech/career.webp" },
      { name: "Chegg", logoPath: "images/placement/edtech/chegg.webp" },
      { name: "Corizo Edutech", logoPath: "images/placement/edtech/corizo.webp" },
      { name: "eLitmus", logoPath: "images/placement/edtech/elitmus.webp" },
      { name: "Jaro Education", logoPath: "images/placement/edtech/jaro.webp" },
      { name: "MyCaptain", logoPath: "images/placement/edtech/mycaptain.webp" },
      { name: "PlanetSpark", logoPath: "images/placement/edtech/planet.webp" },
      { name: "SRVA Education (EdTech)", logoPath: "images/placement/edtech/srva.webp" },
      { name: "Teachnook", logoPath: "images/placement/edtech/teachnook.webp" },
      { name: "Uolo EdTech", logoPath: "images/placement/edtech/uolo.webp" },
      { name: "Wayspire EdTech", logoPath: "images/placement/edtech/wayspire.webp" },
      { name: "weskill", logoPath: "images/placement/edtech/weskill.webp" },
    ],
  },
  {
    title: "Energy & Environment",
    icon: <Zap size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Airveda Technologies", logoPath: "images/placement/energy/airveda.webp" },
      { name: "Envitech Green Solutions", logoPath: "images/placement/energy/egs.webp" },
      { name: "FuelBuddy", logoPath: "images/placement/energy/fuelbuddy.webp" },
      { name: "GAIL India", logoPath: "images/placement/energy/gail.webp" },
      { name: "Gemco Energy", logoPath: "images/placement/energy/gemco.webp" },
      { name: "Gensol Group", logoPath: "images/placement/energy/gensol.webp" },
      { name: "Metalex Cryogenics", logoPath: "images/placement/energy/metalex.webp" },
      { name: "Mobiurja Innovation", logoPath: "images/placement/energy/mobiurja.webp" },
      { name: "SAEL Renewable Energy", logoPath: "images/placement/energy/sael.webp" },
      { name: "UPC Solar India", logoPath: "images/placement/energy/upc.webp" },
    ],
  },
  {
    title: "Engineering & Manufacturing",
    icon: <Factory size={20} strokeWidth={2.5} />,
    companies: [
      { name: "ABB Group", logoPath: "images/placement/engineering/abb.webp" },
      { name: "Ashok Leyland", logoPath: "images/placement/engineering/ashok.webp" },
      { name: "Berger Paints", logoPath: "images/placement/engineering/berger.webp" },
      { name: "Blue Star", logoPath: "images/placement/engineering/blue.webp" },
      { name: "Bosch", logoPath: "images/placement/engineering/bosch.webp" },
      { name: "Carrier Airconditioning", logoPath: "images/placement/engineering/carrier.webp" },
      { name: "Dabur India", logoPath: "images/placement/engineering/dabur.webp" },
      { name: "Denso India", logoPath: "images/placement/engineering/denso.webp" },
      { name: "Escorts Kubota", logoPath: "images/placement/engineering/escorts.webp" },
      { name: "ETA Engineering", logoPath: "images/placement/engineering/eta.webp" },
      { name: "GAIL India", logoPath: "images/placement/engineering/gail.webp" },
      { name: "GKN Driveline", logoPath: "images/placement/engineering/gkn.webp" },
      { name: "Haier Appliances", logoPath: "images/placement/engineering/haier.webp" },
      { name: "Havells", logoPath: "images/placement/engineering/havells.webp" },
      { name: "Hindware", logoPath: "images/placement/engineering/hindware.webp" },
      { name: "JCB India", logoPath: "images/placement/engineering/jcb.webp" },
      { name: "Jindal Steel & Power", logoPath: "images/placement/engineering/jindal.webp" },
      { name: "JSW Group", logoPath: "images/placement/engineering/jsw.webp" },
      { name: "LIXIL", logoPath: "images/placement/engineering/lixil.webp" },
      { name: "Lumax", logoPath: "images/placement/engineering/lumax.webp" },
      { name: "Mahle Anand", logoPath: "images/placement/engineering/mahle.webp" },
      { name: "Motherson Group", logoPath: "images/placement/engineering/motherson.webp" },
      { name: "Orient Electric", logoPath: "images/placement/engineering/orient.webp" },
      { name: "Relaxo Footwears", logoPath: "images/placement/engineering/relaxo.webp" },
      { name: "Schneider Electric", logoPath: "images/placement/engineering/schneider.webp" },
      { name: "Swaraj Tractors", logoPath: "images/placement/engineering/swaraj.webp" },
      { name: "TATA Motors", logoPath: "images/placement/engineering/tata.webp" },
      { name: "UNO Minda", logoPath: "images/placement/engineering/uno.webp" },
      { name: "Whirlpool India", logoPath: "images/placement/engineering/whirlpool.webp" },
    ],
  },
  {
    title: "Government & PSU",
    icon: <Building size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Centre for Development of Advanced Computing (CDAC)", logoPath: "images/placement/government/cdac.webp" },
      { name: "Centre for Development of Telematics (CDOT)", logoPath: "images/placement/government/cdot.webp" },
      { name: "Defence Institute of Advanced Technology (DIAT)", logoPath: "images/placement/government/diat.webp" },
      { name: "Dedicated Freight Corridor Corporation of India Limited (DFCCIL)", logoPath: "images/placement/government/dfccil.webp" },
      { name: "Defence Research and Development Organisation (DRDO)", logoPath: "images/placement/government/drdo.webp" },
      { name: "Indian Oil (R&D)", logoPath: "images/placement/government/indianoil.webp" },
      { name: "Indian Space Research Organisation ISRO)", logoPath: "images/placement/government/isro.webp" },
      { name: "National Power Training Institute", logoPath: "images/placement/government/npti.webp" },
      { name: "National Buildings Construction Corporation (NBCC)", logoPath: "images/placement/government/nbcc.webp" },
      { name: "Nagarjuna Construction Company (NCC)", logoPath: "images/placement/government/ncc.webp" },
      { name: "Rail India Technical and Economic Service (RITES)", logoPath: "images/placement/government/rites.webp" },
    ],
  },
  {
    title: "Healthcare & Pharma",
    icon: <Heart size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Apollo Hospitals", logoPath: "images/placement/healthcare/apollo.webp" },
      { name: "DOC Healthcare", logoPath: "images/placement/healthcare/doc.webp" },
      { name: "Dabur India", logoPath: "images/placement/healthcare/dabur.webp" },
      { name: "Docquity Services", logoPath: "images/placement/healthcare/docquity.webp" },
      { name: "Himalayan Institute (HIAL)", logoPath: "images/placement/healthcare/himalayan.webp" },
      { name: "Invo Medics", logoPath: "images/placement/healthcare/invo.webp" },
      { name: "Medtronic India", logoPath: "images/placement/healthcare/medtronic.webp" },
      { name: "Pawan Hospital Group", logoPath: "images/placement/healthcare/pawan.webp" },
      { name: "Universe Capsules Biotech", logoPath: "images/placement/healthcare/universe.webp" },
      { name: "Yashoda Group", logoPath: "images/placement/healthcare/yashoda.webp" },
    ],
  },
  {
    title: "Media & Entertainment",
    icon: <Tv size={20} strokeWidth={2.5} />,
    companies: [
      { name: "ABC News", logoPath: "images/placement/media/abc.webp" },
      { name: "ABP Network", logoPath: "images/placement/media/abp.webp" },
      { name: "Bharat24", logoPath: "images/placement/media/bharat.webp" },
      { name: "City24 News", logoPath: "images/placement/media/city24.webp" },
      { name: "Hindustan Tehelka", logoPath: "images/placement/media/hindustan.webp" },
      { name: "India Today Group", logoPath: "images/placement/media/indiay.webp" },
      { name: "The Press Trust of India", logoPath: "images/placement/media/pti.webp" },
      { name: "Thomson Press India", logoPath: "images/placement/media/tp.webp" },
      { name: "Times Network", logoPath: "images/placement/media/times.webp" },
      { name: "TV9 Bharatvarsh", logoPath: "images/placement/media/tv9.webp" },
      { name: "Zee Media", logoPath: "images/placement/media/zee.webp" },
    ],
  },
  {
    title: "Telecom & Infrastructure",
    icon: <Wifi size={20} strokeWidth={2.5} />,
    companies: [
      { name: "Airtel", logoPath: "images/placement/telecom/airtel.webp" },
      { name: "BPTP Group", logoPath: "images/placement/telecom/bptp.webp" },
      { name: "Ciena", logoPath: "images/placement/telecom/ciena.webp" },
      { name: "DLF Group", logoPath: "images/placement/telecom/dlf.webp" },
      { name: "HFCL", logoPath: "images/placement/telecom/hfcl.webp" },
      { name: "Jio", logoPath: "images/placement/telecom/jio.webp" },
      { name: "Mavenir", logoPath: "images/placement/telecom/mavenir.webp" },
      { name: "MRG World", logoPath: "images/placement/telecom/mrg.webp" },
      { name: "NBCC India", logoPath: "images/placement/telecom/nbcc.webp" },
      { name: "NCC Limited", logoPath: "images/placement/telecom/ncc.webp" },
      { name: "URC Construction", logoPath: "images/placement/telecom/urc.webp" },
      { name: "Vodafone Idea", logoPath: "images/placement/telecom/vi.webp" },
    ],
  },
];

const Recruiters = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <span className={styles.badge}>OUR PARTNERS</span>
        <h1 className={styles.heroTitle}>Our Esteemed Recruiters</h1>
        <p className={styles.heroSubtitle}>
          Building partnerships with industry leaders across diverse sectors
        </p>
      </div>

      {/* Content Wrapper */}
      <div className={styles.contentWrapper}>
        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Building2 size={28} strokeWidth={2} />
              </div>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Partner Companies</div>
              <div className={styles.statSubtext}>Fortune 500 & Startups</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <TrendingUp size={28} strokeWidth={2} />
              </div>
              <div className={styles.statValue}>₹24 LPA</div>
              <div className={styles.statLabel}>Highest Package</div>
              <div className={styles.statSubtext}>2023-24 Session</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Briefcase size={28} strokeWidth={2} />
              </div>
              <div className={styles.statValue}>95%</div>
              <div className={styles.statLabel}>Placement Rate</div>
              <div className={styles.statSubtext}>Consistent Performance</div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {recruitersData.map((category, index) => (
          <CategorySection key={index} category={category} />
        ))}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIconWrapper}>
              <Mail size={32} strokeWidth={2} />
            </div>
            <h3 className={styles.ctaTitle}>Interested in Recruiting?</h3>
            <p className={styles.ctaSubtitle}>
              Join our network of esteemed recruiters and hire top talent from JCBUST
            </p>
            <a href="mailto:placement@jcbust.ac.in" className={styles.ctaButton}>
              Contact T&P Cell
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recruiters;