  // Matrix Rain Effect
  const canvas = document.getElementById('matrix-rain');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  const characters = matrix.split("");
  const fontSize = 14;
  const columns = canvas.width/fontSize;
  const drops = [];

  for(let x = 0; x < columns; x++) {
      drops[x] = 1;
  }

  function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";
    
      for(let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
          if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
          }
          drops[i]++;
      }
  }

  // Live Stock Ticker
  function updateStockTicker() {
      const stocks = [
          { symbol: "BTC", value: Math.random() * 20 - 10 },
          { symbol: "ETH", value: Math.random() * 15 - 7 },
          { symbol: "XRP", value: Math.random() * 10 - 5 },
          { symbol: "DOGE", value: Math.random() * 8 - 4 }
      ];
    
      const ticker = document.getElementById('live-ticker');
      ticker.innerHTML = stocks.map(stock => {
          const color = stock.value >= 0 ? '#0F0' : '#FF0033';
          return `<span class="ticker-item" style="color: ${color}">
              ${stock.symbol} ${stock.value >= 0 ? '+' : ''}${stock.value.toFixed(2)}%
          </span>`;
      }).join('');
  }








    const VALID_USERNAME = 'mustafa';
    const VALID_PASSWORD = '123';

    document.querySelector('.login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    









        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            document.querySelector('.hack-button').textContent = 'ACCESS GRANTED';
            document.querySelector('.hack-button').style.backgroundColor = '#0F0';
            // Add your successful login logic here
        } else {
            showSkullAnimation();
        }
    });

    function showSkullAnimation() {
        document.body.innerHTML = `
            <div class="skull-container">
                <svg class="skull" viewBox="0 0 100 100">
                    <path d="M50 10 C20 10 10 30 10 50 C10 70 20 90 50 90 C80 90 90 70 90 50 C90 30 80 10 50 10" fill="red"/>
                    <circle cx="35" cy="45" r="10" fill="black"/>
                    <circle cx="65" cy="45" r="10" fill="black"/>
                    <path d="M30 65 Q50 80 70 65" fill="none" stroke="black" stroke-width="3"/>
                </svg>
                <h1 class="skull-text">GO AWAY LOSER</h1>
            </div>
        `;

        const newStyle = document.createElement('style');
        newStyle.textContent = `
            .skull-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: black;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                animation: pulse 2s infinite;
            }

            .skull {
                width: 300px;
                height: 300px;
                animation: rotate 2s infinite;
            }

            .skull-text {
                color: red;
                font-family: 'Courier New', monospace;
                font-size: 4em;
                text-shadow: 0 0 10px red;
                animation: glitch 0.3s infinite;
            }

            @keyframes rotate {
                0% { transform: rotate(-10deg); }
                50% { transform: rotate(10deg); }
                100% { transform: rotate(-10deg); }
            }

            @keyframes pulse {
                0% { background: #000; }
                50% { background: #300; }
                100% { background: #000; }
            }

            @keyframes glitch {
                0% { transform: translate(0); }
                25% { transform: translate(-5px, 5px); }
                50% { transform: translate(5px, -5px); }
                75% { transform: translate(-5px, -5px); }
                100% { transform: translate(0); }
            }
        `;
        document.head.appendChild(newStyle);
    }
  // Animation loops
  setInterval(drawMatrix, 50);
  setInterval(updateStockTicker, 2000);

  // Handle window resize
  window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
