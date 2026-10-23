import { AboutBio } from "../components/about/AboutBio";
import { ProfileLinks } from "../components/about/ProfileLinks";
import { ProfilePortrait } from "../components/about/ProfilePortrait";
import { ResearchInterests } from "../components/about/ResearchInterests";
import { PageMain } from "../components/PageMain";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { stagger } from "../utils/stagger";

export function HomePage() {
  useDocumentTitle("Heesu Yun");

  return (
    <PageMain>
      {/* Grid areas: portrait beside the copy on wide screens; name first on phones. */}
      <div className="about">
        <div className="about__head">
          <h1 className="about__name rise" style={stagger(1)}>
            Heesu Yun (<span lang="ko">윤희수</span>)
          </h1>
          <p className="about__names rise" style={stagger(3)}>
            Pronounced &ldquo;hee-soo&rdquo; &middot;{" "}
            <span lang="ko">윤희수</span> &middot;{" "}
            <span lang="zh-Hant">尹熙秀</span> &middot;{" "}
            <span lang="ja">ヒス</span>
          </p>
        </div>
        <div className="about__media">
          <div className="portrait-frame rise" style={stagger(0)}>
            <ProfilePortrait />
          </div>
          <ProfileLinks />
        </div>
        <div className="about__body">
          <div className="rise" style={stagger(4)}>
            <AboutBio />
          </div>
          <ResearchInterests />
        </div>
      </div>
    </PageMain>
  );
}
