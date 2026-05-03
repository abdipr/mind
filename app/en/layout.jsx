import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { dmSans } from "../fonts";
import { ProfileCard } from "../_components/profile-card";
import { AnimatedLogo } from "../_components/animated-logo";

const navbar = <Navbar logo={<AnimatedLogo />} />;

const footer = (
  <Footer>
    <div className="flex flex-col items-center w-full gap-4 py-10 border-t border-slate-200 dark:border-slate-800 bg-transparent">
      <div className="flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
        <a href="https://abdi.cc" target="_blank" className="hover:text-accent transition-colors">Portfolio</a>
        <a href="https://github.com/abdipr" target="_blank" className="hover:text-accent transition-colors">GitHub</a>
        <a href="mailto:me@abdi.cc" className="hover:text-accent transition-colors">Contact</a>
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
        MIT {new Date().getFullYear()} © <span className="text-slate-900 dark:text-slate-200">Abdi.</span> Built with Mind.
      </p>
    </div>
  </Footer>
);

export default async function EnLayout({ children }) {
  const pageMap = await getPageMap("/en");

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={dmSans.variable}>
      <body className="bg-white dark:bg-[#020617]">
        <Layout
          navbar={navbar}
          navigation={false}
          pageMap={pageMap}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          search={<Search placeholder="Search notes..." />}
          editLink={null}
          feedback={{ content: null }}
          copyPageButton={false}
          toc={{ extraContent: <ProfileCard /> }}
          i18n={[
            { locale: "id", name: "Indonesian" },
            { locale: "en", name: "English" },
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
