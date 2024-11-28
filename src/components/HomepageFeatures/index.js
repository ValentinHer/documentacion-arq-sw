import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Observer",
    img: require("@site/static/img/observer.png").default,
    link: "/docs/category/patrón-observer",
    description: (
      <>
        Permite definir un mecanismo de suscripción
         para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.
      </>
    ),
  },
  {
    title: "Strategy",
    img: require("@site/static/img/strategy.png").default,
    link: "/docs/intro",
    description: (
      <>
        Permite definir una familia de algoritmos, colocar cada uno de ellos 
        en una clase separada y hacer sus objetos intercambiables.
      </>
    ),
  },
  {
    title: "Command",
    img: require("@site/static/img/command-es.png").default,
    link: "/docs/intro",
    description: (
      <>
        Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud. 
        Esta transformación te permite parametrizar los métodos con diferentes solicitudes,
      </>
    ),
  },
  {
    title: "State",
    img: require("@site/static/img/state-es.png").default,
    link: "/docs/intro",
    description: (
      <>
        Permite a un objeto alterar su comportamiento cuando su estado interno cambia. 
        Parece como si el objeto cambiara su clase.
      </>
    ),
  },
  {
    title: "Template Method",
    img: require("@site/static/img/template-method.png").default,
    link: "/docs/intro",
    description: (
      <>
        Define el esqueleto de un algoritmo en la superclase pero permite que las subclases sobrescriban
         pasos del algoritmo sin cambiar su estructura
      </>
    ),
  },
  {
    title: "Visitor",
    img: require("@site/static/img/visitor.png").default,
    link: "/docs/intro",
    description: (
      <>
        Permite separar algoritmos de los objetos sobre los que operan.
      </>
    ),
  },
];

function Feature({ img, title, link, description }) {
  return (
    <div className={clsx("col col--4")} style={{ marginTop: 30 }}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p style={{textAlign: 'justify'}}>{description}</p>
        <Link className="button button--primary button--md" to={link}>
          Aprender Más 🔗
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
