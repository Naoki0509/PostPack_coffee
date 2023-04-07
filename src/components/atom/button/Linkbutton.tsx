import { Button } from "@mantine/core";
import Link, { LinkProps } from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const LinkButton = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
};
