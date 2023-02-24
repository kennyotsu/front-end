export function callTo(targetPhone, targetPage){
  window.open(`tel:+${targetPhone}`, targetPage)
}
