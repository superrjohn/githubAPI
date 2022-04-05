import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  操作:1.在input輸入要搜尋的github用戶
       2.搜尋完在下方列表查看作品
       3.點擊作品後,視窗右方有連結可以跳轉作品的gitbuh頁面。

  架構設計:1.因為路徑是一個動作結束後,才慢慢加上去的,所以我希望用戶使用流程是
          搜尋 -> 挑選 -> 詳細說明
          2.利用hook存放資料,改變資料,參數數據
          3.當中用到axios接收資料,然後用接收的資料作顯示。
          但組件創造完,axios不一定有數據,所以會報錯,說資料未定義
          
          3.1在這部分卡很久,最後設兩個useState,一個用來接收數據,
          一個返回<div>Loading....</div>,當有數據時再替換

          4.觸底下拉後用axios請求數據,因為setState會替代舊資料,
          所以用展開運算子把數據加入。

          5.代碼重用性:目前只有AXIOS請求可以重用,我再用function返回axios的請求,
            當中傳入串接路徑和params。
            因為這是react的第一個作品,很多地方的不完善,相信之後可以寫出更優質的代碼 :)
*/