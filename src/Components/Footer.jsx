import logo from "../assets/Logo/logo-app.png";
import facebook from "../assets/Logo/facebook-footer.png";
import phone from "../assets/Logo/phone.png";
import email from "../assets/Logo/email.png";
export default function Fotter() {
  return (
    <div className="bg-[rgba(64,151,255,1)] w-full  text-white  ">
      <div className="flex justify-center gap-[5vw] py-[5vw]">
        <img src={logo} alt="" className="w-[18vw]" />
        <div>
          <h1 className="text-[1.4vw] font-bold mb-[2vw]">Contactez-nous</h1>
          <ul className="flex gap-[1vw] flex-col text-[1vw]">
            <li className="flex gap-[1vw] items-center">
              <img src={email} alt="" className="w-[1.4vw] ascpect-square" />
              info@bluazur.com
            </li>
            <li className="flex gap-[1vw] items-center">
              <img src={phone} alt="" className="w-[1.4vw] ascpect-square" /> +1
              555 555-5555
            </li>
            <li className="flex gap-[1vw] items-center">
              <img src={facebook} alt="" className="w-[1.4vw] ascpect-square" />{" "}
              @ BLU Azur
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[rgba(33,97,174,1)] w-full flex justify-center">
        <div className="py-2 text-white bg-[rgba(33,97,174,1)] text-center w-[21.45vw] text-[1.34vw]">
          © Tous droits réservés à Blu Azur
        </div>
      </div>
    </div>
  );
}
