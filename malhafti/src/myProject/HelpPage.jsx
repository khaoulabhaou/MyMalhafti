import React from "react";
import BackToTopButton from "./BackToTopButton";

export default function HelpPage(){
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">مركز المساعدة</h1>
      <p className="text-center">
        مرحبًا بكم في مركز المساعدة! ستجدون هنا إجابات للأسئلة الشائعة، تفاصيل عن خدماتنا، وطرق للتواصل معنا. نحن هنا لجعل تجربة التسوق الخاصة بكم سهلة وممتعة.
      </p>

      <section className="my-5">
        <h2>الأسئلة الشائعة</h2>
        <div className="mb-3">
          <h5>1. كيف يمكنني تقديم طلب شراء؟</h5>
          <p>
            تصفحوا منتجاتنا وانقروا على "إضافة إلى السلة" للمنتجات التي ترغبون بشرائها. انتقلوا إلى السلة، راجعوا اختياراتكم، ثم انقروا على "إتمام الطلب". أدخلوا تفاصيل التوصيل والدفع لإكمال العملية.
          </p>
        </div>
        <div className="mb-3">
          <h5>2. ما هي طرق الدفع التي تقبلونها؟</h5>
          <p>نقبل بطاقات الائتمان/الخصم، باي بال، والدفع عند الاستلام (إذا كانت متوفرة في منطقتكم).</p>
        </div>
        <div className="mb-3">
          <h5>3. كم من الوقت يستغرق التوصيل؟</h5>
          <p>تُعالج الطلبات عادةً خلال 2-3 أيام عمل. يختلف وقت التوصيل بناءً على الموقع:</p>
          <ul>
            <li>محليًا: 3-5 أيام عمل</li>
            <li>دوليًا: 7-14 يوم عمل</li>
          </ul>
        </div>
        <div className="mb-3">
          <h5>4. هل يمكنني إرجاع منتج؟</h5>
          <p>
            نعم، نقدم سياسة إرجاع لمدة 14 يومًا للمنتجات غير المستخدمة وفي تغليفها الأصلي. تواصلوا معنا لبدء عملية الإرجاع.
          </p>
        </div>
        <div className="mb-3">
          <h5>5. ماذا أفعل إذا استلمت منتجًا تالفًا؟</h5>
          <p>
            نأسف للإزعاج! يرجى الاتصال بنا فورًا وإرسال صور للمنتج التالف، وسنساعدكم في حل المشكلة.
          </p>
        </div>
      </section>

      <section className="my-5">
        <h2>تواصل معنا</h2>
        <p>إذا كنتم بحاجة إلى مساعدة إضافية، فإن فريق الدعم لدينا هنا لمساعدتكم!</p>
        <ul>
          <li>البريد الإلكتروني: <a href="mailto:support@yourstore.com">support@malhafti.com</a></li>
          <li>الهاتف : 22245678901+</li>
          <li>ساعات العمل: من الإثنين إلى الجمعة، من 9 صباحًا إلى 6 مساءً</li>
        </ul>
      </section>

      <section className="my-5">
        <h2>الشحن والتوصيل</h2>
        <p>تُحسب رسوم الشحن عند الدفع بناءً على موقعكم وحجم الطلب. يمكنكم تتبع طلبكم باستخدام رقم التتبع المرسل في البريد الإلكتروني الخاص بالتأكيد.</p>
      </section>

      <section className="my-5">
        <h2>الإرجاع والاسترداد</h2>
        <p>
          <strong>عملية الإرجاع:</strong>
        </p>
        <ol>
          <li>تواصلوا معنا خلال 14 يومًا من استلام الطلب.</li>
          <li>غلفوا المنتج بإحكام وأرسلوه إلى عنوان الإرجاع الخاص بنا.</li>
          <li>عند استلام المنتج، سنقوم بفحصه ومعالجة الاسترداد خلال 5-7 أيام عمل.</li>
        </ol>
      </section>

      <section className="my-5">
        <h2>سياسة الخصوصية</h2>
        <p>
          نحن نحترم خصوصيتكم. معلوماتكم الشخصية آمنة ولن تتم مشاركتها مع أطراف ثالثة. لمزيد من التفاصيل، اقرأوا <a href="#privacy-policy">سياسة الخصوصية</a>.
        </p>
      </section>

      <section className="my-5">
        <h2>ما زلتم بحاجة إلى المساعدة؟</h2>
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
            <textarea className="form-control" id="message" rows="4" placeholder="كيف يمكننا مساعدتكم؟"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">إرسال</button>
        </form>
      </section>
      <BackToTopButton />
    </div>
  );
};