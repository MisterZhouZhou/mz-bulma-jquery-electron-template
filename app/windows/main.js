const { BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const windowStateKeeper = require('electron-window-state')

exports.win

exports.create = () => {
  const windowState = windowStateKeeper({
    defaultWidth: 500,
    defaultHeight: 650
  })
  // 创建浏览器窗口
  this.win = new BrowserWindow({
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 350,
    maxWidth: 650,
    minHeight: 330,
    webPreferences: {
      nodeIntegration: true, // node
      contextIsolation: false,
      preload: path.join(__dirname, '../preload.js')
    }
  })

  // 管理窗口
  windowState.manage(this.win)

  if (isDev) {
    // 加载 index.html
    this.win.loadURL('http://localhost:3000/renderer/main')
    // 打开开发工具
    this.win.webContents.openDevTools()
  } else {
    // 加载 index.html
    this.win.loadFile('renderer/main/index.html')
  }

  // 监听窗口关闭
  this.win.on('close', () => {
    this.win = null
  })
}
