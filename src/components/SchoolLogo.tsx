import Image, { type ImageProps } from "next/image";
import logo from "../../public/logo.png";

type Props = Omit<ImageProps, "src" | "alt"> & { alt?: string };

export default function SchoolLogo({ alt = "Logo du Complexe Scolaire SHUKRANI", ...props }: Props) {
  return <Image src={logo} alt={alt} {...props} />;
}
