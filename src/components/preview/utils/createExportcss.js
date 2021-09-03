const CSS = `
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family:sans-serif;
  }

  #carousel-container {
    padding: 1rem 0;
    margin: 0;
  }
  
  .slide {
    width: 500px;
    height: 500px;
    margin: auto;
  }
  
  .slide img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .dashes {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: relative;
    bottom: 50px;
  }
  
  .dash {
    border: none;
    background: #fff;
    height: 4px;
    width: 25px;
    cursor: pointer;
  }
  
  .active-dash {
    background: blueviolet;
  }
  
  .info {
    text-align:center;
  }

  span {
    color:#fff;
    background:blueviolet;
    border-radius: 0.25rem;
    padding: 0.1rem 0.5rem;
  }`;

export default CSS;
