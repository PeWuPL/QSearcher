// Przykładowa baza pytań i odpowiedzi (możesz ją zmieniać)
const qaDatabase = [
  {
    "question": "Na odbiór danej barwy wpływ ma wiele bodźców, m. in.:",
    "answer": "ilość energii świetlnej, samopoczucie odbiorcy odczuwane danego dnia, skład widmowy promieniowania, obecność innych barw w pobliżu"
  },
  {
    "question": "Zmienna przepływność",
    "answer": "Gwarantuje utrzymanie stałej jakości sygnału wyjściowego, nie zaś stałej ilości danych przypadających na daną jednostkę czasu"
  },
  {
    "question": "Kompresja stratna obrazu jest możliwa m.in. dzięki:",
    "answer": "Niedoskonałości ludzkiego wzroku, Transformacji do dziedziny częstotliwości i kwantyzacji współczynników widma"
  },
  {
    "question": "Zaznacz rodzaje pamięci masowej:",
    "answer": "pamięć obiektowa, pamięć plikowa, pamięć blokowa"
  },
  {
    "question": "Po wykonaniu algorytmu ByteRun na ciągu 1,1,1,1,2,2,2,3,3,3,3,1,2,3,1,2,3,4,5 uzyska się następujący wynik",
    "answer": "-3,1,-2,2,-3,3,7,1,2,3,1,2,3,4,5"
  },
  {
    "question": "W technologii nośników holograficznych wykorzystuje się:",
    "answer": "laser czerwony,, laser zielony,"
  },
  {
    "question": "Utrata synchronizacji to sytuacja w znakowaniu wodnym, kiedy:",
    "answer": "znak wodny jest obecny ale nie może zostać wykryty,"
  },
  {
    "question": "Maskowanie w modelu psychoakustycznym dotyczy m.in.:",
    "answer": "Maskowania sąsiednich częstotliwości dźwięków w obecności innych dźwięków, \"Zagłuszania\" wybranych dźwięków po sobie następujących w określonych warunkach"
  },
  {
    "question": "Kompensacja ruchu to:",
    "answer": "Sposób zapisu wektorów przesunięć"
  },
  {
    "question": "Cele cyfrowego znakowania wodnego:",
    "answer": "ochrona praw autorskich,, Śledzenie transakcji,, uwierzytelnianie treści,"
  },
  {
    "question": "Klatki typu P przechowują informację",
    "answer": "Wynikająca z sąsiadujących klatek I, Różnicowa"
  },
  {
    "question": "Zaznacz prawdziwe:",
    "answer": "Aplikacje multimedialne wymagają dużej liczby manipulacji danymi, Integracja dyskretnych i ciągłych danych multimedialnych wymaga dodatkowych usług systemu operacyjnego, System operacyjny zapewnia wygodne środowisko do wykonywania programów i efektywne wykorzystanie sprzętu komputerowego"
  },
  {
    "question": "Scentralizowany system VOD charakteryzuje się:",
    "answer": "stosunkowo niską przepustowością, łatwością zarządzania"
  },
  {
    "question": "Cechą wspólną algorytmów JPEG2000, WSQ i DjVu jest to, że",
    "answer": "wykorzystują transformatę falkową"
  },
  {
    "question": "Wielkość pojedynczego piksela w typowej matrycy CCD jest w przedziale",
    "answer": "3 - 25 mikrometrów"
  },
  {
    "question": "Długość fali lasera dla nośników CD-ROM jest:",
    "answer": "dłuższa niż dla DVD-ROM,"
  },
  {
    "question": "PhotoStimulating Luminescence pozwala na",
    "answer": "rejestracje promieniowania X w cyfrowych urządzeniach medycznych, budowę obrazów radiograficznych"
  },
  {
    "question": "Kodowanie Huffmana jest",
    "answer": "Metoda kompresji bezstratnej"
  },
  {
    "question": "Szum kwantyzacji obniża się",
    "answer": "wraz ze wzrostem głębokości bitowej rejestrowanego dźwięku"
  },
  {
    "question": "MDCT (modified DCT) pozwala na",
    "answer": "Zmniejszenie zniekształceń na granicach ramek audio w kompresji stratnej, Realizację przekształcenia na blokach nachodzących na siebie w czasie"
  },
  {
    "question": "Typowy rozmiar skompresowanych ramek P w kompresji wideo...",
    "answer": "jest znacznie mniejszy niż ramek I, jest znacznie większy niż ramek B"
  },
  {
    "question": "Dla dowolnego obrazka kolorowego zapisanego z dokładnością 8-bitowego alfabet kompresora LZW ...",
    "answer": "Będzie równy liczbie symboli w słowniku"
  },
  {
    "question": "Wyróżniamy następujące znaczenia komunikatu:",
    "answer": "pierwotne (założnie, prokjekt), wtórne (odbiór, subiektywne), wewnętrzne (prawdziwe, obiektywne)"
  },
  {
    "question": "Kodeki parametryczne w kodowaniu mowy wykorzystują",
    "answer": "analizę parametrów mowy, transmisje parametrów modelu, syntezę mowy na podstawie otrzymanych parametrów"
  },
  {
    "question": "W typowym przypadku cyfrowej transmisji TV w pojedynczym kanale można przesłać około:",
    "answer": "10 programów"
  },
  {
    "question": "Rozproszony system VOD charakteryzuje się:",
    "answer": "dużą przepustowością, stosunkowo dużą trudnością zarządzania"
  },
  {
    "question": "System multimedialny składa się z:",
    "answer": "systemu rzeczywistości rozszerzonej, kontekstu sytuacyjnego, systemu rzeczywistości wirtualnej"
  },
  {
    "question": "Standard AES42 to",
    "answer": "rozwiniecie interfejsu mikrofonów cyfrowych AES/EBU"
  },
  {
    "question": "Aktywne zasoby w systemie operacyjnym to",
    "answer": "CPU, karta sieciowa"
  },
  {
    "question": "Sprawność kodowania R dla ciągu informacyjnego o długości k=3 bity i ciągu kodowego n=6 bitów",
    "answer": "R=k/n, czyli R=1/2"
  },
  {
    "question": "W algorytmie LZW alfabet jest znany ...",
    "answer": "Zarówno przez kompresor jak i dekompresor"
  },
  {
    "question": "Kodowanie Huffmana dla ciągu 123123123 ...",
    "answer": "Zwiększy zapotrzebowanie na miejsce potrzebne do zapisania formy zakodowanej"
  },
  {
    "question": "Najmniej zasobów po stronie komputera odbiorcy angażuje w cloud gamingu metoda:",
    "answer": "Game streaming (GS)"
  },
  {
    "question": "Kamera plenoptyczna pozwala na",
    "answer": "zapisanie obrazu, który można modyfikować, symulując zmianę ostrości w rożnych planach sceny, zapisanie obrazu, który można modyfikować, symulując zmianę przesłony, Rejestracje setek obrazów w ciągu jednego cyklu otwarcia migawki, zapisanie obrazu, który można modyfikować, symulując zmianę perspektywy"
  },
  {
    "question": "Nośnikiem optycznym NIE JEST:",
    "answer": "Streamer,, Pamięć bębnowa,, OTP ROM,"
  },
  {
    "question": "Skrót 4CC oznacza",
    "answer": "identyfikator przestrzenie barwnej wykorzystywanej w plikach video"
  },
  {
    "question": "Zniekształcenia strukturalne w ocenie jakości obrazu to m.in.",
    "answer": "zaszumienie, rozmycie, kompresja stratna typu JPEG, kompresja stratna oparta na falkach"
  },
  {
    "question": "Dane bardzo trudne lub niemożliwe do skompresowania metodami bezstratnymi to:",
    "answer": "strumienie liczb pseudolosowych, strumienie liczb losowych,, dane skompresowane za pomocą tego samego lub innego algorytmu"
  },
  {
    "question": "Komunikat wizualny obejmuje (zawiera) m.in.:",
    "answer": "[sygnał, bodziec], [spostrzeżenie, informację], [wrażenie, wiadomość]"
  },
  {
    "question": "Skuteczność mikrofonu to",
    "answer": "stosunek napięcia na nieobciążonym wyjściu mikrofonu do wartości ciśnienia akustycznego przy określonej częstotliwości i kierunku padania dźwięku, wykres charakterystyki kierunkowej mikrofonu dla kata 0 stopni"
  },
  {
    "question": "metoda znakowania wodnego na bazie LSB wykorzystuje:",
    "answer": "najmniej znaczące bity słowa opisującego piksel,"
  },
  {
    "question": "profile MPEG",
    "answer": "podzbiory składni, dzięki którym dekodery pracujące w pewnym określonym obszarze nie muszą obsługiwać wszystkich założonych w standardzie funkcji, są ułożone hierarchicznie"
  },
  {
    "question": "W standardzie MPEG-4 podstawa jest (są):",
    "answer": "Audio-Visual Object"
  },
  {
    "question": "W modelu data-push dla interfejsu dźwiękowego",
    "answer": "jest dostępna synchronizacja z zegarem interfejsu"
  },
  {
    "question": "Bolometr (mikrobolometr) służy do",
    "answer": "pomiaru energii przenoszonej przez promieniowanie cieplne"
  },
  {
    "question": "Model barw YCbCr używany jest w kompresji obrazów ponieważ:",
    "answer": "Dzięki rozdzieleniu luminancji od chrominancji można uzyskać wyższy stopień kompresji"
  },
  {
    "question": "Pasywne zasoby w systemie operacyjnym to",
    "answer": "pamięć operacyjna, pasmo transmisji sieciowej, pasmo systemu plików"
  },
  {
    "question": "Kwantyzacja BTC",
    "answer": "dokonuje dwupoziomowej kwantyzacji w blokach obrazu, zachowuje średnią wartości pikseli w blokach, zachowuje wariancje wartości pikseli w blokach, jest metodą stratnej kompresji obrazu"
  },
  {
    "question": "Drogą przekazu wyłączenie akustycznego człowieka przyjmuje około X% informacji. Przy przekazie słownym i wizualnym - około Y%",
    "answer": "X=30, Y=80"
  },
  {
    "question": "Zasada Huygensa pozwala na",
    "answer": "odwzorowanie przestrzennego rozkładu pola akustycznego, stworzenie pozornych źródeł poza obszarem odsłuchu"
  },
  {
    "question": "Proces w systemie czasu rzeczywistego...",
    "answer": "dostarcza wyniki przetwarzania w określonym przedziale czasu, może coś więcej?"
  },
  {
    "question": "Subsampling (opisywany np. jako 4:2:2) stosowany w JPEG i MPEG dotyczy",
    "answer": "Stosunku liczby zapamiętanych w obrazie pikseli luminancji i chrominancji"
  },
  {
    "question": "Efektywność kwantowa sensorów CCD i CMOS jest w przedziale",
    "answer": "60-95 procent"
  },
  {
    "question": "Kryteria dotyczące wymagań aplikacji multimedialnych i strumieni danych to m.in.",
    "answer": "liczba obsługiwanych plików w lokalnym systemie plików, przepustowość, niezawodność, jitter, opóźnienie lokalne (przy zasobie)"
  },
  {
    "question": "Z punktu widzenia fizyki, częstotliwość dźwięku odbierana jako:",
    "answer": "wysokość tonu"
  },
  {
    "question": "Zaznacz prawidłowe:",
    "answer": "Treść nielinearna oferuje interaktywność, Przykładem treści linearnej jest np. przekaz kinowy, Treść nielinearna to treść hipermedialna"
  },
  {
    "question": "Metoda podwójnej ślepej próby (test ABC) w ocenie jakości dźwięku wykorzystuje",
    "answer": "3 sygnały"
  },
  {
    "question": "Punktowy detektor światła charakteryzuje się",
    "answer": "Stosunkowo niskim poziomem złożoności technicznej, Wysoką czułością i powtarzalnością"
  },
  {
    "question": "Cecha charakterystyczna redundancji informacyjnej jest...",
    "answer": "Częste powtarzanie się symboli w ciągu danych, Niska entropia strumienia danych"
  },
  {
    "question": "Kompresja fraktalna obrazu wykorzystuje",
    "answer": "bloki zakresów (range blocks), bloki domen (domain blocks), transformacje afiniczne"
  },
  {
    "question": "Wyróżniamy następujące rodzaje transmisji strumieniowej",
    "answer": "Transmisja jeden-do-jednego (ang. Unicast), Transmisja jeden-do-wielu (ang. Multicast), Transmisja rozgłoszeniowa (ang. Broadcast)"
  },
  {
    "question": "Pakiety w transmisji cyfrowej TV poddaje się tzw. randomizacji aby:",
    "answer": "rozproszyć energie sygnału, zabezpieczyć przed wysyłaniem pozornie niemodulowanej fali nośnej, zwiększyć odporność przekazu na zakłócenia"
  },
  {
    "question": "Zalety zapisu dźwięku w formacie float to",
    "answer": "brak niebezpieczeństwa przesterowania cyfrowego podczas wykonywania obliczeń, znormalizowany zapis próbek w zakresie od -1.0 do 1.0"
  },
  {
    "question": "Modulacja EFM stosowana w zapisie CD-ROM oznacza, ze:",
    "answer": "8 bitów wejściowych jest zastępowane 14 bitami wyjściowymi,"
  },
  {
    "question": "Binning pozwala na",
    "answer": "rejestrowanie obrazów w słabym oświetleniu, łączenie pikseli w matrycy w celu zmniejszenia poziomu szumu w obrazie"
  },
  {
    "question": "Elementy “bezstratne” algorytmu kompresji JPEG to",
    "answer": "podział na bloki 8x8, skanowanie zig-zag"
  },
  {
    "question": "Oko ludzkie jest czułe na barwy w następujących proporcjach:",
    "answer": "Czerwony 30%, Zielony 60%, Niebieski 10%"
  },
  {
    "question": "Różnica pomiędzy CCD a CMOS w matrycach światłoczułych polega na tym, iż",
    "answer": "odczyt wartości z matrycy CMOS odbywa się w jednym kroku, w matrycach CMOS konwersja ładunku na napięcie odbywa się w każdym pikselu matrycy"
  },
  {
    "question": "Cechy mikrofonów węglowych:",
    "answer": "duży poziom szumu, duże zniekształcenia, duża skuteczność"
  },
  {
    "question": "Kodowanie danych ma na celu:",
    "answer": "ograniczenie dostępu poprzez szyfrowanie,, zmniejszenie objętości poprzez kompresje,, poprawę jakości transmisji przez korekcje błędów,"
  },
  {
    "question": "W modelu data-pull dla interfejsu dźwiękowego",
    "answer": "synchronizacja zależy od tego, czy odtwarzamy, czy nagrywamy dźwięk"
  },
  {
    "question": "QuadBayer to nazwa",
    "answer": "specjalnego sensora o rozdzielczości przestrzennej 4x większej niż zwykłe sensory, metody zwiększania czułości i efektywności kwantowej w przypadku stałego oświetlenia"
  },
  {
    "question": "Wyższa częstotliwość próbkowania pozwala na",
    "answer": "poszerzenie zakodowanego pasma częstotliwości"
  },
  {
    "question": "Ze względu na zastosowany typ przetwornika elektroakustycznego, wyróżniamy mikrofony:",
    "answer": "kwasowe, węglowe, stykowe, piezoelektryczne, dynamiczne, magnetoelektryczne, laserowe, elektrostatyczne"
  },
  {
    "question": "Percepcja to:",
    "answer": "organizacja i interpretacja wrażeń zmysłowych, w celu zrozumienia otoczenia"
  },
  {
    "question": "Po wykonaniu algorytmu RLE na ciągu 1,1,1,1,2,2,2,3,3,3,3,1,2,3,1,2,3,4,5 uzyska się następujący wynik:",
    "answer": "4,1,3,2,4,3,0,8,1,2,3,1,2,3,4,5,0"
  },
  {
    "question": "kompensacja ruchu wykorzystuje:",
    "answer": "ocenę błędu MAE, mechanizmy przeszukiwania (pełny i logarytmiczny)"
  },
  {
    "question": "Algorytmy kodowania bez analizy całego zbioru danych to m.in. :",
    "answer": "LZ77, LZW, ByteRun, RLE"
  },
  {
    "question": "Proszę zaznaczyć technologie realizujące koncepcje IBB:",
    "answer": "HybridCast, HbbTV"
  },
  {
    "question": "Wada znakowania wodnego dla video wykorzystującego takie same znaki wodne dla każdej klatki jest:",
    "answer": "problem z zachowaniem niewidzialności statystycznej"
  },
  {
    "question": "Zaznacz rodzaje pamięci masowej:",
    "answer": "pamięć plikowa,, pamięć obiektowa,, pamięć blokowa,"
  },
  {
    "question": "Stała przepływność",
    "answer": "Gwarantuje wypełnienie określonego pasma transmisyjnego, Zapisuje określony fragment nagrania zawsze przy pomocy tej samej liczby bitów, niezależnie od stopnia skomplikowania zapisywanych danych"
  },
  {
    "question": "Jak nazywa się mechanizm ochrony dysków SSD przed zbyt szybkim zużyciem:",
    "answer": "Wear-leveling"
  },
  {
    "question": "Zaznacz metody/standardy stratnej kompresji dźwięku",
    "answer": "A-Law, ADPCM, AAC, MP3"
  },
  {
    "question": "Pasywne zasoby w systemie operacyjnym to",
    "answer": "pamięć operacyjna, pasmo transmisji sieciowej, pasmo systemu plików"
  }
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const answerContainer = document.getElementById("answerContainer");
const answerText = document.getElementById("answerText");

// sprawi, że podczas wyszukiwania polskie znaki zarówno z bazy pytań jak i z pola wprowadzania
// będą w locie zamieniane na odpowiedniki z alfabetu łacińskiego (polskie znaki będą widoczne
// normalnie, lecz wyszukiwanie będzie je interpretować jako łacińskie odpowiedniki)
const enableDiacriticsRemoval = true;

// Funkcja usuwająca polskie znaki. Polskie ł i Ł wymagają osobnej zamiany
function removeDiacritics(str) {
    //str = "Żółw"
    return str
        .replace(/ł/g, "l") //str = "Żólw"
        .replace(/Ł/g, "L")
        .normalize("NFD") //str = "Z.o`lw"
        .replace(/[\u0300-\u036f]/g, ""); //str = "Zolw"
}

//domyślny focus
if (searchInput) {
    searchInput.focus();
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

getCurrentTab().then(tab=>{
  chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function(response){

    searchInput.value = response.body;
  });
});

// Wyszukiwanie pytań
searchInput.addEventListener("input", (e) => {
  const searchTerm = removeDiacritics(e.target.value.toLowerCase())

  resultsDiv.innerHTML = "";

  if (searchTerm === "") return;

  const filteredQuestions = qaDatabase.filter(item => {
    const questionText = enableDiacriticsRemoval ? removeDiacritics(item.question.toLowerCase()) : item.question.toLowerCase();
    return questionText.includes(searchTerm);
  });

  const filteredAnswers = qaDatabase.filter(item => {
    const answerText = enableDiacriticsRemoval ? removeDiacritics(item.question.toLowerCase()) : item.question.toLowerCase();
    return answerText.includes(searchTerm)
  });
  
  if (filteredQuestions.length === 0 && filteredAnswers.length === 0) {
    resultsDiv.innerHTML = "<p>Brak wyników</p>";
    return;
  }
  
  //dodaje do resulta question, a po kliknięciu pokazuje answer
  filteredQuestions.forEach(
    item => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.textContent = item.question;
        questionDiv.addEventListener
        ("click", () =>
          {
            //answerText.textContent = item.answer;
            answerText.innerHTML = item.answer.replace(/\n/g, "<br>");
            answerContainer.style.display = "block";
          }
        );
        resultsDiv.appendChild(questionDiv);
      }
  );
  
  //dodaje do resulta answer, a po kliknięciu pokazuje oryginalny question
  filteredAnswers.forEach(
    item =>
        {
          const answerDiv = document.createElement("div");
          answerDiv.className = "answer";
          //answerDiv.textContent = item.answer;
          answerDiv.innerHTML = item.answer.replace(/\n/g, "<br>");
          answerDiv.style.fontStyle = "italic";
          answerDiv.style.color = "rgb(255, 180, 0)";
          answerDiv.addEventListener
          ("click", () =>
              {
                //answerText.textContent = item.question;
                answerText.innerHTML = item.question.replace(/\n/g, "<br>");
                answerContainer.style.display = "block";
              }
          );
          resultsDiv.appendChild(answerDiv);
        }
    );
});
