const dialogContent = [
  `
  <h2>主題：圍「救」俄羅斯</h2>
  <p>介紹：人人都玩過俄羅斯方塊，多人版一般採用對戰模式，合作模式你又有沒有試過？與這新玩法一樣，現實世界中合作往往比對立更困難，願世界可以早日恢復和平。</p>
  <p>技術：將 2D 遊戲投影至垂直平面，本來計劃以牆身為幕，但受空間及日照光線限制，最後利用半透明塗層貼紙，成功將普通窗戶轉化成互動螢幕；遊戲以 WebSocket 為核心技術，實現多裝置同步，主畫面切割成兩部分有縫投影，玩家則掃描 QR 使用個人手機作控制器。</p>
`,
  `
  <h2>主題：動漫全息像</h2>
  <p>介紹：中二課程於 2324 年度首次引入 VoxEdit 創作，人類自選《最愛動漫人物》，搜集創作素材、色調、多面圖，二創 Voxel 3D 模型。</p>
  <p>技術：利用 VoxEdit Q版人型範進行改造，以 GLTF 格式匯出供 ThreeJS 讀取；為求最大化全息影像，人類以膠片 DIY 倒金字塔盡用對排顯示屏大小，經過繁複計算及調試令影像立體呈現，最後透過前端技術同步動作效果。</p>
`,
  `<h2>主題：轉移我的家</h2>
  <p>介紹：中一課程利用 DelightEx (舊稱 CoSpaces) 體驗 3D 空間創作，以《我的家》為主題將實體家居複製至虛擬空間，部分人類嘗試擬真，亦有人類天馬行空，重新想像「家」的可能。</p>
  <p>技術：CoSpaces 簡化了 3D 空間創作，亦支援 VR 及編程功能。玩家戴上 VR 眼鏡，進入人類的創作，透過體感控制自由探索，點擊傳送道具便會傳送至下一場景。</p>
`,
];

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
  console.log(i);
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
          <button id="closeDialog" style="float:right; margin-top: 15px; padding: 10px 15px; border: none; background-color: ${
            i == 2 ? '#888' : `hsl(${i * 40}, 100%, 50%)`
          }; color: white; border-radius: 5px; cursor: pointer;">
              Close
          </button>
      `;

  document.body.appendChild(dialog);

  // Close dialog on button click
  document.getElementById('closeDialog').onclick = () => {
    document.body.removeChild(dialog);
  };

  // Close dialog when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!dialog.contains(event.target)) {
      document.body.removeChild(dialog);
    }
  });
}
