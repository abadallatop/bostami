import ContactForm from "./ContactForm";
import { staticText } from "@/data/staticText";
export default function Contact({ lang }) {
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="sk-page-content-wrap">
        <div className="sk-animations">
          <div className="section-wrapper pl-60 pr-60 pt-60">
            <div className="sk-page-title-wrap mb-15">
              <h2 className="page-title">
                {" "}
                {staticText.contact.contact[lang]}
              </h2>
            </div>
          </div>

          <div className="section-wrapper pr-60 pl-60 mb-60">
            <div className="contact-area bg-light-white-2 shadow">
              <h5 className="contact-title">
                {staticText.contact.contactTitle[lang]}
              </h5>
              <h5 className="contact-title-b ">
                {staticText.contact.contactTitleb[lang]}
              </h5>
              <ContactForm lang={lang} />
            </div>
          </div>

          <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
            <span>
              © {new Date().getFullYear()} All Rights Reserved by Abdullah SK.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
