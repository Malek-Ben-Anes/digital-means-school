export function ScrollY() {
  const [counter, setCounter] = useState(60);
  const [y, setY] = useState(0);

  useEffect(() => {
    const scrollEvent = () => {
      console.log("scroll event listener added ");
      setY(window.scrollY);
    };
    addEventListener("scroll", scrollEvent);

    // On Destroy
    // return () => removeEventListener(scrollEvent);
  }, []);

  return (
    <div style={{ height: 1200 }}>
      <InputText text="Compteur" value={counter} onChange={setCounter} />
      <br />
      position Y: {y}
    </div>
  );
}
