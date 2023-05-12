import { Text, createStyles } from "@mantine/core";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export const NavLinkItem = ({ ...props }: Props) => {
  const styles = createStyles((theme) => {
    return {
      Text: {
        ":hover": {
          color: theme.colors.blue[5],
        },
        marginRight: "20px",
        fontSize: "18px",
        fontWeight: "bold",
      },
    };
  });
  const { classes } = styles();
  return (
    <Link href={props.href}>
      <Text className={classes.Text}>{props.label}</Text>
    </Link>
  );
};
