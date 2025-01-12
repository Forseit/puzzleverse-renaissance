import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const games = [
    {
      id: "memory",
      title: t("memoryGame"),
      icon: "🧠",
      available: true,
    },
    {
      id: "number",
      title: t("numberPuzzle"),
      icon: "🔢",
      available: true,
    },
    {
      id: "word",
      title: t("wordSearch"),
      icon: "📝",
      available: false,
    },
    {
      id: "color",
      title: t("colorMatch"),
      icon: "🎨",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 animate-fadeIn">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            {t("welcome")}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            {t("selectGame")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game) => (
              <Card 
                key={game.id}
                className={`transform transition-all duration-300 hover:scale-105 ${
                  game.available ? 'cursor-pointer' : 'opacity-75'
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{game.icon}</span>
                    <span>{game.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    disabled={!game.available}
                  >
                    {game.available ? t("startPlaying") : t("comingSoon")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;