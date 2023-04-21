//创建格式化时间的方法
function dataFormat(dateStr){
    const date = new Date(dateStr)
    const y = date.getFullYear();                // 年
     const m = showTime(date.getMonth() + 1);        // 月
     const d = showTime(date.getDate());          // 日
     const hh = showTime(date.getHours());         // 小时
     const mm = showTime(date.getMinutes());    // 分钟
     const ss = showTime(date.getSeconds());     // 秒
     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
 }
 function showTime(t) {
     return t > 9 ? t : '0' + t
 }
 module.exports={
    dataFormat
}