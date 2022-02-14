import Error from 'next/error';

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}`);
//   const errorCode = res.ok ? false : res.statusCode;
//   //   const json = await res.json();
//   console.log(res);
//   return {
//     props: { errorCode, stars: json.stargazers_count },
//   };
// }

// export default function Page({ errorCode, stars }) {
//   if (errorCode) {
//     return <Error statusCode={errorCode} />;
//   }

//   return <div>Next stars: {stars}</div>;
// }
