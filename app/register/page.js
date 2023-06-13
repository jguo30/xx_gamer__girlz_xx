import Register from "../components/Register";

// export async function getServerSideProps(context) {
//   // parse cookies
//   const cookies = context.req.headers.cookie;
//   const parsedCookies = Object.fromEntries(
//     cookies.split("; ").map((c) => {
//       const [key, v] = c.split("=");
//       return [key, decodeURIComponent(v)];
//     })
//   );

//   const authToken = parsedCookies.authToken;

//   if (authToken) {
//     return {
//       redirect: {
//         destination: "/channel/@me",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

export default function RegisterPage() {
  return (
    <div className="vh-100 bg-[#404eed]">
      <Register />
    </div>
  );
}
