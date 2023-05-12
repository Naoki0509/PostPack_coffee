import { pagesPath } from "@/lib/$path";
import { NavLinkItem } from "@/src/components/atom/NvlinkItem";
import { Group, createStyles } from "@mantine/core";

const navItem = [
  { label: "Home", href: pagesPath.$url().pathname },
  { label: "About Us", href: pagesPath.about.$url().pathname },
  { label: "Blog", href: pagesPath.blog.$url().pathname },
];

export const Navlink = () => {
  const styles = createStyles((theme) => ({
    navlink: {
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
      paddingLeft: "30px",
    },
  }));

  const { classes } = styles();
  return (
    <Group className={classes.navlink}>
      {navItem.map((item) => {
        return (
          <NavLinkItem key={item.label} label={item.label} href={item.href} />
        );
      })}
    </Group>
  );
};
