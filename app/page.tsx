import AnotherServer from '../components/AnotherServer';

const Home = async () => {
  const { result } = await (
    await fetch("https://www.swapi.tech/api/people/1")
  ).json();

  return (
    <div className="home">
      <AnotherServer result={result} />
    </div>
  )
}

export default Home;
