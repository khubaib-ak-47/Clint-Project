import {
  Card,
  Landingpage,
  Artistrating,
  Tokendistribution,
  Tokenvalue,
  Tokeninformation,
} from "../components/landing";


export default function Home() {
  return (
    <div className="">
      <Landingpage />
      <Artistrating />
      <Card />
      <Tokeninformation />
      <Tokendistribution />
      <Tokenvalue />


    </div>
  );
}
