import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center mt-[16rem] ">
      <h1 className="text-[46px] font-bold">Oops!</h1>
      <p className="text-[24px] text-red-400 text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-[18px] text-black">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}