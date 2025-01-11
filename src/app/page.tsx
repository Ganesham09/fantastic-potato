import Image from "next/image";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 h-screen">
        <div className="bg-purple-500 text-black p-5 text-center rounded-xl text-2xl">
          <h1>Chai or Code</h1>
          <br />
          <p>
            Want to know where this thing come from then chlick down there 👇🏽
          </p>
          <br />
          <div>
            <Link href="https://www.youtube.com/@chaiaurcode" target="_blank">
              <button className="bg-white rounded-lg hover:bg-gray-100 px-4 py-2">
                Click Me!!!
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/H-B7plUCK866Gojj/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
