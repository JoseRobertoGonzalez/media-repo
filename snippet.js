
  useEffect(() => {
    // fetch('https://joserobertogonzalez.github.io/media-repo/mediaList.json')
    try {
      fetch("https://cemedialist-default-rtdb.firebaseio.com/")
        .then((response) => response.json())
        .then((data) => setMedia(data));
    } catch (e) {
      setError("Invalid video URL entered");
    }
  }, []);
