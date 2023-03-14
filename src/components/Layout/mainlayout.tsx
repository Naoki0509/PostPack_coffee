import { AppShell } from "@mantine/core";
import { FooterModule } from "@/src/components/Layout/footer";
import { HeaderModule } from "@/src/components/Layout/header";

type Props = {
	children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
	return (
		<AppShell header={<HeaderModule />} footer={<FooterModule />}>
			{children}
		</AppShell>
	);
};
