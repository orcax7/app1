import  React, {useState}  from  'react'

export default function MessageBox()  {

    let [text, setText] = useState('Hello World')
    let [size, setsize ] = React.useState(16)

    const onClickSetText = () => {

        let t = prompt('กำหนดข้อความ')
        if (t) {
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size+1
        setsize(newSize)
    }

    let msgboxStyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,  //ใช้ค่าจาก State 
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left'
    }
    return(
        <div  style={{textAlign:'center', marginTop:20}}>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick={onClickSetText}>ข้อความ</button>
            <button onClick={onClickZoomIn}>การเพิ่มขนาด</button>
            <button onClick={() =>setsize(size-1)}>การลดขนาด</button>
        </div>
    )
}