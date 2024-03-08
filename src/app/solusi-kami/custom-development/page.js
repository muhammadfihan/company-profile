import { getCustomDev, getNavbar } from "../../../utils/api";
import CustomDevComponent from "./clientcomponent/customdev";
import Footer2 from "../../../components/Footer2";

export default async function CustomDev() {
  const data = getCustomDev();
  const [listcutomdev] = await Promise.all([data]);

  const navbar = getNavbar();
  const [menunavbar] = await Promise.all([navbar]);

  if (
    menunavbar.data.attributes.Solusi.active == false ||
    menunavbar.data.attributes.Solusi.custom_development.active == false
  ) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <section className="bg-white animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-7xl text-red-600 ">
                Maaf
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                Halaman Tidak Tersedia
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 ">
                Maaf halaman yang anda cari tidak tersedia atau sedang diperbaiki
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div>
      <CustomDevComponent customdevdata={listcutomdev} />
      <div className="">
        <Footer2 />
      </div>
    </div>
  );
}
