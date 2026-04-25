import Image from "next/image";

export function Header() {
  return (
    <header className="site-header" aria-label="Site header">
      <a className="brand" href="#top" aria-label="yeziii home">
        <Image
          className="brand-mark"
          src="/assets/logo.svg"
          alt=""
          width={120}
          height={50}
          priority
        />
      </a>
    </header>
  );
}
