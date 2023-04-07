import { AppShell, createStyles } from "@mantine/core";
import { FooterModule } from "@/src/components/Layout/footer";
import { HeaderModule } from "@/src/components/Layout/header";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const styles = createStyles((theme) => ({
    layout: {
      minHeight: "100vh",
      maxWidth: 1600,
      margin: "0 auto",
      padding: "60px 0",
      backgroundColor: "#f5f5f5",
    },
  }));

  const { classes } = styles();
  return (
    <AppShell
      className={classes.layout}
      header={<HeaderModule />}
      footer={<FooterModule />}
    >
      {children}
    </AppShell>
  );
};
