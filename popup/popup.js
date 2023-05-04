//===================deprecated edition====================//

// // 获取复选框元素
// const el_origin = document.getElementById("b_origin");
// const el_userAgent = document.getElementById("b_userAgent");

// // 当页面加载时，读取当前插件状态 控制origin的 迷惑的get api....
// chrome.storage.sync.get("origin_b_enabled", (data) => {
//     if (data === undefined) {
//         // 如果之前没有设置过状态，则默认为禁用
//         el_origin.checked = false;
//         chrome.storage.sync.set({ "origin_b_enabled": false });
//     } else {
//         // 否则，根据存储的状态更新复选框
//         el_origin.checked = data.origin_b_enabled;
//     }
// });
// //同理获取userAgent框框的选中情况
// chrome.storage.sync.get("userAgent_b_enabled", (data) => {
//     console.log(data);
//     if (data === undefined) {
//         el_userAgent.checked = false;
//         chrome.storage.sync.set({ "userAgent_b_enabled": false });
//     } else {
//         el_userAgent.checked = data.userAgent_b_enabled;
//     }
// });
// // 当复选框状态变化时，将新状态保存到存储中
// el_origin.addEventListener("change", () => {
//     const origin_b_enabled = el_origin.checked;
//     chrome.storage.sync.set({"origin_b_enabled":origin_b_enabled});
// });
// el_userAgent.addEventListener("change", () => {
//     const userAgent_b_enabled = el_userAgent.checked;
//     chrome.storage.sync.set({ "userAgent_b_enabled":userAgent_b_enabled});
// });

//===================new edition====================//

const el_enable = document.getElementById("b_enable");
// 当页面加载时，读取当前插件状态 迷惑的get api....
chrome.storage.sync.get("enabled", (data) => {
    if (data === undefined) {
        // 如果之前没有设置过状态，则默认为禁用
        el_enable.checked = false;
        chrome.storage.sync.set({ "enabled": false });
    } else {
        // 否则，根据存储的状态更新复选框
        el_enable.checked = data.enabled;
    }
});
el_enable.addEventListener("change", () => {
    const enabled = el_enable.checked;
    chrome.storage.sync.set({ "enabled":enabled});
});