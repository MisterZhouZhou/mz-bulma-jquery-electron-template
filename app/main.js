const { app, BrowserWindow } = require('electron')
const { create: createMainWindow } = require('./windows/main')
const { handleIPC } = require('./handleIPC')
const { create: createMenu } = require('./menu')

app.whenReady().then(() => {
  // window
  createMainWindow()

  // menu
  createMenu()

  // IPC
  handleIPC()

  app.on('activate', function () {
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// 忽略警告
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
