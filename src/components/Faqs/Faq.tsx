import { useState } from "react";
import TextBox from "./TextBox";
const Faq = () => {
  const [language, setLanguage] = useState<boolean>(true);
  return (
    <div className="flex w-full flex-col items-center text-white">
      <section className="flex text-3xl font-bold">
        <button
          onClick={() => {
            setLanguage(true);
            console.log("Thai");
          }}
          className={`${
            language && "bg-white text-pink-800"
          } mx-2 h-16 w-16 rounded-2xl border-2 border-white bg-transparent shadow-inner shadow-white`}
        >
          TH
        </button>
        <button
          onClick={() => {
            setLanguage(false);
            console.log("English");
          }}
          className={`${
            !language && "bg-white text-pink-800"
          } mx-2 h-16 w-16 rounded-2xl border-2 border-white bg-transparent shadow-inner shadow-white`}
        >
          EN
        </button>
      </section>
      <div className="w-full max-w-5xl">
        <TextBox
          language={language}
          textThaiQ="Q : จุฬาฯ จะจัด Open House วันไหน?"
          textEngQ="Q: When is Chulalongkorn University's Open House scheduled?"
          textThaiA="A : งาน CU Open House 2024 ของส่วนกลางจะจัดขึ้นในวันที่ 20 - 21 มกราคม 2567 ที่จุฬาลงกรณ์มหาวิทยาลัย (ภายในศาลาพระเกี้ยว) โดยมี 8 คณะ 1 สำนักวิชา 1 สถาบัน จัดงาน Open House ที่คณะ"
          textEngA="A: Chulalongkorn University's Open House is set for January 20-21, 2024, at Sala Phra Kiew. Additionally, on the same days, eight faculties and two schools within the university will also be hosting their respective Open House events."
        />
        <TextBox
          language={language}
          textThaiQ="Q : ในงานมีกิจกรรมอะไรบ้าง?"
          textEngQ="Q: What activities can I expect at CU Open House 2024?"
          textThaiA="A : ภายในศาลาพระเกี้ยวจะมีเวทีกลางที่เต็มไปด้วยกิจกรรมต่าง ๆ ไม่ว่าจะเป็นการแสดง กิจกรรม Talk Show โดยมีวิทยากรศิษย์เก่าชื่อดังมาร่วมพูดคุยด้วย นอกจากนี้ยังมีซุ้มกิจกรรมจากทุกคณะที่รอให้ผู้เข้าร่วมงานทุกคนมาเยี่ยมชม สำหรับข้อมูลกิจกรรม OPH ของแต่ละคณะ รอติดตามรายละเอียดเพิ่มเติมจาก IG ของแต่ละคณะ"
          textEngA="A: CU Open House 2024, held at Sala Phra Kiew, will feature a diverse range of activities. You can enjoy performances, talk with distinguished CU alumni, and more various interactive events. Moreover, each faculty and school will be showcasing their curriculum. For specific details about each faculty's activities, please refer to their respective Instagram accounts.."
        />
        <TextBox
          language={language}
          textThaiQ="Q : กิจกรรมทั้งสองวันเหมือนกันไหม?"
          textEngQ="Q: Are the activities the same on both days?"
          textThaiA="A : กิจกรรมแนะนำคณะต่าง ๆ จะเหมือนกันทั้ง 2 วัน แต่ในส่วนของกิจกรรมพิเศษบางอย่าง จะแตกต่างกันออกไปในแต่ละวัน ทั้งนี้ สามารถดูเพิ่มเติมได้ในหน้ากิจกรรม"
          textEngA="A: There will be a faculty advising session on both days. However, special activities vary on each day. Please check for more information on the activity page."
        />
        <TextBox
          language={language}
          textThaiQ="Q : จำเป็นต้องไปทั้งสองวันไหม?"
          textEngQ="Q: Is it necessary to attend both days?"
          textThaiA="A : สามารถเลือกมาวันใดวันหนึ่งก็ได้ หรือจะเข้ามาทั้งสองวันก็ได้"
          textEngA="A: You're welcome to join either day, or both if you'd like."
        />
        <TextBox
          language={language}
          textThaiQ="Q : เข้าร่วมกิจกรรมแล้วได้เกียรติบัตรไหม?"
          textEngQ="Q: Will I receive a certificate for attending CU Open House?"
          textThaiA="A : กิจกรรมของส่วนกลางไม่มีเกียรติบัตร"
          textEngA="A: No, certificates will not be provided for participants."
        />
      </div>
    </div>
  );
};
export default Faq;
