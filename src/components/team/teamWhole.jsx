import { useState } from "react";
import { Search, Linkedin, Sparkles, Users } from "lucide-react";
import styles from "./EnhancedTeamPage.module.css";

const teams = ["Admin Team", "IT Team", "Outreach Team", "Design Team"];


const colorSchemes = [
  { primary: '#818cf8', secondary: '#a78bfa', accent: '#c4b5fd' }, 
  { primary: '#f472b6', secondary: '#fb7185', accent: '#fda4af' }, 
  { primary: '#fbbf24', secondary: '#fcd34d', accent: '#fde68a' }, 
  { primary: '#34d399', secondary: '#6ee7b7', accent: '#a7f3d0' }, 
  { primary: '#60a5fa', secondary: '#93c5fd', accent: '#bfdbfe' }, 
  { primary: '#f87171', secondary: '#fca5a5', accent: '#fecaca' }, 
  { primary: '#a78bfa', secondary: '#c4b5fd', accent: '#ddd6fe' }, 
  { primary: '#22d3ee', secondary: '#67e8f9', accent: '#a5f3fc' }, 
  { primary: '#fb923c', secondary: '#fdba74', accent: '#fed7aa' }, 
  { primary: '#2dd4bf', secondary: '#5eead4', accent: '#99f6e4' }, 
];

