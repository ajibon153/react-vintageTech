import React from "react";
import CocktailList from "../Component/CocktailList";
import SearchForm from "../Component/SearchForm";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    // // Simple Get Api
    // fetch(
    //   `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    // )
    //   .then((respones) => respones.json())
    //   .then((data) => setCocktails(data.drinks));

    // // Good get Api
    async function getDrinks() {
      try {
        const respones = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await respones.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktail = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktail);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
