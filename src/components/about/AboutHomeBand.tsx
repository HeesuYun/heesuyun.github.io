import { AboutPhdNortheastern, AboutPhdPennsylvania } from "./AboutPhd";
import { AboutTraining } from "./AboutTraining";
import { ProfilePortrait } from "./ProfilePortrait";

export function AboutHomeBand() {
  return (
    <section
      aria-labelledby="about-hello-heading"
      className="about-home-band section anchor-section"
      id="about"
    >
      <p className="section-eyebrow">Biography</p>
      <div className="about-hero-card">
        <div className="about-home-band__inner">
          <div className="about-home-flow">
            <ProfilePortrait className="profile-portrait--floated" />
            <div className="about-home-flow__copy">
              <h2
                aria-label="Heesu Yun"
                className="about-home-hello"
                id="about-hello-heading"
              >
                Hello!
              </h2>
              <p className="about-home-tagline">
                My name is Heesu (pronounced &ldquo;hee-soo&rdquo;){" "}
                <span className="about-home-names">
                  (윤희수 &middot; 尹熙秀 &middot; ヒス)
                </span>
              </p>
              <AboutTraining />
              <AboutPhdPennsylvania />
              <AboutPhdNortheastern />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
