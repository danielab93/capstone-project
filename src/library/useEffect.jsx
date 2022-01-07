import FirstScreen from "../components/Firstscreen";

const useEffect = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <FirstScreen />
      ) : (
        <div>
          <header></header>
          <section>
            <h1>Amazing Restaurants</h1>
            {restaurants.map((restaurant) => (
              <p key={restaurant.id}>{restaurant.name}</p>
            ))}
          </section>

          <footer></footer>
        </div>
      )}
    </div>
  );
};

export { useEffect };
