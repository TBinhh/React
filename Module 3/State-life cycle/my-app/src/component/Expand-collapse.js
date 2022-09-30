import React from "react";
import {Component} from "react";
// import Button from ''
class isExpend extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpend: false }
    };
    changeDisplay = () => {
        this.setState({ isExpend: !this.state.isExpend });
    }
    render() {
        let intro;
        if (this.state.isExpend) {
            intro = (
                <div className="container">
                    <h3>Giới thiệu</h3>
                    <p>React.JS là một thư viện Javascript dùng để xây dựng giao diện người dùng. Được tạo ra bởi Facebook, React càng ngày càng được sử dụng rộng rãi, đặc biệt là trong các trang web đòi hỏi yêu cầu cao về giao diện với các khả năng nổi bật như nhanh, dễ học, code ngắn và tái sử dụng tốt. Trong bài viết này, tôi sẽ mô tả vài khái niệm cơ bản để bắt đầu với React.</p>
                </div>
            )
        }
        return (
            <div className="container" style={{ backgroundColor: 'green', }}>
                <div>
                    <h1 >Hiển thị </h1>
                </div>
                <button label={this.state.isExpend ? 'Đóng giới thiệu' : 'Giới thiệu'} onClick={this.changeDisplay} />
                <div>{intro}</div>

            </div>
        )
    }
}
export default isExpend;