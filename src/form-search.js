import React from 'react'

export default function FormSearch(){
    const uname = React.useRef()
    const btOk = React.createRef()
    const onChangeKw = () => {
        if (uname.current.value.trim() !== '') {
            btOk.current.disabled = false
        } else {
            btOk.current.disabled = true
        }
    }
    return (
        <div style={{ margin: '30px' }}>
            <form>
                <input type="text" name="user" placeholder="ค้นหา"ref={uname} onInput={onChangeKw} />&nbsp;
                <button ref={btOk} disabled>ตกลง</button>
            </form>
        </div>
    )
}