import Application from "./components/Application";
import Contacts   from "./components/Contacts";
import Header from "@/app/components/Header";

const Page = () =>{
  return(
    <main className="bg-gpt-lightgray min-h-screen text-white">
      <Header/>
      <Application/>
      
    </main>
  )
}
export default Page;