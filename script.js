const dialogContent = [
  `<h2>主題：書院空間</h2>
<p>介紹：中一課程利用 DelightEx (舊稱 CoSpaces) 體驗 3D 空間創作，以《書院空間》為主題將讓同學當個創世神，與 AI 一起由零創校，二十週年的虛擬校園裡會發生甚麼趣事？</p>
<p>技術：CoSpaces 簡化了 3D 空間創作，亦支援 AI 及編程功能。各個空間取材至真實環境，甚至真實事件，玩家可以自由探索，或者幫助 AI NPC 開解心事。</p>
`,
  `<h2>主題：生肖化身</h2>
<p>介紹：中二課程於 2324 年度首次引入 VoxEdit 創作，2526 的創作主題是《生肖化身》，要求學生將各類動物擬人化，為書院的生物多樣性更添新猷。</p>
<p>技術：為生肖作搜集素材後，以 AI 生成多視圖，利用 VoxEdit Q版人型範進行改造，以 GLTF 格式匯出供 ThreeJS 讀取；為求最大化全息影像，倒金字塔盡用對排顯示屏，仔細計算令影像立體呈現，並透過前端技術同步動作效果。</p>
`,
  `<h2>主題：開源剪接師</h2>
<p>介紹：中二課程配合創作週教授影片剪接，以一系列小型任務作為堂課，謎之《配音》：「若人生可以《逆時》，《五年後》的 AI《日常》還需要《綠幕》嗎？」</p>
<p>技術：上至規格極高的 Adobe，下至支援手機的 Capcut，剪片工具林林總總，除了講解通用技能 (Transferable Skills)，課程刻意選用開源軟件 KdenLive，強調開源文化對科技發展的重要性。</p>
`,
  `<h2>主題：軟硬，齊Take曬</h2>
<p>介紹：跳出 AI 的虛擬世界，把構思加上 AI Coding 轉化成可以郁嘅裝置！今年中三STEAM與電腦堂正式合併，學生會將創意構思結合AI Coding，親手打造出「可以郁嘅」機械車。學生不僅會學習以Arduino/ESP32製作電子裝置，更會透過Vibe-coding為電子裝置進行編程。軟硬件完美結合，讓天馬行空的科技創意真正落地成真！(MakerLab還有其他創作...)</p>
<p>技術：使用不同微處理器（Arduino, ESP32）透過 C 語言編程，配合各種傳感器及輸出裝置實現不同邏輯，更進一步利用ESP32包含的ESP-NOW技術令無線連接及操作變成可能。</p>
`,
  `<h2>主題：光雕王</h2>
<p>介紹：藝術展覽離不開投影機運用，但甚少課程包含相關學習，今年首度於中四課程增添光雕元素。光雕不止是投影，要嘗試在各種表面躍動光與影，或平、或曲，或如生命的起伏。 *光雕王是 100% 由 Pi 生成的教材 **Pi = Peter + AI</p>
<p>技術：市面上有不同用於光雕的軟件，但大多都要收費，「光雕王」是一個免費的網頁應用程式，由資訊及通訊科技科的導師們配合 Vibe Coding 製作，當中使用了「廣播頻道 API」，支援多個投影機畫面輸出，並組合成一個光雕創作。</p>
`,
  `<h2>主題：AI編程</h2>
<p>介紹：中四課程響應 AI 趨勢，透過代碼生成進行不同創作，每週一 Web，從做中學，從量變到質變。遊戲？得！繪畫板？得！手勢偵測？得！...AI 賦能，令從未想像的變成可能！</p>
<p>技術：AI 普及化降低了技術門檻，有人說「Code is Cheap」，亦有主張現在是學編程的最佳時機。代碼以外，同學在實際操作 Stackblitz, GitHub, Netlify 中快速累積經驗，開拓視野及想像。</p>
`,
  `<h2>主題：從網到遊</h2>
<p>介紹：常言道 IPO Cycle，中四人類學會以光雕作為 Output，掌握了網頁的百搭 Process，最後更將 Input 從鍵盤滑鼠拓展至一批剛退役的 CCTV 鏡頭。小型網絡的需求應運而生，就來開個 LAN Party！</p>
<p>技術：網絡搭建解除了單機的限制，從多個 CCTV 讀取視訊匯合至一部電腦，將單一視窗分拆影像同步至不同投影，WiFi 等無線連線可能會不穩定及造成延時，實體的 Switch 及 LAN 線便成了解方，打頭、拉線更是必不可少的工藝。</p>
`,
  `
<h2>主題：[I]C[T]人</h2>
<p>介紹：ICT 這一科向來神秘 (其實我們崇尚開源)，今年特意邀請 S5 Brian 及 S6 水水 現身說法，除了課程要求的 SBA，他們的作品集更滿載形形式式不同試驗。</p>
<p>技術：科技離不開人。當歸咎手機帶來失衡與成癮，但設計產品與進行決策的是求財營利的人。當以為 AI 會取代人，較大機會取代人的定必是使用 AI 的人。科技發展之快，人類更要避免依賴，生而為人，有種責任。</p>
`,
  `<h2>主題：魚樂無窮</h2>
<p>介紹：作為一次 Tech Art 試點，作品未臻完美：魚群可更靈動、投影可更清晰、算法可更高效；作為一次 Proof of Concept，從靈感到實作，從編程到傳訊，從回收到再生，成功實現了零成本。作為一次創作過程，臥身天幕之下，人們享受其中，便足矣。</p>
<p>技術：互動裝置的重心離不開 IPO，活化舊 CCTV 讀取 MJPEG / RTSP 等多重視訊來源，透過 CocoSSD 捕捉人像轉化成角度，計算直線交點生成漣漪與魚，最終利用光雕王分拆視訊至兩部投影機於彎曲天幕併合影像。</p>
`,
  `<h2>主題：書院暢遊·塗鴉相集</h2>
  <p>介紹：每年開放日，不少來賓都會驚訝書院校園內，塗鴉遍佈各處，既有佔滿整面牆壁或梯間的壁畫，也有片言隻語、詩句，甚至偶爾的粗言宣泄或符號。為何校方會容許？透過這由書院人類創作的手機應用程式，來一起思考、發現和了解箇中的意義吧！也歡迎各位一同記錄、提問和表達意見。</p>
  <p>技術：GIS (地理資訊系統) 通常集成 OpenStreetMap、Leafletjs 等現成工具，這個 WebApp 則從 SVG 素材起自製校舍地圖，結合同學最初的塗鴉日記，最終眾包合力填入開放日活動座標。除了瀏覽資訊，拍照記錄更會即時以光雕王投影到幾幅大地圖。</p>
`,
  `<h2>主題：創意書院的逃犯</h2>
  <p>介紹：電子世界是一個宏大的海洋，如何逆水暢遊，在世界裏選擇有意義的東西，不只是逆來順受，才會成為有意義的人類。現代人喜歡玩電子遊戲，但也不知道自己其實在玩什麼，希望透過我們對遊戲的發現及經驗，創作有意義有趣的遊戲！</p>
  <p>技術：由人類自發的 PLI 組成 Sun God Studio，自學研發不同類型的 Roblox 遊戲，以至 3D 建模及 Lua 編程，過程不乏同儕互助，寓學習於娛樂。</p>
`,
  `<h2>主題：Bill級佳作</h2>
  <p>介紹：書院人類除了 Mentor 和 Mentee，更有一眾在幕後默默貢獻的人類，他們亦是書院的隱藏藝術家，今年 AC 房的 Bill 哥哥便展出了幾份得意手作！</p>
  <p>技術：「拆彈專家」只靠一塊 [    ]，以閉合電路為輸入，以 LED 及泡泡機作為輸出，其實當中最重要的莫過於將風馬牛不相及之事連結的創意！Bill 哥哥的另一大嗜好是製作機械人/車，並為它們組裝、升級不同配件，Mega Evolution！</p>
`,];

