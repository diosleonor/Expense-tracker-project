<h1>記帳本 Expense Tracker</h1>

為了解決老爸和其他人記帳困難並測試本身從無到有建立產品的能力，記帳本APP於焉產生！

<h3>功能描述 (features)：</h3>
    <h4>使用者要登入才能查看自己花了什麼錢</h4>
    <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-登入.png" alt="Index"/></p>
    <h4>使用者可透過 Facebook Login 登入</h4>
    <h4>使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。
    <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-註冊.png" alt="Register"/></p>
    <h4>使用者也可以透過 Facebook Login 直接登入</h4>
    <h4>使用者登入後可以看到所有支出及支出總計並可以對支出進行簡單的操作：</h4>
       <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-瀏覽.png" alt="Read"/></p>
    <h4>使用者可以新增支出：</h4>
       <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-新增.png" alt="New"/></p>
    <h4>使用者可以刪除支出</h4>
    <h4>使用者可以修改支出：</h4>
       <ul> 
        <li>名稱</li>
        <li>日期</li>
        <li>類別</li>
        <li>金額</li>
       </ul>
       <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-修改.png" alt="Edit"/></p>
    <h4>使用者可以透過類別來找到同一類型的支出</h4>
    <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-類別.png" alt="Sort"/></p>
    <h4>使用完畢可以登出保護隱私</h4>
    <p><img src="https://github.com/diosleonor/Expense-tracker-project/blob/main/pics/A3-老爸的私房錢-登出.png" alt="Logout"/></p>
<h3>環境建置與需求 (prerequisites)：</h3>
  Node.js<br> 
  Terminal
  
<h3>安裝與執行步驟 (installation and execution)：</h3>
  1. 打開終端機並複製此專案至本機
  <pre><code>git clone https://github.com/diosleonor/Expense-tracker-project.git</code></pre>
  
  2. 複製完成後進入專案資料夾
  <pre><code>cd Expense-tracker-project</code></pre>
  
  3. 安裝Node套件管理器(npm)
  <pre><code>npm install</code></pre>
  
  4. 用npm安裝種子資料
  <pre><code>npm run seed</code></pre>

  5. 用npm啟動伺服器
  <pre><code>npm run dev</code></pre>
  或是
  <pre><code>npm run start</code></pre>
  
  6. 開啟網頁瀏覽器並連結到此網址即可瀏覽本專案
   <pre><code>http://localhost:3000</code></pre>
<h3>開發工具及版本 (dev tools information)：</h3>
  Node.js v14.18.1<br> 
  Node Project Manager 8.1.0<br> 
  Express v4.17.1<br>
  express-handlebars v5.3.4<br> 
  body-parser v1.19.0<br>
  Bootstrap v4.3.1<br> 
  jquery v3.3.1<br> 
  popper v2.9.1<br> 
  font-awesome v5.8.1<br> 
  mongoose v6.0.12<br>


