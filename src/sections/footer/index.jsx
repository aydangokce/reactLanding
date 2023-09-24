import style from './index.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
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
            />

            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              name="first_name"
              required
            />
          </div>
          <div className={style.inputRow}>
            <input
              type="text"
              id="surname"
              placeholder="Second Name"
              name="surname"
              required
            />

            <input
              type="text"
              id="company_name"
              placeholder="Company Name"
              name="company_name"
              required
            />
          </div>
          <select
            id="picklist"
            name="picklist"
            placeholder="What do you need help with"
          >
            <option value="" disabled selected>
              What do you need help with?
            </option>
            <option value="option2">WhatWhat</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
      </div>
    </div>
  );
}
