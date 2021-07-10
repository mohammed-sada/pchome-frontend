import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/image2.png";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>عن الشركة</h2>
            <div className="underline" />
          </div>
          <p>
            تأسست الشركة عام 2006 كاحدي الشركات المتخصصة في مجال الحاسوب
            وملحقاته , وتعمل في مجال الإستيراد والبيع حسب حاجات السوق المحلي
            وتطورات السوق العالمي وماهو جديد في هذا المجال . تطورت الشركة بفضل
            ثقة المواطنين وبحثها الدءوب عن كل جديد ومفيد للسوق وجمهور المستخدمين
            وتعتبر من أوائل الشركات المتخصصة في قطاع غزة في منتجات شركة أبل
            [APPLE] كما أنها عضو في إتحاد شركات أنظمة المعلومات بيتا سوق العمل
            (الفئات المستهدفة) جميع الوزارات والهيئات الحكومية والمؤسسات الأهلية
            والتعليمية والجامية وشركات الكمبيوتر في قطاع غزة . العاملين بالشركة
            : إعتمدت إدارة الشركة علي تشغيل الخبرات العلمية والعملية وتعمل
            الشركة دائما علي بناء وتطوير قدرات العاملين لديها في جميع المجالات
            من إدارة مبيعات وتسويق ومتابعة حاجات السوق وجمهور المستخدمين وأعمال
            الصيانة وتمديد الشبكات . يوجد لدي الشركة فنيين متخصصين ذوي كفائة
            عالية في صيانة أجهزة اللاب توب
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-primary-5);
    text-align: right;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
