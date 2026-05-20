import type { Area } from "../../../models/Area";

interface RegionCardProps {
  area: Area;
  onClick: (area: Area) => void;
}

function RegionCard({ area, onClick }: RegionCardProps) {
  // Função para obter código do país
  const getCountryCode = (country: string): string => {
    const countryMap: { [key: string]: string } = {
      American: "us",
      British: "gb",
      Canadian: "ca",
      Chinese: "cn",
      French: "fr",
      Greek: "gr",
      Indian: "in",
      Italian: "it",
      Japanese: "jp",
      Mexican: "mx",
      Spanish: "es",
      Thai: "th",
      Turkish: "tr",
      Vietnamese: "vn",
      German: "de",
      Brazilian: "br",
      Moroccan: "ma",
      Polish: "pl",
      Russian: "ru",
      Korean: "kr",
      Jamaican: "jm",
      Portuguese: "pt",
      Dutch: "nl",
      Egyptian: "eg",
      Irish: "ie",
      Australian: "au",
      Belgian: "be",
      Swiss: "ch",
      Swedish: "se",
      Norwegian: "no",
      Danish: "dk",
      Finnish: "fi",
      Argentine: "ar",
      Austrian: "at",
      Cuban: "cu",
      Czech: "cz",
      Hungarian: "hu",
      Indonesian: "id",
      Israeli: "il",
      Lebanese: "lb",
      Malaysian: "my",
      Peruvian: "pe",
      Filipino: "ph",
      Romanian: "ro",
      "Saudi Arabian": "sa",
      Singaporean: "sg",
      "South African": "za",
      Ukrainian: "ua",
      Uruguayan: "uy",
      Venezuelan: "ve",
      Croatian: "hr",
      Serbian: "rs",
      Slovak: "sk",
      Slovenian: "si",
      Bulgarian: "bg",
      Albanian: "al",
      Armenian: "am",
      Azerbaijani: "az",
      Belarusian: "by",
      Bosnian: "ba",
      Estonian: "ee",
      Georgian: "ge",
      Icelandic: "is",
      Kazakh: "kz",
      Latvian: "lv",
      Lithuanian: "lt",
      Macedonian: "mk",
      Maltese: "mt",
      Moldovan: "md",
      Montenegrin: "me",
      Tunisian: "tn",
    };
    return countryMap[country] || "";
  };

  const countryCode = getCountryCode(area.strArea);
  const flagUrl = countryCode
    ? `https://flagcdn.com/w320/${countryCode}.png`
    : null;

  return (
    <div
      onClick={() => onClick(area)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Flag - Altura responsiva */}
      <div className="h-20 md:h-24 lg:h-28 bg-gray-100 flex items-center justify-center overflow-hidden">
        {flagUrl ? (
          <img
            src={flagUrl}
            alt={`Bandeira do ${area.strArea}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (
                e.target as HTMLImageElement
              ).nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}
        <span className={`text-3xl md:text-4xl ${flagUrl ? "hidden" : ""}`}>
          🌍
        </span>
      </div>

      {/* Conteúdo - Texto responsivo */}
      <div className="p-2 md:p-3 text-center bg-linear-to-r from-green-50 to-white">
        <h3 className="text-xs md:text-sm font-semibold text-gray-800 whitespace-normal md:truncate">
          {area.strArea}
        </h3>
        {area.recipeCount > 0 && (
          <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">
            {area.recipeCount} {area.recipeCount === 1 ? "receita" : "receitas"}
          </p>
        )}
      </div>
    </div>
  );
}

export default RegionCard;
