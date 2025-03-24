export function homeTemplate(styles, scripts) {
    return `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Database Spreadsheet</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <style>
          ${styles}
           .warning {
            color: lightgreen;
            font-size: 14px;
            display: none;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div id="header" class="fixed-header">
          <!-- Banner teks berjalan -->
          <div class="banner">
            <div id="digitalClock" class="clock-container">
            </div>

            <marquee id="marqueeText" behavior="scroll" direction="left">
              ✔️ Terhubung langsung ke Google Sheets! ⚡ Pencarian data cepat & responsif! 
              📊 Data selalu up-to-date! 🔄 Sinkronisasi otomatis dengan Google Sheets! 
              📨 Semua aktivitas direkam dan dikirim ke channel Telegram! 
              🌐 Akses data di mana saja, kapan saja!
               
            </marquee>
          </div>
  
          <!-- Form pencarian -->
          <form id="searchForm">
            <div class="search-container">
             <input type="text" id="queryInput" placeholder="Masukkan Nama Barang..." required>
             <div id="warningText" class="warning">Kata kunci minimal 3 karakter</div>
              
              
            </div>
            <div class="btn-container">
              <button type="button" class="btn-clear" onclick="clearSearch(); setActiveTab(this)">🧹 Clear</button>
              <button type="submit" class="btn-search" onclick="setActiveTab(this)">🔍 Cari</button>
              <button type="button" class="btn-inout" onclick="searchData('inout'); setActiveTab(this)">📥 Inout</button>
              <button type="button" class="btn-search" onclick="searchData('list'); setActiveTab(this)">📋 List</button>
              <button type="button" class="btn-search" onclick="searchData('stok'); setActiveTab(this)">📦 Stok</button>
              <button type="button" class="btn-export" onclick="exportToImage(); setActiveTab(this)">💾 Save</button>
              <button type="button" class="btn-inout" onclick="searchBingImage(); setActiveTab(this)">🖼️ Image</button>
              <button type="button" class="btn-clear" onclick="resetData(); setActiveTab(this)">🔄 Reset</button>

              
              
             
            </div>

          </form>
        </div>
  
        <div id="resultsContainer" class="results-container">
          <time>
            <p id="timestamp"></p>            
          </time>
         
          <div id="searchResults"></div>
  
          <!-- Container untuk hasil pencarian Bing -->
          
          
          <button type="button" class="btn-clear" onclick="hapusGambar(); setActiveTab(this)">Close Img</button>
          
          <div id="bingContainer" class="bing-container" style="display: none;"> 

          </div>
          <footer>
            <p>&copy; 2025 - Dibuat oleh 🤖Ai.Syd.Gle.inc</p>
            <p id="lastUpdated">🔄 Terakhir diperbarui: -</p>
            <time>
              <!-- <p>Login: <span id="loggedInUser" class="blink">Guest</span></p> -->
             
               <!-- <p><button type="button" class="btn-logout" onclick="logoutUser()">Logout</button></p> -->
               
              <p><button type="button" class="btn-logout" id="logoutButton" onclick="logoutUser()">Logout</button></p>
              
              
            </time>
          </footer>
        </div>
        <footer>
          
          <p><i>&copy; 2025 - Dibuat dengan ❤️ oleh M. Alfi Syuhadak</i></p>    
           <p>🌐<span id="currentDomain"></span></p>

                    
        </footer>
        
        
          


  
        <script>
          ${scripts}
           document.getElementById("queryInput").addEventListener("input", function() {
            let warningText = document.getElementById("warningText");
            if (this.value.length === 0) {
                warningText.style.display = "none";
            } else if (this.value.length < 3) {
                warningText.style.display = "block";
            } else {
                warningText.style.display = "none";
            }
        });


          function getCookieValue(name) {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : "Guest";
            }

document.addEventListener("DOMContentLoaded", function () {
    const loggedUser = getCookieValue("loggedInUser");
    
    // Update loggedInUser element if it exists
    const loggedInUserElement = document.getElementById("loggedInUser");
    if (loggedInUserElement) {
      loggedInUserElement.textContent = loggedUser;
    }
    
    // Update logout button text
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
      logoutButton.textContent = "Logout " + "👨🏻‍💼" + loggedUser;
    }
  });
        </script>
      </body>
      </html>
    `;
  }