document.addEventListener('DOMContentLoaded', () => {
  const circleGroup = document.querySelectorAll('g');
  circleGroup.forEach((c, i) => {
    c.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from bubbling up

      showDialog(i);
    });

    // Change cursor style on hover
    c.style.cursor = 'pointer';
  });
});

function showDialog(i) {
  const dialog = document.createElement('div');
  dialog.style.position = 'fixed';
  dialog.style.top = '50%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  dialog.style.border = '1px solid #ccc';
  dialog.style.borderTop =
    i === 2 ? '5px solid #888' : `5px solid hsl(${i * 40}, 100%, 50%)`;
  dialog.style.borderRadius = '8px';
  dialog.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  dialog.style.padding = '20px';
  dialog.style.zIndex = '1000';
  dialog.style.maxWidth = '500px';
  dialog.style.width = '90%';
  dialog.style.overflowY = 'auto';

  dialog.innerHTML = `
          <div>${dialogContent[i]}</div>
          <button id="closeDialog" style="float:left; margin-top: 15px; padding: 10px 15px; border: none; background-color: ${i == 2 ? '#888' : `hsl(${i * 40}, 100%, 50%)`
    }; color: white; border-radius: 5px; cursor: pointer;">
              Close
          </button>
          <button id="nextDialog" style="float:right; margin-top: 15px; padding: 10px 15px; border: none; background-color: ${i + 1 == 2 ? '#888' : `hsl(${((i + 1) % 8) * 40}, 100%, 50%)`
    }; color: white; border-radius: 5px; cursor: pointer;">
              Next
          </button>
      `;

  document.body.appendChild(dialog);

  // Close dialog on button click
  document.getElementById('closeDialog').onclick = () => {
    document.body.removeChild(dialog);
  };

  document.getElementById('nextDialog').onclick = (event) => {
    event.stopPropagation();
    document.body.removeChild(dialog);
    showDialog((i + 1) % 8)
  };

  // Close dialog when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!dialog.contains(event.target)) {
      document.body.removeChild(dialog);
    }
  });
}
