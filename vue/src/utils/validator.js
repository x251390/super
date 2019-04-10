// 以字母开头 长度在3~6之间 只能包含字符 数字下划线
export function passwordReg(val){
    const reg = /^[a-zA-Z]\w{2,5}$/;
    return reg.test(val)
    // 返回一个布尔值 return reg.test（需要验证的数据） reg.test（需要验证的数据）
    
}