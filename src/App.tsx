import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          This is a Button
        </button>
      </div>
    </Container>
  );
}

export default App;
