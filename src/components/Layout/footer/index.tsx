import { createStyles, Footer } from "@mantine/core";
import { FC } from "react";

export const FooterModule: FC = () => {
  const styles = createStyles({
    footer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: "5px 10px",
      fontSize: "1rem",
      fontWeight: 500,
    },
  });

  const { classes } = styles();

  return (
    <Footer className={classes.footer} height="sm">
      &copy; {`${new Date().getFullYear()} Created by PostPack Coffee.`}
    </Footer>
  );
};
