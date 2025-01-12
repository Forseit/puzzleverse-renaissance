import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 animate-fadeIn">
      <LanguageSwitcher />
      
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {t("welcome")}
        </h1>
        
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          {t("description")}
        </p>
        
        <Button
          size="lg"
          className="mt-8 bg-primary hover:bg-primary/90 text-white"
        >
          {t("startPlaying")}
        </Button>
      </div>
    </div>
  );
};

export default Index;