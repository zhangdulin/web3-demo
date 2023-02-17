import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import examples from "@/examples.json";

// FIXME:
// @ts-ignore
const SimpleBar = dynamic(() => import("simplebar-react"), {
  ssr: false,
});

export default dynamic(() => Promise.resolve(Home), { ssr: false });

function Home() {
  if (typeof window === "undefined") return null;
  return (
    <>
      <Head>
        <title>Hello Web3!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex justify-center items-center w-screen bg-[#f7f8fa] md:bg-[url(/bg.jpg)] p-2 md:p-20"
        style={{
          height: window.innerHeight,
        }}
      >
        <div className="hidden md:fixed top-8 right-8 md:block">
          <Link
            href={"https://github.com/luzhenqian/web3-examples"}
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </div>

        {/* FIXME: */}
        {/* @ts-ignore */}
        <SimpleBar className="w-full h-full rounded-lg md:rounded-3xl">
          <div className="flex flex-col w-full h-full gap-4 p-4 overflow-auto rounded-lg shadow-sm md:gap-8 md:p-8 md:shadow-inner md:rounded-3xl md:backdrop-opacity-40 md:backdrop-invert">
            <div className="w-full text-3xl font-bold md:text-white">
              Web3 代码示例
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {examples.map(({ name, description, url, technologyStack }) => (
                <div
                  key={name}
                  className="flex flex-col gap-2 md:gap-4 p-2 transition-all duration-200 ease-in-out bg-white md:border-white rounded-md md:bg-inherit md:p-4 hover:border
                text-[#24292f] md:text-white border-gray-300 border md:border-0"
                >
                  <div className="flex justify-between">
                    <Link className="text-2xl" href={url}>
                      {name}
                    </Link>

                    <Link
                      href={"https://github.com/luzhenqian/web3-examples"}
                      target="_blank"
                    >
                      <div className="flex items-center h-8 gap-2 px-2 border border-gray-300 rounded-md md:hidden">
                        <StartIcon />
                        <span>Start</span>
                      </div>
                    </Link>
                  </div>
                  <div className="text-sm text-[#57606a] md:text-inherit">
                    {description}
                  </div>
                  <div className="text-sm font-bold">技术栈</div>
                  <ul>
                    {technologyStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SimpleBar>
      </main>
    </>
  );
}

function StartIcon() {
  return (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
    >
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      ></path>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      height="32"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      width="32"
      data-view-component="true"
    >
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
  );
}