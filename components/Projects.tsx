import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import {
  SlSocialBehance,
  SlStar,
} from "react-icons/sl";

const Projects = () => {
  return (
    <section id="project" className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <SectionTitle title="Proyectos" titleNo="02" />
      {/* ============ Project 1 Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Proyecto de Branding
              </p>
              <h3 className="text-2xl font-bold">Branding para Pináculo Education</h3>
            </div>
            <p className="bg-[#512eed] text-sm md:text-base p-2 md:p-6 rounded-md">
              Desarrollo de Identidad Visual para <span className="text-textGreen font-bold">Pináculo Education</span>. Empresa que lidera la revolución del aprendizaje experiencial con la integración de tecnología educativa.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>After Effects</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.behance.net/gallery/189966229/Manual-de-Identidad-Corporativa-para-Pinaculo-Education"
                target="_blank"
              >
                <SlSocialBehance />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 1 End here ================== */}
        {/* ============ Project 2 Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://sistema.coiintawa.pe/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Aplicación Web con Laravel
              </p>
              <h3 className="text-2xl font-bold">CRM para Coiintawa</h3>
            </div>
            <p className="text-sm md:text-base bg-[#512eed] p-2 md:p-6 rounded-md xl:-mr-16">
              La primera <span className="text-textGreen font-bold">Aplicación Web</span> que he implementado para un cliente, es un CRM con esteroides. Sus funcionalidades permiten gestionar Clientes, Empleados, Pagos, Facturas, Eventos, Tickets y más.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>AWS S3</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://sistema.coiintawa.pe/"
                target="_blank"
              >
                <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 2 End here ================== */}
        {/* ============ Project 3 Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://jesuizdesign.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Página Web con Wordpress
              </p>
              <h3 className="text-2xl font-bold">Web Bilingüe para Jesuiz Design</h3>
            </div>
            <p className="text-sm md:text-base bg-[#512eed] p-2 md:p-6 rounded-md ">
            La Web de mi negocio, <span className="text-textGreen font-bold">Jesuiz Design</span>, desarrollada con Wordpress. Está muy optimizada, por lo que sobrepasa los 95 en cada métrica, además que está en Inglés y Español.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li>
              <li>Wordpress</li>
              <li>SEO</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://jesuizdesign.com/"
                target="_blank"
              >
                <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 3 End here ================== */}
        {/* ============ Project 4 Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://dadosmedic.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Página Web con Wordpress
              </p>
              <h3 className="text-2xl font-bold">Web para Dados Medic</h3>
            </div>
            <p className="text-sm md:text-base bg-[#512eed] p-2 md:p-6 rounded-md xl:-mr-16">
              Esta <span className="text-textGreen font-bold">Página Web</span> elaborada para un pequeño negocio que ofrece insumos médicos. Sus productos se muestran como si de un ecommerce se tratara, pero sin la pasarela de pagos.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li>
              <li>Wordpress</li>
              <li>SEO</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://dadosmedic.com/"
                target="_blank"
              >
                <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 4 End here ================== */}
        {/* ============ Project 5 Start here ============== */}
                <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://maestrosupplyline.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Ecommerce con Wordpress
              </p>
              <h3 className="text-2xl font-bold">Ecommerce para Maestro Supply Line</h3>
            </div>
            <p className="text-sm md:text-base bg-[#512eed] p-2 md:p-6 rounded-md ">
            <span className="text-textGreen font-bold">Tienda online en Inglés</span>, realizada con funciones que permiten reflejar costos y disponibilidad de envío condicionales según la ubicación del cliente, considerando peso y volumen.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>PHP</li>
              <li>Wordpress</li>
              <li>SEO</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://maestrosupplyline.com/"
                target="_blank"
              >
                <SlStar />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 5 End here ================== */}
        {/* ============ Project 4 Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="Logo de El Valle Dorado"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Proyecto de Branding
              </p>
              <h3 className="text-2xl font-bold">Branding para El Valle Dorado</h3>
            </div>
            <p className="text-sm md:text-base bg-[#512eed] p-2 md:p-6 rounded-md xl:-mr-16">
              Desarrollo de Identidad Visual para <span className="text-textGreen font-bold">El Valle Dorado</span>. Negocio campestre ubicado en Perú, su identidad busca representar la frescura de la comida hecha en casa y la tranquilidad campestre.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textGray">
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>After Effects</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.behance.net/gallery/189443481/Manual-de-Identidad-Corporativa-para-El-Valle-Dorado"
                target="_blank"
              >
                <SlSocialBehance />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project 4 End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
