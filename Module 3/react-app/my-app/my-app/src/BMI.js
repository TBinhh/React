export default function BMI(props) {
    return (
        <div className="control">
            <input onChange={props.onChange} onKeyUp={props.onKeyUp} placeholder={props.placeholder}
        </div>
    )
}



<Student Id='1' Name='Nguyễn Văn A' Age='30' Address='Hà Nội' />
    );
}
export default App;

let height = +prompt("Nhập chiều cao", "")
let weight = +prompt("Nhập cân nặng", "")
let BMI = weight / Math.pow(height, 2)
if (BMI < 16) {
    alert("Gầy cấp độ III");
} else if (BMI < 17) {
    alert("Gầy cấp độ II");
} else if (BMI < 18.5) {
    alert("Gầy cấp độ I");
} else if (BMI < 25) {
    alert("Bình thường");
} else if (BMI < 30) {
    alert("Thừa cân");
} else if (BMI < 35) {
    alert("Béo phì cấp độ I");
} else if (BMI < 40) {
    alert("Béo phì cấp độ II");
} else (BMI > 40) {
    alert("Béo phì cấp độ III");
}
