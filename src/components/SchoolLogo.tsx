import Image, { type ImageProps } from "next/image";
import logo from "../../public/logo.png";

type Props = Omit<ImageProps, "src" | "alt"> & {
  alt?: string;
};

export default function SchoolLogo({
  alt = "Logo du Complexe Scolaire SHUKRANI",
  fill,
  width,
  height,
  style,
  ...props
}: Props) {
  if (fill) {
    return (
      <Image
        {...props}
        src={logo}
        alt={alt}
        fill
        style={style}
      />
    );
  }

  const displayWidth = width
    ? Number(width)
    : height
      ? Math.round(Number(height) * logo.width / logo.height)
      : logo.width;

  const displayHeight = Math.round(
    displayWidth * logo.height / logo.width
  );

  return (
    <Image
      {...props}
      src={logo}
      alt={alt}
      width={displayWidth}
      height={displayHeight}
      style={{ ...style, height: "auto" }}
    />
  );
}