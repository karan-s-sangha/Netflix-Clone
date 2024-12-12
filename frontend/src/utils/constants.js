// Base URL for small-sized images (500px wide).
// Used to fetch images in a smaller size for better performance in thumbnails or lists.
export const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Base URL for original-sized images.
// Used to fetch high-resolution images, often for detail views or backgrounds.
export const ORIGINAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

// Predefined categories for movies.
// These categories align with the TMDb API endpoints for movies.
export const MOVIE_CATEGORIES = [
    "now_playing", // Movies currently playing in theaters.
    "top_rated",   // Movies with the highest ratings on TMDb.
    "popular",     // Movies that are currently popular.
    "upcoming",    // Movies scheduled for release soon.
];

// Predefined categories for TV shows.
// These categories align with the TMDb API endpoints for TV shows.
export const TV_CATEGORIES = [
    "airing_today", // TV shows airing today.
    "on_the_air",   // TV shows currently airing episodes.
    "popular",      // TV shows that are currently popular.
    "top_rated",    // TV shows with the highest ratings on TMDb.
];
export const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  export const translations = {
    English: {
        welcomeMessage: "Welcome to Netflix!",
        signIn: "Sign In",
        getStarted: "Get Started",
        trending: "Trending Now",
        unlimited: "Unlimited movies, TV shows, and more",
        startsAt: "Starts at $6.99. Cancel anytime.",
        readyToWatch: "Ready to watch? Enter your email to create or restart your membership.",
        emailAddress: "Email address",
        affordablePlan: "The Netflix you love for just $6.99.",
        adSupportedPlan: "Get our most affordable, ad-supported plan.",
        learnMore: "Learn More",
        trending: "Trending Now",
        "United States": "United States",
        Movies: "Movies",
        Global: "Global",
        signUp: "Sign Up",
        email: "Email",
        username: "Username",
        password: "Password",
        alreadyMember: "Already a member?",
        newToNetflix: "New to Netflix?",
        signUpNow: "Sign up now.",
        recaptchaNote: "This page is not protected by Google reCAPTCHA to ensure you're not a bot.",
        learnMore: "Learn more.",

        content: {
            Movies: "Movies",
            "TV Shows": "TV Shows", // Added "TV Shows" translation
        },
        country: {
            "United States": "United States",
            Global: "Global",
        },
        reasonsToJoin: {
            title: "More Reasons to Join",
            features: [
                {
                    title: "Enjoy on your TV",
                    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                    icon: '/small_tv.png',
                },
                {
                    title: "Download your shows to watch offline",
                    description: "Save your favorites easily and always have something to watch.",
                    icon: '/download.png', 

                },
                {
                    title: "Watch everywhere",
                    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
                    icon: '/watch_everywhere.png', 

                },
                {
                    title: "Create profiles for kids",
                    description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
                    icon: '/kids_profile.png', 

                },
            ]
        },
        faqs: {
            title: "Frequently Asked Questions", // Added title
            questions: [
                {
                  question: "What is Netflix?",
                  answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                  
                  You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
                },
                {
                  question: "How much does Netflix cost?",
                  answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month (pre-tax). No extra costs, no contracts.`,
                },
                {
                  question: "Where can I watch?",
                  answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        
        You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
                },
                {
                  question: "How do I cancel?",
                  answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
                },
                {
                  question: "What can I watch on Netflix?",
                  answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
                },
                {
                  question: "Is Netflix good for kids?",
                  answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
                },
              ]
        },
        genres: {
          28: "Action",
          12: "Adventure",
          16: "Animation",
          35: "Comedy",
          80: "Crime",
          99: "Documentary",
          18: "Drama",
          10751: "Family",
          14: "Fantasy",
          36: "History",
          27: "Horror",
          10402: "Music",
          9648: "Mystery",
          10749: "Romance",
          878: "Science Fiction",
          10770: "TV Movie",
          53: "Thriller",
          10752: "War",
          37: "Western",
        },
    },
    Español: {
        welcomeMessage: "¡Bienvenido a Netflix!",
        signIn: "Iniciar sesión",
        getStarted: "Comenzar",
        trending: "Tendencias ahora",
        unlimited: "Películas, programas de TV y más ilimitados",
        startsAt: "Comienza en $6.99. Cancela en cualquier momento.",
        readyToWatch: "¿Listo para ver? Ingresa tu correo electrónico para crear o reiniciar tu membresía.",
        emailAddress: "Correo electrónico",
        affordablePlan: "El Netflix que amas por solo $6.99.",
        adSupportedPlan: "Obtén nuestro plan más económico con anuncios.",
        learnMore: "Aprende más",
        trending: "Tendencias ahora",
        signUp: "Regístrate",
        email: "Correo electrónico",
        username: "Nombre de usuario",
        password: "Contraseña",
        alreadyMember: "¿Ya eres miembro?",

        newToNetflix: "¿Nuevo en Netflix?",
        signUpNow: "Regístrate ahora.",
        recaptchaNote: "Esta página no está protegida por Google reCAPTCHA para garantizar que no eres un robot.",
        learnMore: "Aprende más.",
        
        content: {
            Movies: "Películas",
            "TV Shows": "Programas de TV", // Added "TV Shows" translation
        },
        country: {
            "United States": "Estados Unidos",
            Global: "Mundial",
        },
        reasonsToJoin: {
            title: "Más razones para unirte",
            features: [
                {
                    title: "Disfruta en tu TV",
                    description: "Mira en Smart TVs, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y más.",
                    icon: '/small_tv.png',

                },
                {
                    title: "Descarga tus programas para ver sin conexión",
                    description: "Guarda tus favoritos fácilmente y siempre ten algo para ver.",
                    icon: '/download.png', 

                },
                {
                    title: "Mira en cualquier lugar",
                    description: "Transmite películas y programas de TV ilimitados en tu teléfono, tableta, computadora portátil y TV.",
                    icon: '/watch_everywhere.png', 
                },
                {
                    title: "Crea perfiles para niños",
                    description: "Lleva a los niños a aventuras con sus personajes favoritos en un espacio hecho solo para ellos, gratis con tu membresía.",
                    icon: '/kids_profile.png', 
                },
            ]
        },
        
        faqs: {
            title: "Preguntas frecuentes", // Added title
            questions: [
                {
                  question: "¿Qué es Netflix?",
                  answer: `Netflix es un servicio de transmisión que ofrece una amplia variedad de programas de TV galardonados, películas, anime, documentales y más en miles de dispositivos conectados a Internet.
                  
                  Puedes ver todo lo que quieras, cuando quieras, todo por un bajo precio mensual. ¡Siempre hay algo nuevo por descubrir y se agregan nuevos programas de TV y películas cada semana!`,
                },
                {
                  question: "¿Cuánto cuesta Netflix?",
                  answer: `Mira Netflix en tu smartphone, tableta, Smart TV, computadora portátil o dispositivo de transmisión, todo por una tarifa mensual fija. Los planes varían desde $6.99 hasta $22.99 al mes (antes de impuestos). Sin costos adicionales, sin contratos.`,
                },
                {
                  question: "¿Dónde puedo mirar?",
                  answer: `Mira en cualquier lugar, en cualquier momento. Inicia sesión con tu cuenta de Netflix para mirar instantáneamente en la web en netflix.com desde tu computadora personal o en cualquier dispositivo conectado a Internet que ofrezca la aplicación de Netflix, incluidos Smart TVs, smartphones, tabletas, reproductores de medios de transmisión y consolas de juegos.
        
        También puedes descargar tus programas favoritos con la aplicación de iOS o Android. Usa las descargas para mirar mientras viajas y sin conexión a Internet. Lleva Netflix contigo a cualquier lugar.`,
                },
                {
                  question: "¿Cómo cancelo?",
                  answer: `Netflix es flexible. No hay contratos molestos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea en dos clics. No hay tarifas de cancelación: inicia o detén tu cuenta en cualquier momento.`,
                },
                {
                  question: "¿Qué puedo ver en Netflix?",
                  answer: `Netflix tiene una amplia biblioteca de películas, documentales, programas de TV, anime, originales galardonados de Netflix y más. Mira todo lo que quieras, cuando quieras.`,
                },
                {
                  question: "¿Es bueno Netflix para niños?",
                  answer: `La experiencia para niños de Netflix está incluida en tu membresía para dar a los padres control mientras los niños disfrutan de programas de TV y películas familiares en su propio espacio.
        
        Los perfiles para niños vienen con controles parentales protegidos por PIN que te permiten restringir la clasificación de madurez del contenido que los niños pueden ver y bloquear títulos específicos que no quieres que vean.`,
                },
              ]
        },
        genres: {
            28: "Acción",
            12: "Aventura",
            16: "Animación",
            35: "Comedia",
            80: "Crimen",
            99: "Documental",
            18: "Drama",
            10751: "Familiar",
            14: "Fantasía",
            36: "Historia",
            27: "Terror",
            10402: "Música",
            9648: "Misterio",
            10749: "Romance",
            878: "Ciencia ficción",
            10770: "Película de TV",
            53: "Suspenso",
            10752: "Guerra",
            37: "Western",
        },
    },
};
  