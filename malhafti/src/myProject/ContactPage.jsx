import React from "react";
import BackToTopButton from "./BackToTopButton";

export default function ContactPage(){
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">تواصل معنا</h1>
      <p className="text-center">
        نحن هنا لمساعدتك في أي وقت! إذا كان لديك أي استفسار أو مشكلة، يرجى استخدام إحدى وسائل التواصل أدناه للتواصل معنا.
      </p>

      <section className="my-5">
        <h2>معلومات الاتصال</h2>
        <ul className="list-unstyled">
          <li><strong>البريد الإلكتروني:</strong> <a href="mailto:support@malhafti.com">support@malhafti.com</a></li>
          <li><strong> الهاتف : </strong> 22245678901+</li>
          <li><strong>ساعات العمل:</strong> من الإثنين إلى الجمعة، من 9 صباحًا إلى 6 مساءً</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>موقعنا</h2>
        <p>شارع النصر، نواكشوط، موريتانيا</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8314727826086!2d-15.965465284241235!3d18.091924007781997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c74fe6c03ad51%3A0xa1057c38ed7ecedd!2zTnVha2Nob3R0LCDYqNmH2YTZitin2Kog2KfZhNi52KzYp9iq!5e0!3m2!1sar!2s!4v1700000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="my-5">
        <h2>أرسل لنا رسالة</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">الاسم</label>
            <input type="text" className="form-control" id="name" placeholder="أدخل اسمك" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-control" id="email" placeholder="أدخل بريدك الإلكتروني" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">الرسالة</label>
            <textarea className="form-control" id="message" rows="4" placeholder="ما هي استفساراتك؟"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">إرسال</button>
        </form>
      </section>
      <BackToTopButton />
    </div>
  );
};