const members = [
  {
    id: "22001011015",
    name: "Bipul Kumar",
    pic: "bipul.png",
    role: "Secretary",
    branch: "B.Tech(IT)",
    year: "4th Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/bipul-kumar-697654255"
  },
  {
    id: "22001017023",
    name: "Harkiran Kaur",
    pic: "harkiran.png",
    role: "Secretary",
    branch: "B.Tech(EE(IOT))",
    year: "4th Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/harkiran-kaur-3622a226b/"
  },
  {
    id: "22001011033",
    name: "Kumar Arth",
    pic: "arth.png",
    role: "Secretary",
    branch: "B.Tech(IT)",
    year: "4th Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/kumar-arth-690765247"
  },
  // {
  //   id: 9,
  //   name: "Aryan Singh",
  //   pic: "aryan.png",
  //   role: "Placement Coordinator",
  //   branch: "Electical",
  //   // email: "singh322aryan@gmail.com",
  //   // phone: "+91 8278292185",
  //   year: "4th Year",
  //   team: "All Team",
  //   linkedin: "https://www.linkedin.com/in/aryan-singh-b470342b6/",
  // },

  // Joint Secretaries
  {
    id: "23001013010",
    name: "Aman",
    pic: "aman.png",
    role: "Joint Secretary",
    branch: "B.Tech(ME)",
    year: "3rd Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/aman-singal-ab1b59193"
  },
  {
    id: "23001016024",
    name: "Himanshu",
    pic: "himanshu.png",
    role: "Joint Secretary",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/himanshuverma192005/"
  },
  {
    id: "23001008032",
    name: "Mohit Tiwari",
    pic: "mohit_tiwari.png",
    role: "Joint Secretary",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/mohit-tiwari-9b7061294"
  },
  {
    id: "23001013107",
    name: "Saijal Singh",
    pic: "saijal.png",
    role: "Joint Secretary",
    branch: "B.Tech(ME)",
    year: "3rd Year",
    team: "All Team",
    linkedin: "https://www.linkedin.com/in/saijal-singh-a64399213"
  },
  {
    id: "23001016027",
    name: "Kanishk",
    pic: "kanishk.png",
    role: "Joint Secretary",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "All Team",
    linkedin: "http://linkedin.com/in/kanishkj0"
  },


  {
    id: "23001008045",
    name: "Raghvi",
    pic: "raghvi.png",
    role: "Coordinator Head",
    branch: "B.Tech(ECE)",
    year: "4th Year",
    team: "All Team",
    linkedin: "#"
  },


  {
    id: "23001008058",
    name: "Sandeep Kumar",
    pic: "sandeep.png",
    role: "Senior Coordinator",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "Admin Team, Outreach Team",
    linkedin: "https://www.linkedin.com/in/sandeepprasad349"
  },

  {
    id: "23001017071",
    name: "Naman Goel",
    pic: "naman.png",
    role: "Senior Coordinator",
    branch: "B.Tech(EE(IOT))",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/naman-goel-8a2737322"
  },

  {
    id: "24001753005",
    name: "Anjana",
    pic: "anjana.png",
    role: "Department Coordinator",
    branch: "M.Sc(Math)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "#"
  },
  {
    id: "22001050005",
    name: "Bhavya",
    pic: "bhavya.png",
    role: "Department Coordinator",
    branch: "B.Tech(CE)",
    year: "4th Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/bhavya-bansal-b4906124b/"
  },
  {
    id: "23001008022",
    name: "Isha Rani",
    pic: "isha.png",
    role: "Department Coordinator",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/isha-girdhar"
  },
  {
    id: "22001008023",
    name: "Jyotsna Rajya Bhatia",
    pic: "jyotsna.png",
    role: "Department Coordinator",
    branch: "B.Tech(ECE)",
    year: "4th Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/jyotsnarajyabhatia"
  },
  {
    id: "24001701078",
    name: "Monika",
    pic: "monika.png",
    role: "Department Coordinator",
    branch: "MBA",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/monika-bhardwaj-9562b0314"
  },
  {
    id: "22001013107",
    name: "Shivesh Singh",
    pic: "shivesh.png",
    role: "Department Coordinator",
    branch: "B.Tech(ME)",
    year: "4th Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/shiveshsinghh"
  },
  {
    id: "23001003126",
    name: "Sujit Yadav",
    pic: "sujit.png",
    role: "Department Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/sujit-yadav-47893a293"
  },
  {
    id: "22001013121",
    name: "Tanishq Agrawal",
    pic: "tanishq.png",
    role: "Department Coordinator",
    branch: "B.Tech(ME)",
    year: "4th Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/tanishq-agrawal-8ab988364"
  },
  {
    id: "23001003132",
    name: "Tanishttha Sehgal",
    pic: "tanishttha.png",
    role: "Department Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/tanishttha-sehgal-73555b287"
  },
  {
    id: "23001003136",
    name: "Vanshika",
    pic: "vanshika.png",
    role: "Department Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/vanshika-kataria"
  },
  {
    id: "23001016072",
    name: "Yashika Sharma",
    pic: "yashika.png",
    role: "Department Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/yashika-sharma-792802315"
  },

  {
    id: "23001011033",
    name: "Madhu",
    pic: "madhu.png",
    role: "Social Media Head",
    branch: "B.Tech(IT)",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/madhu-yadav-417149307"
  },
  {
    id: "23001017075",
    name: "Tannu",
    pic: "tannu.png",
    role: "Social Media Head",
    branch: "B.Tech(EE(IOT))",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/tannu-banwala-5832492a4"
  },

  {
    id: "22001016017",
    name: "Diya Gupta",
    pic: "diya.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "4th Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/diya-gupta-8806272a5"
  },
  {
    id: "22001050014",
    name: "Muskan",
    pic: "muskan.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "4th Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/muskan-08a6b1254"
  },

  // 3rd Year Student Coordinators
  {
    id: "23001016003",
    name: "Abhishek Singh",
    pic: "abhishek.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-26b6b8285"
  },
  {
    id: "23001011003",
    name: "Akhil Gupta",
    pic: "akhil.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/akhil-gupta-10b638273/"
  },
  {
    id: "23001003020",
    name: "Ayush Sharma",
    pic: "ayush.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/ayush-sharma-4a714b2b4"
  },
  {
    id: "23001003051",
    name: "Jatin Kumar",
    pic: "jatin.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/jatin-kumar-1629412b6"
  },
  {
    id: "23001016026",
    name: "Jigisha Saigal",
    pic: "jigisha.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/jigisha-saigal-375045298"
  },
  {
    id: "23001301029",
    name: "Muskan Dagar",
    pic: "muskan_dagar.png",
    role: "Student Coordinator",
    branch: "BBA",
    year: "3rd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/muskan-dagar-99514b29b"
  },
  {
    id: "23001008038",
    name: "Nidhi",
    pic: "nidhi.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/nidhi-baghel-a3466b309"
  },
  {
    id: "23001016049",
    name: "Ravi Chauhan",
    pic: "ravi.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/ravi-chauhan-44ba85290"
  },
  {
    id: "24001008507",
    name: "Riya Varshney",
    pic: "riya.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/riya-varshney-384785375"
  },
  {
    id: "23001003104",
    name: "Ronit Kataria",
    pic: "ronit.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/ronit-kataria-2025abc"
  },
  {
    id: "24001015507",
    name: "Shivam Kumar",
    pic: "shivam_kumar.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "3rd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/shivam-kumar-b60b8420a"
  },
  {
    id: "23001016062",
    name: "Tushar",
    pic: "tushar.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "3rd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/tushar-11b51a312"
  },
  {
    id: "23001011069",
    name: "Vanshita",
    pic: "vanshita.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "3rd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/vanshita-gandhi-74993b2a9"
  },

  {
    id: "24001050001",
    name: "Aastha Sharma",
    pic: "aastha.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(H))",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/aastha-sharma-as1705"
  },
  {
    id: "24001050005",
    name: "Ankit Yadav",
    pic: "ankit.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(H))",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/ankit-yadav-73a477346"
  },
  {
    id: "24001003009",
    name: "Anmol Kaul",
    pic: "anmol.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/anmol-kaul-39054b30b"
  },
  {
    id: "24001003020",
    name: "Ashu",
    pic: "ashu.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/ashu-sharma-61b590357"
  },
  {
    id: "24001017009",
    name: "Chanchal",
    pic: "chanchal.png",
    role: "Student Coordinator",
    branch: "B.Tech(EE(IOT))",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/chanchal-soni-26460b280"
  },
  {
    id: "24001002012",
    name: "Chetan Chaudhary",
    pic: "chetan.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/chetan-chaudhary-704902379"
  },
  {
    id: "24001003033",
    name: "Devansh Sharma",
    pic: "devansh.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/devansh-sharma-686357353"
  },
  {
    id: "24001015015",
    name: "Devang",
    pic: "devang.png",
    role: "Student Coordinator",
    branch: "B.Tech(ENC)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/devang-862342316"
  },
  {
    id: "24001008022",
    name: "Divesh Pandita",
    pic: "divesh.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/divesh-pandita-182660320"
  },
  {
    id: "24001007070",
    name: "Harish Sheoran",
    pic: "harish.png",
    role: "Student Coordinator",
    branch: "B.Tech(EE)",
    year: "2nd Year",
    team: "Admin Team, Design Team",
    linkedin: "https://www.linkedin.com/in/harish-sheoran-987029384"
  },
  {
    id: "24001003046",
    name: "Harsh Dhall",
    pic: "harsh.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/harsh-dhall-3b867a33a"
  },
  {
    id: "24001011025",
    name: "Hemant",
    pic: "hemant.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/hemant-nayak"
  },
  {
    id: "24001011029",
    name: "Jai Bhagwan",
    pic: "jai.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/jai-bhagwan-84b1022a9"
  },
  {
    id: "24001016030",
    name: "Jitin Sisodiya",
    pic: "jitin.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(DS))",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/jitin-sisodiya-2637ab306/"
  },
  {
    id: "24001003058",
    name: "Kajal",
    pic: "kajal.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/kajal-sindhu-736655313/"
  },
  {
    id: "24001011041",
    name: "Madhur Arora",
    pic: "madhur.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/madhur-arora-37269a349"
  },
  {
    id: "24001701075",
    name: "Mohit Gupta",
    pic: "mohit_gupta.png",
    role: "Student Coordinator",
    branch: "MBA",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/mohit-gupta-a60b5527a"
  },
  {
    id: "24001011048",
    name: "Nikhil Dagar",
    pic: "nikhil.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/nikhil-dagar-47078a353"
  },
  {
    id: "24001013079",
    name: "Pappu Kumar Sahu",
    pic: "pappu.png",
    role: "Student Coordinator",
    branch: "B.Tech(ME)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/pappu-kumar-sahu-a54845259"
  },
  {
    id: "24001008042",
    name: "Piyush Soni",
    pic: "piyush.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/piyush-soni-502251334"
  },
  {
    id: "24001015049",
    name: "Pratima",
    pic: "pratima.png",
    role: "Student Coordinator",
    branch: "B.Tech(ENC)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/pratima-pandey-250993316"
  },
  {
    id: "24001008048",
    name: "Prerna Sharma",
    pic: "prerna.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "2nd Year",
    team: "Outreach Team",
    linkedin: "https://www.linkedin.com/in/prerna-sharma-ab6251359"
  },
  {
    id: "24001011056",
    name: "Pushkar Saini",
    pic: "pushkar.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/pushkar-saini1706"
  },
  {
    id: "24001013100",
    name: "Sahil Jangra",
    pic: "sahil.png",
    role: "Student Coordinator",
    branch: "B.Tech(ME)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/sahil-j-7227ba301"
  },
  {
    id: "24001011060",
    name: "Saksham Sharma",
    pic: "saksham.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/saksham-sharma-607509326/"
  },
  {
    id: "24001013102",
    name: "Sakshi",
    pic: "sakshi.png",
    role: "Student Coordinator",
    branch: "B.Tech(ME)",
    year: "2nd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/sakshi-607808339/"
  },
  {
    id: "24001050027",
    name: "Sangharsh Yadav",
    pic: "sangharsh.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE(H))",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/sangharsh-yadav-1b4b38346"
  },
  {
    id: "24001011062",
    name: "Shivam Tewatia",
    pic: "shivam_tewatia.png",
    role: "Student Coordinator",
    branch: "B.Tech(IT)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/shivam-tewatia-462412328"
  },
  {
    id: "24001008061",
    name: "Shristi Sisodia",
    pic: "shristi.png",
    role: "Student Coordinator",
    branch: "B.Tech(ECE)",
    year: "2nd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/shristi-sisodia-31331a324"
  },
  {
    id: "23001017073",
    name: "Sourabh Jha",
    pic: "sourabh.png",
    role: "Student Coordinator",
    branch: "B.Tech(EE(IOT))",
    year: "3rd Year",
    team: "Admin Team",
    linkedin: "https://www.linkedin.com/in/sourabh-jha-52b9b3285"
  },
  {
    id: "24001013113",
    name: "Subhra",
    pic: "subhra.png",
    role: "Student Coordinator",
    branch: "B.Tech(ME)",
    year: "2nd Year",
    team: "Design Team",
    linkedin: "https://www.linkedin.com/in/subhra-55680132a"
  },
  {
    id: "24001003138",
    name: "Vanshika Chauhan",
    pic: "vanshika_chauhan.png",
    role: "Student Coordinator",
    branch: "B.Tech(CE)",
    year: "2nd Year",
    team: "IT Team",
    linkedin: "https://www.linkedin.com/in/vanshika-chauhan-870b1628a"
  }
];

