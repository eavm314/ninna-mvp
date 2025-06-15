"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Sparkles,
  Heart,
  Star,
  Trophy,
  Globe,
  BookOpen,
  Gamepad2,
  Music,
  Palette,
  Calculator,
  Camera,
} from "lucide-react"

export function ChildDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  const quickSearches = [
    { query: "animales del océano", icon: "🐠", color: "bg-blue-100 text-blue-800" },
    { query: "experimentos divertidos", icon: "⚗️", color: "bg-cyan-100 text-cyan-800" },
    { query: "juegos de matemáticas", icon: "🔢", color: "bg-sky-100 text-sky-800" },
    { query: "cuentos para niños", icon: "📚", color: "bg-indigo-100 text-indigo-800" },
    { query: "manualidades fáciles", icon: "✂️", color: "bg-blue-100 text-blue-800" },
    { query: "planetas del sistema solar", icon: "🪐", color: "bg-cyan-100 text-cyan-800" },
  ]

  const safeCategories = [
    { name: "Educación", icon: BookOpen, color: "bg-blue-500", description: "Aprende cosas nuevas" },
    { name: "Juegos", icon: Gamepad2, color: "bg-cyan-500", description: "Diversión segura" },
    { name: "Música", icon: Music, color: "bg-sky-500", description: "Canciones para niños" },
    { name: "Arte", icon: Palette, color: "bg-indigo-500", description: "Creatividad y colores" },
    { name: "Ciencias", icon: Calculator, color: "bg-blue-600", description: "Descubre el mundo" },
    { name: "Fotografía", icon: Camera, color: "bg-cyan-600", description: "Imágenes bonitas" },
  ]

  const searchResultsDatabase = {
    "animales del océano": [
      {
        title: "National Geographic Kids - Vida Marina",
        description:
          "Descubre delfines, ballenas, tiburones y criaturas increíbles del océano profundo con videos y fotos reales.",
        url: "kids.nationalgeographic.com/animals/ocean",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🐋",
      },
      {
        title: "Monterey Bay Aquarium - Animales Marinos",
        description: "Explora el acuario virtual y aprende sobre medusas, nutrias marinas y peces tropicales.",
        url: "montereybayaquarium.org/animals",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🐠",
      },
      {
        title: "BBC Earth Kids - Océanos",
        description:
          "Videos educativos sobre la vida marina, desde pequeños caballitos de mar hasta enormes ballenas azules.",
        url: "bbcearth.com/kids/ocean",
        type: "Video Educativo",
        safety: "100% Seguro",
        image: "🌊",
      },
      {
        title: "Smithsonian Ocean Portal",
        description: "Juegos interactivos sobre ecosistemas marinos y la importancia de cuidar nuestros océanos.",
        url: "ocean.si.edu/kids",
        type: "Juego Educativo",
        safety: "100% Seguro",
        image: "🐙",
      },
    ],
    "experimentos divertidos": [
      {
        title: "Steve Spangler Science - Experimentos Caseros",
        description: "Experimentos seguros con materiales de casa: volcanes de bicarbonato, slime casero y más.",
        url: "stevespanglerscience.com/kids",
        type: "Educativo",
        safety: "100% Seguro",
        image: "⚗️",
      },
      {
        title: "NASA Kids Club - Experimentos Espaciales",
        description:
          "Construye cohetes de papel, crea cráteres lunares y aprende sobre el espacio con experimentos divertidos.",
        url: "nasa.gov/kidsclub/index.html",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🚀",
      },
      {
        title: "Exploratorium - Ciencia en Casa",
        description: "Actividades científicas paso a paso para hacer en casa con supervisión de adultos.",
        url: "exploratorium.edu/explore/hands-on-activities",
        type: "Actividad",
        safety: "100% Seguro",
        image: "🔬",
      },
      {
        title: "Cool Science Experiments HQ",
        description:
          "Experimentos coloridos y seguros: arcoíris en un vaso, cristales caseros y reacciones sorprendentes.",
        url: "coolscienceexperimentshq.com/kids",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🌈",
      },
    ],
    "juegos de matemáticas": [
      {
        title: "Khan Academy Kids - Matemáticas",
        description: "Juegos interactivos de suma, resta, multiplicación y geometría con personajes divertidos.",
        url: "khanacademy.org/kids/math",
        type: "Juego Educativo",
        safety: "100% Seguro",
        image: "🎓",
      },
      {
        title: "Prodigy Math Game",
        description: "Aventura RPG donde resuelves problemas matemáticos para avanzar y coleccionar mascotas.",
        url: "prodigygame.com",
        type: "Juego",
        safety: "100% Seguro",
        image: "🐉",
      },
      {
        title: "Math Playground",
        description: "Cientos de juegos matemáticos organizados por grado escolar y tema específico.",
        url: "mathplayground.com",
        type: "Juego Educativo",
        safety: "100% Seguro",
        image: "🎮",
      },
      {
        title: "Coolmath4Kids",
        description: "Juegos de lógica, rompecabezas matemáticos y actividades para hacer las matemáticas divertidas.",
        url: "coolmath4kids.com",
        type: "Juego",
        safety: "100% Seguro",
        image: "🧮",
      },
    ],
    "cuentos para niños": [
      {
        title: "Storyline Online",
        description: "Actores famosos leen cuentos clásicos en video con ilustraciones hermosas y actividades.",
        url: "storylineonline.net",
        type: "Video Educativo",
        safety: "100% Seguro",
        image: "📚",
      },
      {
        title: "International Children's Digital Library",
        description: "Miles de libros infantiles gratuitos de todo el mundo en diferentes idiomas.",
        url: "childrenslibrary.org",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🌍",
      },
      {
        title: "Epic! - Biblioteca Digital para Niños",
        description: "Más de 40,000 libros digitales, audiolibros y videos educativos para todas las edades.",
        url: "getepic.com",
        type: "Educativo",
        safety: "100% Seguro",
        image: "📖",
      },
      {
        title: "Storyberries - Cuentos Ilustrados",
        description: "Cuentos originales con hermosas ilustraciones, poemas y actividades de lectura.",
        url: "storyberries.com",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🍓",
      },
    ],
    "manualidades fáciles": [
      {
        title: "Crayola - Ideas Creativas",
        description: "Proyectos de arte paso a paso con materiales básicos: dibujo, pintura y manualidades.",
        url: "crayola.com/crafts",
        type: "Actividad",
        safety: "100% Seguro",
        image: "🖍️",
      },
      {
        title: "Red Ted Art - Manualidades para Niños",
        description: "Tutoriales fáciles de manualidades con papel, cartón reciclado y materiales caseros.",
        url: "redtedart.com/crafts-for-kids",
        type: "Actividad",
        safety: "100% Seguro",
        image: "✂️",
      },
      {
        title: "Disney Family - Actividades Creativas",
        description: "Manualidades temáticas de Disney, decoraciones y proyectos familiares divertidos.",
        url: "family.disney.com/crafts",
        type: "Actividad",
        safety: "100% Seguro",
        image: "🏰",
      },
      {
        title: "Martha Stewart Kids - Proyectos Creativos",
        description: "Ideas de manualidades estacionales, decoraciones y regalos hechos a mano.",
        url: "marthastewart.com/kids-crafts",
        type: "Actividad",
        safety: "100% Seguro",
        image: "🎨",
      },
    ],
    "planetas del sistema solar": [
      {
        title: "NASA Kids - Exploración Espacial",
        description:
          "Aprende sobre todos los planetas, sus lunas y características únicas con imágenes reales de la NASA.",
        url: "nasa.gov/audience/forkids/kidsclub/flash/index.html",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🪐",
      },
      {
        title: "National Geographic Kids - Espacio",
        description: "Datos fascinantes sobre planetas, estrellas y galaxias con videos y fotografías increíbles.",
        url: "kids.nationalgeographic.com/space",
        type: "Educativo",
        safety: "100% Seguro",
        image: "🌌",
      },
      {
        title: "Solar System Scope",
        description: "Simulador 3D interactivo del sistema solar donde puedes explorar planetas y sus órbitas.",
        url: "solarsystemscope.com",
        type: "Simulador",
        safety: "100% Seguro",
        image: "🌍",
      },
      {
        title: "Space Place NASA - Juegos Espaciales",
        description: "Juegos educativos sobre astronomía, misiones espaciales y exploración del universo.",
        url: "spaceplace.nasa.gov/games",
        type: "Juego Educativo",
        safety: "100% Seguro",
        image: "🚀",
      },
    ],
  }

  const handleSearch = async (query: string) => {
    setIsSearching(true)
    setSearchQuery(query)

    // Simulate AI search with real results based on query
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase()
      let results = []

      // Check if query matches any of our predefined searches
      const matchingKey = Object.keys(searchResultsDatabase).find(
        (key) => normalizedQuery.includes(key) || key.includes(normalizedQuery),
      )

      if (matchingKey) {
        results = searchResultsDatabase[matchingKey]
      } else {
        // Default educational results for any other search
        results = [
          {
            title: "Khan Academy Kids - Aprendizaje General",
            description: "Recursos educativos seguros y apropiados para tu búsqueda con contenido verificado.",
            url: "khanacademy.org/kids",
            type: "Educativo",
            safety: "100% Seguro",
            image: "🎓",
          },
          {
            title: "National Geographic Kids",
            description: "Contenido educativo sobre tu tema de interés con fotos y videos apropiados para niños.",
            url: "kids.nationalgeographic.com",
            type: "Educativo",
            safety: "100% Seguro",
            image: "🌍",
          },
          {
            title: "Britannica Kids",
            description: "Enciclopedia segura para niños con información confiable sobre tu búsqueda.",
            url: "kids.britannica.com",
            type: "Educativo",
            safety: "100% Seguro",
            image: "📚",
          },
        ]
      }

      setSearchResults(results)
      setIsSearching(false)
    }, 1500)
  }

  const handleQuickSearch = (query: string) => {
    handleSearch(query)
  }

  return (
    <div className="min-h-screen nina-gradient p-4">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center text-white mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Avatar className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/30">
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xl sm:text-2xl">
                🦸‍♀️
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">¡Hola, Sofia! 👋</h1>
              <p className="text-base sm:text-lg opacity-90">¿Qué quieres descubrir hoy?</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <Badge className="bg-white/20 text-white border-white/30 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
              <Star className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Explorador Nivel 5
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
              <Trophy className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              15 Descubrimientos
            </Badge>
          </div>
        </div>

        {/* AI Search Engine */}
        <Card className="nina-card border-2 border-blue-200">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl text-center justify-center">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              Buscador Inteligente NINNA
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            </CardTitle>
            <CardDescription className="text-base sm:text-lg text-center">
              Explora el internet de forma segura con la ayuda de la IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
              <Input
                placeholder="¿Qué quieres aprender hoy? Ej: animales marinos, experimentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
                className="flex-1 h-12 sm:h-14 text-base sm:text-lg rounded-2xl border-2 border-blue-200 focus:border-blue-400"
              />
              <Button
                onClick={() => handleSearch(searchQuery)}
                disabled={isSearching || !searchQuery.trim()}
                size="lg"
                className="h-12 sm:h-14 px-4 sm:px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span className="hidden sm:inline">Buscando...</span>
                  </div>
                ) : (
                  <>
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline ml-2">Buscar</span>
                  </>
                )}
              </Button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-700">Búsquedas rápidas:</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {quickSearches.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickSearch(item.query)}
                    className={`${item.color} border-0 rounded-2xl text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:scale-105 transition-transform`}
                  >
                    <span className="mr-1 sm:mr-2">{item.icon}</span>
                    {item.query}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {(searchResults.length > 0 || isSearching) && (
          <Card className="nina-card">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                {isSearching ? "Buscando contenido seguro..." : `Resultados Seguros para: "${searchQuery}"`}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {isSearching
                  ? "Nuestra IA está verificando el contenido para tu seguridad 🛡️"
                  : "Todos los resultados han sido verificados por IA para tu seguridad"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {isSearching ? (
                // Loading Animation
                <div className="space-y-4">
                  {/* Main Loading Animation */}
                  <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                    <div className="relative mb-6">
                      {/* Spinning Globe */}
                      <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-blue-200 border-t-blue-500 mb-4"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 animate-pulse" />
                      </div>
                    </div>

                    {/* Loading Text with Animation */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-700 animate-pulse">
                        🔍 Explorando el internet seguro...
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">Encontrando el mejor contenido para ti</p>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex space-x-2 mt-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-sky-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Loading Skeleton Cards */}
                  {[1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 animate-pulse"
                    >
                      {/* Skeleton Icon */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-xl flex-shrink-0 animate-pulse"></div>

                      <div className="flex-1 min-w-0 space-y-2">
                        {/* Skeleton Title */}
                        <div className="h-4 sm:h-5 bg-gray-300 rounded-lg w-3/4 animate-pulse"></div>

                        {/* Skeleton Badges */}
                        <div className="flex gap-2">
                          <div className="h-3 sm:h-4 bg-gray-200 rounded-xl w-16 animate-pulse"></div>
                          <div className="h-3 sm:h-4 bg-gray-200 rounded-xl w-20 animate-pulse"></div>
                        </div>

                        {/* Skeleton Description */}
                        <div className="space-y-1">
                          <div className="h-3 sm:h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                          <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                        </div>

                        {/* Skeleton URL */}
                        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      </div>

                      {/* Skeleton Button */}
                      <div className="w-16 h-8 bg-gray-300 rounded-xl flex-shrink-0 animate-pulse"></div>
                    </div>
                  ))}

                  {/* Fun Loading Messages */}
                  <div className="text-center py-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-2xl">
                      <Sparkles className="h-4 w-4 text-blue-500 animate-spin" />
                      <span className="text-sm text-blue-700 font-medium">
                        Verificando que todo sea seguro para ti...
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                // Actual Search Results
                searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-colors cursor-pointer border border-blue-200 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl sm:text-3xl flex-shrink-0 bg-white p-2 rounded-xl">{result.image}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <h4 className="font-bold text-sm sm:text-base text-blue-800">{result.title}</h4>
                        <div className="flex gap-1 sm:gap-2">
                          <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-xl">
                            {result.type}
                          </Badge>
                          <Badge className="bg-cyan-100 text-cyan-800 text-xs px-2 py-0.5 rounded-xl">
                            ✅ {result.safety}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{result.description}</p>
                      <p className="text-xs text-blue-600 font-medium">{result.url}</p>
                    </div>
                    <Button
                      size="sm"
                      className="rounded-xl text-xs h-8 px-3 flex-shrink-0 bg-blue-500 hover:bg-blue-600"
                    >
                      Visitar
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        )}

        {/* Safe Categories */}
        <Card className="nina-card">
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              Categorías Seguras
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">Explora contenido organizado por temas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {safeCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors cursor-pointer hover:scale-105 transform"
                  >
                    <div className={`${category.color} p-2 sm:p-3 rounded-2xl mb-2 sm:mb-3`}>
                      <IconComponent className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-center mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-600 text-center">{category.description}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Help Button */}
        <div className="text-center pb-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg w-full sm:w-auto max-w-xs"
          >
            <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            ¡Necesito Ayuda!
          </Button>
        </div>
      </div>
    </div>
  )
}
