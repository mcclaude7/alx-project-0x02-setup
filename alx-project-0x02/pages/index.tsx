
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome
          </h1>
        </div>
      </main>
    </>
  );
}


// export default Home;