const EnhancedTeamCard = ({ id, name, pic, role, branch, year, team, linkedin, colorIndex }) => {
  const colors = colorSchemes[colorIndex % colorSchemes.length];
  
  const cardStyle = {
    '--card-primary': colors.primary,
    '--card-secondary': colors.secondary,
    '--card-accent': colors.accent,
  };

  return (
    <div className={styles.enhancedCard} style={cardStyle}>
      <div className={styles.cardGlow}></div>
      <div className={styles.cardInner}>
        <div className={styles.cardHeaderTop}>
          <div className={styles.roleTag}>
            <Sparkles size={16} />
            <span>{role}</span>
          </div>
          <a 
            href={linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            <Linkedin size={18} />
          </a>
        </div>

        <div className={styles.avatarSection}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarCircle1}>
              <div className={styles.avatarCircle}>
                <img src={`/images/team/${pic}`} alt={name} loading="lazy"/>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.memberName}>{name.toUpperCase()}</h3>
          <div className={styles.cardSection}>
            
            <div className={styles.memberInfo}>
              <p className={styles.memberStatSpecial}></p>
              <p className={styles.memberHead}>Branch & Year</p>
              <p className={styles.memberStat}>{branch}</p>
              <p className={styles.memberStat}>{year}</p>
              
            </div>
            <div className={styles.memberInfo}>
              <p className={styles.memberHead}>Team</p>
              <p className={styles.memberStat}>{team}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedTeamPage = () => {
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter(member => {
    const matchesTeam = selectedTeam === "All Teams" || member.team.includes(selectedTeam);
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  return (
    <div className={styles.enhancedTeamPage}>
      <div className={styles.bgDecorations}>
        <div className={`${styles.decorationCircle} ${styles.circle1}`}></div>
        <div className={`${styles.decorationCircle} ${styles.circle2}`}></div>
        <div className={`${styles.decorationCircle} ${styles.circle3}`}></div>
        <div className={`${styles.decorationSquare} ${styles.square1}`}></div>
        <div className={`${styles.decorationSquare} ${styles.square2}`}></div>
      </div>

      <section className={styles.enhancedHero}>
        <div className={styles.heroPattern}></div>
        
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroBadgeNew}>
            <Sparkles size={14} />
            <span>OUR LEADERSHIP EXCELLENCE</span>
          </div>

          <h1 className={styles.heroTitleNew}>
            OUR &nbsp;
            <span className={styles.gradientTitle}>EXTRAORDINARY</span>
            <br />
            TEAM MEMBERS
          </h1>

          <p className={styles.heroDescriptionNew}>
            Passionate innovators and visionary leaders collaborating to create 
            extraordinary experiences and drive transformative change in our community
          </p>

          <div className={styles.heroStatsContainer}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Users size={24} />
              </div>
              <div className={styles.statNumber}>70+</div>
              <div className={styles.statText}>Active Members</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Sparkles size={24} />
              </div>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statText}>Core Teams</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <Users size={24} />
              </div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statText}>Excellence</div>
            </div>
          </div>
        </div>


        <div className={styles.waveDivider}>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>

          <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIconNew} size={20} />
              <input
                type="text"
                placeholder="Search by name or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInputNew}
              />
            </div>
          </div>

          <div className={styles.filterTabs}>
            <button
              onClick={() => setSelectedTeam("All Teams")}
              className={`${styles.tabButton} ${selectedTeam === "All Teams" ? styles.active : ""}`}
            >
              <Users size={18} />
              All Members ({members.length})
            </button>
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`${styles.tabButton} ${selectedTeam === team ? styles.active : ""}`}
              >
                {team}
              </button>
            ))}
          </div>

          <div className={styles.membersGridEnhanced}>
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className={styles.memberWrapper}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <EnhancedTeamCard
                  id={member.id}
                  name={member.name}
                  pic={member.pic}
                  role={member.role}
                  branch={member.branch}
                  year={member.year}
                  team={member.team}
                  linkedin={member.linkedin}
                  colorIndex={members.findIndex(m => m.id === member.id)}
                />
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className={styles.noResultsBox}>
              <div className={styles.noResultsIconWrapper}>
                <Search size={48} />
              </div>
              <h3>No team members found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EnhancedTeamPage;


