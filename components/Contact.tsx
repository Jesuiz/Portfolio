import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        03.
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Contáctame</h2>
      <p className="max-w-[680px] text-center text-textGray">
      Estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o simplemente comentarme sobre algún proyecto, ¡te responderé en breve!
      </p>
      <a href="mailto:jesuiz.design@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Enviar Correo
        </button>
      </a>
    </section>
  );
};

export default Contact;
