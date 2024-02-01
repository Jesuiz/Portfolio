import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section 
      id="about"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <SectionTitle title="Sobre Mi" titleNo="01" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
      <div className="text-balance w-full text-base text-textGray flex flex-col gap-4 font-semilight text-pretty">
          <p>
            Tengo profunda conexión y experiencia con el <span className="text-textGreen">Branding y Diseño de Identidad Visual.</span> En el 2017 dejé inconclusos mis estudios universitarios en Diseño Gráfico, aunque he trabajado en ello por más de 6 años.
          </p>
          <p>
            Recientemente, en el 2023, me interesé en el <span className="text-textGreen">Desarrollo de Aplicaciones Web</span> y desde entonces he estado aprendiendo sin parar. Tengo conocimientos básicos en <span className="text-textGreen">PHP, Laravel y otras tecnologías</span>, esto me permite modificar y desplegar Aplicaciones Web en base al reconocido modelo MVC. Hasta ahora, he implementado una solución CRM para una inmobiliaria de Lima, Perú.
          </p>
          <p>
            Adicionalmente, tengo mucha experiencia ofreciendo <span className="text-textGreen">Páginas Web con Wordpress</span>, por lo que tengo sólidos conocimientos para implementarlas muy rapidamente, modificando el código para obtener funciones personalizadas y optimizaciones de velocidad.
          </p>
          <p>
            Estas son todas las tecnologías y habilidades que manejo, tanto para Diseño como para Desarrollo:
          </p>
          <ul className="max-w-[550px] text-sm font-titleFont grid grid-cols-2 gap-1 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Adobe Illustrator
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Adobe Photoshop
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Adobe After Effects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CorelDraw
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Wordpress
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Computación e Informática
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS S3
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              BootStrap
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
