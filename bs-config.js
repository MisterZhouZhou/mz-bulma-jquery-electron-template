module.exports = {
    "server": true, // 启动服务
    "files": ["renderer/**/*"], // 监听文件
    "watchEvents": [
        "change"
    ],
    "open": false, // 是否默认打开浏览器
    "notify": false, // 是否展示右上角更新提示
    "watch": false,
    "ui": {
        "port": 3001
    },
    // "ignore": [],
    // "single": false,
    // "watchOptions": {
    //     "ignoreInitial": true
    // },
    // "proxy": false,
    // "port": 3000,
    // "middleware": false,
    // "serveStatic": [],
    // "ghostMode": {
    //     "clicks": true,
    //     "scroll": true,
    //     "location": true,
    //     "forms": {
    //         "submit": true,
    //         "inputs": true,
    //         "toggles": true
    //     }
    // },
    // "logLevel": "info",
    // "logPrefix": "Browsersync",
    // "logConnections": false,
    // "logFileChanges": true,
    // "logSnippet": true,
    // "rewriteRules": [],
    // "browser": "default",
    // "cors": false,
    // "xip": false,
    // "hostnameSuffix": false,
    // "reloadOnRestart": false,

    // "scrollProportionally": true,
    // "scrollThrottle": 0,
    // "scrollRestoreTechnique": "window.name",
    // "scrollElements": [],
    // "scrollElementMapping": [],
    // "reloadDelay": 0,
    // "reloadDebounce": 500,
    // "reloadThrottle": 0,
    // "plugins": [],
    // "injectChanges": true,
    // "startPath": null,
    // "minify": true,
    // "host": null,
    // "localOnly": false,
    // "codeSync": true,
    // "timestamps": true,
    // "clientEvents": [
    //     "scroll",
    //     "scroll:element",
    //     "input:text",
    //     "input:toggles",
    //     "form:submit",
    //     "form:reset",
    //     "click"
    // ],
    // "socket": {
    //     "socketIoOptions": {
    //         "log": false
    //     },
    //     "socketIoClientConfig": {
    //         "reconnectionAttempts": 50
    //     },
    //     "path": "/browser-sync/socket.io",
    //     "clientPath": "/browser-sync",
    //     "namespace": "/browser-sync",
    //     "clients": {
    //         "heartbeatTimeout": 5000
    //     }
    // },
    // "tagNames": {
    //     "less": "link",
    //     "scss": "link",
    //     "css": "link",
    //     "jpg": "img",
    //     "jpeg": "img",
    //     "png": "img",
    //     "svg": "img",
    //     "gif": "img",
    //     "js": "script"
    // },
    // "injectNotification": false
};