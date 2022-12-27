import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>bello.nyc</title>
        <link rel="stylesheet" href={`/index.css?build=${__FRSH_BUILD_ID}`} />
      </Head>
      <main>
        <h1>bello.nyc</h1>
      </main>
    </>
  );
}
