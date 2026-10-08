const PROFILE_IMAGE_SRC = "/images/heesu-yun.jpg";

type ProfilePortraitProps = {
  className?: string;
};

export function ProfilePortrait({ className }: ProfilePortraitProps) {
  return (
    <img
      alt="Heesu Yun"
      className={["profile-portrait", className].filter(Boolean).join(" ")}
      decoding="async"
      height={1200}
      src={PROFILE_IMAGE_SRC}
      width={960}
    />
  );
}
