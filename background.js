//======================================deprecated==========================================
// 定义一个 Promise，等待从 storage 中读取完成。
//刚加载插件时storage里面是undefined
// const storagePromise = new Promise((resolve) => {
//     chrome.storage.sync.get(['origin_b_enabled', 'userAgent_b_enabled'], (result) => {
//       // 在这里处理读取的结果，例如将结果保存到变量中。
//       console.log(result);
//       if(result.origin_b_enabled === undefined) obe_value = false;
//       else obe_value = result.origin_b_enabled;
//       if(result.userAgent_b_enabled === undefined) ube_value = false;
//       else ube_value = result.userAgent_b_enabled;
//       // 将结果传递给 resolve，表示读取完成。
//       resolve({obe_value, ube_value});
//     });
//   });
//==========================================================================================

const storagePromise = new Promise((resolve) => {
    chrome.storage.sync.get(['enabled'], (result) => {
      // 在这里处理读取的结果，例如将结果保存到变量中。
      console.log(result);
      if(result.enabled === undefined) value = false;
      else value = result.enabled;
      // 将结果传递给 resolve，表示读取完成。
      resolve({value});
    });
  });
storagePromise.then((result) => {
    // 在这里处理存储值可用后要执行的逻辑。
    if(result === true){
        //开启请求头修改 rule status 
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds:["ruleset_1"],
        })
    }
  });

//监听storage的改变 从而改变对请求头修改的配置
chrome.storage.onChanged.addListener((changes, area) => {
    console.log(changes);
    if (changes.enabled.newValue === true) {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds:["ruleset_1"],
        },()=>{
            console.log("开启过滤");
        })
    }else{
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds:["ruleset_1"],
        },()=>{
            console.log("关闭过滤");
        })
    }
  });