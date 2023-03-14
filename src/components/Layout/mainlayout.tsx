import { Header } from "@/src/components/Layout/header";
import { AppShell, Footer } from "@mantine/core";

type Props = {
	children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
	return (
		<AppShell header={<Header />} footer={<Footer />}>
			{children}
		</AppShell>
	);
};
