import React from "react";
import style from "./Footer.module.css";
export const Footer = () => {
  return (
    <>
      <div id={style.SocialBox}>
        <div id={style.brand}>
          <div id={style.SocialLogo}>
            <img
              style={{ backgroundColor: "black" }}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
            />
          </div>
          <div id={style.intro}>
            At cult.fit, we make group workouts fun, daily food healthy &amp;
            tasty, mental fitness easy with yoga &amp; meditation, Medical &amp;
            lifestyle care hassle-free.#BeBetterEveryDay
          </div>
        </div>
        <div className={style.LinkBox1}>
          <div id={style.Links1}>
            <div>cult.fit for business</div>
            <div>cult.fit franchise</div>
            <div>corporate partnerships</div>
            <div>cult pass network</div>
            <div>t&amp;c for business</div>
          </div>
          <div id={style.Links2}>
            <div>partner.fit</div>
            <div>blogs</div>
            <div>security</div>
            <div>careers</div>
          </div>
        </div>
        <div className={style.LinkBox2}>
          <div id={style.Links3}>
            <div>contact us</div>
            <div>privacy policy</div>
            <div>refund policy</div>
            <div>terms &amp; conditions</div>
          </div>
          <div id={style.Links4}>
            <div className={style.Appstore}>
              <a href="https://itunes.apple.com/us/app/cure-fit/id1217794588">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                  className={style.AppImage}
                  alt=""
                />
              </a>
            </div>
            <div className={style.Appstore}>
              <a href="https://play.google.com/store/apps/details?id=fit.cure.android">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                  className={style.AppImage}
                  alt=""
                />
              </a>
            </div>
            <div id={style.fiveblack}>
              <div>
                <a href="https://www.youtube.com/channel/UCSE72IaHOL-1Tv-m3JHE4Cg">
                  <img
                    className={style.black}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/cultfitofficial">
                  <img
                    className={style.black}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/cultfitOfficial">
                  <img
                    className={style.black}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page-new.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/cultfitOfficial/">
                  <img
                    className={style.black}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/cult.fit/">
                  <img
                    className={style.black}
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
