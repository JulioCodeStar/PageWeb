export const menuData = {
  MainMenuItems: [
    {
      __component: "menu.menu-link",
      id: 5,
      title: "Inicio",
      url: "/",
    },
    {
      __component: "menu.menu-link",
      id: 6,
      title: "Nosotros",
      url: "/nosotros",
    },
    {
      __component: "menu.dropdown",
      id: 2,
      title: "Servicios",
      url: "/servicios",
      sections: [
        {
          id: 3,
          heading: "Prótesis de pierna",
          slug: "/servicios/protesis-de-pierna",
          icon: "🦿",
          links: [
            {
              id: 4,
              name: "Prótesis Transfemoral",
              url: "/servicios/protesis-de-pierna/protesis-transfemoral",
              description: "Prótesis por encima de la rodilla",
              elaboracion: "Tiempo de elaboración: 35 días",
              resum: "Prótesis para amputación por encima de la rodilla. Incorpora tecnología avanzada en el sistema de rodilla y un encaje personalizado para máxima comodidad y funcionalidad.",
              features: [
                {
                    char: "Rodilla policéntrica de 4 barras",
                },
                {
                    char: "Socket con sistema de succión",
                },
                {
                    char: "Pie de fibra de carbono",
                },
                {
                    char: "Adaptadores de titanio",
                }
              ]
            },
            {
              id: 5,
              name: "Prótesis Transtibial",
              url: "/servicios/protesis-de-pierna/protesis-transtibial",
              description: "Prótesis por debajo de la rodilla",
              elaboracion: "Tiempo de elaboración: 30 días",
              resum: "Prótesis por debajo de la rodilla que combina ligereza y durabilidad. Diseñada para proporcionar máxima comodidad y funcionalidad en actividades diarias.",
              features: [
                {
                    char: "Socket de contacto total",
                },
                {
                    char: "Pie dinámico multiaxial",
                },
                {
                    char: "Sistema de suspensión PIN",
                },
                {
                    char: "Acabado cosmético personalizado",
                }
              ]
            },
            {
              id: 6,
              name: "Desarticulado de Cadera",
              url: "/servicios/protesis-de-pierna/desarticulado-cadera",
              description: "Prótesis por debajo de la rodilla",
              elaboracion: "Tiempo de elaboración: 45 días",
              resum: "Prótesis diseñada para personas con amputación a nivel de la cadera. Incluye componentes especializados como una articulación de cadera hidráulica y un sistema de rodilla controlado por microprocesador para lograr un movimiento más natural y seguro.",
              features: [
                {
                    char: "Articulación de cadera hidráulica",
                },
                {
                    char: "Pie de respuesta dinámica",
                },
                {
                    char: "Sistema de rodilla controlado por microprocesador",
                },
                {
                    char: "Socket de contacto total",
                }
              ]
            },
            {
              id: 7,
              name: "Prótesis Chopart",
              url: "/servicios/protesis-de-pierna/protesis-chopart",
              description: "Prótesis por debajo de la rodilla",
              elaboracion: "Tiempo de elaboración: 25 días",
              resum: "Prótesis parcial de pie diseñada para mantener la funcionalidad máxima con una intervención mínima. Ideal para preservar la movilidad natural del tobillo.",
              features: [
                {
                    char: "Diseño ultraligero",
                },
                {
                    char: "Plantilla anatómica",
                },
                {
                    char: "Sistema de retención personalizado",
                },
                {
                    char: "Cosmética realista",
                }
              ]
            },
            {
              id: 8,
              name: "Prótesis Syme",
              url: "/servicios/protesis-de-pierna/protesis-syme",
              description: "Prótesis por debajo de la rodilla",
              elaboracion: "Tiempo de elaboración: 30 días",
              resum: "Prótesis específica para amputación a nivel del tobillo. Ofrece excelente estabilidad y una marcha natural gracias a su diseño especializado.",
              features: [
                {
                    char: "Diseño de bajo perfil",
                },
                {
                    char: "Sistema de suspensión integrado",
                },
                {
                    char: "Pie protésico especializado",
                },
                {
                    char: "Acabado anatómico preciso",
                }
              ]
            },
            {
                id: 9,
                name: "Desarticulado de Rodilla",
                url: "/servicios/protesis-de-pierna/desarticulado-de-rodilla",
                description: "Prótesis por encima de la rodilla",
                elaboracion: "Tiempo de elaboración: 35 días",
                resum: "Solución especializada para amputación a nivel de la rodilla, preservando la longitud total del fémur. Diseñada para maximizar la estabilidad y el control.",
                features: [
                  {
                      char: "Sistema de rodilla especializado",
                  },
                  {
                      char: "Encaje anatómico personalizado",
                  },
                  {
                      char: "Control de rotación integrado",
                  },
                  {
                      char: "Sistema de alineación preciso",
                  }
                ]
            },
          ],
        },
        {
          id: 10,
          heading: "Prótesis Biónicas",
          slug: "/servicios/protesis-bionicas",
          icon: "🦾",
          links: [
            {
              id: 11,
              name: "Mano Parcial Biónica",
              url: "/servicios/protesis-bionicas/protesis-bionica-de-mano-parcial",
              description: "Tecnología avanzada para movilidad precisa",
            },
          ],
        },
        {
          id: 12,
          heading: "Prótesis Estéticas",
          slug: "/servicios/protesis-esteticas",
          icon: "✨",
          links: [
            {
              id: 13,
              name: "Mano Completa Estética",
              url: "/servicios/protesis-esteticas/mano-completa-estetica",
              description: "Acabado realista y natural",
            },
            {
              id: 14,
              name: "Falange Total",
              url: "/servicios/protesis-esteticas/falange-total",
              description: "Solución personalizada y detallada",
            },
            {
              id: 15,
              name: "Prótesis de Oído",
              url: "/servicios/protesis-esteticas/protesis-de-oido",
              description: "Diseño anatómico preciso",
            },
          ],
        },
      ],
    },
    {
      __component: "menu.menu-link",
      id: 16,
      title: "Blog / Podcasts",
      url: "/podcasts",
    },
    {
      __component: "menu.menu-link",
      id: 17,
      title: "Contactos y Citas",
      url: "/contactos",
    },
  ],
};
