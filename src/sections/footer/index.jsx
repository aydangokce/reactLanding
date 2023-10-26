import style from './index.module.scss';
import { useRef } from 'react';
import { useState } from 'react';

export default function Footer() {
  // Create refs for input elements
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);

  // Create a ref for the select element
  const selectRef = useRef(null);

  const [mailSent, setMailSent] = useState(false);

  return (
    <div className={style.footer} id="contact">
      <div className={style.footerRight}>
        <img src="https://storage.googleapis.com/app-pillow.appspot.com/footer.webp"></img>
      </div>
      <div className={style.footerLeft}>
        <h1>Let's Work Together On</h1>
        <h2>Fill our contact form so we can reach out to your team.</h2>
        <div className={style.contactForm}>
          <div className={style.inputRow}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              ref={emailRef}
            />

            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              name="first_name"
              required
              ref={firstNameRef}
            />
          </div>
          <div className={style.inputRow}>
            <input
              type="text"
              id="surname"
              placeholder="Second Name"
              name="surname"
              required
              ref={lastNameRef}
            />

            <input
              type="text"
              id="company_name"
              placeholder="Company Name"
              name="company_name"
              required
              ref={companyRef}
            />
          </div>
          <select
            id="picklist"
            name="picklist"
            placeholder="What do you need help with"
            ref={selectRef}
          >
            <option value="" disabled selected>
              What do you need help with?
            </option>
            <option value="PERFORMANCE MARKETING – APP MARKETING">
              PERFORMANCE MARKETING – APP MARKETING
            </option>
            <option value="APP AUDIT">APP AUDIT</option>
            <option value="GROWTH CONSULTING">GROWTH CONSULTING</option>
            <option value="APP STORE OPTIMIZATION">
              APP STORE OPTIMIZATION
            </option>
            <option value="MARKETING AUTOMATION">MARKETING AUTOMATION</option>
          </select>
          <div className={style.btnWrapper}>
            <a
              onClick={async () => {
                const formData = {
                  firstName: firstNameRef.current.value,
                  lastName: lastNameRef.current.value,
                  message: selectRef.current.value,
                  email: emailRef.current.value,
                  companyName: companyRef.current.value,
                };
                console.log(JSON.stringify(formData));
                const apiKey = import.meta.env.VITE_APP_API_KEY;
                console.log(apiKey);
                const resp = await fetch(
                  'https://express-mail-a-pi.vercel.app/sendEmail',
                  {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                      'x-api-key': apiKey,
                      'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(formData),
                  },
                );
                if (resp.ok) {
                  setMailSent(true);
                  console.log('Email Sent');
                } else {
                  console.log('Wrong');
                }
              }}
            >
              Send
            </a>
          </div>
          <div className={style.mailSentWrapper}>
            {mailSent && <p>We will contact you!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
