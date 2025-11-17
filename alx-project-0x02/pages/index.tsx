
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-row w-full max-w-3xl items-center justify-between py-32 px-16 bg-gray-200 dark:bg-black sm:items-start">
        <div className="items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome
          </h1>
        </div>
        <div className="flex flex-rows-3 gap-4">
          <div className="mb-2">
            <Card
               title='Welcome to Alx'
               content="This is a sample card showing how components work."
            />
            <Card
               title='another example'
               content="Components make your UI modular and reusable."
            />
            <Card
               title='Second Card'
               content="You can reuse the Card component with different content."
            />
          </div>
        </div>
      </main>
    </>
  );
}


// export default Home;
